import React from 'react'
import ResponsiveImage from '../components/ResponsiveImage'

const WholesaleInquiryPage = () => {
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
              Ethio Coffee imports the finest Ethiopian coffee beans directly from carefully selected farms and cooperatives. We supply cafés, roasters, and specialty coffee businesses across Canada with premium, sustainably-sourced coffee.
            </p>
            <p className='mb-4'>
              Our beans represent the rich coffee heritage of Ethiopia, the birthplace of coffee, known for its distinctive floral and fruity notes that make Ethiopian coffee world-renowned.
            </p>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-4'>Why Choose Ethio Coffee:</h3>
              <ul className='list-disc ml-5 space-y-2'>
                <li>Direct relationships with Ethiopian farmers</li>
                <li>Consistent quality and reliable supply chain</li>
                <li>Variety of premium Ethiopian coffee regions</li>
                <li>Customizable order quantities for businesses of all sizes</li>
                <li>Sample program to test before committing to large orders</li>
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

        <div className='max-w-3xl mx-auto my-16'>
          <h2 className='text-4xl font-extrabold text-center mb-8'>GET IN TOUCH</h2>
          
          <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='businessName' className='block mb-2 font-bold'>Business Name*</label>
                <input 
                  type='text' 
                  id='businessName' 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='contactName' className='block mb-2 font-bold'>Contact Name*</label>
                <input 
                  type='text' 
                  id='contactName' 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 font-bold'>Email Address*</label>
                <input 
                  type='email' 
                  id='email' 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 font-bold'>Phone Number*</label>
                <input 
                  type='tel' 
                  id='phone' 
                  className='w-full p-3 border border-gray-300 rounded-md bg-white' 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor='businessType' className='block mb-2 font-bold'>Business Type*</label>
              <select 
                id='businessType' 
                className='w-full p-3 border border-gray-300 rounded-md bg-white'
                required
              >
                <option value=''>Select your business type</option>
                <option value='cafe'>Café</option>
                <option value='roaster'>Coffee Roaster</option>
                <option value='restaurant'>Restaurant</option>
                <option value='hotel'>Hotel</option>
                <option value='office'>Office/Corporate</option>
                <option value='other'>Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor='message' className='block mb-2 font-bold'>Additional Information</label>
              <textarea 
                id='message' 
                rows={5} 
                className='w-full p-3 border border-gray-300 rounded-md bg-white'
                placeholder='Tell us about your business needs, volumes required, etc.'
              ></textarea>
            </div>
            
            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' required />
                <span>I'd like to receive samples before placing an order</span>
              </label>
            </div>
            
            <div className='text-center'>
              <button 
                type='submit'
                className='
                  p-10 py-4 mt-6 w-fit
                  bg-dark hover:bg-primary text-primary hover:text-dark
                  border border-dark hover:border-dark
                  rounded-md
                  font-bold text-xl
                '
              >
                SUBMIT INQUIRY
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default WholesaleInquiryPage