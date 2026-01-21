"use client"

import React, { useState } from 'react'
import ResponsiveImage from './ResponsiveImage'

type QuoteRequestPopupProps = {
  isOpen: boolean
  onClose: () => void
  productName: string
  productImage: string
  isAllocationList?: boolean
}

const QuoteRequestPopup = ({ isOpen, onClose, productName, productImage, isAllocationList = false }: QuoteRequestPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
    formType: 'quote',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      const response = await fetch('https://formspree.io/f/xkgrnlve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productName,
          orderDate: new Date().toISOString(),
          _subject: `New Quote Request: ${productName}`,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          message: '',
          formType: 'quote',
        })
      } else {
        setSubmitError(result.error || 'Failed to submit. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting quote request:', error)
      setSubmitError('There was an error submitting your request. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
      <div className='bg-primary p-6 rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold'>{isAllocationList ? 'Join Allocation List' : 'Get a Quote'}</h2>
          <button onClick={onClose} className='text-2xl font-bold'>
            &times;
          </button>
        </div>

        {submitSuccess ? (
          <div className='p-6 bg-green-50 border border-green-200 rounded-lg text-center'>
            <h3 className='text-2xl font-bold text-green-700 mb-2'>Thank You!</h3>
            <p className='text-green-700'>Your request has been submitted successfully. We'll contact you soon at the email address you provided.</p>
            <p className='mt-4 text-green-700'>For immediate inquiries, you can also email us directly at: <a href="mailto:info@ethiocoffee.et" className='underline font-bold'>info@ethiocoffee.et</a></p>

            <div className='flex justify-center pt-6'>
              <button
                type='button'
                onClick={onClose}
                className='p-10 py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-md font-bold'
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-6 mb-6'>
              <div className='md:w-1/3'>
                <ResponsiveImage
                  src={`/images/${productImage}`}
                  alt={productName}
                  width={200}
                  height={200}
                  className='mx-auto'
                />
              </div>
              <div className='md:w-2/3'>
                <h3 className='text-xl font-bold'>{productName}</h3>
                <p className='text-sm'>Request wholesale pricing, availability, and lead times.</p>
              </div>
            </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='businessName' className='block text-sm font-medium'>Business Name</label>
              <input
                id='businessName'
                name='businessName'
                required
                value={formData.businessName}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
              />
            </div>
            <div>
              <label htmlFor='contactName' className='block text-sm font-medium'>Contact Name</label>
              <input
                id='contactName'
                name='contactName'
                required
                value={formData.contactName}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
              />
            </div>
            <div>
              <label htmlFor='phone' className='block text-sm font-medium'>Phone</label>
              <input
                id='phone'
                name='phone'
                type='tel'
                required
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
              />
            </div>
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium'>Message</label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
              placeholder='Volume needed, destination, preferred shipping dates, etc.'
            />
          </div>

          {submitError && (
            <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
              {submitError}
            </div>
          )}

            <div className='flex justify-end gap-3 pt-2'>
              <button
                type='button'
                onClick={onClose}
                className='p-10 py-3 bg-primary hover:bg-dark text-dark hover:text-primary border border-dark rounded-md font-bold'
              >
                CANCEL
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                className='p-10 py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-md font-bold disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'SENDING...' : 'SEND REQUEST'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuoteRequestPopup
