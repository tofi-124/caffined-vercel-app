import CoffeeDesc from "./components/CoffeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.ethiocoffee.et/',
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
