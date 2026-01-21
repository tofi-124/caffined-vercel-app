"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import QuoteRequestPopup from '../components/QuoteRequestPopup'
import OfferingsResultsList from '../components/OfferingsResultsList'
import { offerings, Offering } from '../data/offerings'

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
    normalize(offering.variety).includes(q) ||
    offering.flavorNotes.some((note) => normalize(note).includes(q)) ||
    normalize(offering.specifications.grade).includes(q) ||
    normalize(offering.specifications.processingMethod).includes(q) ||
    normalize(offering.specifications.cropYear).includes(q)
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
    const timer = setTimeout(() => {
      scrollToResultsTop()
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const gradeOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.grade))).sort()
  }, [])

  const processingOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.processingMethod))).sort()
  }, [])

  const cropYearOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.cropYear))).sort()
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
        const score = Number.parseFloat(o.specifications.cupScore)
        if (Number.isFinite(minScore) && Number.isFinite(score) && score < minScore) return false
      }
      return true
    })
  }, [applied])

  const PAGE_SIZE = 4
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

  const clearFilters = () => {
    const cleared: Filters = { keyword: '', grade: '', processingMethod: '', cropYear: '', minScore: '', availability: '' }
    setDraft(cleared)
    setApplied(cleared)
  }

  return (
    <section className='w-full'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex items-end justify-between gap-4 mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-dark'>Available Offerings</h2>
            <p className='text-gray-600 mt-1'>Showing {filtered.length} of {offerings.length} coffees</p>
          </div>
        </div>

        <div ref={resultsTopRef} />

        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          <aside className='w-full lg:w-72 bg-white border border-gray-200 rounded-2xl p-6 h-fit lg:sticky lg:top-24 self-start shadow-sm'>
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
                  onClick={() => setApplied(draft)}
                  className='flex-1 py-3 bg-accent hover:bg-dark text-white hover:text-primary rounded-lg font-bold transition-all'
                >
                  Apply
                </button>
                <button
                  onClick={clearFilters}
                  className='flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-dark rounded-lg font-medium transition-all'
                >
                  Clear
                </button>
              </div>
            </div>
          </aside>

          <div className='flex-1'>
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
