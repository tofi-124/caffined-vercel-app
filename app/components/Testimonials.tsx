"use client"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import Carousel from 'better-react-carousel';

type Testimonial = {
  name: string
  location: string
  rating: number
  review: string
  product: string
}

const TestimonialCard = ({ name, location, rating, review, product }: Testimonial) => {
  return (
    <div className='flex flex-col items-center justify-center px-8 md:px-20 pb-12'>
      <div className='mt-8 w-full sm:w-4/5 md:w-3/4'>
        {/* Stars */}
        <div className='flex justify-center gap-1 mb-4'>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? 'text-yellow-400' : 'text-gray-500'}
              size={20}
            />
          ))}
        </div>
        
        {/* Review */}
        <p className='text-center text-lg text-primary/90 italic mb-6'>
          "{review}"
        </p>
        
        {/* Customer Info */}
        <div className='text-center'>
          <p className='font-bold text-primary'>{name}</p>
          <p className='text-sm text-primary/70'>{location}</p>
          <p className='text-xs text-accent mt-2'>{product}</p>
        </div>
      </div>
    </div>
  )
}
      
const Testimonials = () => {
  const testimonials: Testimonial[] = [
    { 
      name: 'Sarah M.',
      location: 'Toronto, ON',
      rating: 5,
      review: 'The Yirgacheffe is absolutely incredible. The floral notes and citrus brightness make my mornings so much better. Best coffee I\'ve had at home.',
      product: 'Yirgacheffe Light Roast'
    },
    { 
      name: 'Michael T.',
      location: 'Vancouver, BC',
      rating: 5,
      review: 'Finally found Ethiopian coffee that tastes like what I had in Addis Ababa. The Sidamo Natural is packed with berry flavors. Will definitely order again!',
      product: 'Sidamo Natural Process'
    },
    { 
      name: 'Jennifer K.',
      location: 'Calgary, AB',
      rating: 5,
      review: 'The House Blend has become our household staple. It\'s perfectly balanced and everyone loves it. Great value for the quality.',
      product: 'Ethiopia House Blend'
    },
    { 
      name: 'David L.',
      location: 'Montreal, QC',
      rating: 5,
      review: 'As a home barista, I\'m picky about my espresso beans. The Guji Espresso Roast pulls amazing shots with incredible crema and fruity sweetness.',
      product: 'Guji Espresso Roast'
    },
    { 
      name: 'Amanda R.',
      location: 'Ottawa, ON',
      rating: 5,
      review: 'Shipping was fast and the coffee arrived fresh. You can tell it was just roasted. The Harar has such unique wine-like flavors. Love it!',
      product: 'Harar Mocha Reserve'
    },
  ]

  return (
    <section id='testimonials-section' className='py-16 flex flex-col items-center justify-center bg-dark text-primary overflow-x-hidden'>
      <div className='mb-8 text-center'>
        <h2 className='text-4xl lg:text-5xl leading-tight text-primary font-bold'>
          WHAT OUR CUSTOMERS SAY
        </h2>
        <p className='text-primary/70 mt-3'>Join hundreds of happy coffee lovers</p>
      </div>

      <div className='relative w-full max-w-4xl px-6 md:w-4/5 md:px-0'>
        <Carousel
          rows={1}
          cols={1}
          gap={10}
          autoplay={6000}
          loop
          containerStyle={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            padding: '2rem 0',
          }}
          arrowLeft={
            <AiOutlineLeft
              size={50}
              className='absolute top-1/2 left-2 md:left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl text-dark hover:bg-gray-100 transition-colors'
            />
          }
          arrowRight={
            <AiOutlineRight
              size={50}
              className='absolute top-1/2 right-2 md:right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl text-dark hover:bg-gray-100 transition-colors'
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
