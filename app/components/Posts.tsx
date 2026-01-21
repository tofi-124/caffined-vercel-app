import React from 'react';
import {posts} from '../data/data';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';

// Define standard image dimensions for blog thumbnails
const BLOG_THUMBNAIL_WIDTH = 400;
const BLOG_THUMBNAIL_HEIGHT = 300;

type Props = {
  title: string,
  date: string,
  small_image_url: string,
  ind: number,
  showDate?: boolean
}

export const Post = ({ title, date, small_image_url, ind, showDate = true }: Props) => {
  return (
        <Link href={`/blog/${ind}`} id="blog-card" className="photo overflow-clip mx-auto flex flex-col items-center">
          <div className="blog-img w-full max-w-[400px] aspect-[4/3] overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <ResponsiveImage
              src={`/images/${small_image_url}`}
              alt={`${title}`}
              fill
              objectFit='cover'
              className='w-full h-full'
              sizes='(max-width: 768px) 100vw, 400px'
            />
          </div>
          {showDate && (
            <p className='my-4 text-center text-gray-600 font-inconsolata'>
              {date}
            </p>
          )}
          <h3 className='font-extrabold text-2xl text-center max-w-sm leading-tight'>
            {title}
          </h3>
        </Link>
  )
}

const featuredHomePostIds = [0, 1, 2, 4]

const Posts = () => {
  return (
    <section id='posts' className='py-32 flex flex-col bg-primary text-dark'>
      <div className="container mx-auto px-4">
        <h1 className='text-5xl leading-tight text-center font-bold mb-12'>
          OUR RECENT POSTS
        </h1>
        
        <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

        <div id="blogs-container" className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
          {featuredHomePostIds
            .map((id) => ({ id, post: posts[id] }))
            .filter((x) => Boolean(x.post))
            .map(({ id, post }) => (
              <Post key={id} {...post} ind={id} showDate={false} />
            ))}
        </div>

        <div className='flex justify-center mt-10'>
          <Link
            href='/blog'
            className='px-5 py-2 border border-accent rounded-md font-inconsolata text-sm bg-accent hover:bg-dark text-white hover:text-primary'
          >
            VIEW ALL BLOGS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Posts
