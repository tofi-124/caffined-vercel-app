"use client"

import { useEffect, useState, useRef } from 'react'
import ResponsiveImage from '../components/ResponsiveImage'

const WholesaleInquiryPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    referralSource: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Scroll to form section on mount
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

  // Scroll to success message when form is submitted
  useEffect(() => {
    if (submitSuccess && successRef.current) {
      const headerOffset = 96
      const y = successRef.current.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: Math.max(0, y),
        behavior: 'smooth',
      })
    }
  }, [submitSuccess])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      
      let result: any = {}
      
      // Only parse JSON if there's content
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const text = await response.text()
        if (text) {
          result = JSON.parse(text)
        }
      }
      
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
      {/* Hero - matching about & ordering-info pages */}
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>Contact Ethio Coffee</h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase text-center'>Start Your Partnership Today</p>
      </header>

      {/* Quick stats bar - matching origin pages */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm'>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Based In</p>
            <p className='font-bold text-dark mt-1'>Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Origins</p>
            <p className='font-bold text-dark mt-1'>6+ Regions</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Shipping</p>
            <p className='font-bold text-dark mt-1'>FOB / FCA</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Response Time</p>
            <p className='font-bold text-dark mt-1'>24 - 48 Hours</p>
          </div>
        </div>
      </section>

      {/* Intro + image section */}
      <section className='py-16 md:py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex max-lg:flex-col items-center gap-12'>
            <div className='lg:w-1/2'>
              <h2 className='text-3xl md:text-4xl font-extrabold leading-tight text-dark mb-6'>
                SPECIALTY ETHIOPIAN COFFEE FOR IMPORTERS WORLDWIDE
              </h2>
              <p className='mb-4 text-dark/80 leading-relaxed'>
                Ethio Coffee Import and Export PLC is a dedicated Ethiopian coffee exporter connecting speciality, traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local knowledge with international business experience.
              </p>
              <p className='text-dark/80 leading-relaxed'>
                Based in Addis Ababa, we export directly to importers around the globe. In Guji Hambella, we collect cherry from smallholder farmers and process it at our own drying station. Across other key origins like Yirgacheffe, Sidama, Harar, Limu, and Jimma/Kaffa, we source through trusted cooperatives and washing stations we have worked with for years. Everything is fully traceable back to the source.
              </p>
            </div>

            <div className='lg:w-1/2 flex justify-center'>
              <ResponsiveImage 
                src='/images/coffee-sacks.webp'
                alt='Speciality Ethiopian green coffee beans from Ethio Coffee'
                width={500}
                height={600}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className='py-16 md:py-20 bg-dark'>
        <div className='max-w-3xl mx-auto px-6'>
          <div ref={formRef} id='inquiry-form'></div>
          <h2 className='text-3xl md:text-4xl font-extrabold text-center text-primary mb-4'>GET IN TOUCH</h2>
          <div className='w-16 h-1 bg-accent mx-auto mb-6'></div>
          <p className='text-center text-primary/60 mb-10 max-w-xl mx-auto'>Fill out the form below and our team will get back to you within 24-48 hours.</p>

          {/* Office info card */}
          <div className='mb-10 rounded-lg border border-dark/30 bg-primary p-6 shadow-sm'>
            <h3 className='text-xl font-bold text-dark mb-4'>Our Office</h3>
            <div className='p-4 bg-dark/5 rounded-md border border-dark/30'>
              <p className='text-xs uppercase tracking-widest text-accent font-semibold mb-2'>Ethiopia (Headquarters)</p>
              <p className='not-italic text-dark'>
                <span className='font-bold'>Ethio Coffee Import and Export PLC</span>
                <br />
                Yesak Building, 3rd Floor, Office 301
                <br />
                Lideta, Addis Ababa, Ethiopia
              </p>
            </div>
            <div className='mt-6 pt-4 border-t border-dark/30 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-dark/50'>Email</p>
                <a href="mailto:coffee@ethiocoffee.co" className='text-dark font-semibold hover:text-accent transition-colors'>
                  coffee@ethiocoffee.co
                </a>
              </div>
              <div>
                <p className='text-sm text-dark/50'>Business Hours</p>
                <p className='text-dark font-semibold'>Mon - Fri, 09:00 - 17:00 (EAT)</p>
              </div>
            </div>
          </div>
          
          {submitSuccess ? (
              <div ref={successRef} className='p-8 bg-green-50 border border-green-200 rounded-lg text-center'>
                <h3 className='text-2xl font-bold text-green-700 mb-2'>Thank You!</h3>
                <p className='text-green-700'>Your inquiry has been submitted successfully. We&#39;ll contact you soon at the email address you provided.</p>
                <p className='mt-4 text-green-700'>For immediate inquiries, you can also email us directly at: <a href="mailto:coffee@ethiocoffee.co" className='underline font-bold'>coffee@ethiocoffee.co</a></p>
              </div>
            ) : (
              <form className='space-y-6 bg-primary rounded-lg p-8 border border-dark/30 shadow-sm' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='businessName' className='block mb-2 font-bold text-dark'>Business Name*</label>
                    <input 
                      type='text' 
                      id='businessName'
                      name='businessName'
                      value={formData.businessName}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor='contactName' className='block mb-2 font-bold text-dark'>Contact Name*</label>
                    <input 
                      type='text' 
                      id='contactName'
                      name='contactName'
                      value={formData.contactName}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-2 font-bold text-dark'>Email Address*</label>
                    <input 
                      type='email' 
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='block mb-2 font-bold text-dark'>Phone Number*</label>
                    <input 
                      type='tel' 
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                      required 
                    />
                  </div>
                </div>
              
                <div>
                  <label htmlFor='country' className='block mb-2 font-bold text-dark'>Country*</label>
                  <input 
                    type='text' 
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                    required 
                  />
                </div>
              
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='businessType' className='block mb-2 font-bold text-dark'>Business Type*</label>
                    <select 
                      id='businessType'
                      name='businessType'
                      value={formData.businessType}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                      required
                    >
                      <option value=''>Select your business type</option>
                      <option value='importer'>Coffee Importer</option>
                      <option value='trading-company'>Trading Company</option>
                      <option value='roaster-importer'>Roaster with Import License</option>
                      <option value='distributor'>Green Coffee Distributor</option>
                      <option value='broker'>Coffee Broker / Agent</option>
                      <option value='cooperative'>Roaster Cooperative</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='referralSource' className='block mb-2 font-bold text-dark'>Where did you hear about us?</label>
                    <select 
                      id='referralSource'
                      name='referralSource'
                      value={formData.referralSource}
                      onChange={handleChange}
                      className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
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
                  <label htmlFor='message' className='block mb-2 font-bold text-dark'>Additional Information</label>
                  <textarea 
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className='w-full p-3 border border-dark/30 rounded-md bg-primary text-dark focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                    placeholder='Tell us about your business needs, volumes required, etc.'
                  ></textarea>
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
                      px-8 py-4 mt-2 w-full md:w-auto
                      bg-accent hover:bg-accent/90 text-white
                      border-2 border-accent
                      rounded-xl
                      font-bold
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition-all
                      shadow-sm hover:shadow-md
                    '
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                  </button>
                </div>
              
                <div className='text-center mt-6 text-dark/50 text-sm'>
                  <p>You can also contact us directly at: <a href="mailto:coffee@ethiocoffee.co" className='text-dark underline hover:text-accent transition-colors'>coffee@ethiocoffee.co</a></p>
                </div>
              </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default WholesaleInquiryPage