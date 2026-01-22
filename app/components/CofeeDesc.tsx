"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'VERTICAL INTEGRATION',
    items: [
      'Direct oversight from our family estates to our Canadian warehouses',
      'Seamless chain of custody via our Ethiopian PLC and Canadian company',
      'Eliminated intermediaries to ensure maximum value at both ends',
      'End-to-end quality control at every hand-off in the supply chain'
    ]
  },
  {
    title: 'TRACEABLE HERITAGE',
    items: [
      'Authentic heirloom varietals harvested from Arabica’s original home',
      'Farm-gate transparency with detailed micro-region documentation',
      'Generational relationships with smallholders and trusted cooperatives',
      'Sourcing models that prioritize coffee quality and grower equity'
    ]
  },
  {
    title: 'ROASTER-READY LOGISTICS',
    items: [
      'Fresh, high-quality inventory available year-round',
      'Strict sample-to-bag consistency through rigorous QC protocols',
      'Advanced moisture-safe packaging to preserve origin character',
      'Predictable supply planning with localized North American distribution'
    ]
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

  const attemptPlay = useCallback((options?: { fromUserGesture?: boolean }) => {
    if (videoRef.current) {
      const fromUserGesture = options?.fromUserGesture === true;

      // iOS requires both properties to be set explicitly
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('autoplay', '');
      
      const runPlay = () => {
        const playPromise = videoRef.current?.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video autoplay successful");
            })
            .catch(e => {
              console.log("Video autoplay attempt failed:", e);

              // Special handling for iOS
              if (isIOS && playAttempts < 5) {
                // iOS often needs multiple attempts with increasing delays
                setTimeout(() => {
                  setPlayAttempts(prev => prev + 1);
                  attemptPlay();
                }, 800 * (playAttempts + 1));
              }
            });
        }
      };

      // If we're inside a user gesture (touch/click), keep play() synchronous.
      if (fromUserGesture) {
        runPlay();
      } else {
        // Small delay can help initial page-load timing.
        setTimeout(runPlay, 100);
      }
    }
  }, [isIOS, playAttempts]);
  
  // Initial play attempt when component mounts
  useEffect(() => {
    if (hasCheckedDevice && videoRef.current) {
      attemptPlay();
    }
  }, [attemptPlay, hasCheckedDevice]);
  
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
      attemptPlay({ fromUserGesture: true });
    };
    
    // Add iOS-specific event listeners
    window.addEventListener('focus', handlePageFocus);
    window.addEventListener('pageshow', handlePageFocus);
    
    // These events help "warm up" the audio context on iOS
    document.addEventListener('touchend', enableAudioContext, { once: true, passive: true });
    
    return () => {
      window.removeEventListener('focus', handlePageFocus);
      window.removeEventListener('pageshow', handlePageFocus);
      document.removeEventListener('touchend', enableAudioContext);
    };
  }, [attemptPlay, isIOS, hasCheckedDevice]);
  
  // General interaction-based play attempts
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        attemptPlay();
      }
    };
    
    const handleUserInteraction = () => {
      if (videoRef.current) {
        attemptPlay({ fromUserGesture: true });
      }
    };

    const handleVideoCanPlay = () => {
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

      const videoEl = videoRef.current;
      if (videoEl) observer.observe(videoEl);
      
      // Clean up observer
      return () => {
        if (videoEl) observer.unobserve(videoEl);
      };
    }
    
    // Add multiple event listeners for different user interactions
    const videoEl = videoRef.current;
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("touchstart", handleUserInteraction, { once: true, passive: true });
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true, passive: true });
    videoEl?.addEventListener("canplay", handleVideoCanPlay);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      videoEl?.removeEventListener("canplay", handleVideoCanPlay);
    };
  }, [attemptPlay, hasCheckedDevice]);

  return (
    <section ref={sectionRef} id='coffee-desc' className='flex flex-col items-center py-32 bg-dark text-primary'>
      <div id="container" className='mb-20 lg:px-72'>
        <h1 className='text-6xl leading-tight font-bold text-center'>
          THE ETHIOPIAN DIFFERENCE
        </h1>
        <p className='text-left m-4'>
          Ethiopian coffee is famous for its floral and fruity profiles but the real difference is the people behind it. In the same high-altitude regions where coffee has been part of daily life for generations, farmers turn careful picking and processing into cups that feel unmistakably “origin.” Our work starts there: with relationships, consistency, and respect for the craft. 
          <a href="/blog/4" className='underline'>Learn more</a>
        </p>
      </div>

      {isIOS ? (
        // Special handling for iOS devices
        <div className="video-container w-full bg-dark">
          <video 
            ref={videoRef}
            muted 
            playsInline
            webkit-playsinline="true"
            autoPlay
            loop
            preload="auto"
            poster="/images/cover.png"
            className="w-full h-auto bg-dark"
          >
            <source src='/videos/ethio-coffee.mp4' type="video/mp4" />
            <source src='/videos/ethio-coffee.webm' type="video/webm" />
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
          preload="auto"
          poster="/images/cover.png"
          className="bg-dark"
        >
          <source src='/videos/ethio-coffee.mp4' type="video/mp4" />
          <source src='/videos/ethio-coffee.webm' type="video/webm" />
        </video>
      )}
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h1 className='text-5xl leading-tight font-bold text-left'>
            WHY CHOOSE ETHIO COFFEE?
            </h1>
            <p className=''>
            We are built on a family legacy that began long before export paperwork—back when our work was simply walking the coffee regions, meeting farmers, and seeing firsthand how easily great coffee loses value between the farm gate and the market.
            <br />
            <br />
            Today, we close that gap by managing every step ourselves. We source directly from our own estates, smallholder farmers, and trusted cooperatives. These harvests are exported to our buyers worldwide under our ECX-registered PLC, Ethio Coffee Import and Export. By maintaining this direct control at the source, we ensure clean preparation, consistent profiles, and the dependable communication roasters need.
            <br />
            <br />
            If you’re a North American business, our Canada-based operations give you real advantages. We import coffee directly into our Canadian warehouses under our Canadian company, Ethio Coffee Co., manage logistics locally, and help you build a dependable supply plan you can count on.            
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
