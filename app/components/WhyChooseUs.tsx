'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaTruck, FaMugHot, FaHeart } from 'react-icons/fa'

const features = [
  {
    icon: FaLeaf,
    title: '100% Ethiopian',
    description: 'All our coffee comes directly from Ethiopian highland farms, ensuring authentic origin quality.',
  },
  {
    icon: FaMugHot,
    title: 'Freshly Roasted',
    description: 'We roast to order, so your coffee is never sitting on a shelf. Maximum freshness guaranteed.',
  },
  {
    icon: FaTruck,
    title: 'Free Shipping',
    description: 'Orders over $75 ship free across Canada. Fast delivery right to your doorstep.',
  },
  {
    icon: FaHeart,
    title: 'Ethically Sourced',
    description: 'We work directly with farmers, ensuring fair prices and sustainable practices.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className='py-16 bg-dark'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
            Why Choose Ethio Coffee?
          </h2>
          <p className='text-primary/70 max-w-2xl mx-auto'>
            We're passionate about bringing you the finest Ethiopian coffee experience.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='text-center p-6'
            >
              <div className='inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4'>
                <feature.icon className='text-white text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-primary mb-2'>{feature.title}</h3>
              <p className='text-primary/70'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
