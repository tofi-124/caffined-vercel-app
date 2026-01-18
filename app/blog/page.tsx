"use client"

import React, { useEffect, useRef } from 'react'
import { Post } from '../components/Posts'
import { posts } from '../data/data'

const parsePostDate = (value: string) => {
  const t = Date.parse(value)
  return Number.isFinite(t) ? t : 0
}

const BlogPage = () => {
  // Create a reference to the posts section for scrolling
  const postsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to center the posts section with a slight delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      if (postsRef.current) {
        const postsSectionTop = postsRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollToPosition = postsSectionTop - (windowHeight / 4); // Position to show posts in center
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>BLOG</h1>
      </header>
      <section className='flex flex-col justify-center items-center bg-primary'>
        <h1 className='my-16 text-5xl font-extrabold'>
          OUR RECENT POSTS
        </h1>
        <div ref={postsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts
            .map((post, id) => ({ post, id }))
            .sort((a, b) => parsePostDate(b.post.date) - parsePostDate(a.post.date))
            .map(({ post, id }) => (
              <Post key={id} {...post} ind={id} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default BlogPage
