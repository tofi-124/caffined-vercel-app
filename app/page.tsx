import CoffeeDesc from "./components/CoffeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Offerings from "./components/Offerings";
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Lazy-load Testimonials (uses better-react-carousel, ~40 KiB) since it's below the fold
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <section className='min-h-[320px] bg-dark' />,
})

export const metadata: Metadata = {
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
