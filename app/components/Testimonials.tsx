"use client"
import { FaQuoteRight, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Carousel from 'better-react-carousel';
import { testimonials } from '../data/data';

type Props = {
  name: string
  position: string
  quote: string
}

const TestimonialCard = ({ name, position, quote }: Props) => {
  // Extract company and location from position
  const positionParts = position.split(', ');
  const role = positionParts[0];
  const company = positionParts[1] || '';
  const location = positionParts[2] || '';

  return (
    <div className='flex flex-col items-center justify-center px-8 md:px-20 pb-12'>
      <FaQuoteRight className='mt-12 mb-4 text-5xl text-dark' />
      <p className='my-6 text-center text-dark text-lg leading-relaxed'>
        &quot; {quote} &quot;
      </p>
      <div className='flex flex-col items-center mt-6 border-t pt-6 border-gray-300 w-1/2'>
        <h3 className='text-xl font-extrabold'>
          {name}
        </h3>
        <p className='mt-2 font-medium'>
          {role}
        </p>
        <p className='text-center font-semibold text-gray-700'>
          {company}
        </p>
        {location && (
          <div className='flex items-center mt-2 text-gray-600'>
            <FaMapMarkerAlt className='mr-1' />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  )
}
      
const Testimonials = () => {
  return (
    <section id='testimonial-section' className='pt-32 pb-16 flex flex-col items-center justify-center bg-primary'>
      <div className='mb-12 text-center'>
        <h1 className='text-5xl leading-tight text-dark font-bold'>
          CLIENT TESTIMONIALS
        </h1>
        <p className='mt-4 text-lg max-w-2xl mx-auto'>
          Trusted by coffee businesses worldwide - see what our partners have to say about working with Ethio Coffee
        </p>
      </div>

      <div className='md:w-4/5 max-w-5xl'>
        <Carousel
          rows={1}
          cols={1}
          gap={10}
          autoplay={5000}
          loop
          containerStyle={{
            display: 'flex', 
            flexDirection: 'col', 
            justifyContent: 'center',
            padding: '2rem 0',
          }}
          arrowLeft={
            <AiOutlineLeft
              size={50}
              className='absolute top-1/2 left-[-35px] z-1 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl hover:bg-gray-100 transition-colors'
            />
          }
          arrowRight={
            <AiOutlineRight
              size={50}
              className='absolute top-1/2 right-[-35px] -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl hover:bg-gray-100 transition-colors'
            />
          }
        >
          {testimonials.map((testimonial, ind) => (
            <Carousel.Item key={ind}>
              <TestimonialCard {...testimonial} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
