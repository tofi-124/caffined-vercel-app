"use client"

import React, { useEffect, useState, useRef } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const ContactPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formRef.current) return
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'customer-contact',
          _subject: `Customer Inquiry: ${formData.subject}`
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          orderNumber: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitError(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <main className='bg-primary min-h-screen'>
      <header className='bg-dark w-full py-20 flex flex-col items-center justify-center'>
        <h1 className='text-5xl md:text-6xl font-bold text-primary tracking-wide'>CONTACT US</h1>
        <p className='text-primary/80 mt-3 text-lg text-center px-4'>We're here to help with any questions</p>
      </header>
      
      <section className='container mx-auto px-4 py-12'>
        {/* Quick Links */}
        <div className='max-w-4xl mx-auto mb-12'>
          <h2 className='text-2xl font-bold text-dark mb-6 text-center'>How Can We Help?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Link href="/shop" className='p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center'>
              <h3 className='font-bold text-dark mb-2'>Browse Our Coffee</h3>
              <p className='text-sm text-gray-600'>Explore our selection of Ethiopian coffees</p>
            </Link>
            <Link href="/about" className='p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center'>
              <h3 className='font-bold text-dark mb-2'>Our Story</h3>
              <p className='text-sm text-gray-600'>Learn about our journey and values</p>
            </Link>
            <Link href="/terms" className='p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center'>
              <h3 className='font-bold text-dark mb-2'>Shipping & Returns</h3>
              <p className='text-sm text-gray-600'>View our policies and FAQ</p>
            </Link>
          </div>
        </div>

        <div className='flex max-lg:flex-col gap-12 max-w-5xl mx-auto'>
          {/* Contact Info */}
          <div className='lg:w-1/3'>
            <h2 className='text-3xl font-extrabold text-dark mb-6'>Get In Touch</h2>
            
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                  <FaEnvelope className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='font-bold text-dark'>Email Us</h3>
                  <a href="mailto:hello@ethiocoffee.co" className='text-accent hover:underline'>
                    hello@ethiocoffee.co
                  </a>
                  <p className='text-sm text-gray-500 mt-1'>We respond within 24 hours</p>
                </div>
              </div>
              
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                  <FaInstagram className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='font-bold text-dark'>Follow Us</h3>
                  <a href="https://instagram.com/ethiocoffee.co" target="_blank" rel="noopener noreferrer" className='text-accent hover:underline'>
                    @ethiocoffee.co
                  </a>
                  <p className='text-sm text-gray-500 mt-1'>DM us anytime</p>
                </div>
              </div>
              
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                  <FaMapMarkerAlt className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='font-bold text-dark'>Ships From</h3>
                  <p className='text-gray-600'>Toronto, Canada</p>
                  <p className='text-sm text-gray-500 mt-1'>Free shipping over $75 CAD</p>
                </div>
              </div>
              
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                  <FaClock className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='font-bold text-dark'>Response Time</h3>
                  <p className='text-gray-600'>Within 24 hours</p>
                  <p className='text-sm text-gray-500 mt-1'>Monday - Friday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-2/3' ref={formRef}>
            <div className='bg-white rounded-lg shadow-sm p-8'>
              <h2 className='text-2xl font-extrabold text-dark mb-2'>Send Us a Message</h2>
              <p className='text-gray-600 mb-6'>Have a question about an order or our coffee? We'd love to hear from you.</p>

              {submitSuccess ? (
                <div className='p-6 bg-green-50 border border-green-200 rounded-lg text-center'>
                  <h3 className='text-2xl font-bold text-green-700 mb-2'>Thank You!</h3>
                  <p className='text-green-700'>Your message has been sent. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className='space-y-5' onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label htmlFor='name' className='block mb-2 font-medium text-dark'>Your Name *</label>
                      <input 
                        type='text' 
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor='email' className='block mb-2 font-medium text-dark'>Email Address *</label>
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
                  </div>
                  
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label htmlFor='orderNumber' className='block mb-2 font-medium text-dark'>Order Number (if applicable)</label>
                      <input 
                        type='text' 
                        id='orderNumber'
                        name='orderNumber'
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder='e.g., EC-12345'
                        className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all' 
                      />
                    </div>
                    <div>
                      <label htmlFor='subject' className='block mb-2 font-medium text-dark'>Subject *</label>
                      <select 
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                        required
                      >
                        <option value=''>Select a topic</option>
                        <option value='order-inquiry'>Order Inquiry</option>
                        <option value='shipping'>Shipping Question</option>
                        <option value='product-question'>Product Question</option>
                        <option value='returns'>Returns & Refunds</option>
                        <option value='feedback'>Feedback</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor='message' className='block mb-2 font-medium text-dark'>Your Message *</label>
                    <textarea 
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className='w-full p-3 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all'
                      placeholder='How can we help you?'
                      required
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
                      {submitError}
                    </div>
                  )}
                  
                  <button 
                    type='submit'
                    disabled={isSubmitting}
                    className='
                      px-8 py-3 w-full md:w-auto
                      bg-accent hover:bg-dark text-white
                      rounded-md font-bold
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition-all duration-300
                    '
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-dark text-center mb-8'>Frequently Asked Questions</h2>
          
          <div className='max-w-3xl mx-auto space-y-4'>
            <div className='bg-white rounded-lg p-6 shadow-sm'>
              <h3 className='font-bold text-dark mb-2'>How long does shipping take?</h3>
              <p className='text-gray-600'>Orders are roasted fresh and typically ship within 1-2 business days. Delivery takes 3-7 business days depending on your location in Canada.</p>
            </div>
            
            <div className='bg-white rounded-lg p-6 shadow-sm'>
              <h3 className='font-bold text-dark mb-2'>Is shipping free?</h3>
              <p className='text-gray-600'>Yes! We offer free shipping on all orders over $75 CAD. Orders under $75 have a flat shipping rate of $9.99.</p>
            </div>
            
            <div className='bg-white rounded-lg p-6 shadow-sm'>
              <h3 className='font-bold text-dark mb-2'>What is your return policy?</h3>
              <p className='text-gray-600'>If you're not satisfied with your coffee, contact us within 14 days of delivery and we'll make it right with a replacement or refund.</p>
            </div>
            
            <div className='bg-white rounded-lg p-6 shadow-sm'>
              <h3 className='font-bold text-dark mb-2'>How should I store my coffee?</h3>
              <p className='text-gray-600'>Store your coffee in a cool, dry place away from direct sunlight. For best flavor, use within 4 weeks of the roast date printed on your bag.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
