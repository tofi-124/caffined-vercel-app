import React from 'react';
import {posts} from '../data/data';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';

type Props = {
  title: string,
  date: string,
  small_image_url: string,
  ind: number
}

export const Post = ({ title, date, small_image_url, ind}: Props) => {
  return (
        <Link href={`/blog/${ind}`} id="blog-card" className="photo overflow-clip mx-auto flex flex-col items-center">
          <div className="blog-img overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <ResponsiveImage 
              className='rounded-md' 
              src={`/images/${small_image_url}`} 
              alt={`${small_image_url}`} 
              width={400}
              height={300}
            />
          </div>
          <p className='my-4 text-center text-gray-600 font-inconsolata'>
            {date}
          </p>
          <h3 className='font-extrabold text-2xl text-center max-w-sm leading-tight'>
            {title}
          </h3>
        </Link>
  )
}


const topPosts = posts.slice(0,3) 

const Posts = () => {
  return (
    <section id='posts' className='py-32 flex flex-col bg-primary text-dark'>
      <div className="container mx-auto px-4">
        <h1 className='text-5xl leading-tight text-center font-bold mb-12'>
          OUR RECENT POSTS
        </h1>
        
        <div className="w-24 h-1 bg-dark mx-auto mb-16"></div>

        <div id="blogs-container" className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
          {topPosts.map((post, ind) => ( <Post key={ind} {...post} ind={ind} /> ))}
        </div>
      </div>
    </section>
  )
}

export default Posts
