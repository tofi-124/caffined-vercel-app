"use client"

import React, { useState, useRef } from 'react'
import ResponsiveImage from '../components/ResponsiveImage'

const ContactPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send the form data to Formspree
      const response = await fetch('https://formspree.io/f/xkgrnlve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
          _subject: `New Customer Message${formData.orderNumber ? ` (Order ${formData.orderNumber})` : ''}`
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          orderNumber: '',
          message: ''
        });
      } else {
        setSubmitError(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>CONTACT</h1>
      </header>
      
      <section className='container mx-auto px-4 py-12'>
        <div className='flex max-lg:flex-col items-center justify-center gap-12 mb-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-5xl font-extrabold leading-tight text-dark mb-6'>
              WE'RE HERE TO HELP
            </h2>
            <p className='mb-4'>
              Questions about an order, shipping, or which coffee to try next? Send us a message and we’ll get back to you.
            </p>
            <p className='mb-4'>
              For faster help, include your order number (if you have one) and a short description of the issue.
            </p>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-4'>Common Reasons To Reach Out:</h3>
              <ul className='list-disc ml-5 space-y-2'>
                <li>Order status / delivery questions</li>
                <li>Product recommendations</li>
                <li>Damaged or incorrect items</li>
                <li>Account or checkout help</li>
                <li>Feedback on a coffee you tried</li>
              </ul>
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center'>
            <ResponsiveImage 
              src='/images/coffee-pack-1.webp'
              alt='Ethiopian coffee packaging'
              width={500}
              height={600}
              className='rounded-md'
            />
          </div>
        </div>

        <div className='max-w-3xl mx-auto my-16' ref={formRef}>
          <h2 className='text-4xl font-extrabold text-center mb-8'>GET IN TOUCH</h2>
          
          {submitSuccess ? (
            <div className='p-6 bg-green-50 border border-green-200 rounded-lg text-center'>
              <h3 className='text-2xl font-bold text-green-700 mb-2'>Thank You!</h3>
              <p className='text-green-700'>Your message has been sent. We’ll reply to the email address you provided.</p>
              <p className='mt-4 text-green-700'>You can also email us at: <a href="mailto:info@ethiocoffee.et" className='underline font-bold'>info@ethiocoffee.et</a></p>
            </div>
          ) : (
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='name' className='block mb-2 font-bold'>Full Name*</label>
                  <input 
                    type='text' 
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor='orderNumber' className='block mb-2 font-bold'>Order Number (optional)</label>
                  <input 
                    type='text' 
                    id='orderNumber'
                    name='orderNumber'
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 font-bold'>Email Address*</label>
                  <input 
                    type='email' 
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='message' className='block mb-2 font-bold'>Message*</label>
                <textarea 
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
                  placeholder='How can we help?'
                  required
                ></textarea>
              </div>
              
              {submitError && (
                <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
                  {submitError}
                </div>
              )}
              
              <div className='text-center'>
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='
                    p-10 py-4 mt-6 w-fit
                    bg-dark hover:bg-primary text-primary hover:text-dark
                    border border-dark hover:border-dark
                    rounded-md
                    font-bold text-xl
                    disabled:opacity-70 disabled:cursor-not-allowed
                  '
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
              
              <div className='text-center mt-4 text-gray-600'>
                <p>You can also contact us directly at: <a href="mailto:info@ethiocoffee.et" className='text-dark underline'>info@ethiocoffee.et</a></p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default ContactPage