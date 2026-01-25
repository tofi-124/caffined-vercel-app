"use client"

import React, { useEffect, useState, useRef } from 'react'
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
    referralSource: '',
    message: '',
    requestSamples: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formRef.current) return

      // Account for sticky header (TopMessage + navbar)
      const headerOffset = 96
      const y = formRef.current.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: Math.max(0, y),
        behavior: 'smooth',
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])
  
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
      // Send the form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
          referralSource: '',
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
      <header className='bg-[url(/images/about-us.webp)] bg-cover bg-center w-full h-[350px] flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 bg-black/40'></div>
        <h1 className='text-5xl md:text-6xl font-bold text-primary relative z-10 tracking-wide'>LET&apos;S WORK TOGETHER</h1>
        <p className='text-primary/90 mt-3 text-lg relative z-10 text-center px-4'>From our farms in Ethiopia to your roastery. Start your partnership today.</p>
      </header>
      
      <section className='container mx-auto px-4 py-12'>
        <div className='flex max-lg:flex-col items-center justify-center gap-12 mb-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-4xl md:text-5xl font-extrabold leading-tight text-dark mb-6'>
              TRACEABLE ETHIOPIAN COFFEE FOR ROASTERS & CAFÉS
            </h2>
            <p className='mb-4 text-gray-700'>
              Ethio Coffee Import and Export PLC is a trusted Ethiopian coffee exporter connecting premium, traceable origin coffee with roasters, cafés, and wholesale partners worldwide through ethical sourcing, export-ready quality, and long-term relationships.
            </p>
            <p className='mb-4 text-gray-700'>
              We are an Ethiopia- and Canada-based coffee producer and exporter supplying fully traceable beans from our own estates and trusted partner farms across Yirgacheffe, Sidama, Guji, Harrar, Limu, and Jimma/Kaffa regions.
            </p>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-4'>Why Partner With Us:</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>✓</span>
                  <span><strong>Vertical Integration:</strong> Direct oversight from family estates to your door, eliminating intermediaries</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>✓</span>
                  <span><strong>Traceable Heritage:</strong> Authentic heirloom varietals with farm-gate transparency</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>✓</span>
                  <span><strong>Roaster-Ready Logistics:</strong> Year-round inventory with strict sample-to-bag consistency</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>✓</span>
                  <span><strong>Free Sample Program:</strong> Evaluate quality before committing to orders</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>✓</span>
                  <span><strong>North American Distribution:</strong> Canadian warehousing for seamless fulfillment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center'>
            <ResponsiveImage 
              src='/images/coffee-pack-1.webp'
              alt='Premium Ethiopian green coffee beans from Ethio Coffee'
              width={500}
              height={600}
              className='rounded-md shadow-lg'
            />
          </div>
        </div>

        <div className='max-w-3xl mx-auto my-16' ref={formRef}>
          <h2 className='text-4xl font-extrabold text-center mb-4'>GET IN TOUCH</h2>
          <p className='text-center text-gray-600 mb-8 max-w-xl mx-auto'>Fill out the form below and our team will get back to you within 24-48 hours.</p>

          <div className='mb-10 rounded-lg border border-black/10 bg-white/70 p-6 shadow-sm'>
            <h3 className='text-xl font-bold text-dark mb-4'>Our Offices</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div className='p-4 bg-primary/50 rounded-md'>
                <p className='text-xs uppercase tracking-widest text-accent font-semibold mb-2'>Ethiopia (Headquarters)</p>
                <address className='not-italic text-dark'>
                  <span className='font-bold'>Ethio Coffee Import and Export PLC</span>
                  <br />
                  Yesak Building, 3rd Floor, Office 301
                  <br />
                  Lideta, Addis Ababa, Ethiopia
                </address>
              </div>
              <div className='p-4 bg-primary/50 rounded-md'>
                <p className='text-xs uppercase tracking-widest text-accent font-semibold mb-2'>Canada</p>
                <address className='not-italic text-dark'>
                  <span className='font-bold'>Ethio Coffee Company Inc.</span>
                  <br />
                  Financial District
                  <br />
                  Toronto, Canada
                </address>
              </div>
            </div>
            <div className='mt-6 pt-4 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-gray-600'>Email</p>
                <a href="mailto:info@ethiocoffee.et" className='text-dark font-semibold hover:text-accent transition-colors'>
                  info@ethiocoffee.et
                </a>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Business Hours</p>
                <p className='text-dark font-semibold'>Mon - Fri, 09:00 - 17:00 (EAT)</p>
              </div>
            </div>
          </div>
          
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
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
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
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
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
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
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
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
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
                  className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                  required 
                />
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='businessType' className='block mb-2 font-bold'>Business Type*</label>
                  <select 
                    id='businessType'
                    name='businessType'
                    value={formData.businessType}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
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
                  <label htmlFor='referralSource' className='block mb-2 font-bold'>Where did you hear about us?</label>
                  <select 
                    id='referralSource'
                    name='referralSource'
                    value={formData.referralSource}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                  >
                    <option value=''>Select an option (optional)</option>
                    <option value='google'>Google Search</option>
                    <option value='social-media'>Social Media</option>
                    <option value='trade-show'>Trade Show / Exhibition</option>
                    <option value='referral'>Friend / Business Referral</option>
                    <option value='linkedin'>LinkedIn</option>
                    <option value='industry-publication'>Industry Publication</option>
                    <option value='existing-customer'>Existing Customer</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor='message' className='block mb-2 font-bold'>Additional Information</label>
                <textarea 
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
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
              
              <div className='text-center pt-4'>
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='
                    px-12 py-4 mt-2 w-full md:w-auto
                    bg-accent hover:bg-dark text-white hover:text-primary
                    border border-accent hover:border-dark
                    rounded-md
                    font-bold text-xl
                    disabled:opacity-70 disabled:cursor-not-allowed
                    transition-all duration-300
                    shadow-md hover:shadow-lg
                  '
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                </button>
              </div>
              
              <div className='text-center mt-6 text-gray-600 text-sm'>
                <p>You can also contact us directly at: <a href="mailto:info@ethiocoffee.et" className='text-dark underline hover:text-accent transition-colors'>info@ethiocoffee.et</a></p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default WholesaleInquiryPage