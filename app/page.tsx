import CoffeeDesc from "./components/CoffeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";


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
