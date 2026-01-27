'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaEnvelope, FaTruck, FaCoffee } from 'react-icons/fa'
import { Suspense } from 'react'

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || 'Unknown'

  return (
    <main className='min-h-screen bg-primary py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='max-w-2xl mx-auto text-center'
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className='inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6'
          >
            <FaCheckCircle className='text-green-500 text-5xl' />
          </motion.div>

          <h1 className='text-3xl lg:text-4xl font-bold text-dark mb-4'>
            Thank You for Your Order!
          </h1>
          
          <p className='text-gray-600 text-lg mb-2'>
            Your order has been confirmed and is being prepared.
          </p>
          
          <div className='bg-gray-100 rounded-lg px-6 py-3 inline-block mb-8'>
            <p className='text-sm text-gray-500'>Order Number</p>
            <p className='text-xl font-bold text-dark'>{orderId}</p>
          </div>

          {/* What's Next */}
          <div className='bg-white rounded-lg shadow-sm p-8 mb-8'>
            <h2 className='text-xl font-bold text-dark mb-6'>What Happens Next?</h2>
            
            <div className='space-y-6'>
              <div className='flex items-start gap-4 text-left'>
                <div className='flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center'>
                  <FaEnvelope className='text-accent' />
                </div>
                <div>
                  <h3 className='font-medium text-dark'>Confirmation Email</h3>
                  <p className='text-gray-600 text-sm'>
                    You'll receive an email confirmation with your order details shortly.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 text-left'>
                <div className='flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center'>
                  <FaCoffee className='text-accent' />
                </div>
                <div>
                  <h3 className='font-medium text-dark'>Fresh Roasting</h3>
                  <p className='text-gray-600 text-sm'>
                    Your coffee will be roasted fresh, usually within 1-2 business days.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 text-left'>
                <div className='flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center'>
                  <FaTruck className='text-accent' />
                </div>
                <div>
                  <h3 className='font-medium text-dark'>Shipping</h3>
                  <p className='text-gray-600 text-sm'>
                    Once roasted, your order will be shipped with tracking. Expect delivery within 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/shop'
              className='px-6 py-3 bg-accent text-white font-bold rounded-md hover:bg-dark transition-colors'
            >
              Continue Shopping
            </Link>
            <Link
              href='/'
              className='px-6 py-3 border border-gray-300 text-dark font-bold rounded-md hover:bg-gray-50 transition-colors'
            >
              Return Home
            </Link>
          </div>

          {/* Support */}
          <p className='mt-8 text-gray-500 text-sm'>
            Have questions about your order?{' '}
            <Link href='/contact-us' className='text-accent hover:underline'>
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <main className='min-h-screen bg-primary py-12 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading order details...</p>
        </div>
      </main>
    }>
      <OrderSuccessContent />
    </Suspense>
  )
}
