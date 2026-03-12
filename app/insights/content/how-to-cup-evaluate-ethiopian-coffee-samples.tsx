import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HiOutlineBeaker,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineClock
} from 'react-icons/hi2'
import { PiCoffee } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToCupEvaluateEthiopianCoffeeSamples({ title, date, large_image_url }: InsightContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Master the art of cupping and evaluating Ethiopian coffee samples with this comprehensive guide. Learn SCA protocols, sample roasting techniques, how to identify Ethiopian flavor profiles, score specialty coffee, detect defects, and make informed purchasing decisions based on sensory evaluation.
        </p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={`/images/${large_image_url}`}
          alt="Professional coffee cupping setup for evaluating Ethiopian specialty coffee samples"
          fill
          className="object-cover"
        />
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Proper cupping technique is the most critical skill in sourcing Ethiopian coffee. This guide covers SCA protocol, sample roasting, Ethiopian flavor profile identification, defect detection, and systematic scoring, so you can make confident purchasing decisions based on sensory evaluation.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none space-y-4">
        <p className="text-lg leading-relaxed">
          For coffee importers, roasters, and buyers, evaluating samples is the most critical step in the sourcing process. A proper cupping session reveals the true character of Ethiopian coffee: its unique terroir, processing quality, potential defects, and whether it matches your expectations and your customers' preferences. <strong>Yet many buyers struggle with cupping Ethiopian samples</strong> because these coffees present distinctive flavor profiles and complexities that differ dramatically from other origins.
        </p>
        
        <p className="text-lg leading-relaxed">
          Ethiopian coffees are celebrated for their vibrant floral aromatics, complex fruit notes, and exceptional clarity. However, these same characteristics require careful evaluation techniques to properly assess. A natural-processed Guji with intense blueberry notes might be extraordinary or it might be over-fermented. A washed Yirgacheffe's bright citrus acidity could signal pristine processing or insufficient drying. <strong>The difference lies in knowing what to look for and how to evaluate it systematically.</strong>
        </p>

        <p className="text-lg leading-relaxed">
          This comprehensive guide provides importers with a practical, step-by-step approach to cupping Ethiopian coffee samples using industry-standard protocols. From evaluating pre-shipment samples and conducting quality control on arrival to deciding between multiple Ethiopian lots, this guide will help you cup with confidence and make informed purchasing decisions.
        </p>
      </section>

      {/* Section 1: Understanding SCA Cupping Protocol */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineAcademicCap className="w-8 h-8 text-blue-700" />
          <h2 className="text-3xl font-bold text-gray-900">Understanding the SCA Cupping Protocol</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          The Specialty Coffee Association (SCA) cupping protocol is the global standard for evaluating specialty coffee. It provides a systematic, repeatable method that allows buyers worldwide to assess coffee quality using the same criteria. For Ethiopian coffee evaluation, adhering to SCA standards ensures consistency and allows meaningful comparison between samples.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineClipboardDocumentList className="w-6 h-6 text-blue-700" />
            SCA Cupping Fundamentals
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Sample Size:</strong> 8.25 grams of coffee per 150ml of water (ratio of 1:18.18)</li>
            <li><strong>Grind Size:</strong> Slightly coarser than drip, approximating 70-75% passing through US #20 sieve</li>
            <li><strong>Water Temperature:</strong> 200°F (93°C) at the time of pouring</li>
            <li><strong>Water Quality:</strong> Clean, odor-free, TDS 125-175 ppm, pH 6.5-7.5</li>
            <li><strong>Brewing Time:</strong> 4 minutes before breaking the crust</li>
            <li><strong>Evaluation Temperature:</strong> Breaking at ~58-60°C, scoring at ~70°C down to 40°C</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          The SCA uses a 100-point scoring system that evaluates ten sensory attributes: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression. For specialty-grade coffee, the minimum score is 80 points. Ethiopian specialty lots typically score between 84-92 points, with exceptional micro-lots reaching 93-95+ points. Our <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='underline font-bold'>micro-lot Ethiopian coffee sourcing guide</Link> explains what cupping scores mean for pricing and how to evaluate micro-lot samples. The SCA is now transitioning to the <Link href='/insights/new-sca-coffee-value-assessment' className='underline font-bold'>Coffee Value Assessment (CVA)</Link>, a multi-dimensional framework that captures detailed descriptive profiles alongside quality scores.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">SCA Scoring Categories</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-blue-700">Fragrance/Aroma (10 points):</strong>
              <p>Dry fragrance and wet aroma intensity and quality</p>
            </div>
            <div>
              <strong className="text-blue-700">Flavor (10 points):</strong>
              <p>Primary flavor characteristics and complexity</p>
            </div>
            <div>
              <strong className="text-blue-700">Aftertaste (10 points):</strong>
              <p>Length and quality of flavor after swallowing</p>
            </div>
            <div>
              <strong className="text-blue-700">Acidity (10 points):</strong>
              <p>Brightness, liveliness, and quality of acid notes</p>
            </div>
            <div>
              <strong className="text-blue-700">Body (10 points):</strong>
              <p>Tactile mouthfeel, weight, and texture</p>
            </div>
            <div>
              <strong className="text-blue-700">Balance (10 points):</strong>
              <p>How flavor, aftertaste, acidity, and body work together</p>
            </div>
            <div>
              <strong className="text-blue-700">Uniformity (10 points):</strong>
              <p>Consistency across 5 cups (2 points per cup)</p>
            </div>
            <div>
              <strong className="text-blue-700">Clean Cup (10 points):</strong>
              <p>Freedom from defects (2 points per cup × 5 cups)</p>
            </div>
            <div>
              <strong className="text-blue-700">Sweetness (10 points):</strong>
              <p>Pleasant fullness of flavor (2 points per cup × 5 cups)</p>
            </div>
            <div>
              <strong className="text-blue-700">Overall (10 points):</strong>
              <p>Cupper's overall evaluation and personal rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Essential Equipment */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineCog className="w-8 h-8 text-amber-700" />
          <h2 className="text-3xl font-bold text-gray-900">Essential Cupping Equipment and Setup</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Professional cupping requires specific equipment to ensure consistency and accuracy. While elaborate setups exist, a functional cupping lab for evaluating Ethiopian samples can be established with essential tools and proper technique.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Equipment</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li><strong>Cupping bowls:</strong> 150-200ml ceramic or glass bowls (minimum 5 per sample)</li>
              <li><strong>Cupping spoons:</strong> Deep, round bowls for proper aspiration</li>
              <li><strong>Grinder:</strong> High-quality burr grinder with consistent particle size</li>
              <li><strong>Scale:</strong> Accurate to 0.1g for precise dosing</li>
              <li><strong>Kettle:</strong> Temperature-controlled (ideally gooseneck)</li>
              <li><strong>Thermometer:</strong> For monitoring water temperature</li>
              <li><strong>Timer:</strong> For tracking brew time</li>
              <li><strong>Spittoon:</strong> For expectorating coffee</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Supporting Materials</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li><strong>Cupping forms:</strong> SCA official forms or custom templates</li>
              <li><strong>Rinse water:</strong> Clean water for rinsing spoons between samples</li>
              <li><strong>Sample roaster:</strong> For roasting green samples (if evaluating green coffee)</li>
              <li><strong>Trays:</strong> For organizing samples</li>
              <li><strong>Labels:</strong> For blind cupping identification</li>
              <li><strong>Aroma standards:</strong> Reference for calibration (optional)</li>
              <li><strong>Lighting:</strong> Neutral, consistent lighting (5000-6500K)</li>
              <li><strong>Environment:</strong> Quiet, odor-free room</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineLightBulb className="w-6 h-6 text-yellow-700" />
            Pro Tip: Water Quality Matters
          </h3>
          <p className="text-gray-800">
            Many importers overlook water quality when cupping samples. Ethiopian coffees, with their delicate floral and fruit characteristics, are particularly sensitive to mineral content and pH. Use filtered water with TDS between 125-175 ppm. Too-soft water will produce flat, lifeless cups; too-hard water will mute acidity and create chalky mouthfeel. If in doubt, use third-wave water recipes or bottled spring water with appropriate mineral content.
          </p>
        </div>
      </section>

      {/* Section 3: Sample Roasting */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <PiCoffee className="w-8 h-8 text-red-700" />
          <h2 className="text-3xl font-bold text-gray-900">Sample Roasting for Cupping Ethiopian Coffee</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          When evaluating green Ethiopian coffee samples, proper sample roasting is essential. The goal is to develop the coffee just enough to reveal its intrinsic characteristics without introducing roasting flavors that could mask origin qualities or defects.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">SCA Sample Roasting Guidelines</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Roast Level:</strong> Light to medium-light (Agtron 58-63 for whole bean)</li>
            <li><strong>Development Time:</strong> 8-12% of total roast time</li>
            <li><strong>Total Roast Time:</strong> 8-12 minutes typical</li>
            <li><strong>First Crack:</strong> Should occur between 6-9 minutes</li>
            <li><strong>End Temperature:</strong> 195-205°C (383-401°F)</li>
            <li><strong>Cooling:</strong> Rapidly cool immediately after dropping</li>
            <li><strong>Resting:</strong> Allow 8-24 hours before cupping (minimum 8 hours)</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          <strong>For Ethiopian coffees specifically,</strong> avoid taking the roast too light, as this can emphasize grassy or vegetal notes that aren't representative of the coffee's true character. However, don't develop too far either, as Ethiopian floral and fruit characteristics diminish rapidly past medium-light. Your target is the "sweet spot" where origin character is maximized.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-600" />
              Properly Roasted Sample Signs
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Even color across all beans</li>
              <li>✓ No scorching or tipping</li>
              <li>✓ Clean, sweet aroma (no roasty notes)</li>
              <li>✓ Full first crack completion</li>
              <li>✓ No underdeveloped "grassy" smell</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <HiOutlineXCircle className="text-red-600" />
              Poor Sample Roasting Red Flags
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✗ Uneven color (mottling)</li>
              <li>✗ Burned or scorched beans</li>
              <li>✗ Roasty, smoky aroma</li>
              <li>✗ Quakers (pale, underdeveloped beans)</li>
              <li>✗ Baked character (flat, dull)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Cupping Process */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineClock className="w-8 h-8 text-green-700" />
          <h2 className="text-3xl font-bold text-gray-900">Step-by-Step Cupping Process</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Follow this systematic approach when cupping Ethiopian coffee samples to ensure consistency and thorough evaluation.
        </p>

        <div className="space-y-6">
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Preparation (15 minutes before)</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Weigh 8.25g of coffee per bowl (prepare 5 bowls per sample minimum)</li>
              <li>• Grind each sample immediately before cupping (medium-coarse)</li>
              <li>• Arrange bowls on cupping table with sample codes</li>
              <li>• Heat water to 200°F (93°C)</li>
              <li>• Have cupping forms, spoons, and rinse water ready</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Dry Fragrance (0-4 minutes)</h3>
            <p className="text-gray-800 mb-2">After grinding, evaluate the dry fragrance by bringing your nose close to the grounds and inhaling deeply.</p>
            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <strong className="text-green-800">Ethiopian Coffee Dry Fragrance Notes:</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• <strong>Washed Yirgacheffe:</strong> Jasmine, bergamot, lemon zest, black tea</li>
                <li>• <strong>Natural Sidamo:</strong> Blueberry, strawberry, red wine, mixed berries</li>
                <li>• <strong>Washed Guji:</strong> Peach, apricot, floral, honey</li>
                <li>• <strong>Natural Guji:</strong> Tropical fruit, mango, pineapple, wine-like</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Wet Aroma (4-8 minutes)</h3>
            <p className="text-gray-800 mb-2">Pour 150ml of water at 200°F over the grounds, starting your timer. Let steep for 4 minutes without disturbing.</p>
            <p className="text-gray-800 mb-2">As coffee steeps, a crust forms on top. After 4 minutes, break the crust by:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4">
              <li>Positioning your nose close to the bowl</li>
              <li>Using cupping spoon to push crust from back to front (3 times)</li>
              <li>Inhaling deeply as the crust breaks to capture wet aroma</li>
              <li>Note aroma intensity and characteristics</li>
            </ol>
          </div>

          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Skim and Clean (8-10 minutes)</h3>
            <p className="text-gray-800">After breaking the crust, use two spoons to skim foam and floating grounds from the surface. This ensures clean aspiration without interference from particles.</p>
          </div>

          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Taste and Evaluate (10-45 minutes)</h3>
            <p className="text-gray-800 mb-2">Begin tasting when coffee reaches approximately 70°C (160°F). This is when flavors are most expressive.</p>
            <p className="text-gray-800 mb-2"><strong>Proper Aspiration Technique:</strong></p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4">
              <li>Dip spoon into coffee to fill halfway</li>
              <li>Bring spoon to lips</li>
              <li>Slurp forcefully to atomize coffee across palate</li>
              <li>Hold coffee in mouth momentarily, noting flavors</li>
              <li>Spit into spittoon</li>
              <li>Rinse spoon in water between samples</li>
            </ol>
            <p className="text-gray-800 mt-3">Evaluate each cup multiple times as it cools from 70°C to 40°C. Different flavor characteristics emerge at different temperatures.</p>
          </div>

          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 6: Score and Document (Throughout)</h3>
            <p className="text-gray-800">Complete your cupping form, scoring each attribute on the 6-10 point scale (in 0.25 increments). Calculate final score and document descriptive notes for each coffee.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Ethiopian Coffee Characteristics */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineScale className="w-8 h-8 text-purple-700" />
          <h2 className="text-3xl font-bold text-gray-900">Understanding Ethiopian Coffee Flavor Characteristics</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Ethiopian coffees present distinctive flavor profiles that differ significantly from other origins. Understanding these regional and processing-based characteristics helps you evaluate samples accurately and set appropriate quality expectations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Washed Process Profiles</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-purple-800">Yirgacheffe Washed:</strong>
                <p className="text-gray-700">High acidity (citric, malic), floral (jasmine, bergamot), tea-like, light body, clean finish. Classic "Ethiopian" profile.</p>
              </div>
              <div>
                <strong className="text-purple-800">Sidamo Washed:</strong>
                <p className="text-gray-700">Balanced acidity, stone fruit (peach, apricot), floral, chocolate undertones, medium body. More approachable than Yirgacheffe.</p>
              </div>
              <div>
                <strong className="text-purple-800">Guji Washed:</strong>
                <p className="text-gray-700">Complex acidity, tropical fruit (passion fruit, guava), floral, honeyed sweetness, silky body. Rising star region.</p>
              </div>
              <div>
                <strong className="text-purple-800">Limu Washed:</strong>
                <p className="text-gray-700">Balanced, spicy notes, wine-like qualities, medium acidity, fuller body than Yirgacheffe.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Process Profiles</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-purple-800">Natural Yirgacheffe:</strong>
                <p className="text-gray-700">Intense blueberry, strawberry, red wine, syrupy body, lower acidity than washed, complex and fruit-forward.</p>
              </div>
              <div>
                <strong className="text-purple-800">Natural Sidamo:</strong>
                <p className="text-gray-700">Mixed berries, chocolate, wine-like, jammy sweetness, heavier body, often more accessible than natural Yirgacheffe.</p>
              </div>
              <div>
                <strong className="text-purple-800">Natural Guji:</strong>
                <p className="text-gray-700">Tropical fruit bomb, mango, pineapple, fermented fruit, heavy body, complex and polarizing. Can be extraordinary or overwhelming.</p>
              </div>
              <div>
                <strong className="text-purple-800">Natural Harrar:</strong>
                <p className="text-gray-700">Distinctive wild, winey character, blueberry, dark chocolate, medium-heavy body. Traditional Ethiopian natural process.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineLightBulb className="w-6 h-6 text-yellow-700" />
            Natural Process Evaluation Caution
          </h3>
          <p className="text-gray-800">
            Natural-processed Ethiopian coffees walk a fine line between "complex fruit-forward" and "over-fermented." When cupping naturals, pay close attention to whether fruit notes are clean and defined or muddled and boozy. Desirable natural character: distinct fruit, wine-like complexity, clean finish. Defective natural character: dirty, rotten fruit, medicinal, harsh alcohol notes, muddy finish.
          </p>
        </div>
      </section>

      {/* Section 6: Common Defects */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineXCircle className="w-8 h-8 text-red-700" />
          <h2 className="text-3xl font-bold text-gray-900">Identifying Common Defects in Ethiopian Coffee</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Recognizing defects during cupping is essential for quality control. Ethiopian coffees can exhibit specific defects related to processing, storage, or inherent bean quality. Here are the most common issues and how to identify them.
        </p>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ferment/Sour</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Over-fermentation during washed processing or uncontrolled fermentation in natural processing.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Vinegary, sharp acetic acid notes, rotten fruit, unpleasant sourness that lingers.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Distinct from clean acidity. Ferment is harsh, lingering, and unbalanced.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phenolic/Medicinal</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Improper drying, moisture re-absorption, or microbial contamination.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Band-aid, iodine, chemical, pharmaceutical notes.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Unmistakable medicinal smell and taste that dominates the cup.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Earthy/Musty</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Mold development during drying, poor storage conditions, ground contact.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Moldy, dusty, basement-like, dirty flavors.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Musty aroma is evident at dry fragrance stage. Cup tastes stale and lacks clarity.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Baggy/Jute</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Poor storage in low-quality bags or prolonged storage without proper conditions.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Burlap, canvas, jute-like flavors that mask origin characteristics.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Hessian or jute aroma in fragrance; cup tastes flat with fabric-like notes.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Faded/Past Crop</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Old coffee that has lost its vibrancy due to age or poor storage.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Lack of brightness, muted flavors, woody or papery notes, dull finish.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Ethiopian characteristics (floral, fruit) are present but faint and lacking intensity.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quaker</h3>
            <p className="text-sm text-gray-800"><strong>Cause:</strong> Immature or underdeveloped beans that don't roast properly.</p>
            <p className="text-sm text-gray-800"><strong>Cup Character:</strong> Peanut-like, raw, grassy, astringent notes in otherwise clean cup.</p>
            <p className="text-sm text-gray-800"><strong>How to Detect:</strong> Pale beans visible in roasted sample. Cup has vegetal, unripe flavors.</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Defect Severity Scoring</h3>
          <p className="text-gray-800 mb-2">When defects are present, adjust clean cup, uniformity, and sweetness scores accordingly:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• <strong>Minor defect (1 cup affected):</strong> Deduct 2 points from affected category</li>
            <li>• <strong>Moderate defect (2-3 cups):</strong> Deduct 4-6 points from affected categories</li>
            <li>• <strong>Major defect (all cups):</strong> Coffee fails specialty grade (below 80 points)</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Practical Tips */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineChartBar className="w-8 h-8 text-indigo-700" />
          <h2 className="text-3xl font-bold text-gray-900">Practical Tips for Cupping Ethiopian Coffee</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation Best Practices</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Cup blindly whenever possible to avoid bias</li>
              <li>✓ Cup in the morning when palate is fresh</li>
              <li>✓ Avoid strong flavors (coffee, spices) for 30 minutes before cupping</li>
              <li>✓ Calibrate with colleagues using the same samples</li>
              <li>✓ Use consistent water source for all samples</li>
              <li>✓ Clean equipment thoroughly between sessions</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Evaluation Techniques</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Cup each sample multiple times as it cools</li>
              <li>✓ Take notes immediately; don't rely on memory</li>
              <li>✓ Compare similar coffees side-by-side (e.g., all Yirgacheffe washed)</li>
              <li>✓ Cup pre-shipment sample alongside arrival sample for verification</li>
              <li>✓ Focus on detectinguniformity and clean cup first</li>
              <li>✓ Reserve overall score until final circulation</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Size Matters</h3>
          <p className="text-gray-800">
            Always request sufficient sample size from your Ethiopian exporter: minimum 300-500g per lot. This allows multiple cupping sessions, roast adjustments if needed, and archiving for future reference. Many quality issues only become apparent after multiple evaluations or as samples age.
          </p>
        </div>
      </section>

      {/* Section 8: Making Purchasing Decisions */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineBeaker className="w-8 h-8 text-teal-700" />
          <h2 className="text-3xl font-bold text-gray-900">Using Cupping Results to Make Purchasing Decisions</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Cupping is not just about scoring coffee. It's about understanding whether a specific Ethiopian lot aligns with your needs, your customers' preferences, and your quality standards. Here's how to translate cupping results into informed purchasing decisions.
        </p>

        <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Questions to Ask After Cupping</h3>
          <div className="space-y-3 text-gray-800">
            <div>
              <strong className="text-teal-800">1. Does the cup match the exporter's description?</strong>
              <p className="text-sm">If described as "floral Yirgacheffe" but tastes earthy and muted, there's a disconnect. Request clarification or reject the lot.</p>
            </div>
            <div>
              <strong className="text-teal-800">2. Is the quality consistent across all cups?</strong>
              <p className="text-sm">Uniformity issues suggest lot blending, poor sorting, or contamination. High-value lots should show excellent uniformity.</p>
            </div>
            <div>
              <strong className="text-teal-800">3. How will this coffee roast and perform in blends/single origin?</strong>
              <p className="text-sm">Consider your roasting style and customer preferences. Delicate Yirgacheffe may not work in dark roasts or espresso blends.</p>
            </div>
            <div>
              <strong className="text-teal-800">4. What's the value proposition at the quoted price?</strong>
              <p className="text-sm">An 86-point coffee at $4.50/lb might be excellent value; the same score at $8.50/lb requires more scrutiny.</p>
            </div>
            <div>
              <strong className="text-teal-800">5. Are there any deal-breaker defects?</strong>
              <p className="text-sm">Phenolic, ferment, or musty defects are typically non-negotiable. Clean cup defects mean walking away.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-green-100 p-5 rounded-lg border-2 border-green-400">
            <h4 className="font-semibold text-gray-900 mb-2 text-center">BUY</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>✓ Score meets/exceeds target</li>
              <li>✓ Clean cup (10/10)</li>
              <li>✓ Excellent uniformity</li>
              <li>✓ Matches description</li>
              <li>✓ Strong overall impression</li>
              <li>✓ Fair price for quality</li>
            </ul>
          </div>

          <div className="bg-yellow-100 p-5 rounded-lg border-2 border-yellow-400">
            <h4 className="font-semibold text-gray-900 mb-2 text-center">NEGOTIATE</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>⚠ Score below target by 1-2 points</li>
              <li>⚠ Minor uniformity issues</li>
              <li>⚠ Slight description mismatch</li>
              <li>⚠ Good but not exceptional</li>
              <li>⚠ Price too high for quality</li>
              <li>⚠ Request better lot or discount</li>
            </ul>
          </div>

          <div className="bg-red-100 p-5 rounded-lg border-2 border-red-400">
            <h4 className="font-semibold text-gray-900 mb-2 text-center">REJECT</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>✗ Score below 80 (not specialty)</li>
              <li>✗ Clean cup defects present</li>
              <li>✗ Poor uniformity</li>
              <li>✗ Phenolic, ferment, or musty</li>
              <li>✗ Doesn't match description</li>
              <li>✗ Past crop / faded character</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Cupping and Evaluating Ethiopian Coffee</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the SCA cupping protocol for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">The SCA protocol uses 8.25 grams of coffee per 150 ml of water at 93 degrees Celsius. Coffees are evaluated on fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What cupping score qualifies Ethiopian coffee as specialty grade?</h4>
            <p className="text-sm text-gray-600">Coffee scoring 80 points or above on the SCA 100-point scale is considered specialty grade. Many Ethiopian coffees from Yirgacheffe, Guji, and Sidamo regularly score 85 or higher.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are common defects found when cupping Ethiopian coffee samples?</h4>
            <p className="text-sm text-gray-600">Common defects include ferment or overripe fruit notes from processing issues, baggy or musty flavors from improper storage, phenolic or medicinal taints, and potato defect (primarily in East African washed coffees).</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do you evaluate washed versus natural Ethiopian coffee during cupping?</h4>
            <p className="text-sm text-gray-600">Washed Ethiopian coffees are evaluated for clarity, brightness, and clean floral or citrus notes. Natural processed coffees are assessed for fruit intensity, body, and sweetness, with expectations of heavier body and berry or wine-like flavors.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How many cups should you prepare when evaluating Ethiopian coffee samples?</h4>
            <p className="text-sm text-gray-600">SCA protocol recommends a minimum of five cups per sample to assess uniformity and consistency. This allows cuppers to identify any defective cups and evaluate the lot's overall quality reliably.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-800 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-extrabold mb-4">
          Ready to Source High-Quality Ethiopian Coffee?
        </h3>
        <p className="mb-4">
          At Ethio Coffee Import and Export PLC, we provide detailed cupping notes, sample availability, and full transparency for every lot we offer. Our team cups all coffees using SCA protocols and provides honest evaluations to help importers make confident decisions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/offerings" 
            className="inline-flex items-center gap-2 bg-white text-amber-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            View Current Offerings
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
          >
            Request Samples
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control & Grading</Link></li>
              <li>• <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>New SCA Coffee Value Assessment</Link></li>
              <li>• <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline'>Best Cupping Schools</Link></li>
              <li>• <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee Production QC</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Request Ethiopian Coffee Samples</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we provide pre-shipment samples and detailed cupping notes for all our specialty lots. Experience the quality before you commit.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A practical guide to cupping and evaluating Ethiopian coffee samples, covering SCA protocols, flavor descriptors, and scoring methodology.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </article>
  )
}
