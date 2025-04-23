import CofeeDesc from "./components/CofeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="">
       
      <Hero />
      <Offerings />
      <CofeeDesc />
      <Testimonials />
      <Posts />

    </main>
  )
}
