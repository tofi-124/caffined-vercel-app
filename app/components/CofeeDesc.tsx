"use client"
import React, { useEffect, useRef, useState } from 'react'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'ETHIOPIAN ORIGIN',
    items: ['Birthplace of Arabica coffee', 'High-altitude growing regions', 'Unique terroir', 'Heirloom varietals']
  },
  {
    title: 'SUSTAINABLE SOURCING',
    items: ['Direct farmer relationships', 'Fair trade practices', 'Eco-friendly processing', 'Community support']
  },
  {
    title: 'PREMIUM QUALITY',
    items: ['Specialty-grade beans', 'Consistent cup profiles', 'Proper storage & shipping', 'Expert quality control']
  }
]

const CofeeDesc = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasCheckedDevice, setHasCheckedDevice] = useState(false);
  const [playAttempts, setPlayAttempts] = useState(0);

  useEffect(() => {
    // Check if the device is mobile (only for controls display purposes now)
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|windows phone|opera mini|silk/i.test(userAgent);
      setIsMobile(mobile);
      setHasCheckedDevice(true);
    };
    
    checkMobile();
  }, []);

  const attemptPlay = () => {
    if (videoRef.current) {
      // Set very low volume instead of completely muted (helps on some devices)
      videoRef.current.volume = 0.01;
      videoRef.current.muted = true;
      
      videoRef.current.play()
        .then(() => {
          console.log("Video autoplay successful");
          // If play succeeded, we can safely mute it completely
          if (videoRef.current) videoRef.current.volume = 0;
        })
        .catch(e => {
          console.log("Video autoplay attempt failed:", e);
          // Try again with a slight delay, but limit attempts
          if (playAttempts < 3) {
            setTimeout(() => {
              setPlayAttempts(prev => prev + 1);
              attemptPlay();
            }, 500);
          }
        });
    }
  };
  
  // Initial play attempt when component mounts
  useEffect(() => {
    if (hasCheckedDevice && videoRef.current) {
      attemptPlay();
    }
  }, [hasCheckedDevice]);
  
  // Attempt to play the video on various user interactions
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        attemptPlay();
      }
    };
    
    const handleUserInteraction = () => {
      if (videoRef.current) {
        attemptPlay();
      }
    };
    
    // IntersectionObserver to play when video is visible
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            attemptPlay();
          }
        });
      }, { threshold: 0.1 });
      
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
      
      // Clean up observer
      return () => {
        if (videoRef.current) observer.unobserve(videoRef.current);
      };
    }
    
    // Add multiple event listeners for different user interactions
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("touchstart", handleUserInteraction, { once: true });
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true });
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, [hasCheckedDevice]);

  return (
    <section ref={sectionRef} id='coffee-desc' className='flex flex-col items-center py-32 bg-dark text-primary'>
      <div id="container" className='mb-20 lg:px-72'>
        <h1 className='text-6xl leading-tight font-bold text-center'>
          THE ETHIOPIAN DIFFERENCE
        </h1>
        <p className='text-center m-4'>
          Ethiopian coffee is renowned worldwide for its distinctive floral and fruity flavor profiles. Grown in ideal high-altitude conditions by farmers with generations of expertise, these beans showcase the true heritage of coffee.
        </p>
      </div>

      <video 
        ref={videoRef}
        autoPlay
        muted 
        loop
        playsInline
        controls={isMobile}
        preload="auto"
        poster="/images/coffee-pack-1.webp"
      >
        <source src='/videos/cofee-from-machine.webm' type="video/webm" />
        {/* Add MP4 version as a fallback if you have one */}
      </video>
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h1 className='text-5xl leading-tight font-bold text-left'>
            WHY CHOOSE ETHIO COFFEE?
            </h1>
            <p className=''>
            As a premier Ethiopian coffee exporter, we bridge the gap between Ethiopia's finest coffee producers and quality-focused cafés and roasters around the world. Our business model ensures competitive pricing, consistency, and dedicated support for your business regardless of location.
            </p>
          </div>
          
          <div id='desc-right' className='flex flex-col gap-5 lg:w-1/2 lg:pl-32'>
            {headlines.map((headline, index) => <HeadLine key={index} {...headline} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CofeeDesc
