"use client"

import React, { useState, useRef } from 'react'
import ResponsiveImage from '../components/ResponsiveImage'

const WholesaleInquiryPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    message: '',
    requestSamples: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, requestSamples: e.target.checked }));
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
          _subject: `New Contact Inquiry from ${formData.businessName || 'Business'}`
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          businessType: '',
          message: '',
          requestSamples: false
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
        <h1 className='text-5xl font-bold text-primary'>CONTACT US</h1>
      </header>
      
      <section className='container mx-auto px-4 py-12'>
        <div className='flex max-lg:flex-col items-center justify-center gap-12 mb-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-5xl font-extrabold leading-tight text-dark mb-6'>
              PREMIUM ETHIOPIAN COFFEE FOR YOUR BUSINESS
            </h2>
            <p className='mb-4'>
              Ethio Coffee Import and Export, operating as Ethio Coffee, exports the finest Ethiopian coffee beans directly from carefully selected farms and cooperatives. We supply cafés, roasters, and specialty coffee businesses globally with premium, sustainably-sourced coffee.
            </p>
            <p className='mb-4'>
              Our beans represent the rich coffee heritage of Ethiopia, the birthplace of coffee, known for its distinctive floral and fruity notes that make Ethiopian coffee world-renowned.
            </p>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-4'>Why Choose Ethio Coffee:</h3>
              <ul className='list-disc ml-5 space-y-2'>
                <li>Direct relationships with Ethiopian farmers</li>
                <li>Consistent quality and reliable international supply chain</li>
                <li>Variety of premium Ethiopian coffee regions</li>
                <li>Customizable order quantities for businesses of all sizes</li>
                <li>Sample program to test before committing to large orders</li>
                <li>Global shipping and logistics expertise</li>
              </ul>
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center'>
            <ResponsiveImage 
              src='/images/coffee-pack-1.webp'
              alt='Ethiopian coffee beans'
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
              <p className='text-green-700'>Your inquiry has been submitted successfully. We'll contact you soon at the email address you provided.</p>
              <p className='mt-4 text-green-700'>For immediate inquiries, you can also email us directly at: <a href="mailto:info@ethiocoffee.et" className='underline font-bold'>info@ethiocoffee.et</a></p>
            </div>
          ) : (
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='businessName' className='block mb-2 font-bold'>Business Name*</label>
                  <input 
                    type='text' 
                    id='businessName'
                    name='businessName'
                    value={formData.businessName}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor='contactName' className='block mb-2 font-bold'>Contact Name*</label>
                  <input 
                    type='text' 
                    id='contactName'
                    name='contactName'
                    value={formData.contactName}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                    required 
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
                <div>
                  <label htmlFor='phone' className='block mb-2 font-bold'>Phone Number*</label>
                  <input 
                    type='tel' 
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='country' className='block mb-2 font-bold'>Country*</label>
                <input 
                  type='text' 
                  id='country'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor='businessType' className='block mb-2 font-bold'>Business Type*</label>
                <select 
                  id='businessType'
                  name='businessType'
                  value={formData.businessType}
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
                  required
                >
                  <option value=''>Select your business type</option>
                  <option value='cafe'>Café</option>
                  <option value='roaster'>Coffee Roaster</option>
                  <option value='restaurant'>Restaurant</option>
                  <option value='hotel'>Hotel</option>
                  <option value='distributor'>Distributor</option>
                  <option value='office'>Office/Corporate</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor='message' className='block mb-2 font-bold'>Additional Information</label>
                <textarea 
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white'
                  placeholder='Tell us about your business needs, volumes required, etc.'
                ></textarea>
              </div>
              
              <div>
                <label className='flex items-center'>
                  <input 
                    type='checkbox' 
                    name='requestSamples'
                    checked={formData.requestSamples}
                    onChange={handleCheckboxChange}
                    className='mr-2' 
                  />
                  <span>I'd like to receive samples before placing an order</span>
                </label>
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
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
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

export default WholesaleInquiryPage