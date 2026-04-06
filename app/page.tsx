import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Lazy-load below-the-fold sections to reduce initial JS bundle
const CoffeeDesc = dynamic(() => import("./components/CoffeeDesc"))
const Posts = dynamic(() => import("./components/Posts"))
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <section className='min-h-[320px] bg-dark' />,
})

export const metadata: Metadata = {
  title: 'Ethiopian Green Coffee Exporter | Ethio Coffee',
  description: 'Leading Ethiopian coffee exporter shipping green coffee worldwide. We export Grade 1-5 Yirgacheffe, Sidamo, Guji & more direct from Ethiopia.',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/',
  },
}

export default function Home() {
  return (
    <main className="">
       
      <Hero />
      <Offerings />
      <CoffeeDesc />
      <Posts />
      <Testimonials />

    </main>
  )
}
