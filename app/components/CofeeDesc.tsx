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
  const [isIOS, setIsIOS] = useState(false);
  const [hasCheckedDevice, setHasCheckedDevice] = useState(false);
  const [playAttempts, setPlayAttempts] = useState(0);

  useEffect(() => {
    // Check if the device is mobile and specifically iOS
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|windows phone|opera mini|silk/i.test(userAgent);
      const iOS = /iphone|ipad|ipod/i.test(userAgent);
      setIsMobile(mobile);
      setIsIOS(iOS);
      setHasCheckedDevice(true);
    };
    
    checkDevice();
  }, []);

  const attemptPlay = () => {
    if (videoRef.current) {
      // iOS requires both properties to be set explicitly
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      
      // Use a very short timeout before playing (helps on iOS)
      setTimeout(() => {
        const playPromise = videoRef.current?.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("Video autoplay successful");
          }).catch(e => {
            console.log("Video autoplay attempt failed:", e);
            
            // Special handling for iOS
            if (isIOS && playAttempts < 5) {
              // iOS often needs multiple attempts with increasing delays
              setTimeout(() => {
                setPlayAttempts(prev => prev + 1);
                attemptPlay();
              }, 800 * (playAttempts + 1)); // Increasing delay with each attempt
            }
          });
        }
      }, 100);
    }
  };
  
  // Initial play attempt when component mounts
  useEffect(() => {
    if (hasCheckedDevice && videoRef.current) {
      attemptPlay();
    }
  }, [hasCheckedDevice]);
  
  // iOS-specific event handling
  useEffect(() => {
    if (!isIOS) return;
    
    // iOS specific: try playing again when page gets focus
    const handlePageFocus = () => {
      if (videoRef.current && document.hasFocus()) {
        attemptPlay();
      }
    };
    
    // Create silent audio context to "warm up" iOS audio
    const enableAudioContext = () => {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const audioCtx = new AudioContext();
        // Create and immediately play+stop a silent oscillator
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0; // silent
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start(0);
        oscillator.stop(0.001);
      }
      
      // Now try to play the video again
      attemptPlay();
    };
    
    // Add iOS-specific event listeners
    window.addEventListener('focus', handlePageFocus);
    window.addEventListener('pageshow', handlePageFocus);
    
    // These events help "warm up" the audio context on iOS
    document.addEventListener('touchend', enableAudioContext, { once: true });
    
    return () => {
      window.removeEventListener('focus', handlePageFocus);
      window.removeEventListener('pageshow', handlePageFocus);
      document.removeEventListener('touchend', enableAudioContext);
    };
  }, [isIOS, hasCheckedDevice]);
  
  // General interaction-based play attempts
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

      {isIOS ? (
        // Special handling for iOS devices
        <div className="video-container w-full">
          <video 
            ref={videoRef}
            muted 
            playsInline
            webkit-playsinline="true"
            autoPlay
            loop
            controls={isMobile}
            preload="auto"
            poster="/images/coffee-pack-1.webp"
            className="w-full h-auto"
          >
            {/* iOS prefers MP4 over WebM */}
            <source src='/videos/cofee-from-machine.mp4' type="video/mp4" />
            <source src='/videos/cofee-from-machine.webm' type="video/webm" />
          </video>
        </div>
      ) : (
        // Standard handling for other devices
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
        </video>
      )}
       
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
