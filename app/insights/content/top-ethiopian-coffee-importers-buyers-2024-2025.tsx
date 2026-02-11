import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineGlobeAlt,
  HiOutlineTrophy,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
  HiOutlineArrowTrendingUp
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function TopEthiopianCoffeeImporters2024_2025({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Complete market intelligence on the world's top Ethiopian coffee importers and buyers in 2024/2025: ranking by import value and volume, geographic distribution, market trends, and strategic insights for Ethiopian coffee exporters seeking reliable international buyers.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Analysis of Ethiopian coffee import data reveals the major players shaping global Ethiopian coffee trade in 2024/2025.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Top Ethiopian coffee importers and buyers 2024 2025 market analysis'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Market Intelligence / Ethiopian Coffee Trade / Import Data Analysis</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Understanding who buys Ethiopian coffee-and how much they buy-is critical intelligence for anyone involved in the Ethiopian coffee export industry. Whether you're an Ethiopian coffee exporter looking for reliable buyers, an investor analyzing market dynamics, or a roaster seeking direct trade partners, knowing the major players in Ethiopian coffee imports provides strategic advantage.
      </p>

      <p className='my-4'>
        This comprehensive analysis examines Ethiopian coffee import data from the 2024/2025 marketing year, revealing the top importers by both value and volume. With over <strong>$2.1 billion in total Ethiopian coffee imports</strong> and more than <strong>380,000 metric tons</strong> traded globally, the market shows clear patterns of consolidation among major traders while also revealing opportunities for specialty-focused exporters.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='font-bold text-lg mb-3 text-green-900 flex items-center gap-2'>
          <HiOutlineTrophy className='text-2xl' />
          Key Market Insights 2024/2025
        </p>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>Top 10 importers</span> control over 32% of total Ethiopian coffee import value</li>
          <li>• <span className='font-bold'>VOLCAFE leads</span> with $127.48M in imports (23,995.68 metric tons)</li>
          <li>• <span className='font-bold'>Geographic concentration:</span> European and Middle Eastern buyers dominate top rankings</li>
          <li>• <span className='font-bold'>Specialty traders rising:</span> Companies like Falcon Coffees and Royal Coffee show strong premium positioning</li>
          <li>• <span className='font-bold'>Asian market growth:</span> Significant increase in Chinese and Korean buyers</li>
        </ul>
      </div>

      <p className='my-4'>
        This guide provides actionable intelligence for Ethiopian coffee exporters, breaking down importer profiles, regional trends, and market opportunities based on actual 2024/2025 import data.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineChartBar className='text-amber-600' />
          In This Analysis
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#top-10-importers" className='text-blue-600 hover:underline'>1. Top 10 Ethiopian Coffee Importers by Value</a></li>
          <li><a href="#top-10-volume" className='text-blue-600 hover:underline'>2. Top 10 Ethiopian Coffee Importers by Volume</a></li>
          <li><a href="#regional-analysis" className='text-blue-600 hover:underline'>3. Geographic Distribution and Regional Trends</a></li>
          <li><a href="#specialty-importers" className='text-blue-600 hover:underline'>4. Specialty Coffee Importers (Premium Segment)</a></li>
          <li><a href="#middle-east" className='text-blue-600 hover:underline'>5. Middle East Market: Fastest Growing Region</a></li>
          <li><a href="#asian-buyers" className='text-blue-600 hover:underline'>6. Asian Market: China, Japan, South Korea Buyers</a></li>
          <li><a href="#european-traders" className='text-blue-600 hover:underline'>7. European Traditional Traders</a></li>
          <li><a href="#emerging-importers" className='text-blue-600 hover:underline'>8. Emerging Importers to Watch (50-100 Rank)</a></li>
          <li><a href="#how-to-approach" className='text-blue-600 hover:underline'>9. How Ethiopian Exporters Can Approach These Buyers</a></li>
          <li><a href="#market-trends" className='text-blue-600 hover:underline'>10. Market Trends and Predictions for 2025/2026</a></li>
        </ol>
      </div>

      {/* SECTION 1: TOP 10 BY VALUE */}
      <section id="top-10-importers" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineCurrencyDollar className='text-accent' />
          Top 10 Ethiopian Coffee Importers by Value (2024/2025)
        </h2>
        
        <p className='my-4'>
          These importers represent the largest Ethiopian coffee buyers by dollar value, controlling over <strong>$732 million</strong> in combined annual imports-approximately 35% of Ethiopia's total coffee export value.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse bg-white shadow-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='border border-gray-300 px-4 py-3 text-left'>Rank</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Company Name</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Import Value</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Volume (MT)</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Avg Price/kg</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>1</td>
                <td className='border border-gray-300 px-4 py-2'>VOLCAFE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$127.48M</td>
                <td className='border border-gray-300 px-4 py-2'>23,995.68</td>
                <td className='border border-gray-300 px-4 py-2'>$5.31</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>2</td>
                <td className='border border-gray-300 px-4 py-2'>LOUIS DREYFUS SUISSE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$93.20M</td>
                <td className='border border-gray-300 px-4 py-2'>16,999.48</td>
                <td className='border border-gray-300 px-4 py-2'>$5.48</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>3</td>
                <td className='border border-gray-300 px-4 py-2'>PIONEER STAR GENERAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$81.62M</td>
                <td className='border border-gray-300 px-4 py-2'>13,291.75</td>
                <td className='border border-gray-300 px-4 py-2'>$6.14</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>4</td>
                <td className='border border-gray-300 px-4 py-2'>EQUATORIAL TRADERS</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$77.88M</td>
                <td className='border border-gray-300 px-4 py-2'>15,534.96</td>
                <td className='border border-gray-300 px-4 py-2'>$5.01</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>5</td>
                <td className='border border-gray-300 px-4 py-2'>OLAM INTERNATIONAL</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$66.31M</td>
                <td className='border border-gray-300 px-4 py-2'>13,803.15</td>
                <td className='border border-gray-300 px-4 py-2'>$4.80</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>6</td>
                <td className='border border-gray-300 px-4 py-2'>ALMUSTANEER FOR INTERNATIONAL TRADE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$59.43M</td>
                <td className='border border-gray-300 px-4 py-2'>12,697.30</td>
                <td className='border border-gray-300 px-4 py-2'>$4.68</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>7</td>
                <td className='border border-gray-300 px-4 py-2'>WALTER MATTER S.A.</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$50.44M</td>
                <td className='border border-gray-300 px-4 py-2'>8,895.20</td>
                <td className='border border-gray-300 px-4 py-2'>$5.67</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>8</td>
                <td className='border border-gray-300 px-4 py-2'>FALCON COFFEES</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$49.82M</td>
                <td className='border border-gray-300 px-4 py-2'>7,148.20</td>
                <td className='border border-gray-300 px-4 py-2'>$6.97</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>9</td>
                <td className='border border-gray-300 px-4 py-2'>MARUBENI EUROPE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$49.75M</td>
                <td className='border border-gray-300 px-4 py-2'>9,321.00</td>
                <td className='border border-gray-300 px-4 py-2'>$5.34</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>10</td>
                <td className='border border-gray-300 px-4 py-2'>TRABOCCA B.V.</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>$43.60M</td>
                <td className='border border-gray-300 px-4 py-2'>6,310.16</td>
                <td className='border border-gray-300 px-4 py-2'>$6.91</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 text-blue-900'>Analysis: Top Value Importers</h4>
          <p className='mb-3 text-sm'>
            The top 10 importers by value reveal interesting patterns:
          </p>
          <ul className='space-y-2 text-sm'>
            <li>• <strong>VOLCAFE dominates</strong> with the largest import value, operating across multiple markets</li>
            <li>• <strong>Louis Dreyfus and OLAM</strong> represent traditional commodity traders with global reach</li>
            <li>• <strong>Falcon Coffees ($6.97/kg avg)</strong> and <strong>Trabocca ($6.91/kg)</strong> command premium pricing, indicating specialty focus</li>
            <li>• <strong>Middle Eastern buyer</strong> (Almustaneer, #6) shows the growing importance of Gulf markets</li>
            <li>• <strong>Average pricing ranges $4.68-$6.97/kg</strong>, reflecting mix of commercial and specialty grades</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: TOP 10 BY VOLUME */}
      <section id="top-10-volume" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineTruck className='text-accent' />
          Top 10 Ethiopian Coffee Importers by Volume (2024/2025)
        </h2>
        
        <p className='my-4'>
          Volume rankings reveal which companies have the logistical capacity and market reach to move the largest quantities of Ethiopian coffee. These buyers collectively imported over <strong>150,000 metric tons</strong>-approximately 40% of Ethiopia's total coffee exports.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse bg-white shadow-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='border border-gray-300 px-4 py-3 text-left'>Rank</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Company Name</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Volume (MT)</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Import Value</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Market Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>1</td>
                <td className='border border-gray-300 px-4 py-2'>VOLCAFE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>23,995.68</td>
                <td className='border border-gray-300 px-4 py-2'>$127.48M</td>
                <td className='border border-gray-300 px-4 py-2'>Global Leader</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>2</td>
                <td className='border border-gray-300 px-4 py-2'>LOUIS DREYFUS SUISSE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>16,999.48</td>
                <td className='border border-gray-300 px-4 py-2'>$93.20M</td>
                <td className='border border-gray-300 px-4 py-2'>Major Trader</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>3</td>
                <td className='border border-gray-300 px-4 py-2'>EQUATORIAL TRADERS (UK)</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>15,534.96</td>
                <td className='border border-gray-300 px-4 py-2'>$77.88M</td>
                <td className='border border-gray-300 px-4 py-2'>Volume Leader</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>4</td>
                <td className='border border-gray-300 px-4 py-2'>OLAM INTERNATIONAL (Singapore)</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>13,803.15</td>
                <td className='border border-gray-300 px-4 py-2'>$66.31M</td>
                <td className='border border-gray-300 px-4 py-2'>Global Trader</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>5</td>
                <td className='border border-gray-300 px-4 py-2'>PIONEER STAR GENERAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>13,291.75</td>
                <td className='border border-gray-300 px-4 py-2'>$81.62M</td>
                <td className='border border-gray-300 px-4 py-2'>Middle East Hub</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>6</td>
                <td className='border border-gray-300 px-4 py-2'>ALMUSTANEER FOR INTERNATIONAL TRADE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>12,697.30</td>
                <td className='border border-gray-300 px-4 py-2'>$59.43M</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>7</td>
                <td className='border border-gray-300 px-4 py-2'>MARUBENI EUROPE</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>9,321.00</td>
                <td className='border border-gray-300 px-4 py-2'>$49.75M</td>
                <td className='border border-gray-300 px-4 py-2'>Japanese Conglomerate</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>8</td>
                <td className='border border-gray-300 px-4 py-2'>WALTER MATTER S.A.</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>8,895.20</td>
                <td className='border border-gray-300 px-4 py-2'>$50.44M</td>
                <td className='border border-gray-300 px-4 py-2'>Swiss Trader</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>9</td>
                <td className='border border-gray-300 px-4 py-2'>SUCAFINA S.A.</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>8,123.82</td>
                <td className='border border-gray-300 px-4 py-2'>$38.54M</td>
                <td className='border border-gray-300 px-4 py-2'>Swiss Specialty</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2 font-bold'>10</td>
                <td className='border border-gray-300 px-4 py-2'>ECOM AGROINDUSTRIAL (Switzerland)</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold text-accent'>7,638.02</td>
                <td className='border border-gray-300 px-4 py-2'>$43.29M</td>
                <td className='border border-gray-300 px-4 py-2'>Global Network</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 text-amber-900'>Key Observation: Volume vs Value</h4>
          <p className='text-sm'>
            Comparing volume rankings to value rankings reveals strategic positioning. <strong>Equatorial Traders</strong> (#3 by volume, #4 by value) and <strong>Sucafina</strong> (#9 by volume, #13 by value) focus on commercial-grade volumes at lower average prices, while specialty-focused buyers like <strong>Falcon Coffees</strong> (#12 by volume, #8 by value) command premium pricing despite lower volumes.
          </p>
        </div>
      </section>

      {/* SECTION 3: REGIONAL ANALYSIS */}
      <section id="regional-analysis" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineGlobeAlt className='text-accent' />
          Geographic Distribution: Where Ethiopian Coffee Goes
        </h2>
        
        <p className='my-4'>
          Ethiopian coffee import data reveals clear geographic concentration patterns, with Europe, Middle East, and Asia representing the three major destination regions.
        </p>

        <div className='grid md:grid-cols-3 gap-6 my-8'>
          {/* Europe */}
          <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600'>
            <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
              <HiOutlineMapPin className='text-blue-600' />
              Europe
            </h4>
            <p className='text-3xl font-extrabold text-blue-600 mb-2'>~42%</p>
            <p className='text-sm text-gray-600 mb-4'>of total import value</p>
            <p className='text-sm mb-3'><strong>Key Markets:</strong> Switzerland, Germany, Netherlands, Italy, UK</p>
            <p className='text-sm mb-3'><strong>Major Buyers:</strong> VOLCAFE, Louis Dreyfus, Trabocca, Sucafina, Walter Matter</p>
            <p className='text-sm'><strong>Focus:</strong> Mix of commercial volume and specialty premium</p>
          </div>

          {/* Middle East */}
          <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600'>
            <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
              <HiOutlineMapPin className='text-green-600' />
              Middle East
            </h4>
            <p className='text-3xl font-extrabold text-green-600 mb-2'>~28%</p>
            <p className='text-sm text-gray-600 mb-4'>of total import value</p>
            <p className='text-sm mb-3'><strong>Key Markets:</strong> Saudi Arabia, UAE, Jordan, Egypt</p>
            <p className='text-sm mb-3'><strong>Major Buyers:</strong> Pioneer Star, Almustaneer, Alfanoos, Al-Khair Trading</p>
            <p className='text-sm'><strong>Focus:</strong> Traditional coffee culture, high-volume consumption</p>
          </div>

          {/* Asia */}
          <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600'>
            <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
              <HiOutlineMapPin className='text-red-600' />
              Asia
            </h4>
            <p className='text-3xl font-extrabold text-red-600 mb-2'>~18%</p>
            <p className='text-sm text-gray-600 mb-4'>of total import value</p>
            <p className='text-sm mb-3'><strong>Key Markets:</strong> China, Japan, South Korea, Singapore</p>
            <p className='text-sm mb-3'><strong>Major Buyers:</strong> JY Supply Chain, Marubeni, Xiamen C&D, Itochu</p>
            <p className='text-sm'><strong>Focus:</strong> Fastest growing region, specialty coffee boom</p>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg my-6'>
          <h4 className='font-bold text-lg mb-3'>Regional Trend Analysis</h4>
          <p className='text-sm mb-3'>
            <strong>Europe</strong> remains the dominant destination for Ethiopian coffee, driven by Switzerland's role as a global coffee trading hub (many major traders operate from Switzerland) and Germany's position as Europe's largest coffee consumer.
          </p>
          <p className='text-sm mb-3'>
            <strong>Middle East</strong> has emerged as the fastest-growing regional market, with Saudi Arabia leading. Ethiopian coffee's cultural significance in the Gulf region (Ethiopian diaspora communities + traditional coffee culture) drives sustained demand.
          </p>
          <p className='text-sm'>
            <strong>Asia</strong> represents the highest growth potential, with China's coffee consumption growing 15-20% annually and specialty coffee culture booming in South Korea and Japan.
          </p>
        </div>
      </section>

      {/* SECTION 4: SPECIALTY COFFEE IMPORTERS */}
      <section id="specialty-importers" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineTrophy className='text-accent' />
          Top Specialty Coffee Importers (Premium Segment)
        </h2>
        
        <p className='my-4'>
          While commodity traders dominate volume, specialty-focused importers command significantly higher prices per kilogram, indicating their focus on SCA 80+ rated lots, micro-lots, and traceable single-origin coffees.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse bg-white shadow-sm'>
            <thead>
              <tr className='bg-accent text-white'>
                <th className='border border-gray-300 px-4 py-3 text-left'>Rank</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Specialty Importer</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Value</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Avg Price/kg</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>8</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>FALCON COFFEES (UK)</td>
                <td className='border border-gray-300 px-4 py-2'>$49.82M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$6.97</td>
                <td className='border border-gray-300 px-4 py-2'>Direct Trade Specialty</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>10</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>TRABOCCA B.V. (Netherlands)</td>
                <td className='border border-gray-300 px-4 py-2'>$43.60M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$6.91</td>
                <td className='border border-gray-300 px-4 py-2'>Specialty Micro-lots</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>12</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>ROYAL COFFEE (USA)</td>
                <td className='border border-gray-300 px-4 py-2'>$41.13M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$7.04</td>
                <td className='border border-gray-300 px-4 py-2'>Premium US Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>18</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>NURTURE COFFEE (South Africa)</td>
                <td className='border border-gray-300 px-4 py-2'>$30.76M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$8.00</td>
                <td className='border border-gray-300 px-4 py-2'>Highest Premium Specialty</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>37</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>INTERAMERICAN COFFEE (USA)</td>
                <td className='border border-gray-300 px-4 py-2'>$14.20M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$6.78</td>
                <td className='border border-gray-300 px-4 py-2'>Specialty & Organic</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>41</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>ATLANTIC SPECIALITY COFFEE (UK)</td>
                <td className='border border-gray-300 px-4 py-2'>$13.35M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$7.66</td>
                <td className='border border-gray-300 px-4 py-2'>European Specialty</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>46</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>COVOYA SPECIALTY COFFEE</td>
                <td className='border border-gray-300 px-4 py-2'>$11.91M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$7.86</td>
                <td className='border border-gray-300 px-4 py-2'>High-End Micro-lots</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>55</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>CAFE IMPORTS (USA)</td>
                <td className='border border-gray-300 px-4 py-2'>$10.17M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$9.86</td>
                <td className='border border-gray-300 px-4 py-2'>Ultra-Premium US</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>60</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>NORDIC APPROACH (Denmark)</td>
                <td className='border border-gray-300 px-4 py-2'>$8.24M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$9.33</td>
                <td className='border border-gray-300 px-4 py-2'>Nordic Roasters</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>80</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>PEBBLE COFFEE</td>
                <td className='border border-gray-300 px-4 py-2'>$6.17M</td>
                <td className='border border-gray-300 px-4 py-2 font-bold text-accent'>$8.55</td>
                <td className='border border-gray-300 px-4 py-2'>Australian Specialty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
          <h4 className='font-bold text-lg mb-3 text-green-900'>Specialty Importer Insights for Ethiopian Exporters</h4>
          <p className='mb-3 text-sm'>
            If you're an Ethiopian coffee exporter with access to specialty-grade lots (SCA 82+), these buyers represent premium opportunities:
          </p>
          <ul className='space-y-2 text-sm'>
            <li>• <strong>Price premium: $6.78-$9.86/kg</strong> vs $4.68-5.67/kg for commercial traders</li>
            <li>• <strong>Cafe Imports and Nordic Approach</strong> pay the highest premiums ($9.86 and $9.33/kg) for exceptional micro-lots</li>
            <li>• <strong>Specialty buyers prioritize:</strong> traceability, cup score, processing innovation, farmer stories</li>
            <li>• <strong>Smaller volumes but higher margins:</strong> Most specialty importers work in 1-10 container quantities</li>
            <li>• <strong>Direct relationships valued:</strong> Specialty segment rewards long-term partnerships</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: MIDDLE EAST MARKET */}
      <section id="middle-east" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineArrowTrendingUp className='text-accent' />
          Middle East Market: Fastest Growing Region for Ethiopian Coffee
        </h2>
        
        <p className='my-4'>
          The Middle East has emerged as Ethiopian coffee's fastest-growing export market, driven by cultural connections, large Ethiopian diaspora communities, and traditional coffee consumption habits. <strong>Saudi Arabia and UAE</strong> alone represent over <strong>$350 million in annual Ethiopian coffee imports</strong>.
        </p>

        <h3 className='text-xl font-bold mt-8 mb-4'>Top Middle Eastern Ethiopian Coffee Importers</h3>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse bg-white shadow-sm'>
            <thead>
              <tr className='bg-green-700 text-white'>
                <th className='border border-gray-300 px-4 py-3 text-left'>Rank</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Company</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Country</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Value</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Volume (MT)</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>3</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>PIONEER STAR GENERAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>UAE</td>
                <td className='border border-gray-300 px-4 py-2'>$81.62M</td>
                <td className='border border-gray-300 px-4 py-2'>13,291.75</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>6</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>ALMUSTANEER FOR INTERNATIONAL TRADE</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Arabia</td>
                <td className='border border-gray-300 px-4 py-2'>$59.43M</td>
                <td className='border border-gray-300 px-4 py-2'>12,697.30</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>16</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>ALFANOOS INTERNATIONAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>UAE</td>
                <td className='border border-gray-300 px-4 py-2'>$33.63M</td>
                <td className='border border-gray-300 px-4 py-2'>6,839.80</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>19</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>AL-KHAIR TRADING OFFICE</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Arabia</td>
                <td className='border border-gray-300 px-4 py-2'>$27.53M</td>
                <td className='border border-gray-300 px-4 py-2'>5,418.00</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>21</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>RAJAB HANIEH AND SONS</td>
                <td className='border border-gray-300 px-4 py-2'>Jordan</td>
                <td className='border border-gray-300 px-4 py-2'>$25.13M</td>
                <td className='border border-gray-300 px-4 py-2'>5,845.34</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>29</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>EASY BUY GENERAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>UAE</td>
                <td className='border border-gray-300 px-4 py-2'>$18.51M</td>
                <td className='border border-gray-300 px-4 py-2'>2,686.80</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>35</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>TEIS SUPER GENERAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>UAE</td>
                <td className='border border-gray-300 px-4 py-2'>$15.82M</td>
                <td className='border border-gray-300 px-4 py-2'>4,358.23</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>39</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>AL JAMEEL INTERNATIONAL TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Arabia</td>
                <td className='border border-gray-300 px-4 py-2'>$13.85M</td>
                <td className='border border-gray-300 px-4 py-2'>3,534.10</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>43</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>SALEM ABDULLAH BIN MAHFOOZ EST</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Arabia</td>
                <td className='border border-gray-300 px-4 py-2'>$12.29M</td>
                <td className='border border-gray-300 px-4 py-2'>2,981.50</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>51</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>DAR ALSHAI ALARABIA TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>Saudi Arabia</td>
                <td className='border border-gray-300 px-4 py-2'>$11.10M</td>
                <td className='border border-gray-300 px-4 py-2'>2,638.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 text-amber-900'>Why Middle East Markets Matter for Ethiopian Exporters</h4>
          <ul className='space-y-2 text-sm'>
            <li>• <strong>Close proximity:</strong> 5-7 day shipping from Djibouti to Jeddah or Dubai ports</li>
            <li>• <strong>Cultural preference:</strong> Ethiopian coffee historically preferred in Gulf markets</li>
            <li>• <strong>Growing consumption:</strong> Per capita coffee consumption increasing 8-12% annually</li>
            <li>• <strong>Payment reliability:</strong> Strong hard currency markets with reliable payment terms</li>
            <li>• <strong>Re-export hubs:</strong> UAE serves as distribution point to other GCC and African markets</li>
            <li>• <strong>Lower certification barriers:</strong> Simpler import procedures vs EU or US markets</li>
          </ul>
        </div>
      </section>

      {/* SECTION 6: ASIAN MARKET */}
      <section id="asian-buyers" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineGlobeAlt className='text-accent' />
          Asian Market: China, Japan, South Korea Ethiopian Coffee Buyers
        </h2>
        
        <p className='my-4'>
          Asia represents Ethiopian coffee's highest growth potential, with China, Japan, and South Korea driving specialty coffee culture boom. While currently ~18% of total Ethiopian exports, Asian markets are projected to reach 25-30% by 2027-2028.
        </p>

        <h3 className='text-xl font-bold mt-8 mb-4'>Leading Asian Ethiopian Coffee Importers</h3>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse bg-white shadow-sm'>
            <thead>
              <tr className='bg-red-700 text-white'>
                <th className='border border-gray-300 px-4 py-3 text-left'>Rank</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Company</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Country</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Value</th>
                <th className='border border-gray-300 px-4 py-3 text-left'>Market Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>9</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>MARUBENI EUROPE</td>
                <td className='border border-gray-300 px-4 py-2'>Japan (via Europe)</td>
                <td className='border border-gray-300 px-4 py-2'>$49.75M</td>
                <td className='border border-gray-300 px-4 py-2'>Japanese Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>32</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>JY SUPPLY CHAIN MANAGEMENT (Singapore)</td>
                <td className='border border-gray-300 px-4 py-2'>China/Singapore</td>
                <td className='border border-gray-300 px-4 py-2'>$17.23M</td>
                <td className='border border-gray-300 px-4 py-2'>Asian Distribution</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>33</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>RICH RESOURCE INTERNATIONAL</td>
                <td className='border border-gray-300 px-4 py-2'>China</td>
                <td className='border border-gray-300 px-4 py-2'>$17.07M</td>
                <td className='border border-gray-300 px-4 py-2'>Chinese Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>42</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>ITOCHU TOKEH</td>
                <td className='border border-gray-300 px-4 py-2'>Japan</td>
                <td className='border border-gray-300 px-4 py-2'>$12.50M</td>
                <td className='border border-gray-300 px-4 py-2'>Japanese Conglomerate</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>44</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>TRANSSION TRADING</td>
                <td className='border border-gray-300 px-4 py-2'>China/Dubai</td>
                <td className='border border-gray-300 px-4 py-2'>$12.27M</td>
                <td className='border border-gray-300 px-4 py-2'>Chinese/African Distribution</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>47</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>XIAMEN C&D LIGHT INDUSTRY</td>
                <td className='border border-gray-300 px-4 py-2'>China</td>
                <td className='border border-gray-300 px-4 py-2'>$11.75M</td>
                <td className='border border-gray-300 px-4 py-2'>Chinese Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>52</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>CHINALIGHT GENERAL MERCHANDISE</td>
                <td className='border border-gray-300 px-4 py-2'>China</td>
                <td className='border border-gray-300 px-4 py-2'>$10.91M</td>
                <td className='border border-gray-300 px-4 py-2'>Import/Export</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>74</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>MITSUI AND CO</td>
                <td className='border border-gray-300 px-4 py-2'>Japan</td>
                <td className='border border-gray-300 px-4 py-2'>$6.93M</td>
                <td className='border border-gray-300 px-4 py-2'>Trading House</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>77</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>SOJITZ FOODS</td>
                <td className='border border-gray-300 px-4 py-2'>Japan</td>
                <td className='border border-gray-300 px-4 py-2'>$6.45M</td>
                <td className='border border-gray-300 px-4 py-2'>Japanese Market</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>83</td>
                <td className='border border-gray-300 px-4 py-2 font-semibold'>HANGZHOU HAIBO IMPORT EXPORT</td>
                <td className='border border-gray-300 px-4 py-2'>China</td>
                <td className='border border-gray-300 px-4 py-2'>$5.79M</td>
                <td className='border border-gray-300 px-4 py-2'>Chinese Market</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 text-blue-900'>Asian Market Opportunities for Ethiopian Coffee Exporters</h4>
          <p className='mb-3 text-sm'>
            <strong>China:</strong> World's fastest-growing coffee market (15-20% annual growth). Third-wave specialty coffee culture booming in Shanghai, Beijing, Shenzhen. Premium Ethiopian lots finding eager buyers among Chinese roasters and cafe chains.
          </p>
          <p className='mb-3 text-sm'>
            <strong>Japan:</strong> Established specialty coffee culture with strong preference for African origins. Japanese buyers (Marubeni, Itochu, Mitsui, Sojitz) operate through trading houses with long-term relationships. High standards but reliable payment and repeat orders.
          </p>
          <p className='text-sm'>
            <strong>South Korea:</strong> Explosive specialty coffee growth. Korean cafe culture among world's most sophisticated. Strong demand for Ethiopian washed coffees (Yirgacheffe especially popular). Multiple Korean buyers now sourcing directly from Ethiopia.
          </p>
        </div>
      </section>

      {/* SECTION 7: EUROPEAN TRADITIONAL TRADERS */}
      <section id="european-traders" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineBuildingOffice className='text-accent' />
          European Traditional Coffee Traders
        </h2>
        
        <p className='my-4'>
          Europe's coffee trading houses-many based in Switzerland and Germany-have dominated Ethiopian coffee trade for decades. These established players offer Ethiopian exporters high-volume, consistent orders with professional logistics and reliable payment.
        </p>

        <h3 className='text-xl font-bold mt-8 mb-4'>Major European Traditional Traders (By Country)</h3>

        <div className='grid md:grid-cols-2 gap-6 my-8'>
          {/* Switzerland */}
          <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600'>
            <h4 className='font-bold text-xl mb-3'>🇨🇭 Switzerland</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>VOLCAFE</strong> - $127.48M (Global leader)</li>
              <li>• <strong>LOUIS DREYFUS SUISSE</strong> - $93.20M</li>
              <li>• <strong>WALTER MATTER S.A.</strong> - $50.44M</li>
              <li>• <strong>SUCAFINA S.A.</strong> - $38.54M</li>
              <li>• <strong>TOUTON S.A.</strong> - $23.83M</li>
            </ul>
            <p className='mt-4 text-sm italic'>Switzerland remains global coffee trading hub despite not consuming much coffee domestically</p>
          </div>

          {/* Germany */}
          <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-black'>
            <h4 className='font-bold text-xl mb-3'>🇩🇪 Germany</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>BERNHARD ROTHFOS</strong> - $37.42M</li>
              <li>• <strong>BERNHARD BENECKE</strong> - $23.41M</li>
              <li>• <strong>ALOIS DALLMAYR KAFFEE</strong> - $32.60M</li>
              <li>• <strong>HAMBURG COFFEE (HACOFCO)</strong> - $12.06M</li>
              <li>• <strong>KAFFEE-IMPORT COMPAGNIE</strong> - $9.32M</li>
            </ul>
            <p className='mt-4 text-sm italic'>Germany is Europe's largest coffee consumer and major re-export hub</p>
          </div>

          {/* Netherlands */}
          <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600'>
            <h4 className='font-bold text-xl mb-3'>🇳🇱 Netherlands</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>TRABOCCA B.V.</strong> - $43.60M (Specialty focus)</li>
              <li>• <strong>DAARNHOUWER B.V.</strong> - $26.33M</li>
              <li>• <strong>GROUP SOPEX N.V.</strong> - $19.16M</li>
              <li>• <strong>COFI-COM TRADING</strong> - $5.70M</li>
            </ul>
            <p className='mt-4 text-sm italic'>Rotterdam port serves as major European coffee entry point</p>
          </div>

          {/* Italy */}
          <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600'>
            <h4 className='font-bold text-xl mb-3'>🇮🇹 Italy</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>EFICO S.A.</strong> - $24.63M</li>
              <li>• <strong>illycaffè</strong> - $9.66M (Premium brand)</li>
              <li>• <strong>NKG BERO ITALIA</strong> - $9.95M</li>
              <li>• <strong>AZIENDE RIUNITE CAFFE</strong> - $4.82M</li>
            </ul>
            <p className='mt-4 text-sm italic'>Italian buyers prefer washed Ethiopian coffees for espresso blends</p>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg my-6'>
          <h4 className='font-bold text-lg mb-3'>Why European Traders Matter</h4>
          <p className='text-sm mb-3'>
            European trading houses offer Ethiopian exporters several advantages:
          </p>
          <ul className='space-y-2 text-sm'>
            <li>• <strong>Consistent high-volume orders:</strong> Many European traders buy 100+ containers annually</li>
            <li>• <strong>Professional operations:</strong> Established QC standards, documentation processes, payment terms</li>
            <li>• <strong>Market access:</strong> These traders supply roasters across Europe, North America, and globally</li>
            <li>• <strong>Mix of commercial and specialty:</strong> Most European traders handle both volume grades and specialty lots</li>
            <li>• <strong>Long-term relationships:</strong> European houses value consistency and reliability over lowest price</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8: EMERGING IMPORTERS */}
      <section id="emerging-importers" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineUserGroup className='text-accent' />
          Emerging Ethiopian Coffee Importers to Watch (Rank 50-100)
        </h2>
        
        <p className='my-4'>
          While the top 50 importers dominate headlines, the 50-100 range reveals emerging players and regional specialists that offer Ethiopian exporters growth opportunities, especially for specialty lots and direct trade partnerships.
        </p>

        <div className='grid md:grid-cols-2 gap-6 my-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3'>Specialty-Focused Emerging Buyers</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>COFFEE REDEFINED</strong> (Rank 111) - $4.29M at $9.60/kg</li>
              <li>• <strong>FEST COFFEE</strong> (Rank 127) - $3.60M specialty micro-lots</li>
              <li>• <strong>ORIGIN COMMODITIES</strong> (Rank 130) - $3.48M direct trade</li>
              <li>• <strong>ATLAS COFFEE IMPORTERS</strong> (Rank 134) - $3.29M US specialty</li>
              <li>• <strong>PROJECT ORIGIN</strong> (Rank 197) - $1.82M ultra-premium</li>
            </ul>
            <p className='mt-4 text-sm italic'>These buyers pay $7-10/kg for exceptional Ethiopian lots</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3'>Regional Market Specialists</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>UPSTREAM COFFEE IMPORTS</strong> (Rank 159) - Australian market</li>
              <li>• <strong>KOOKABURRA</strong> (Rank 196) - Australian market</li>
              <li>• <strong>AROMA COFFEE ROASTERY</strong> (Rank 199) - Middle East specialty</li>
              <li>• <strong>COFFEENARA</strong> (Rank 155) - South Korean market</li>
              <li>• <strong>LINKING COFFEE</strong> (Rank 149) - Asian specialty</li>
            </ul>
            <p className='mt-4 text-sm italic'>Regional specialists offer market entry in growing coffee markets</p>
          </div>
        </div>

        <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
          <h4 className='font-bold text-lg mb-3 text-green-900'>Why Ethiopian Exporters Should Target Emerging Buyers</h4>
          <ul className='space-y-2 text-sm'>
            <li>• <strong>Less competition:</strong> Easier to establish relationships vs approaching VOLCAFE or Louis Dreyfus</li>
            <li>• <strong>Growth potential:</strong> Many emerging buyers scaling rapidly as specialty coffee markets expand</li>
            <li>• <strong>Premium pricing:</strong> Specialty-focused emerging buyers often pay higher than traditional traders</li>
            <li>• <strong>Direct relationships:</strong> Smaller buyers value direct connections and origin stories</li>
            <li>• <strong>Flexibility:</strong> Willing to work with smaller volumes, experimental processing, micro-lots</li>
          </ul>
        </div>
      </section>

      {/* SECTION 9: HOW TO APPROACH BUYERS */}
      <section id="how-to-approach" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineUserGroup className='text-accent' />
          How Ethiopian Coffee Exporters Can Approach These Buyers
        </h2>
        
        <p className='my-4'>
          Having identified the major Ethiopian coffee importers, the next question is: <strong>how do you actually approach them?</strong> Here's practical advice based on what these buyers look for:
        </p>

        <div className='space-y-6 my-8'>
          <div className='bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600'>
            <h4 className='font-bold text-lg mb-3'>1. Segment Your Approach by Buyer Type</h4>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>Large Commodity Traders (VOLCAFE, Louis Dreyfus, OLAM):</strong> Need 50+ container annual capacity, professional export infrastructure, consistent quality. Approach with volume capabilities, not individual lots.</li>
              <li>• <strong>Specialty Importers (Falcon, Trabocca, Royal Coffee):</strong> Want exceptional quality (SCA 84+), traceability, processing innovation. Approach with sample lots, cupping scores, origin stories.</li>
              <li>• <strong>Regional Specialists:</strong> Focus on specific market knowledge, reliable supply, competitive pricing for their region. Approach with understanding of their market.</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600'>
            <h4 className='font-bold text-lg mb-3'>2. What Buyers Want to See</h4>
            <p className='text-sm mb-3'>When approaching Ethiopian coffee importers, prepare:</p>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>Pre-shipment samples:</strong> 300-500g samples with cupping notes and specs</li>
              <li>• <strong>Detailed specifications:</strong> Grade, screen size, defect count, moisture content, water activity</li>
              <li>• <strong>Cupping scores:</strong> SCA protocol cupping reports for specialty grades</li>
              <li>• <strong>Origin documentation:</strong> Region, altitude, variety, processing method, washing station/farm details</li>
              <li>• <strong>Export capacity:</strong> Clear information on available volumes, container quantities, delivery timelines</li>
              <li>• <strong>Certifications:</strong> Organic, Fair Trade, Rainforest Alliance (if applicable)</li>
              <li>• <strong>Past export experience:</strong> Reference customers, export volumes, quality consistency track record</li>
            </ul>
          </div>

          <div className='bg-green-50 p-6 rounded-lg border-l-4 border-green-600'>
            <h4 className='font-bold text-lg mb-3'>3. Trade Show Strategy</h4>
            <p className='text-sm mb-3'>Many of these buyers attend major coffee trade shows. Ethiopian exporters should consider:</p>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>SCA Expo</strong> (Specialty Coffee Expo) - USA, April annually - Where Falcon, Royal Coffee, Cafe Imports, specialty buyers attend</li>
              <li>• <strong>World of Coffee</strong> - Europe, June annually - Trabocca, Nordic Approach, European specialty buyers</li>
              <li>• <strong>SCAJ</strong> - Japan - Marubeni, Itochu, Japanese buyers</li>
              <li>• <strong>AFCA</strong> (African Fine Coffees Association) - Africa - Regional focus, emerging African buyers</li>
              <li>• <strong>Bring samples, business cards, one-page company profile, QR code to website with full offerings</strong></li>
            </ul>
          </div>

          <div className='bg-red-50 p-6 rounded-lg border-l-4 border-red-600'>
            <h4 className='font-bold text-lg mb-3'>4. Digital Outreach</h4>
            <p className='text-sm mb-3'>Most buyers now accept digital introductions. Best practices:</p>
            <ul className='space-y-2 text-sm'>
              <li>• <strong>Professional email:</strong> Brief introduction (2-3 paragraphs max), link to website, attach one-page PDF with sample offerings</li>
              <li>• <strong>LinkedIn outreach:</strong> Many buyers active on LinkedIn. Connect with buyers at target companies</li>
              <li>• <strong>Coffee trading platforms:</strong> Algrano, Beyco, Cropster Hub - Some specialty buyers source through digital platforms</li>
              <li>• <strong>Follow-up strategy:</strong> If no response in 2 weeks, follow up once. If still no response, move to next target</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 10: MARKET TRENDS */}
      <section id="market-trends" className='my-12'>
        <h2 className='text-3xl font-extrabold text-dark mb-6 flex items-center gap-3'>
          <HiOutlineChartBar className='text-accent' />
          Market Trends and Predictions for 2025/2026
        </h2>
        
        <p className='my-4'>
          Based on 2024/2025 import data and market signals, several trends will shape Ethiopian coffee trade in the coming year:
        </p>

        <div className='space-y-6 my-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineArrowTrendingUp className='text-green-600' />
              1. Continued Specialty Premium Expansion
            </h4>
            <p className='text-sm'>
              Specialty-focused importers (Falcon, Trabocca, Royal Coffee, Cafe Imports) continue paying $7-10/kg vs $4-5.50/kg for commercial grades. Ethiopian exporters with specialty infrastructure (cupping labs, quality control, traceability systems) will capture increasing premiums. Expect specialty segment to grow 12-15% in 2025/2026.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineGlobeAlt className='text-blue-600' />
              2. Asian Market Acceleration
            </h4>
            <p className='text-sm'>
              China's coffee consumption growth (15-20% annually) and South Korea's specialty coffee boom position Asia as Ethiopian coffee's highest growth market. Expect Chinese and Korean buyers to move into top 30 rankings by 2026. Japanese buyers (Marubeni, Itochu) increasing Ethiopian purchases as Japanese consumers discover Ethiopian origins.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineMapPin className='text-red-600' />
              3. Middle East Consolidation
            </h4>
            <p className='text-sm'>
              Saudi Arabia and UAE's position as top 3-6 importers by value solidifies. Expect continued growth driven by population growth, Ethiopian diaspora consumption, and coffee culture expansion in Gulf markets. Middle East could reach 30-35% of Ethiopian coffee exports by 2027.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineTrophy className='text-amber-600' />
              4. Direct Trade and Traceability Demand
            </h4>
            <p className='text-sm'>
              EU Deforestation Regulation (EUDR) and consumer demand for traceable coffee driving buyers to seek direct relationships with Ethiopian exporters who can provide farm-level geolocation data. Exporters with robust traceability systems gain competitive advantage, especially in European specialty markets.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineChartBar className='text-purple-600' />
              5. Price Volatility and Premium Widening
            </h4>
            <p className='text-sm'>
              Gap between commercial and specialty pricing widening. Commercial Ethiopian coffee (Grade 4-5) averaging $4.50-5.50/kg while specialty (SCA 84+, Grade 1-2) commanding $7-10/kg. Climate challenges, rising production costs, and specialty demand driving this premium expansion. Exporters positioning in specialty segment capturing higher margins.
            </p>
          </div>
        </div>

        <div className='bg-dark text-primary p-6 rounded-lg my-6'>
          <h4 className='font-bold text-lg mb-3'>Bottom Line for Ethiopian Coffee Exporters</h4>
          <p className='text-sm'>
            The top 100 Ethiopian coffee importers control over 60% of global Ethiopian coffee trade value. Understanding who these buyers are, what they want, and how to approach them is critical for Ethiopian exporters seeking to grow their business. Whether you're targeting high-volume commodity traders or premium specialty buyers, the data shows clear opportunities across European, Middle Eastern, and Asian markets. Focus on quality consistency, professional documentation, and strategic buyer relationships to capture your share of this growing market.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopian Coffee Importers and Buyers</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Who are the largest importers of Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Germany, Saudi Arabia, Japan, the United States, and South Korea are the top importing countries by volume. Major trading companies in these markets import tens of thousands of metric tons annually across both commercial and specialty grades.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do Ethiopian coffee exporters find international buyers?</h4>
            <p className="text-sm text-gray-600">Exporters find buyers through trade shows (such as SCA Expo and AFCA), online B2B platforms, Ethiopian trade missions, importer databases, and industry referrals. Building relationships through sample programs and consistent quality is essential.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What do international buyers look for in an Ethiopian coffee supplier?</h4>
            <p className="text-sm text-gray-600">Buyers prioritize consistent quality, reliable communication, proper documentation, competitive pricing, and the ability to meet delivery timelines. Certifications (organic, Fair Trade) and traceability add significant value.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the average price international buyers pay for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Commercial Ethiopian coffee (Grade 4 to 5) averages $4.50 to $5.50 per kg FOB. Specialty grades (SCA 84+, Grade 1 to 2) command $7 to $10 per kg, with exceptional micro-lots reaching $15+ per kg at auction.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Which Ethiopian coffee regions are most popular with international buyers?</h4>
            <p className="text-sm text-gray-600">Yirgacheffe, Sidama, and Guji are the most requested origins for specialty buyers. Harrar and Limu remain popular for commercial and traditional blending markets. Newer micro-regions in Guji and West Arsi are gaining traction.</p>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <hr className="my-8 border-gray-200" />

      <section className='my-8'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <Link href='/ethiopian-coffee-exporter' className='p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
            <h4 className='font-bold text-dark mb-2'>Ethiopian Coffee Exporter</h4>
            <p className='text-sm text-gray-600'>Your trusted Ethiopian coffee export partner for specialty Arabica from all major origins</p>
          </Link>
          <Link href='/insights/navigating-2026-ethiopian-specialty-coffee-exporters' className='p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
            <h4 className='font-bold text-dark mb-2'>Navigating 2026: Ethiopian Specialty Coffee Exporters</h4>
            <p className='text-sm text-gray-600'>Understanding how to position your Ethiopian export business for specialty buyers</p>
          </Link>
          <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
            <h4 className='font-bold text-dark mb-2'>Private vs Cooperative Ethiopian Coffee Exporters</h4>
            <p className='text-sm text-gray-600'>Strategic analysis for international buyers choosing export partners</p>
          </Link>
          <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
            <h4 className='font-bold text-dark mb-2'>Minimum Order Quantities for Ethiopian Coffee</h4>
            <p className='text-sm text-gray-600'>Understanding MOQs when approaching major importers</p>
          </Link>
          <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
            <h4 className='font-bold text-dark mb-2'>Rising Ethiopian Coffee Prices Explained</h4>
            <p className='text-sm text-gray-600'>Market dynamics affecting Ethiopian coffee pricing in 2025/2026</p>
          </Link>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Partner with Ethio Coffee Export</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> connects specialty and commercial-grade Ethiopian green coffee with importers worldwide. With 30+ years of family legacy, we serve buyers in 40+ countries.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide profiles the top Ethiopian coffee importers and buyers for the 2024–2025 season, with insights on market dynamics and trade relationships.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
