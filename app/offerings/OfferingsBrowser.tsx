"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import QuoteRequestPopup from '../components/QuoteRequestPopup'
import OfferingsResultsList from '../components/OfferingsResultsList'
import { offerings, Offering } from '../data/offerings'
import { generateMultipleProductsPDF } from '../lib/pdfGenerator'

type Filters = {
  keyword: string
  grade: string
  processingMethod: string
  cropYear: string
  minScore: string
  availability: string
}

const normalize = (value: string) => value.trim().toLowerCase()

const matchesKeyword = (offering: Offering, keyword: string) => {
  const q = normalize(keyword)
  if (!q) return true
  return (
    normalize(offering.name).includes(q) ||
    normalize(offering.desc).includes(q) ||
    normalize(offering.region).includes(q) ||
    normalize(offering.variety ?? '').includes(q) ||
    offering.flavorNotes.some((note) => normalize(note).includes(q)) ||
    normalize(offering.specifications.grade ?? '').includes(q) ||
    normalize(offering.specifications.processingMethod ?? '').includes(q) ||
    normalize(offering.specifications.cropYear ?? '').includes(q)
  )
}

const OfferingsBrowser = () => {
  const resultsTopRef = useRef<HTMLDivElement>(null)

  const scrollToResultsTop = () => {
    if (!resultsTopRef.current) return

    // Account for the sticky navbar (TopMessage + navbar height)
    const headerOffset = 96
    const y = resultsTopRef.current.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({
      top: Math.max(0, y),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Simple and reliable approach:
    // On back navigation, the browser restores scroll position BEFORE our code runs.
    // We use a short delay to let the browser restore scroll position first.
    // If scrollY is still near the top after the delay, it's a fresh navigation - scroll to results.
    // If scrollY is already scrolled down, browser restored position - don't interfere.
    
    const timer = setTimeout(() => {
      // If user is near the top of the page, it's likely a fresh navigation
      // Scroll to the results section
      if (window.scrollY < 150) {
        scrollToResultsTop()
      }
      // If scrollY >= 150, browser has restored scroll position from back/forward navigation
      // Don't override the restored position
    }, 100) // Short delay to let browser restore scroll position first
    
    return () => clearTimeout(timer)
  }, [])

  const gradeOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.grade).filter((v): v is string => v !== null))).sort()
  }, [])

  const processingOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.processingMethod).filter((v): v is string => v !== null))).sort()
  }, [])

  const cropYearOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.cropYear).filter((v): v is string => v !== null))).sort()
  }, [])

  const [draft, setDraft] = useState<Filters>({
    keyword: '',
    grade: '',
    processingMethod: '',
    cropYear: '',
    minScore: '',
    availability: '',
  })

  const [applied, setApplied] = useState<Filters>(draft)

  const filtered = useMemo(() => {
    return offerings.filter((o) => {
      if (!matchesKeyword(o, applied.keyword)) return false
      if (applied.grade && o.specifications.grade !== applied.grade) return false
      if (applied.processingMethod && o.specifications.processingMethod !== applied.processingMethod) return false
      if (applied.cropYear && o.specifications.cropYear !== applied.cropYear) return false

      if (applied.availability === 'in-stock' && o.isSoldOut) return false
      if (applied.availability === 'sold-out' && !o.isSoldOut) return false

      if (applied.minScore) {
        const minScore = Number(applied.minScore)
        const score = Number.parseFloat(o.specifications.cupScore ?? '0')
        if (Number.isFinite(minScore) && Number.isFinite(score) && score < minScore) return false
      }
      return true
    })
  }, [applied])

  const PAGE_SIZE = 6
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)

  const paged = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, safePage])

  useEffect(() => {
    // Reset to first page whenever the filter set changes
    setPage(1)
  }, [applied])

  useEffect(() => {
    // Keep current page valid if the result count shrinks
    if (page !== safePage) setPage(safePage)
  }, [page, safePage])

  const [quoteFor, setQuoteFor] = useState<Offering | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const clearFilters = () => {
    const cleared: Filters = { keyword: '', grade: '', processingMethod: '', cropYear: '', minScore: '', availability: '' }
    setDraft(cleared)
    setApplied(cleared)
  }

  return (
    <section className='w-full'>
      <div className='container mx-auto px-4 py-12'>
        <div ref={resultsTopRef} />
        
        <div className='flex items-end justify-between gap-4 mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-dark'>Available Offerings</h2>
            <p className='text-gray-600 mt-1'>Showing {filtered.length} of {offerings.length} coffees</p>
          </div>
          
          {/* Download PDF button - Desktop only */}
          {filtered.length > 0 && (
            <button
              onClick={() => {
                const title = applied.keyword 
                  ? `ETHIO COFFEE_${applied.keyword}_Offerings` 
                  : applied.grade || applied.processingMethod || applied.availability
                    ? 'ETHIO COFFEE_Filtered_Offerings'
                    : 'ETHIO COFFEE_All_Offerings'
                generateMultipleProductsPDF(filtered, title)
              }}
              className='hidden lg:flex items-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary/90 text-white border-2 border-secondary rounded-xl font-bold cursor-pointer transition-all shadow-sm hover:shadow-md'
              title='Download filtered products as PDF'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
              <span>DOWNLOAD AS PDF</span>
            </button>
          )}
        </div>

        {/* Mobile action buttons - sticky at top left */}
        <div className='lg:hidden sticky top-24 left-0 z-30 flex gap-2 mb-6'>
          <button
            onClick={() => setIsFilterOpen(true)}
            className='flex items-center gap-2 px-4 py-3 bg-dark hover:bg-accent text-primary border-2 border-dark hover:border-accent rounded-xl shadow-lg hover:shadow-xl font-bold transition-all'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
            </svg>
            <span className='text-sm font-bold'>Filters</span>
          </button>
          
          {filtered.length > 0 && (
            <button
              onClick={() => {
                const title = applied.keyword 
                  ? `ETHIO COFFEE_${applied.keyword}_Offerings` 
                  : applied.grade || applied.processingMethod || applied.availability
                    ? 'ETHIO COFFEE_Filtered_Offerings'
                    : 'ETHIO COFFEE_All_Offerings'
                generateMultipleProductsPDF(filtered, title)
              }}
              className='flex items-center justify-center px-4 py-3 bg-secondary hover:bg-secondary/90 text-white border-2 border-secondary rounded-xl font-bold cursor-pointer transition-all shadow-lg hover:shadow-xl text-sm'
              title='Download filtered products as PDF'
            >
              PDF
            </button>
          )}
        </div>

        {/* Mobile filter overlay */}
        {isFilterOpen && (
          <div className='lg:hidden fixed inset-0 z-50'>
            {/* Backdrop */}
            <div 
              className='absolute inset-0 bg-black/50' 
              onClick={() => setIsFilterOpen(false)}
            />
            {/* Bottom sheet */}
            <div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto animate-slide-up'>
              {/* Handle bar */}
              <div className='sticky top-0 bg-white pt-3 pb-2 border-b border-gray-100'>
                <div className='w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3'></div>
                <div className='flex items-center justify-between px-6'>
                  <h2 className='text-xl font-bold text-dark'>Filters</h2>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className='p-6 space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1.5'>Keyword</label>
                  <input
                    value={draft.keyword}
                    onChange={(e) => setDraft((p) => ({ ...p, keyword: e.target.value }))}
                    placeholder='Search offerings'
                    className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Grade</label>
                    <select
                      value={draft.grade}
                      onChange={(e) => setDraft((p) => ({ ...p, grade: e.target.value }))}
                      className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                    >
                      <option value=''>All</option>
                      {gradeOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Process</label>
                    <select
                      value={draft.processingMethod}
                      onChange={(e) => setDraft((p) => ({ ...p, processingMethod: e.target.value }))}
                      className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                    >
                      <option value=''>All</option>
                      {processingOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Availability</label>
                    <select
                      value={draft.availability}
                      onChange={(e) => setDraft((p) => ({ ...p, availability: e.target.value }))}
                      className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                    >
                      <option value=''>All</option>
                      <option value='in-stock'>In Stock</option>
                      <option value='sold-out'>Sold Out</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Crop Year</label>
                    <select
                      value={draft.cropYear}
                      onChange={(e) => setDraft((p) => ({ ...p, cropYear: e.target.value }))}
                      className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                    >
                      <option value=''>All</option>
                      {cropYearOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1.5'>Cup Score</label>
                  <div className='flex items-center justify-between text-sm text-gray-600'>
                    <span>Any</span>
                    <span className='font-bold text-dark'>{draft.minScore ? `${draft.minScore}+` : 'Any'}</span>
                    <span>100</span>
                  </div>
                  <input
                    type='range'
                    min={0}
                    max={100}
                    step={0.5}
                    value={draft.minScore === '' ? 0 : Number(draft.minScore)}
                    onChange={(e) => {
                      const v = Number(e.target.value)
                      setDraft((p) => ({ ...p, minScore: v <= 0 ? '' : String(v) }))
                    }}
                    className='w-full range-accent-dark'
                    aria-label='Minimum cup score'
                  />
                </div>

                <div className='flex gap-3 pt-4 pb-6'>
                  <button
                    onClick={() => {
                      setApplied(draft)
                      setIsFilterOpen(false)
                    }}
                    className='flex-1 px-6 py-4 bg-accent hover:bg-accent/90 text-white border-2 border-accent rounded-xl font-bold transition-all shadow-sm hover:shadow-md'
                  >
                    Show Results
                  </button>
                  <button
                    onClick={clearFilters}
                    className='flex-1 px-6 py-4 bg-white hover:bg-gray-50 text-dark border-2 border-gray-300 hover:border-gray-400 rounded-xl font-bold transition-all shadow-sm hover:shadow-md'
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          {/* Desktop sidebar filter */}
          <aside className='hidden lg:block w-72 bg-white border border-gray-200 rounded-2xl p-6 h-fit sticky top-24 self-start shadow-sm'>
            <h2 className='text-xl font-bold text-dark mb-4'>Filter By</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Keyword</label>
                <input
                  value={draft.keyword}
                  onChange={(e) => setDraft((p) => ({ ...p, keyword: e.target.value }))}
                  placeholder='Search offerings'
                  className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Grade</label>
                <select
                  value={draft.grade}
                  onChange={(e) => setDraft((p) => ({ ...p, grade: e.target.value }))}
                  className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                >
                  <option value=''>All</option>
                  {gradeOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Process</label>
                <select
                  value={draft.processingMethod}
                  onChange={(e) => setDraft((p) => ({ ...p, processingMethod: e.target.value }))}
                  className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                >
                  <option value=''>All</option>
                  {processingOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Availability</label>
                <select
                  value={draft.availability}
                  onChange={(e) => setDraft((p) => ({ ...p, availability: e.target.value }))}
                  className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                >
                  <option value=''>All</option>
                  <option value='in-stock'>In Stock</option>
                  <option value='sold-out'>Sold Out</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Crop Year</label>
                <select
                  value={draft.cropYear}
                  onChange={(e) => setDraft((p) => ({ ...p, cropYear: e.target.value }))}
                  className='w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-accent outline-none transition-all'
                >
                  <option value=''>All</option>
                  {cropYearOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1.5'>Cup Score</label>
                <div className='flex items-center justify-between text-sm text-gray-600'>
                  <span>Any</span>
                  <span className='font-bold text-dark'>{draft.minScore ? `${draft.minScore}+` : 'Any'}</span>
                  <span>100</span>
                </div>
                <input
                  type='range'
                  min={0}
                  max={100}
                  step={0.5}
                  value={draft.minScore === '' ? 0 : Number(draft.minScore)}
                  onChange={(e) => {
                    const v = Number(e.target.value)
                    setDraft((p) => ({ ...p, minScore: v <= 0 ? '' : String(v) }))
                  }}
                  className='w-full range-accent-dark'
                  aria-label='Minimum cup score'
                />
              </div>

              <div className='flex gap-3 pt-4'>
                <button
                  onClick={() => {
                    setApplied(draft)
                    setIsFilterOpen(false)
                  }}
                  className='flex-1 px-6 py-4 bg-accent hover:bg-accent/90 text-white border-2 border-accent rounded-xl font-bold transition-all shadow-sm hover:shadow-md'
                >
                  Apply
                </button>
                <button
                  onClick={clearFilters}
                  className='flex-1 px-6 py-4 bg-white hover:bg-gray-50 text-dark border-2 border-gray-300 hover:border-gray-400 rounded-xl font-bold transition-all shadow-sm hover:shadow-md'
                >
                  Clear
                </button>
              </div>
            </div>
          </aside>

          <div className='flex-1 w-full'>
            <OfferingsResultsList items={paged} showActions onRequestQuote={(o) => setQuoteFor(o)} />

            {totalPages > 1 && (
              <div className='mt-12 flex flex-wrap justify-center gap-2'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type='button'
                    onClick={() => {
                      setPage(p)
                      scrollToResultsTop()
                    }}
                    className={
                      p === safePage
                        ? 'w-10 h-10 bg-accent text-white border border-accent rounded-full font-bold'
                        : 'w-10 h-10 bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
                    }
                    aria-label={`Go to page ${p}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <QuoteRequestPopup
        isOpen={Boolean(quoteFor)}
        onClose={() => setQuoteFor(null)}
        productName={quoteFor?.name || ''}
        productImage={quoteFor?.image_url || ''}
        isAllocationList={quoteFor?.isSoldOut ?? true}
      />
    </section>
  )
}

export default OfferingsBrowser
