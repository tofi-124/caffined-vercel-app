import HeroConsumer from "./components/HeroConsumer";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import CoffeeRegions from "./components/CoffeeRegions";
import CtaBanner from "./components/CtaBanner";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="">
       
      <HeroConsumer />
      <FeaturedProducts />
      <CoffeeRegions />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />

    </main>
  )
}
