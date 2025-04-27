"use client"

import React, { useEffect } from 'react'
import { posts } from '@/app/data/data'
import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

// Define standard image dimensions for all blog posts
const BLOG_IMAGE_WIDTH = 1000;
const BLOG_IMAGE_HEIGHT = 600;

type Props = {
  params: {
    blogId: string
  }
}

const Blog = ({params}: Props) => {
  // Accessing params directly for now, but prepared for future Next.js changes
  const { blogId } = params;

  // Add effect to scroll to top when this component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]); // Re-run when blogId changes

  let ind = (parseInt(blogId) >= 0 && parseInt(blogId) < posts.length) ? parseInt(blogId) : -1
  if(ind === -1){
    const Content = (
      <h1 className=' bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
        Blog not found
      </h1>
    )
  return Content;
  }
  else {
    const { title, date, large_image_url } = posts[ind]
    
    // Blog post content based on the ID
    let blogContent;
    
    if (ind === 0) {
      // Content for "The Birthplace of Coffee: Ethiopia's Rich Heritage"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Explore the Origins, Culture, and Global Legacy of Ethiopian Coffee
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopia is known as the birthplace of Arabica coffee and cradle of a rich coffee culture.
            </figcaption>
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee heritage' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            Coffee is more than a beverage—it's a story. And that story begins in Ethiopia, the birthplace of Arabica coffee and the heart of a centuries-old coffee culture that continues to shape the world's favorite drink.
          </p>

          <p className='my-4'>
            At Ethiocoffee, we proudly honor this legacy by exporting the finest Ethiopian coffee beans, cultivated in harmony with tradition, terroir, and time.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Where Coffee Was Born
          </h3>
          <p className='my-4'>
            Legend has it that a 9th-century goat herder named Kaldi first discovered coffee in the Ethiopian highlands when he noticed his goats becoming unusually energetic after eating red berries from a certain tree. That tree was the wild Arabica coffee plant—Coffea arabica—and Ethiopia has nurtured it ever since.
          </p>

          <p className='my-4'>
            Today, Ethiopia remains home to thousands of unique, indigenous coffee varietals found nowhere else on Earth. Regions like Yirgacheffe, Sidama, Harrar, and Guji are globally recognized for their vibrant, complex flavors—ranging from floral and citrusy to deep and chocolaty.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            A Culture Rooted in Coffee
          </h3>
          <p className='my-4'>
            In Ethiopia, coffee isn't just a crop—it's a ritual. The traditional Ethiopian coffee ceremony is a deeply social and spiritual experience. Beans are roasted in front of guests, ground by hand, and brewed in a jebena (a clay pot). This custom reflects hospitality, respect, and the bond between people and their land.
          </p>

          <p className='my-4 font-medium'>
            Here's a beautiful short documentary that captures Ethiopia's coffee culture and history visually:
          </p>
        
          <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/voMC-eICDrg" title="Ethiopia - The Birthplace of Coffee" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
          <h3 className='text-2xl font-extrabold mt-8'>
            From Heritage to Global Excellence
          </h3>
          <p className='my-4'>
            At Ethiocoffee, we believe that preserving Ethiopia's coffee heritage also means sharing it. That's why we work directly with local farmers and cooperatives to export traceable, specialty-grade Ethiopian coffee beans to roasters, cafés, and wholesalers around the world.
          </p>

          <p className='my-2'>
            We support:
          </p>
          <ul className='font-inconsolata my-2 list-disc ml-5'>
            <li>
              Sustainable and organic farming practices
            </li>
            <li>
              Fair trade pricing and farmer empowerment
            </li>
            <li>
              Custom exports of green coffee beans and single-origin microlots
            </li>
          </ul>

          <p className='my-4'>
            Every shipment we send carries with it the essence of Ethiopia's land, people, and passion.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Taste the Legacy
          </h3>
          <p className='my-4'>
            Ethiopian coffee is not just about taste—it's about history in every cup. When you serve or sell coffee from Ethiopia, you're inviting your customers to experience a rich cultural legacy, the origin of coffee itself, and the gold standard of Arabica beans.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Interested in sourcing authentic Ethiopian coffee directly from the origin?
              Get in touch with Ethiocoffee to learn more about our export services and discover how you can bring this legendary heritage to your market.
            </p>
          </div>
        </>
      );
    } else if (ind === 1) {
      // Content for "Ethiopian Coffee Ceremonies: Tradition Meets Business"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            How Ethiopia's Most Sacred Ritual Fuels Global Coffee Culture
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              The Ethiopian coffee ceremony represents centuries of tradition and hospitality.
            </figcaption>
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee ceremony' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            In Ethiopia, coffee is far more than a beverage—it's a ritual, a language of hospitality, and a symbol of unity. The Ethiopian coffee ceremony is one of the most iconic cultural practices in the world, passed down through generations and still practiced today in homes, communities, and even businesses.
          </p>

          <p className='my-4'>
            At Ethiocoffee, we honor this tradition not only as part of our heritage, but also as a key element of the coffee story we share with global partners.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            More Than a Brew: The Ceremony of Connection
          </h3>
          <p className='my-4'>
            The Ethiopian coffee ceremony is a three-part experience that begins with roasting green coffee beans over an open flame, followed by grinding with a mortar and pestle, and finally brewing in a jebena, a traditional clay pot. The coffee is served in three rounds—abol, tona, and bereka—each symbolizing progression, community, and blessing.
          </p>

          <p className='my-4'>
            What sets this ceremony apart is its deliberate pace and focus on human connection. Neighbors gather. Conversations flow. Respect is given. It's a moment of pause in a fast-paced world—a value that resonates deeply in modern business culture.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            The Ceremony as a Brand Ambassador
          </h3>
          <p className='my-4'>
            For Ethiocoffee, the traditional coffee ceremony isn't just cultural—it's a brand asset. When we introduce our beans to global clients, we also introduce the ceremony behind them. This cultural context helps:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Educate buyers on the origin and value of Ethiopian coffee
            </li>
            <li className='my-2'>
              Reinforce authenticity and traceability
            </li>
            <li className='my-2'>
              Create emotional resonance around the product
            </li>
            <li className='my-2'>
              Differentiate us in a competitive market
            </li>
          </ul>

          <p className='my-4'>
            In many international trade shows and client meetings, we present a miniature version of the ceremony to let people experience the warmth and depth of Ethiopian hospitality firsthand.
          </p>

          <div className='bg-amber-100 p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-2'>Experience the Ceremony</h4>
            <p className='my-2'>
              Watch how the traditional Ethiopian coffee ceremony unfolds and learn about its cultural significance.
            </p>
            <iframe className='w-full h-[450px] my-4' src="https://www.youtube.com/embed/dbNgYz1xciw" title="Ethiopian Coffee Ceremony" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <h3 className='text-2xl font-extrabold mt-8'>
            Where Heritage Meets Opportunity
          </h3>
          <p className='my-4'>
            As the demand for origin-specific, traceable, and ethically sourced coffee grows, so does the interest in stories that connect product to place. The Ethiopian coffee ceremony gives businesses a meaningful narrative—one that blends centuries-old tradition with today's demand for experience-driven consumption.
          </p>

          <p className='my-4'>
            By sourcing your coffee through Ethiocoffee, you're not just purchasing beans. You're tapping into:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              A living cultural heritage
            </li>
            <li className='my-2'>
              Coffee grown with care and community values
            </li>
            <li className='my-2'>
              A product that supports local farmers and traditional practices
            </li>
          </ul>

          <h3 className='text-2xl font-extrabold mt-8'>
            Brewing Relationships, Not Just Coffee
          </h3>
          <p className='my-4'>
            The heart of Ethiopia's coffee ceremony is relationship. And at Ethiocoffee, we take that seriously. From farmer to exporter, roaster to café, our mission is to cultivate lasting partnerships that reflect the same principles of respect, presence, and connection found in every traditional ceremony.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Want to bring the richness of Ethiopia's coffee culture into your business?
              Reach out to Ethiocoffee to explore how our exports and story-driven approach can elevate your coffee offerings.
            </p>
          </div>
        </>
      );
    } else if (ind === 2) {
      // Content for "Direct Trade Partnerships: Supporting Ethiopian Farmers"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            How Ethiocoffee Builds Sustainable, Transparent Relationships from Farm to Cup
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Direct trade partnerships with Ethiopian farmers help ensure quality and fair compensation.
            </figcaption>
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee farmers' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            Behind every extraordinary cup of Ethiopian coffee is a farmer—and at Ethiocoffee, we believe that farmer deserves more than just recognition. They deserve partnership.
          </p>

          <p className='my-4'>
            That's why we're committed to direct trade partnerships—a sourcing model that puts people before profit, shortens the supply chain, and ensures that the hard work of Ethiopian farmers is fairly rewarded and globally respected.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            What Is Direct Trade?
          </h3>
          <p className='my-4'>
            Unlike traditional commodity trading, direct trade cuts out unnecessary middlemen and builds transparent, traceable relationships between coffee producers and buyers. It's a business model built on:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Fair pricing above market value
            </li>
            <li className='my-2'>
              Mutual trust and accountability
            </li>
            <li className='my-2'>
              Consistent quality and feedback
            </li>
            <li className='my-2'>
              Community reinvestment and development
            </li>
          </ul>

          <p className='my-4'>
            At Ethiocoffee, we work directly with farmer cooperatives, smallholder producers, and local washing stations across Ethiopia's finest coffee regions—from Yirgacheffe to Guji.
          </p>

          <div className='bg-amber-100 p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-2'>Farmer Spotlight</h4>
            <p className='my-2'>
              "Working directly with exporters who understand quality has transformed our community. Now we can afford to invest in better processing methods and send our children to school." - Abebe Bekele, Lead Farmer, Konga Cooperative
            </p>
          </div>

          <h3 className='text-2xl font-extrabold mt-8'>
            Empowering the Backbone of the Industry
          </h3>
          <p className='my-4'>
            Ethiopia is home to over 15 million people who depend on coffee for their livelihoods, many of them smallholder farmers with deep-rooted knowledge passed through generations.
          </p>

          <p className='my-4'>
            Our direct trade approach supports them by:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Paying premium prices that reflect the quality of their beans
            </li>
            <li className='my-2'>
              Offering long-term contracts that provide financial stability
            </li>
            <li className='my-2'>
              Encouraging sustainable and organic farming methods
            </li>
            <li className='my-2'>
              Funding training and equipment improvements at the community level
            </li>
          </ul>

          <p className='my-4 font-bold italic'>
            This isn't charity. It's respect in action.
          </p>

          <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/Dmpnrtey3YU" title="Direct Trade Coffee Sourcing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          <h3 className='text-2xl font-extrabold mt-8'>
            Better Coffee Begins with Better Relationships
          </h3>
          <p className='my-4'>
            Direct trade isn't just better for farmers—it's better for roasters, cafés, and coffee consumers, too. By working closely with producers, we can:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Offer single-origin microlots with rich, distinct profiles
            </li>
            <li className='my-2'>
              Guarantee traceability and transparency
            </li>
            <li className='my-2'>
              Build custom export programs tailored to buyer needs
            </li>
            <li className='my-2'>
              Respond quickly to changes in quality, quantity, or market demand
            </li>
          </ul>

          <p className='my-4'>
            It's how we ensure our clients receive not only top-grade Ethiopian Arabica beans, but also a meaningful supply chain story to share with their customers.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Join the Direct Trade Movement
          </h3>
          <p className='my-4'>
            At Ethiocoffee, we believe in brewing better futures—one handshake, one harvest, one container at a time. Our direct trade model is proof that commerce and compassion can thrive side by side.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Are you a roaster or coffee buyer looking to source ethical, premium Ethiopian coffee?<br/>
              Connect with Ethiocoffee to learn more about our direct trade partnerships and how you can support Ethiopian farmers while growing your business.
            </p>
          </div>
        </>
      );
    } else {
      // This else clause should no longer be needed since we only have 3 blog posts now
      // but keeping it as a fallback for any unexpected cases
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight'>
            {title}
          </h1>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Coffee is a popular beverage enjoyed by millions of people around the world.
            </figcaption>
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='blog-img' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            Content coming soon...
          </p>
        </>
      );
    }

    const Content = (
      <section id='blog-content' className='p-4 flex flex-col items-center justify-center bg-primary text-dark'>
        <div className="container max-w-4xl">
          {blogContent}
        </div>
      </section>
    )
    return Content;
  }
}

export default Blog
