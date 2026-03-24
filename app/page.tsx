import CoffeeDesc from "./components/CoffeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Offerings from "./components/Offerings";
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Lazy-load Testimonials since it's below the fold
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
