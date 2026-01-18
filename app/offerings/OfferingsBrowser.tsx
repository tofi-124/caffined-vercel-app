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
  screenSize: string
}

const normalize = (value: string) => value.trim().toLowerCase()

const matchesKeyword = (offering: Offering, keyword: string) => {
  const q = normalize(keyword)
  if (!q) return true
  return (
    normalize(offering.name).includes(q) ||
    normalize(offering.desc).includes(q) ||
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

  const screenSizeOptions = useMemo(() => {
    return Array.from(new Set(offerings.map((o) => o.specifications.screenSize))).sort()
  }, [])

  const [draft, setDraft] = useState<Filters>({
    keyword: '',
    grade: '',
    processingMethod: '',
    cropYear: '',
    screenSize: '',
  })

  const [applied, setApplied] = useState<Filters>(draft)

  const filtered = useMemo(() => {
    return offerings.filter((o) => {
      if (!matchesKeyword(o, applied.keyword)) return false
      if (applied.grade && o.specifications.grade !== applied.grade) return false
      if (applied.processingMethod && o.specifications.processingMethod !== applied.processingMethod) return false
      if (applied.cropYear && o.specifications.cropYear !== applied.cropYear) return false
      if (applied.screenSize && o.specifications.screenSize !== applied.screenSize) return false
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
    const cleared: Filters = { keyword: '', grade: '', processingMethod: '', cropYear: '', screenSize: '' }
    setDraft(cleared)
    setApplied(cleared)
  }

  return (
    <section className='w-full'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col lg:flex-row gap-10'>
          <aside className='w-full lg:w-80 border border-dark rounded-md p-6 h-fit lg:sticky lg:top-24 self-start'>
            <h2 className='text-xl font-extrabold text-dark mb-4'>Filter By</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-bold mb-2'>Keyword</label>
                <input
                  value={draft.keyword}
                  onChange={(e) => setDraft((p) => ({ ...p, keyword: e.target.value }))}
                  placeholder='Search offerings'
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
                />
              </div>

              <div>
                <label className='block text-sm font-bold mb-2'>Grade</label>
                <select
                  value={draft.grade}
                  onChange={(e) => setDraft((p) => ({ ...p, grade: e.target.value }))}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
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
                <label className='block text-sm font-bold mb-2'>Process</label>
                <select
                  value={draft.processingMethod}
                  onChange={(e) => setDraft((p) => ({ ...p, processingMethod: e.target.value }))}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
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
                <label className='block text-sm font-bold mb-2'>Crop Year</label>
                <select
                  value={draft.cropYear}
                  onChange={(e) => setDraft((p) => ({ ...p, cropYear: e.target.value }))}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
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
                <label className='block text-sm font-bold mb-2'>Screen Size</label>
                <select
                  value={draft.screenSize}
                  onChange={(e) => setDraft((p) => ({ ...p, screenSize: e.target.value }))}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
                >
                  <option value=''>All</option>
                  {screenSizeOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className='flex gap-3 pt-2'>
                <button
                  onClick={() => setApplied(draft)}
                  className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold'
                >
                  APPLY
                </button>
                <button
                  onClick={clearFilters}
                  className='p-10 py-3 bg-primary hover:bg-dark text-dark hover:text-primary border border-dark rounded-md font-bold'
                >
                  CLEAR
                </button>
              </div>
            </div>
          </aside>

          <div className='flex-1'>
            <div className='flex items-end justify-between gap-4 mb-6'>
              <div>
                <h2 className='text-2xl font-extrabold text-dark'>Available Offerings</h2>
                <p className='text-sm text-gray-700'>Showing {filtered.length} of {offerings.length}</p>
              </div>
            </div>

            <div ref={resultsTopRef} />

            <div className='flex flex-col gap-6'>
              <OfferingsResultsList items={paged} showActions onRequestQuote={(o) => setQuoteFor(o)} />
            </div>

            {totalPages > 1 && (
              <div className='mt-10 flex flex-wrap justify-center gap-3'>
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
                        ? 'px-4 py-2 bg-dark text-primary border border-dark rounded-md font-bold'
                        : 'px-4 py-2 bg-primary text-dark border border-dark rounded-md font-bold hover:bg-dark hover:text-primary'
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
      />
    </section>
  )
}

export default OfferingsBrowser
