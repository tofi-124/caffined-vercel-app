"use client"

import React, { useState, useRef, useEffect } from 'react'

const inquiryTopics = [
  'General Inquiry',
  'Pricing & Availability',
  'Shipping & Logistics',
  'Partnership Inquiry',
  'Other',
]

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('#whatsapp-fab')
      ) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const resetForm = () => {
    setName('')
    setPhone('')
    setTopic('')
    setMessage('')
    setSubmitError('')
    setSubmitSuccess(false)
  }

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false)
      // Reset after close animation
      setTimeout(resetForm, 300)
    } else {
      resetForm()
      setIsOpen(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, topic, message }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        setSubmitError(result.error || 'Failed to send. Please try again.')
      }
    } catch {
      setSubmitError('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <div
        ref={panelRef}
        className={`
          origin-bottom-right transition-all duration-300 ease-in-out
          ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}
          w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden
        `}
      >
        {/* Header */}
        <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
          <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0 fill-white">
            <path d="M16.004 0C7.164 0 0 7.163 0 16.004c0 2.822.737 5.578 2.137 8.004L0 32l8.188-2.088A15.95 15.95 0 0016.004 32C24.836 32 32 24.837 32 16.004 32 7.163 24.836 0 16.004 0zm0 29.09a13.05 13.05 0 01-6.97-2.006l-.5-.296-5.18 1.322 1.384-5.05-.326-.517A13.02 13.02 0 012.91 16.004c0-7.225 5.87-13.095 13.094-13.095 7.226 0 13.096 5.87 13.096 13.095S23.23 29.09 16.004 29.09zm7.178-9.804c-.393-.197-2.326-1.147-2.687-1.277-.36-.131-.623-.197-.885.197-.262.393-1.016 1.277-1.246 1.54-.23.262-.459.295-.852.098-.393-.197-1.66-.612-3.163-1.95-1.17-1.04-1.96-2.326-2.19-2.72-.229-.393-.024-.606.173-.802.177-.177.393-.459.59-.689.197-.23.262-.393.393-.656.131-.262.066-.492-.033-.689-.098-.197-.885-2.133-1.213-2.92-.32-.766-.645-.663-.885-.675l-.754-.013c-.262 0-.689.098-1.05.492-.36.393-1.377 1.344-1.377 3.278s1.41 3.802 1.607 4.064c.197.262 2.775 4.236 6.726 5.94.94.406 1.673.648 2.244.83.943.3 1.8.258 2.479.157.756-.113 2.326-.951 2.655-1.869.328-.918.328-1.705.23-1.869-.099-.164-.362-.262-.755-.459z" />
          </svg>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Ethio Coffee</p>
            <p className="text-white/80 text-xs">We typically reply within 24-48 hours</p>
          </div>
          <button
            onClick={handleToggle}
            className="ml-auto text-white/80 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {submitSuccess ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-1">Message Sent!</h3>
              <p className="text-gray-600 text-sm font-inconsolata">
                Thank you for reaching out. We&apos;ll get back to you shortly via WhatsApp.
              </p>
              <button
                onClick={handleToggle}
                className="mt-4 text-sm text-[#25D366] font-semibold hover:underline font-inconsolata"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label htmlFor="wa-name" className="block text-xs font-semibold text-gray-600 mb-1 font-inconsolata">
                  Your Name *
                </label>
                <input
                  id="wa-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] font-inconsolata text-gray-800"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="wa-phone" className="block text-xs font-semibold text-gray-600 mb-1 font-inconsolata">
                  Phone Number *
                </label>
                <input
                  id="wa-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 234 567 8900"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] font-inconsolata text-gray-800"
                />
              </div>

              {/* Topic Dropdown */}
              <div>
                <label htmlFor="wa-topic" className="block text-xs font-semibold text-gray-600 mb-1 font-inconsolata">
                  Topic *
                </label>
                <select
                  id="wa-topic"
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] font-inconsolata text-gray-800 bg-white"
                >
                  <option value="" disabled>Select a topic</option>
                  {inquiryTopics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="wa-message" className="block text-xs font-semibold text-gray-600 mb-1 font-inconsolata">
                  Message *
                </label>
                <textarea
                  id="wa-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] font-inconsolata text-gray-800 resize-none"
                />
              </div>

              {/* Error */}
              {submitError && (
                <p className="text-red-500 text-xs font-inconsolata">{submitError}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-inconsolata"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <button
        id="whatsapp-fab"
        onClick={handleToggle}
        aria-label="Chat on WhatsApp"
        className={`
          w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 hover:scale-110
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
            <path d="M16.004 0C7.164 0 0 7.163 0 16.004c0 2.822.737 5.578 2.137 8.004L0 32l8.188-2.088A15.95 15.95 0 0016.004 32C24.836 32 32 24.837 32 16.004 32 7.163 24.836 0 16.004 0zm0 29.09a13.05 13.05 0 01-6.97-2.006l-.5-.296-5.18 1.322 1.384-5.05-.326-.517A13.02 13.02 0 012.91 16.004c0-7.225 5.87-13.095 13.094-13.095 7.226 0 13.096 5.87 13.096 13.095S23.23 29.09 16.004 29.09zm7.178-9.804c-.393-.197-2.326-1.147-2.687-1.277-.36-.131-.623-.197-.885.197-.262.393-1.016 1.277-1.246 1.54-.23.262-.459.295-.852.098-.393-.197-1.66-.612-3.163-1.95-1.17-1.04-1.96-2.326-2.19-2.72-.229-.393-.024-.606.173-.802.177-.177.393-.459.59-.689.197-.23.262-.393.393-.656.131-.262.066-.492-.033-.689-.098-.197-.885-2.133-1.213-2.92-.32-.766-.645-.663-.885-.675l-.754-.013c-.262 0-.689.098-1.05.492-.36.393-1.377 1.344-1.377 3.278s1.41 3.802 1.607 4.064c.197.262 2.775 4.236 6.726 5.94.94.406 1.673.648 2.244.83.943.3 1.8.258 2.479.157.756-.113 2.326-.951 2.655-1.869.328-.918.328-1.705.23-1.869-.099-.164-.362-.262-.755-.459z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default WhatsAppWidget
