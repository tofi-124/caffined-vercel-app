import React from 'react'
import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { 
  HiOutlineChartBar,
  HiOutlineMapPin,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineTrophy,
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineBeaker,
  HiOutlineScale
} from 'react-icons/hi2'
import { PiPlantFill, PiCoffee, PiTreeFill } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SidamaCoffeeProductionProductivityExport({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Comprehensive guide to Sidama region&apos;s exceptional coffee productivity, farmer cluster organization, agricultural modernization initiatives, and new direct export licensing opportunities.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Sidama region coffee production and farmer cooperatives achieving high productivity'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Regional Coffee / Sidama / Production & Export</span>
      </div>

    <article className="max-w-4xl mx-auto space-y-8">

      {/* Introduction */}
      <section className="prose prose-lg max-w-none space-y-4">
        <p className="text-lg leading-relaxed">
          The Sidama region of Ethiopia, one of the country's most productive and renowned coffee-growing areas, is achieving remarkable agricultural success with <strong>average productivity exceeding 10 quintals (1,000 kg) per hectare</strong> in the 2025-2026 production season. This represents exceptional performance in Ethiopian coffee production, where national averages have historically been significantly lower.
        </p>
        
        <p className="text-lg leading-relaxed">
          According to Mesfin Qare, Chief Director of the Sidama Regional Coffee, Fruit, and Spices Authority, this productivity milestone reflects years of investment in farmer training, agricultural modernization, cooperative organization, and quality-focused production practices. With <strong>176,000 hectares covered with coffee</strong> (146,000 hectares currently producing) and a seasonal target of <strong>239,000 tons</strong>, Sidama region stands as a critical pillar of Ethiopia's specialty coffee industry.
        </p>

        <p className="text-lg leading-relaxed">
          This comprehensive guide explores Sidama region's coffee production landscape, the factors driving exceptional productivity, farmer cluster organization strategies, agricultural improvement initiatives, new direct export licensing opportunities for smallholder farmers, and what international buyers should understand about sourcing from this premier Ethiopian coffee region.
        </p>
      </section>

      {/* Section 1: Sidama Coffee Production Overview */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineMapPin className="w-8 h-8 text-green-700" />
          <h2 className="text-3xl font-bold text-gray-900">Sidama Region Coffee Production: Scale & Significance</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          The Sidama region (formerly part of Southern Nations, Nationalities, and Peoples' Region, now an independent regional state since 2020) is Ethiopia's coffee heartland, producing some of the world's most sought-after specialty coffees including the globally recognized <strong>Sidamo</strong> trademarked origin.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineChartBar className="w-6 h-6 text-green-700" />
            2025-2026 Production Season Statistics
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div>
              <p className="font-semibold text-green-800">Total Coffee Area:</p>
              <p className="text-2xl font-bold">176,000 hectares</p>
              <p className="text-sm text-gray-600">Total land covered with coffee trees</p>
            </div>
            <div>
              <p className="font-semibold text-green-800">Productive Area:</p>
              <p className="text-2xl font-bold">146,000 hectares</p>
              <p className="text-sm text-gray-600">Currently producing coffee (83% of total area)</p>
            </div>
            <div>
              <p className="font-semibold text-green-800">Seasonal Production Target:</p>
              <p className="text-2xl font-bold">239,000 tons</p>
              <p className="text-sm text-gray-600">Planned coffee collection for 2025-2026</p>
            </div>
            <div>
              <p className="font-semibold text-green-800">Production to Date:</p>
              <p className="text-2xl font-bold">80,000 tons</p>
              <p className="text-sm text-gray-600">Collected so far (33% of seasonal target)</p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The <strong>average productivity of 10+ quintals per hectare</strong> represents exceptional performance, particularly considering Ethiopia's smallholder-dominated agricultural system. For context, traditional Ethiopian coffee production has historically averaged 3-6 quintals per hectare, making Sidama's achievement more than double the national baseline.
        </p>

        <p className="text-lg leading-relaxed">
          Chief Director Mesfin Qare emphasized that harvesting is <em>"being carried out extensively in the highlands and Weina Dega (mid-altitude) areas,"</em> indicating that Sidama's diverse altitude zones-ranging from 1,500 to 2,200 meters above sea level-are all contributing to the region's impressive production volumes.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Sidama Coffee Production Matters Globally</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Volume Leadership:</strong> Sidama region produces approximately 35-40% of Ethiopia's total coffee export volume</li>
            <li><strong>Quality Recognition:</strong> "Sidamo" is a protected geographical indication and globally recognized specialty coffee origin</li>
            <li><strong>Flavor Profile Excellence:</strong> Known for complex floral, citrus, and stone fruit notes with bright acidity and tea-like body</li>
            <li><strong>Processing Diversity:</strong> Both washed and natural processing methods produce exceptional specialty-grade coffee</li>
            <li><strong>Smallholder Focus:</strong> Production predominantly from smallholder farmers (average 0.5-2 hectares), ensuring traditional cultivation practices</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Exceptional Productivity Achievement */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineArrowTrendingUp className="w-8 h-8 text-amber-700" />
          <h2 className="text-3xl font-bold text-gray-900">Achieving 10+ Quintals Per Hectare: Agricultural Success Factors</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Sidama region's achievement of <strong>10+ quintals per hectare average productivity</strong> results from systematic agricultural improvements, farmer training, and quality-focused cultivation practices. Understanding these success factors provides valuable insights for other coffee-producing regions and demonstrates the potential for productivity increases through targeted interventions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <PiTreeFill className="w-6 h-6 text-amber-700" />
              Agricultural Improvement Practices
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Pruning Old Coffee Trees:</strong> Systematic renewal pruning to rejuvenate aging trees and restore productivity</li>
              <li><strong>Variety Replacement:</strong> Introducing improved coffee varieties with higher yield potential and disease resistance</li>
              <li><strong>Natural Fertilization:</strong> Using organic compost and natural fertilizers to improve soil health and nutrient availability</li>
              <li><strong>Shade Management:</strong> Optimizing canopy shade from indigenous trees to regulate temperature and moisture</li>
              <li><strong>Water Conservation:</strong> Mulching and soil conservation practices to maintain moisture during dry periods</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <HiOutlineAcademicCap className="w-6 h-6 text-amber-700" />
              Knowledge & Training Initiatives
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Extension Services:</strong> Agricultural extension workers providing on-farm training and technical support</li>
              <li><strong>Demonstration Plots:</strong> Model farms showcasing best practices and improved productivity techniques</li>
              <li><strong>Farmer Field Schools:</strong> Participatory learning programs on agronomy, pest management, and post-harvest handling</li>
              <li><strong>Processing Training:</strong> Education on proper cherry selection, fermentation, and drying to maximize quality</li>
              <li><strong>Cluster Learning:</strong> Knowledge sharing between farmers organized in productive clusters</li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Chief Director Mesfin Qare explained that <em>"work is being done to increase productivity by pruning old coffee trees, replacing them with new varieties, and using natural fertilizers."</em> This integrated approach addresses multiple limiting factors simultaneously: aging tree stock, depleted soil nutrients, and outdated cultivation practices.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Productivity Comparison: Sidama vs. Ethiopia National Average</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-center">Sidama Region</th>
                  <th className="p-3 text-center">Ethiopia National Avg</th>
                  <th className="p-3 text-center">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Productivity (quintals/hectare)</td>
                  <td className="p-3 text-center font-bold text-green-700">10+</td>
                  <td className="p-3 text-center">4-6</td>
                  <td className="p-3 text-center text-green-700 font-semibold">+67-150%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Productive Land Utilization</td>
                  <td className="p-3 text-center font-bold text-green-700">83%</td>
                  <td className="p-3 text-center">65-70%</td>
                  <td className="p-3 text-center text-green-700 font-semibold">+13-18%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Farmer Organization (clusters)</td>
                  <td className="p-3 text-center font-bold text-green-700">239 clusters</td>
                  <td className="p-3 text-center">Limited</td>
                  <td className="p-3 text-center text-green-700 font-semibold">Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Farmer Cluster Organization */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineUserGroup className="w-8 h-8 text-blue-700" />
          <h2 className="text-3xl font-bold text-gray-900">Farmer Cluster Organization: 239 Clusters for Quality & Productivity</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          One of Sidama region's most innovative approaches to improving coffee production is the systematic <strong>organization of farmers into 239 productive clusters</strong>. This cluster-based model addresses fundamental challenges in smallholder coffee production: fragmented production, inconsistent quality, limited bargaining power, and inadequate access to technical support and market information.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">What is a Coffee Farmer Cluster?</h3>
          <p className="text-gray-800 mb-3">
            A <strong>farmer cluster</strong> is a geographically organized group of smallholder coffee producers (typically 50-200 farmers) who collaborate on:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Collective Learning:</strong> Sharing agricultural knowledge, best practices, and innovations</li>
            <li><strong>Quality Standardization:</strong> Adopting uniform quality standards for cherry selection, processing, and drying</li>
            <li><strong>Aggregated Production:</strong> Pooling coffee volumes to access better processing facilities and market opportunities</li>
            <li><strong>Coordinated Harvesting:</strong> Timing harvest activities to optimize cherry ripeness and processing capacity</li>
            <li><strong>Shared Resources:</strong> Accessing training, inputs (seedlings, fertilizers), and infrastructure collectively</li>
            <li><strong>Market Access:</strong> Negotiating better prices through volume aggregation and quality assurance</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          According to Chief Director Mesfin Qare, <em>"work is being done to organize farmers in clusters to improve coffee quality and productivity, and this year, the task of organizing in 239 clusters is being carried out."</em> This represents a systematic approach to reaching thousands of smallholder farmers across Sidama's diverse coffee-growing zones.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits for Farmers</h3>
            <ul className="space-y-2 text-gray-800">
              <li>Access to technical training and agricultural extension services</li>
              <li>Improved productivity through adoption of best practices</li>
              <li>Better coffee quality through standardized processing methods</li>
              <li>Stronger bargaining power in price negotiations</li>
              <li>Access to credit and agricultural inputs at better terms</li>
              <li>Direct export opportunities (for qualified farmers with 2+ hectares)</li>
              <li>Traceability documentation supporting specialty coffee premiums</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits for International Buyers</h3>
            <ul className="space-y-2 text-gray-800">
              <li>Improved traceability to cluster or farm level</li>
              <li>More consistent quality within cluster-sourced lots</li>
              <li>Larger lot sizes from aggregated cluster production</li>
              <li>Direct relationships with organized farmer groups</li>
              <li>Better sustainability and impact measurement</li>
              <li>Transparency in pricing and farmer payments</li>
              <li>Long-term supply relationships with stable quality</li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The cluster model also facilitates the establishment of <strong>cluster-level processing facilities</strong> (washing stations for washed coffee, drying infrastructure for natural processing), ensuring that farmers have access to quality processing infrastructure without requiring individual investment in expensive equipment.
        </p>
      </section>

      {/* Section 4: Highland and Weina Dega Production */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <PiPlantFill className="w-8 h-8 text-green-700" />
          <h2 className="text-3xl font-bold text-gray-900">Highland & Weina Dega Coffee Production Zones</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Sidama region's coffee production spans multiple altitude zones, each contributing distinct characteristics to the region's coffee profile. Chief Director Mesfin Qare noted that harvesting is <em>"being carried out extensively in the highlands and Weina Dega areas,"</em> highlighting the region's diverse growing environments.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sidama Coffee Growing Zones</h3>
          <div className="space-y-4 text-gray-800">
            <div>
              <h4 className="font-semibold text-green-800 text-lg">Highland Zones (Dega) - 2,000-2,200 masl</h4>
              <p className="mt-1"><strong>Characteristics:</strong> Cooler temperatures, slower cherry maturation, higher acidity, more complex flavor development</p>
              <p className="mt-1"><strong>Flavor Profile:</strong> Bright floral notes (jasmine, bergamot), citrus acidity (lemon, lime), tea-like body, complex and refined</p>
              <p className="mt-1"><strong>Processing:</strong> Predominantly washed processing to highlight clean, bright characteristics</p>
              <p className="mt-1"><strong>Productivity:</strong> Slightly lower yields but premium quality potential</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 text-lg">Mid-Altitude Zones (Weina Dega) - 1,700-2,000 masl</h4>
              <p className="mt-1"><strong>Characteristics:</strong> Moderate temperatures, optimal growing conditions, balanced maturation, high productivity</p>
              <p className="mt-1"><strong>Flavor Profile:</strong> Stone fruit notes (peach, apricot), berry sweetness, balanced acidity, fuller body than highland lots</p>
              <p className="mt-1"><strong>Processing:</strong> Both washed and natural processing produce excellent results</p>
              <p className="mt-1"><strong>Productivity:</strong> Highest yields per hectare, optimal conditions for 10+ quintal productivity</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 text-lg">Lower Mid-Altitude Zones - 1,500-1,700 masl</h4>
              <p className="mt-1"><strong>Characteristics:</strong> Warmer temperatures, faster maturation, higher volume production</p>
              <p className="mt-1"><strong>Flavor Profile:</strong> Chocolate, caramel, nutty notes, lower acidity, fuller body, more traditional Ethiopian profile</p>
              <p className="mt-1"><strong>Processing:</strong> Natural processing common; washed lots for balanced specialty grades</p>
              <p className="mt-1"><strong>Productivity:</strong> Good yields with proper agricultural management</p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The diversity of Sidama's growing zones means that buyers can source different flavor profiles from the same region, all carrying the recognized "Sidamo" origin designation. International roasters often blend highland and Weina Dega lots to create balanced, complex profiles, or feature single-altitude lots to showcase terroir-specific characteristics.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Harvest Timing by Altitude Zone</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Lower Mid-Altitude (1,500-1,700m):</strong> October-December (early harvest)</li>
            <li><strong>Weina Dega (1,700-2,000m):</strong> November-January (main harvest)</li>
            <li><strong>Highland (2,000-2,200m):</strong> December-February (late harvest)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-700">This staggered harvest timing allows processing facilities to manage volumes efficiently and ensures continuous coffee availability throughout the harvest season.</p>
        </div>
      </section>

      {/* Section 5: Agricultural Modernization */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineCog className="w-8 h-8 text-purple-700" />
          <h2 className="text-3xl font-bold text-gray-900">Agricultural Modernization: Pruning, Replacement & Organic Inputs</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Sidama region's productivity improvements result directly from systematic agricultural modernization initiatives led by the Sidama Regional Coffee, Fruit, and Spices Authority in collaboration with woreda (district) agricultural offices and farmer cooperatives.
        </p>

        <div className="space-y-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Coffee Tree Pruning & Rejuvenation Programs</h3>
            <p className="text-gray-800 mb-3">
              <strong>Challenge:</strong> Many Sidama coffee farms have aging tree stock (30-50+ years old) with declining productivity and vulnerability to pests and diseases.
            </p>
            <p className="text-gray-800 mb-3">
              <strong>Solution:</strong> Systematic pruning programs to rejuvenate aging trees through stumping (cutting back to 30-40cm from ground) or selective branch renewal.
            </p>
            <div className="space-y-2 text-gray-800">
              <p className="font-semibold">Pruning Benefits:</p>
              <ul className="ml-6 space-y-1">
                <li>Stimulates new growth with increased vigor and productivity</li>
                <li>Reduces tree height for easier harvesting and management</li>
                <li>Improves light penetration and air circulation</li>
                <li>Reduces pest and disease pressure from old, weakened branches</li>
                <li>Typically restores productivity to 70-90% of original levels within 2-3 years</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Variety Replacement & Improvement Programs</h3>
            <p className="text-gray-800 mb-3">
              <strong>Strategy:</strong> Introducing improved coffee varieties with higher yield potential, disease resistance, and quality characteristics.
            </p>
            <div className="space-y-2 text-gray-800">
              <p className="font-semibold">Variety Improvement Approaches:</p>
              <ul className="ml-6 space-y-1">
                <li><strong>Heirloom Selection:</strong> Identifying high-performing local varieties for propagation</li>
                <li><strong>Research Station Varieties:</strong> Distributing improved varieties from Awada and Melko coffee research centers</li>
                <li><strong>Progressive Replacement:</strong> Gradually replacing low-performing trees rather than wholesale farm renovation</li>
                <li><strong>Nursery Development:</strong> Establishing community nurseries for seedling production and distribution</li>
                <li><strong>Quality Maintenance:</strong> Ensuring new varieties maintain Sidama's characteristic flavor profile</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Fertilization & Soil Health Programs</h3>
            <p className="text-gray-800 mb-3">
              <strong>Focus:</strong> Using organic compost and natural fertilizers to improve soil health, nutrient availability, and long-term sustainability.
            </p>
            <div className="space-y-2 text-gray-800">
              <p className="font-semibold">Organic Soil Management Practices:</p>
              <ul className="ml-6 space-y-1">
                <li><strong>Composting:</strong> Converting coffee pulp, husks, and farm waste into nutrient-rich compost</li>
                <li><strong>Mulching:</strong> Applying organic mulch to conserve moisture and suppress weeds</li>
                <li><strong>Cover Cropping:</strong> Planting nitrogen-fixing legumes between coffee rows</li>
                <li><strong>Animal Manure:</strong> Incorporating cattle, sheep, and chicken manure for nutrient replenishment</li>
                <li><strong>Microorganism Enhancement:</strong> Using indigenous microorganisms to improve soil biology</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700"><em>Note: Organic fertilization maintains Sidama's specialty coffee quality while avoiding chemical inputs that can affect flavor profiles.</em></p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The integrated approach to agricultural modernization-combining pruning, variety improvement, and organic soil management-addresses multiple productivity constraints simultaneously. This holistic strategy is key to Sidama region's achievement of 10+ quintals per hectare average productivity.
        </p>
      </section>

      {/* Section 6: New Export Licensing Opportunities */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineDocumentText className="w-8 h-8 text-indigo-700" />
          <h2 className="text-3xl font-bold text-gray-900">Direct Export Licensing for Sidama Farmers: 495 New Licenses Issued</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          One of the most significant recent developments for Sidama coffee farmers is the <strong>permission granted to farmers with two hectares of coffee fields or more to send their produce directly to the foreign market</strong>. According to the Sidama Regional Authority, <strong>495 farmers obtained new export licenses</strong> in the 2025-2026 production season, representing a transformative opportunity for larger smallholders to access international markets directly.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineScale className="w-6 h-6 text-indigo-700" />
            Direct Export License Requirements & Benefits
          </h3>
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold text-indigo-800">Eligibility Requirements:</p>
              <ul className="ml-6 space-y-1 mt-2">
                <li><strong>Minimum Land Size:</strong> 2 hectares (5 acres) or more of coffee cultivation</li>
                <li><strong>Production Volume:</strong> Sufficient volume for export-sized lots (typically 5+ tons annually)</li>
                <li><strong>Quality Standards:</strong> Ability to produce specialty-grade coffee (85+ cupping score for direct export)</li>
                <li><strong>Processing Capability:</strong> Access to proper drying and processing facilities</li>
                <li><strong>Documentation:</strong> Land ownership certificates and farming records</li>
                <li><strong>Training:</strong> Completion of export procedures and quality control training</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-indigo-800 mt-4">Benefits for Licensed Farmers:</p>
              <ul className="ml-6 space-y-1 mt-2">
                <li><strong>Higher Prices:</strong> Bypass intermediaries and ECX auction to receive specialty market premiums directly</li>
                <li><strong>Direct Buyer Relationships:</strong> Establish long-term partnerships with international roasters and importers</li>
                <li><strong>Traceability Premium:</strong> Farm-level traceability commands significant price premiums in specialty markets</li>
                <li><strong>Payment Timing:</strong> Faster payments compared to traditional ECX channels</li>
                <li><strong>Quality Feedback:</strong> Direct cupping feedback from buyers to improve production practices</li>
                <li><strong>Market Information:</strong> Better understanding of international quality standards and market demands</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The <strong>495 farmers who obtained export licenses</strong> represent approximately 3,400+ hectares of coffee production (at 2+ hectares per farmer minimum), or roughly 2.3% of Sidama's productive coffee area. While still a small percentage, this represents a significant pilot for decentralized export systems and farmer empowerment.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Export License Application Process</h3>
          <ol className="space-y-2 text-gray-800 list-decimal list-inside">
            <li><strong>Land Verification:</strong> Submit land ownership documents proving 2+ hectares of coffee cultivation</li>
            <li><strong>Farm Assessment:</strong> Regional authority inspects farm and assesses production capacity and quality potential</li>
            <li><strong>Training Completion:</strong> Attend mandatory training on export procedures, quality standards, and documentation requirements</li>
            <li><strong>Processing Verification:</strong> Demonstrate access to proper coffee processing and drying facilities</li>
            <li><strong>Quality Testing:</strong> Submit sample lots for cupping and quality assessment (minimum 85 points required)</li>
            <li><strong>License Issuance:</strong> Receive direct export license valid for specified period (typically annual renewal)</li>
            <li><strong>ECX Registration:</strong> Register with Ethiopia Commodity Exchange for export documentation and logistics support</li>
          </ol>
        </div>

        <p className="text-lg leading-relaxed">
          For international buyers, the emergence of <strong>farmer-direct export licenses</strong> creates exciting sourcing opportunities: highly traceable, single-farm lots with transparent pricing and direct farmer relationships. However, buyers should work through experienced Ethiopian coffee exporters like <strong>Ethio Coffee Export PLC</strong> who can facilitate relationships, handle export logistics, and ensure quality consistency.
        </p>
      </section>

      {/* Section 7: Production Season Progress */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineChartBar className="w-8 h-8 text-teal-700" />
          <h2 className="text-3xl font-bold text-gray-900">2025-2026 Production Season: Progress & Outlook</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          As of January 2026, Sidama region has collected <strong>80,000 tons of the 239,000 tons</strong> planned for the full production season, representing approximately 33% progress through the harvest period. This mid-season assessment provides insights into expected final production volumes and quality outcomes.
        </p>

        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Timeline & Expectations</h3>
          <div className="space-y-3 text-gray-800">
            <div>
              <p className="font-semibold text-teal-800">October-December 2025 (Early Harvest):</p>
              <p className="mt-1">Lower altitude zones producing primarily natural processed coffee; 80,000 tons collected through this period</p>
            </div>
            <div>
              <p className="font-semibold text-teal-800">January-February 2026 (Peak Harvest):</p>
              <p className="mt-1">Main production from Weina Dega and highland zones; both washed and natural processing; expected ~120,000 tons</p>
            </div>
            <div>
              <p className="font-semibold text-teal-800">March-April 2026 (Late Harvest):</p>
              <p className="mt-1">Highland late-season pickings; final washing station operations; expected ~39,000 tons completing seasonal target</p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Chief Director Mesfin Qare's report indicates that production is progressing on schedule to meet the <strong>239,000-ton seasonal target</strong>. With continued favorable weather conditions during the critical January-February peak harvest period and the extensive harvesting operations ongoing in highlands and Weina Dega zones, Sidama is well-positioned to achieve or potentially exceed its production goals.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Expectations for 2025-2026 Season</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Grade Distribution:</strong> Expecting high percentage of G1 and G2 specialty grades due to farmer training and quality focus</li>
            <li><strong>Processing Quality:</strong> 239 farmer clusters ensuring standardized processing practices and better quality control</li>
            <li><strong>Cupping Scores:</strong> Anticipated average scores of 85-88 points for specialty lots from organized clusters</li>
            <li><strong>Moisture Management:</strong> Improved drying infrastructure reducing moisture-related defects</li>
            <li><strong>Defect Reduction:</strong> Better cherry selection and sorting reducing primary and secondary defects</li>
            <li><strong>Traceability:</strong> Cluster organization and direct export licenses improving lot-level traceability</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          For international buyers planning 2026 Ethiopian coffee purchases, Sidama region's strong production season and quality improvements make it an attractive sourcing origin. Early contact with exporters and specification of desired processing methods, altitude zones, and grade requirements ensures access to the best lots as they become available.
        </p>
      </section>

      {/* Section 8: Sidama vs Other Ethiopian Origins */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineBeaker className="w-8 h-8 text-pink-700" />
          <h2 className="text-3xl font-bold text-gray-900">Sidama Coffee vs. Other Ethiopian Origins: Distinctive Characteristics</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          While all Ethiopian coffee origins share certain characteristics-complex flavor profiles, bright acidity, floral and fruity notes-Sidama has distinctive qualities that set it apart from neighboring regions like Yirgacheffe, Guji, and Harrar.
        </p>

        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sidama Coffee Profile Characteristics</h3>
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold text-pink-800">Washed Sidama Profile:</p>
              <ul className="ml-6 space-y-1 mt-1">
                <li><strong>Acidity:</strong> Bright, vibrant citric acidity (lemon, bergamot); less intense than Yirgacheffe but more structured than Guji</li>
                <li><strong>Flavor Notes:</strong> Floral (jasmine, lavender), stone fruit (peach, apricot), citrus (orange, lemon), honey sweetness</li>
                <li><strong>Body:</strong> Medium, tea-like to silky; elegant and refined</li>
                <li><strong>Aftertaste:</strong> Clean, lingering floral and citrus notes</li>
                <li><strong>Balance:</strong> Harmonious balance between acidity, sweetness, and body</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-pink-800 mt-3">Natural Sidama Profile:</p>
              <ul className="ml-6 space-y-1 mt-1">
                <li><strong>Acidity:</strong> Moderate, berry-like acidity; balanced with sweetness</li>
                <li><strong>Flavor Notes:</strong> Blueberry, strawberry, tropical fruit (mango, pineapple), chocolate, wine-like complexity</li>
                <li><strong>Body:</strong> Fuller, syrupy; more substantial than washed Sidama</li>
                <li><strong>Aftertaste:</strong> Long, fruity, sometimes winey finish</li>
                <li><strong>Sweetness:</strong> Pronounced fruit sweetness; jammy characteristics in well-processed lots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm text-gray-800 bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border-r">Origin</th>
                <th className="p-3 text-left border-r">Primary Characteristics</th>
                <th className="p-3 text-left border-r">Typical Processing</th>
                <th className="p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-pink-50">
                <td className="p-3 font-semibold border-r">Sidama</td>
                <td className="p-3 border-r">Balanced, floral-citrus, stone fruit, elegant</td>
                <td className="p-3 border-r">Both washed & natural excel</td>
                <td className="p-3">Versatile: espresso & filter</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold border-r">Yirgacheffe</td>
                <td className="p-3 border-r">Ultra-bright, intense floral, citrus, tea-like</td>
                <td className="p-3 border-r">Predominantly washed</td>
                <td className="p-3">Pour-over, delicate roasts</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold border-r">Guji</td>
                <td className="p-3 border-r">Berry-forward, jammy, fuller body, complex</td>
                <td className="p-3 border-r">Natural processing dominant</td>
                <td className="p-3">Natural lovers, fruit-forward blends</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold border-r">Harrar</td>
                <td className="p-3 border-r">Wild, blueberry, wine-like, rustic, bold</td>
                <td className="p-3 border-r">Natural processing only</td>
                <td className="p-3">Unique profile seekers, natural specialists</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mt-4">
          Sidama's <strong>versatility</strong>-excelling in both washed and natural processing-makes it particularly attractive for roasters seeking a balanced, accessible Ethiopian profile that performs well across brewing methods and roast levels. The region's high productivity and organized farmer clusters also ensure more consistent supply compared to some neighboring origins.
        </p>
      </section>

      {/* Section 9: Sustainability and Future Outlook */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineLightBulb className="w-8 h-8 text-green-700" />
          <h2 className="text-3xl font-bold text-gray-900">Sustainability, Climate Resilience & Future Development</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          Sidama region's focus on <strong>organic soil management, tree renewal, and farmer organization</strong> positions it well for long-term sustainability and climate resilience. However, like all coffee-producing regions, Sidama faces challenges that require continued investment and adaptation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability Strengths</h3>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Shade-Grown Systems:</strong> Traditional agroforestry with indigenous shade trees maintaining biodiversity</li>
              <li><strong>Organic Practices:</strong> Minimal chemical input use; natural fertilization programs</li>
              <li><strong>Smallholder Model:</strong> Family farming preserving traditional cultivation methods and environmental stewardship</li>
              <li><strong>Water Conservation:</strong> Efficient processing practices and water recycling at washing stations</li>
              <li><strong>Soil Conservation:</strong> Mulching, composting, and cover cropping preventing erosion</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Climate & Sustainability Challenges</h3>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Rainfall Variability:</strong> Increasing unpredictability affecting flowering and cherry development</li>
              <li><strong>Temperature Rise:</strong> Higher temperatures reducing suitable altitude range for quality coffee</li>
              <li><strong>Pest & Disease Pressure:</strong> Coffee leaf rust and berry borer threats increasing with climate change</li>
              <li><strong>Land Pressure:</strong> Population growth and food security needs competing with coffee land use</li>
              <li><strong>Youth Migration:</strong> Young farmers leaving agriculture for urban opportunities</li>
            </ul>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          The Sidama Regional Coffee, Fruit, and Spices Authority's initiatives-farmer cluster organization, variety improvement programs, direct export licensing-address many of these challenges by <strong>improving economic returns, building resilience through knowledge sharing, and attracting younger farmers through better market access and income opportunities</strong>.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HiOutlineTrophy className="w-6 h-6 text-blue-700" />
            Future Development Priorities for Sidama Coffee
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Expanding Farmer Clusters:</strong> Growing from 239 to comprehensive regional coverage reaching all smallholders</li>
            <li><strong>Processing Infrastructure:</strong> Investing in more washing stations and drying facilities to serve organized clusters</li>
            <li><strong>Climate Adaptation:</strong> Introducing drought-tolerant varieties and water-efficient processing methods</li>
            <li><strong>Youth Engagement:</strong> Training programs and improved income opportunities to retain young farmers</li>
            <li><strong>Market Linkages:</strong> Strengthening connections between farmer clusters and international specialty buyers</li>
            <li><strong>Quality Recognition:</strong> Promoting Sidama in specialty coffee competitions and certification programs</li>
            <li><strong>Direct Export Expansion:</strong> Increasing number of farmers eligible for direct export licensing</li>
          </ul>
        </div>
      </section>

      {/* Section 10: Sourcing Sidama Coffee */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <HiOutlineGlobeAlt className="w-8 h-8 text-indigo-700" />
          <h2 className="text-3xl font-bold text-gray-900">Sourcing Sidama Coffee: Buyer's Guide for International Roasters</h2>
        </div>
        
        <p className="text-lg leading-relaxed">
          For international coffee buyers, roasters, and importers, Sidama region offers exceptional sourcing opportunities combining <strong>recognized origin designation, consistent quality, high productivity, and improving traceability</strong>. Understanding how to source effectively from Sidama ensures access to the region's best coffees.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sourcing Considerations for Sidama Coffee</h3>
          <div className="space-y-3 text-gray-800">
            <div>
              <p className="font-semibold text-indigo-800">Processing Method Selection:</p>
              <p className="mt-1">Specify whether you want washed (clean, bright, floral-citrus) or natural (fruity, complex, fuller body) processing. Sidama excels at both.</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-800">Altitude Zone Preference:</p>
              <p className="mt-1">Highland lots (2,000-2,200m) offer brighter acidity and complexity; Weina Dega (1,700-2,000m) provides balance and fuller body.</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-800">Grade Requirements:</p>
              <p className="mt-1">G1 (0-3 defects) for premium specialty; G2 (4-12 defects) for high-quality specialty; both offer excellent cup quality from Sidama.</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-800">Traceability Level:</p>
              <p className="mt-1">Options range from regional Sidamo designation → cluster-specific lots → washing station/cooperative → single-farm (from licensed exporters).</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-800">Timing:</p>
              <p className="mt-1">Order early-harvest lots (Nov-Dec) by January; main crop (Jan-Feb) by March; late-season lots available through April-May.</p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Working with established Ethiopian coffee exporters like <strong>Ethio Coffee Export PLC</strong> provides critical advantages: direct relationships with Sidama farmer clusters and washing stations, pre-shipment quality verification, complete documentation and traceability, competitive pricing, and professional export logistics ensuring coffee arrives in excellent condition.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect When Sourcing Sidama Coffee</h3>
          <div className="space-y-2 text-gray-800">
            <p><strong>Documentation:</strong> ECX certificate with Sidamo origin designation, grade, processing method, crop year; cupping scores for specialty lots</p>
            <p><strong>Physical Specs:</strong> Screen size 14-18 typical for specialty grades; moisture 11-12%; density appropriate for altitude zone</p>
            <p><strong>Cupping Profile:</strong> Expect scores of 85-89 points for G1/G2 specialty lots; characteristic Sidama flavor profile per processing method</p>
            <p><strong>Availability:</strong> November through June for new-crop coffee; limited availability July-October (interim/past-crop)</p>
            <p><strong>Pricing:</strong> Premium over baseline Ethiopian coffee due to origin recognition; cluster/farm-traceable lots command additional premiums</p>
            <p><strong>Lot Sizes:</strong> Standard export containers 250-320 bags (15-19 tons); cluster lots may be smaller (50-150 bags)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-y-6 mt-12">
        <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Source Premium Sidama Coffee Through Ethio Coffee Export</h2>
          <p className="text-lg mb-6 text-green-50">
            Ethio Coffee Export PLC maintains direct relationships with Sidama farmer clusters, washing stations, and cooperatives producing exceptional coffee at 10+ quintals per hectare productivity. We offer G1 and G2 specialty Sidama coffee with full traceability, quality verification, and professional export service. Access washed and natural processed lots from highland and Weina Dega zones.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact-us" 
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request Sidama Coffee Samples
            </Link>
            <Link 
              href="/offerings" 
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors border-2 border-white"
            >
              View Current Offerings
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Sidama Coffee Production and Export</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">What makes Sidama coffee unique among Ethiopian origins?</h4>
              <p className="text-sm text-gray-600">Sidama coffee is known for its balanced acidity, medium body, and flavor notes of citrus, stone fruit, and floral undertones. The region's altitude (1,500 to 2,200 meters), volcanic soil, and traditional shade-growing practices contribute to its distinctive cup profile.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">How much coffee does the Sidama region produce annually?</h4>
              <p className="text-sm text-gray-600">Sidama produces over 100,000 metric tons of coffee annually, accounting for roughly 25 to 30% of Ethiopia's total coffee output. Recent productivity initiatives have pushed yields above 10 quintals per hectare on improved farms.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">What is the difference between Sidama washed and natural coffee?</h4>
              <p className="text-sm text-gray-600">Washed Sidama coffees tend to be cleaner with bright citrus acidity and tea-like body. Natural (dry-processed) Sidama coffees are fruitier, heavier-bodied, and often display berry and wine-like flavors. Both styles are popular in specialty markets.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">How can importers source high-quality Sidama coffee?</h4>
              <p className="text-sm text-gray-600">Work directly with Ethiopian exporters who have washing stations or sourcing relationships in Sidama. Request cupping samples of specific lots, verify SCA scores of 84+, and confirm traceability documentation for the specific kebele or washing station.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">What SCA cupping scores do Sidama specialty coffees achieve?</h4>
              <p className="text-sm text-gray-600">Top Sidama lots regularly score 85 to 90+ on the SCA scale. Competition-winning lots from sub-regions like Dale, Bensa, and Chire have scored above 88, placing Sidama among Ethiopia's highest-scoring origins.</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HiOutlineLightBulb className="w-7 h-7 text-gray-700" />
            Related Ethiopian Coffee Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/insights/guide-ethiopian-coffee-origins" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → A Practical Guide to Ethiopian Green Coffee Origins
            </Link>
            <Link href="/insights/ethiopian-dry-coffee-production-quality-control" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → Ethiopian Dry Coffee Production: Quality Control & Processing Guide
            </Link>
            <Link href="/insights/yirgacheffe-vs-sidamo-vs-guji-comparison" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → Yirgacheffe vs Sidamo vs Guji: Which Ethiopian Coffee Is Right for You?
            </Link>
            <Link href="/insights/washed-vs-natural-ethiopian-coffee-processing" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → Washed vs Natural Processed Ethiopian Coffee: What Roasters Need to Know
            </Link>
            <Link href="/insights/green-coffee-quality-control-defects-grading" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → Green Coffee Quality Control: Defects, Grading Systems & Inspection Guide
            </Link>
            <Link href="/insights/ecx-and-ethiopian-coffee-export" className="text-green-700 hover:text-green-900 font-medium hover:underline">
              → The Ethiopia Commodity Exchange (ECX) and Ethiopian Coffee Export
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Source High-Productivity Sidama Coffee?</h2>
        <p className="text-lg mb-6 text-amber-50">
          Get direct access to Sidama region's exceptional coffee from organized farmer clusters achieving 10+ quintals per hectare. G1/G2 specialty grades, washed and natural processing, full traceability from highland and Weina Dega zones.
        </p>
        <Link 
          href="/contact-us" 
          className="inline-block bg-white text-orange-800 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
        >
          Contact Ethio Coffee Export Today
        </Link>
      </section>
    </article>
    </>
  )
}
