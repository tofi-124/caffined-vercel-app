import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import { 
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineDocumentCheck,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp,
  HiOutlineQuestionMarkCircle,
  HiOutlineExclamationTriangle,
  HiOutlineAcademicCap,
  HiOutlineGlobeAsiaAustralia
} from 'react-icons/hi2'
import { GiTreeBranch, GiFarmer } from 'react-icons/gi'
import { FaLeaf, FaHandshake, FaBalanceScale, FaGlobeAfrica, FaSeedling } from 'react-icons/fa'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeCertificationsGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        The definitive guide to coffee certifications for Ethiopian green coffee: understanding Organic, Fair Trade, Rainforest Alliance, UTZ, and Bird Friendly certifications: what they mean, how to source them, their costs, and which certification aligns with your business values and customer expectations.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding coffee certifications is essential for importers sourcing specialty Ethiopian coffee.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee certifications - Organic Fair Trade Rainforest Alliance certified green coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Certifications & Sustainability / Sourcing Guide / Ethiopian Coffee</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        When sourcing Ethiopian green coffee, <span className='font-bold'>certifications</span> increasingly influence buying decisions for roasters, importers, and retailers worldwide. Your customers want assurance that their coffee was produced sustainably, that farmers received fair compensation, and that environmental standards were maintained throughout production.
      </p>

      <p className='my-4'>
        But navigating the landscape of coffee certifications can be overwhelming. What's the difference between <span className='font-bold'>Organic</span> and <span className='font-bold'>Rainforest Alliance</span>? Does <span className='font-bold'>Fair Trade</span> certification actually help Ethiopian farmers? Which certification commands the highest premium? And most importantly, which certified Ethiopian coffees should you source for your business?
      </p>

      <p className='my-4'>
        This comprehensive guide breaks down every major coffee certification available for Ethiopian green coffee, explaining what each certification means in practice, the standards involved, cost implications for buyers, and how to source certified Ethiopian coffee that aligns with your business values and customer expectations.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> Ethiopia has one of the highest rates of organic coffee production in the world due to traditional farming practices. Over 95% of Ethiopian coffee is grown without synthetic inputs, but only a fraction carries official organic certification due to the costs and complexity of the certification process.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#why-certifications-matter" className='text-amber-700 hover:underline'>1. Why Coffee Certifications Matter for Ethiopian Coffee</a></li>
          <li><a href="#certification-overview" className='text-amber-700 hover:underline'>2. Overview of Major Coffee Certifications</a></li>
          <li><a href="#organic-certification" className='text-amber-700 hover:underline'>3. Organic Certification (USDA, EU Organic, JAS)</a></li>
          <li><a href="#fair-trade" className='text-amber-700 hover:underline'>4. Fair Trade Certification (Fairtrade International, Fair Trade USA)</a></li>
          <li><a href="#rainforest-alliance" className='text-amber-700 hover:underline'>5. Rainforest Alliance Certification (Including UTZ)</a></li>
          <li><a href="#bird-friendly" className='text-amber-700 hover:underline'>6. Bird Friendly (Smithsonian) Certification</a></li>
          <li><a href="#direct-trade" className='text-amber-700 hover:underline'>7. Direct Trade vs. Certifications: What's the Difference?</a></li>
          <li><a href="#certification-costs" className='text-amber-700 hover:underline'>8. Certification Costs & Premiums: What Buyers Pay</a></li>
          <li><a href="#ethiopia-certification-landscape" className='text-amber-700 hover:underline'>9. Ethiopian Coffee Certification Landscape</a></li>
          <li><a href="#choosing-certification" className='text-amber-700 hover:underline'>10. Choosing the Right Certification for Your Business</a></li>
          <li><a href="#sourcing-certified-coffee" className='text-amber-700 hover:underline'>11. How to Source Certified Ethiopian Coffee</a></li>
          <li><a href="#future-certifications" className='text-amber-700 hover:underline'>12. The Future of Coffee Certifications</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHY CERTIFICATIONS MATTER */}
      <h3 id="why-certifications-matter" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        1. Why Coffee Certifications Matter for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Coffee certifications serve as third-party verification that coffee was produced according to specific environmental, social, or economic standards. For Ethiopian coffee specifically, certifications matter for several critical reasons:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <FaLeaf className='text-green-600' />
            For Buyers & Roasters
          </h4>
          <ul className='space-y-2 text-sm'>
            <li>✓ <span className='font-bold'>Customer demand:</span> Consumers increasingly expect sustainably-sourced coffee</li>
            <li>✓ <span className='font-bold'>Risk management:</span> Certified supply chains are more transparent and traceable</li>
            <li>✓ <span className='font-bold'>Marketing advantage:</span> Certification logos communicate values instantly</li>
            <li>✓ <span className='font-bold'>Retail requirements:</span> Many retailers require certified products</li>
            <li>✓ <span className='font-bold'>ESG compliance:</span> Corporate sustainability reporting often requires certified sourcing</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <GiFarmer className='text-amber-600' />
            For Ethiopian Farmers
          </h4>
          <ul className='space-y-2 text-sm'>
            <li>✓ <span className='font-bold'>Price premiums:</span> Certified coffee typically commands higher prices</li>
            <li>✓ <span className='font-bold'>Market access:</span> Certification opens doors to premium buyers</li>
            <li>✓ <span className='font-bold'>Farming knowledge:</span> Certification programs include training</li>
            <li>✓ <span className='font-bold'>Community development:</span> Fair Trade includes social premiums</li>
            <li>✓ <span className='font-bold'>Environmental protection:</span> Supports sustainable land management</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Ethiopia's unique position as the birthplace of coffee, with over 15 million people dependent on the coffee sector and predominantly smallholder production (average farm size under 0.5 hectares), makes certifications particularly significant. Certifications help Ethiopian farmers access specialty markets and receive recognition for traditional, low-input farming practices that have sustained coffee forests for centuries.
      </p>

      {/* SECTION 2: CERTIFICATION OVERVIEW */}
      <h3 id="certification-overview" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        2. Overview of Major Coffee Certifications
      </h3>

      <p className='my-4'>
        Before diving deep into each certification, here's a comparative overview of the major coffee certifications you'll encounter when sourcing Ethiopian green coffee:
      </p>

      <div className='overflow-x-auto my-8'>
        <table className='w-full text-sm border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Certification</th>
              <th className='border border-gray-300 p-3 text-left'>Primary Focus</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Premium</th>
              <th className='border border-gray-300 p-3 text-left'>Ethiopian Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Organic (USDA/EU/JAS)</td>
              <td className='border border-gray-300 p-3'>Environmental: No synthetic inputs</td>
              <td className='border border-gray-300 p-3'>$0.20-0.50/lb</td>
              <td className='border border-gray-300 p-3 text-green-700'>High availability</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Fairtrade International</td>
              <td className='border border-gray-300 p-3'>Social: Fair prices & labor rights</td>
              <td className='border border-gray-300 p-3'>$0.20/lb minimum + $0.20 social premium</td>
              <td className='border border-gray-300 p-3 text-green-700'>High availability</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Fair Trade USA</td>
              <td className='border border-gray-300 p-3'>Social: Broader supply chain</td>
              <td className='border border-gray-300 p-3'>$0.20/lb premium</td>
              <td className='border border-gray-300 p-3 text-amber-700'>Moderate availability</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Rainforest Alliance</td>
              <td className='border border-gray-300 p-3'>Environmental & Social: Sustainable agriculture</td>
              <td className='border border-gray-300 p-3'>$0.03-0.10/lb</td>
              <td className='border border-gray-300 p-3 text-green-700'>High availability</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Bird Friendly (Smithsonian)</td>
              <td className='border border-gray-300 p-3'>Environmental: Shade-grown & organic</td>
              <td className='border border-gray-300 p-3'>$0.25-0.50/lb</td>
              <td className='border border-gray-300 p-3 text-amber-700'>Limited availability</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>4C (Common Code)</td>
              <td className='border border-gray-300 p-3'>Baseline sustainability</td>
              <td className='border border-gray-300 p-3'>No fixed premium</td>
              <td className='border border-gray-300 p-3 text-amber-700'>Moderate availability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Important:</span> Many Ethiopian coffees carry <span className='font-bold'>multiple certifications</span> simultaneously. It's common to find Ethiopian coffee that is both Organic AND Fair Trade certified, or Rainforest Alliance AND Organic certified. Dual or triple certifications can command higher premiums and broader market appeal.
        </p>
      </div>

      {/* SECTION 3: ORGANIC CERTIFICATION */}
      <h3 id="organic-certification" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaLeaf className='text-green-600' />
        3. Organic Certification (USDA, EU Organic, JAS)
      </h3>

      <p className='my-4'>
        <a href="https://www.ams.usda.gov/rules-regulations/organic" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline font-bold'>Organic certification</a> verifies that coffee was grown and processed without synthetic fertilizers, pesticides, herbicides, or genetically modified organisms (GMOs). It's the most widely recognized and demanded sustainability certification in the coffee industry.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What Organic Certification Requires</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold text-lg mb-3'>Core Organic Standards</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No synthetic pesticides or herbicides:</span> Only approved organic pest management methods</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No synthetic fertilizers:</span> Compost, manure, and natural inputs only</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No GMOs:</span> Genetically modified organisms prohibited</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transition period:</span> Land must be chemical-free for 3 years before certification</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Buffer zones:</span> Distance requirements from non-organic farms</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Segregated processing:</span> Organic coffee must be processed separately</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Full traceability:</span> Documentation from farm to export</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Annual inspections:</span> Third-party audits every year</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Three Major Organic Standards</h4>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-blue-800 flex items-center gap-2'><HiOutlineGlobeAlt className='text-blue-600' /> <a href="https://www.ams.usda.gov/" target="_blank" rel="noopener noreferrer" className='text-blue-800 underline'>USDA Organic</a></h5>
          <p className='text-sm mb-2'>Required for US market sales</p>
          <ul className='text-xs space-y-1'>
            <li>• Administered by USDA National Organic Program (NOP)</li>
            <li>• Certifiers must be USDA-accredited</li>
            <li>• Covers production, processing, handling</li>
            <li>• USDA and EU Organic have equivalency agreement</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-blue-800 flex items-center gap-2'><HiOutlineGlobeAlt className='text-blue-600' /> <a href="https://agriculture.ec.europa.eu/farming/organic-farming/organic-production-and-products_en" target="_blank" rel="noopener noreferrer" className='text-blue-800 underline'>EU Organic</a></h5>
          <p className='text-sm mb-2'>Required for European Union sales</p>
          <ul className='text-xs space-y-1'>
            <li>• Governed by EU Regulation 2018/848</li>
            <li>• Slightly stricter soil management rules</li>
            <li>• USDA-EU equivalency allows dual labeling</li>
            <li>• New EU Organic rules from January 2022</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-blue-800 flex items-center gap-2'><HiOutlineGlobeAlt className='text-blue-600' /> <a href="https://www.maff.go.jp/e/policies/standard/jas/" target="_blank" rel="noopener noreferrer" className='text-blue-800 underline'>JAS Organic</a></h5>
          <p className='text-sm mb-2'>Required for Japanese market</p>
          <ul className='text-xs space-y-1'>
            <li>• Japanese Agricultural Standards</li>
            <li>• No equivalency with USDA/EU</li>
            <li>• Separate certification required</li>
            <li>• Growing demand in Japan for organic Ethiopian</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Organic Certification & Ethiopian Coffee: A Natural Fit</h4>

      <p className='my-4'>
        Ethiopia is uniquely positioned for organic certification because <span className='font-bold'>traditional Ethiopian coffee farming is inherently organic</span>. The vast majority of Ethiopian coffee is grown by smallholder farmers using methods passed down through generations:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>No synthetic inputs:</span> Most Ethiopian farmers cannot afford chemical fertilizers or pesticides, and traditional practices don't use them</li>
        <li><span className='font-bold'>Forest-grown coffee:</span> Much Ethiopian coffee grows in wild or semi-wild forest conditions with natural biodiversity</li>
        <li><span className='font-bold'>Shade cultivation:</span> Traditional shade-growing provides natural pest control and eliminates need for chemicals</li>
        <li><span className='font-bold'>Composting:</span> Ethiopian farmers traditionally use organic matter and coffee pulp as natural fertilizer</li>
        <li><span className='font-bold'>Genetic diversity:</span> Ethiopia's heirloom varieties have natural disease resistance</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-600' />
          The Certification Gap
        </p>
        <p className='text-sm'>
          While an estimated <span className='font-bold'>95% of Ethiopian coffee is grown organically by default</span>, only about <span className='font-bold'>5-10% carries official organic certification</span>. The gap exists because certification requires annual audits, documentation systems, and fees that smallholder farmers and smaller cooperatives struggle to afford. This represents both a challenge and an opportunity for the Ethiopian coffee sector.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Major Ethiopian Organic Coffee Origins</h4>

      <p className='my-4'>
        Organic-certified Ethiopian coffee is available from most major producing regions:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Yirgacheffe:</span> Extensive organic certification through cooperatives like Yirgacheffe Coffee Farmers Cooperative Union (YCFCU)</li>
        <li><span className='font-bold'>Sidamo/Sidama:</span> Major organic production through Sidama Coffee Farmers Cooperative Union (SCFCU)</li>
        <li><span className='font-bold'>Guji:</span> Growing organic certification programs, particularly for wild-grown coffee</li>
        <li><span className='font-bold'>Limu:</span> Forest coffee with strong organic potential</li>
        <li><span className='font-bold'>Jimma:</span> Large cooperative unions with organic certification</li>
      </ul>

      <p className='my-4'>
        For a detailed guide on evaluating and sourcing from certified organic exporters specifically for bulk orders, see our <Link href='/insights/certified-organic-coffee-bean-exporters-bulk-orders' className='underline font-bold'>certified organic coffee bean exporters bulk guide</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Organic Coffee Premiums</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Market Segment</th>
              <th className='text-left py-2'>Typical Organic Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2'>Commercial grade organic</td>
              <td className='py-2'>$0.15-0.25/lb over conventional</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Specialty grade organic (80-84 points)</td>
              <td className='py-2'>$0.25-0.40/lb over conventional</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>High specialty organic (85+ points)</td>
              <td className='py-2'>$0.40-0.60/lb over conventional</td>
            </tr>
            <tr>
              <td className='py-2'>Organic + Fair Trade dual certification</td>
              <td className='py-2'>Combined premiums may reach $0.50-0.80/lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: FAIR TRADE */}
      <h3 id="fair-trade" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaHandshake className='text-blue-600' />
        4. Fair Trade Certification
      </h3>

      <p className='my-4'>
        <a href="https://www.fairtrade.net/" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline font-bold'>Fair Trade certification</a> focuses on the <span className='font-bold'>social and economic</span> dimensions of coffee production, ensuring that farmers receive fair prices, have safe working conditions, and that communities benefit from a social development premium.
      </p>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3'>
          Understanding the Fair Trade Split
        </p>
        <p className='text-sm mb-3'>
          In 2011, the Fair Trade movement split into two separate organizations with different standards:
        </p>
        <ul className='text-sm space-y-2'>
          <li><span className='font-bold'><a href="https://www.fairtrade.net/" target="_blank" rel="noopener noreferrer" className='text-blue-800 underline'>Fairtrade International (FLO)</a>:</span> The original global system, dominant in Europe and most markets. Requires certification of producer organizations (cooperatives), not individual farms or estates.</li>
          <li><span className='font-bold'><a href="https://www.fairtradecertified.org/" target="_blank" rel="noopener noreferrer" className='text-blue-800 underline'>Fair Trade USA</a>:</span> Split from FLO in 2011 to allow certification of estates/plantations and individual farmers, not just cooperatives. More common for US market sales.</li>
        </ul>
        <p className='text-sm mt-3 italic'>
          Both systems share similar goals but have different criteria for who can be certified. Most Ethiopian Fair Trade coffee is certified under Fairtrade International (FLO).
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Fairtrade International (FLO) Standards</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold text-lg mb-3'>Key Fairtrade Requirements</h5>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <p className='font-bold text-sm mb-2'>Economic Standards:</p>
            <ul className='text-sm space-y-1'>
              <li>• <span className='font-bold'>Minimum Price:</span> Floor price protecting farmers from market crashes</li>
              <li>• <span className='font-bold'>Fairtrade Premium:</span> Additional $0.20/lb for community investment</li>
              <li>• <span className='font-bold'>Pre-financing:</span> Up to 60% advance payment on request</li>
              <li>• <span className='font-bold'>Long-term contracts:</span> Stable trading relationships</li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Social Standards:</p>
            <ul className='text-sm space-y-1'>
              <li>• Democratic organization (cooperatives)</li>
              <li>• No forced or child labor</li>
              <li>• Non-discrimination policies</li>
              <li>• Safe working conditions</li>
              <li>• Freedom of association</li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Fairtrade Pricing Structure for Coffee</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>2024-2026 Fairtrade Minimum Prices for Coffee</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Coffee Type</th>
              <th className='text-left py-2'>Minimum Price (FOB)</th>
              <th className='text-left py-2'>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2'>Washed Arabica</td>
              <td className='py-2 font-bold'>$1.80/lb</td>
              <td className='py-2'>+$0.20/lb</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Washed Arabica Organic</td>
              <td className='py-2 font-bold'>$2.10/lb</td>
              <td className='py-2'>+$0.20/lb</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Natural Arabica</td>
              <td className='py-2 font-bold'>$1.75/lb</td>
              <td className='py-2'>+$0.20/lb</td>
            </tr>
            <tr>
              <td className='py-2'>Natural Arabica Organic</td>
              <td className='py-2 font-bold'>$2.05/lb</td>
              <td className='py-2'>+$0.20/lb</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Note: When market prices exceed the minimum price, farmers receive market price + the $0.20/lb premium. The minimum price acts as a safety net when market prices fall.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>How the Fairtrade Premium Is Used</h4>

      <p className='my-4'>
        The <span className='font-bold'>$0.20/lb Fairtrade Premium</span> is paid directly to the cooperative, which democratically decides how to invest it. In Ethiopian cooperatives, common uses include:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 text-center'>
          <HiOutlineAcademicCap className='text-4xl mx-auto text-blue-600 mb-2' />
          <h5 className='font-bold text-sm'>Education</h5>
          <p className='text-xs'>Building schools, scholarships, adult literacy programs</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 text-center'>
          <HiOutlineUserGroup className='text-4xl mx-auto text-blue-600 mb-2' />
          <h5 className='font-bold text-sm'>Healthcare</h5>
          <p className='text-xs'>Medical clinics, health insurance, clean water projects</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 text-center'>
          <HiOutlineArrowTrendingUp className='text-4xl mx-auto text-blue-600 mb-2' />
          <h5 className='font-bold text-sm'>Farm Investment</h5>
          <p className='text-xs'>Seedlings, processing equipment, training programs</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Fair Trade in Ethiopia: Cooperative Structure</h4>

      <p className='my-4'>
        Ethiopia's coffee sector is well-suited to Fair Trade certification because of its strong <span className='font-bold'>cooperative tradition</span>. The Ethiopian coffee cooperative system includes:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Primary cooperatives:</span> Village-level organizations of smallholder farmers (typically 200-2,000 members)</li>
        <li><span className='font-bold'>Cooperative unions:</span> Federations of primary cooperatives that handle processing, quality control, and export</li>
        <li><span className='font-bold'>Democratic governance:</span> Members vote on leadership, premium use, and major decisions</li>
      </ul>

      <p className='my-4'>
        Major Ethiopian Fair Trade certified cooperative unions include:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='space-y-3 text-sm'>
          <li><span className='font-bold'>Oromia Coffee Farmers Cooperative Union (OCFCU):</span> One of the largest, representing over 400 cooperatives and 400,000+ farmers across Oromia region</li>
          <li><span className='font-bold'>Yirgacheffe Coffee Farmers Cooperative Union (YCFCU):</span> Specializing in premium Yirgacheffe coffees</li>
          <li><span className='font-bold'>Sidama Coffee Farmers Cooperative Union (SCFCU):</span> Major producer of washed and natural Sidamo coffees</li>
          <li><span className='font-bold'>Kaffa Forest Coffee Farmers Cooperative Union:</span> Wild forest coffee from the birthplace of coffee</li>
          <li><span className='font-bold'>Guji Highland Coffee Union:</span> Growing producer of specialty Guji coffees</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Criticisms and Limitations of Fair Trade</h4>

      <p className='my-4'>
        While Fair Trade has delivered significant benefits, it faces legitimate criticisms that buyers should understand:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /><span className='font-bold'>Minimum price obsolescence:</span> When specialty coffee prices are high (as in 2024-2026), the minimum price becomes irrelevant; farmers get market price regardless</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /><span className='font-bold'>Premium distribution:</span> Questions about whether premiums reach individual farmers vs. staying at cooperative level</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /><span className='font-bold'>Certification costs:</span> Annual fees can burden small cooperatives</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /><span className='font-bold'>Quality neutrality:</span> Fair Trade doesn't differentiate by quality, so premium coffees get the same minimum as lower grades</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /><span className='font-bold'>Cooperative-only model:</span> Excludes individual farmers and private estates (under Fairtrade International)</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Buyer Perspective:</span> Fair Trade certification remains valuable for communicating social commitment to consumers. However, for specialty coffee buyers focused on quality, Fair Trade should be viewed as a baseline social standard rather than a quality indicator. The highest quality Ethiopian coffees may or may not carry Fair Trade certification.
        </p>
      </div>

      {/* SECTION 5: RAINFOREST ALLIANCE */}
      <h3 id="rainforest-alliance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <GiTreeBranch className='text-green-700' />
        5. Rainforest Alliance Certification
      </h3>

      <p className='my-4'>
        <a href="https://www.rainforest-alliance.org/" target="_blank" rel="noopener noreferrer" className='text-green-700 hover:underline font-bold'>Rainforest Alliance certification</a> takes a comprehensive approach to sustainable agriculture, addressing environmental conservation, social equity, and economic viability through a single integrated standard.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='font-bold text-lg mb-3'>
          UTZ Merger
        </p>
        <p className='text-sm'>
          In 2018, <span className='font-bold'>Rainforest Alliance merged with UTZ</span>, another major sustainability certification. As of 2020, all coffee is certified under the unified <a href="https://www.rainforest-alliance.org/business/certification/standards/" target="_blank" rel="noopener noreferrer" className='text-green-700 hover:underline'>Rainforest Alliance 2020 Standard</a>. If you encounter "UTZ Certified" Ethiopian coffee from older inventories, it's now equivalent to Rainforest Alliance certification.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Rainforest Alliance 2020 Standard: Key Requirements</h4>

      <p className='my-4'>
        The Rainforest Alliance standard is built on three pillars:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-green-800'>🌳 Environmental</h5>
          <ul className='text-xs space-y-1'>
            <li>• Forest and ecosystem conservation</li>
            <li>• No deforestation after 2014 cutoff</li>
            <li>• Biodiversity protection</li>
            <li>• Water resource management</li>
            <li>• Integrated pest management</li>
            <li>• Soil conservation</li>
            <li>• Climate change mitigation</li>
            <li>• Waste management</li>
          </ul>
        </div>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-blue-800 flex items-center gap-2'><HiOutlineUserGroup className='text-blue-600' /> Social</h5>
          <ul className='text-xs space-y-1'>
            <li>• Freedom from forced labor</li>
            <li>• Freedom from child labor</li>
            <li>• Living wage progress</li>
            <li>• Safe working conditions</li>
            <li>• Freedom of association</li>
            <li>• Gender equality measures</li>
            <li>• Community relations</li>
            <li>• Worker housing standards</li>
          </ul>
        </div>
        <div className='bg-amber-50 border border-amber-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 text-amber-800 flex items-center gap-2'><HiOutlineCurrencyDollar className='text-amber-600' /> Economic</h5>
          <ul className='text-xs space-y-1'>
            <li>• Sustainability Differential payment</li>
            <li>• Sustainability Investment payment</li>
            <li>• Farm management planning</li>
            <li>• Traceability systems</li>
            <li>• Productivity improvement</li>
            <li>• Market access support</li>
            <li>• Risk assessment tools</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Rainforest Alliance Pricing: Sustainability Differential</h4>

      <p className='my-4'>
        Unlike Fair Trade's fixed premium, Rainforest Alliance uses a <span className='font-bold'>Sustainability Differential</span> and <span className='font-bold'>Sustainability Investment</span> system:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Rainforest Alliance Payment Structure</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Payment Type</th>
              <th className='text-left py-2'>Amount</th>
              <th className='text-left py-2'>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Sustainability Differential</td>
              <td className='py-2'>Negotiated (no fixed minimum)</td>
              <td className='py-2'>Cash payment to producer for certified product</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Sustainability Investment</td>
              <td className='py-2'>Mandatory component</td>
              <td className='py-2'>Investment in farm sustainability improvements</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          In practice, Rainforest Alliance premiums typically range from $0.03-0.10/lb, lower than Fair Trade, reflecting the program's focus on continuous improvement rather than price floors.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Rainforest Alliance vs. Fair Trade: Key Differences</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Aspect</th>
              <th className='border border-gray-300 p-3 text-left'>Rainforest Alliance</th>
              <th className='border border-gray-300 p-3 text-left'>Fairtrade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Primary focus</td>
              <td className='border border-gray-300 p-3'>Environmental sustainability</td>
              <td className='border border-gray-300 p-3'>Social/economic fairness</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Minimum price</td>
              <td className='border border-gray-300 p-3'>No minimum price</td>
              <td className='border border-gray-300 p-3'>Yes - floor price protection</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Premium structure</td>
              <td className='border border-gray-300 p-3'>Negotiated differential</td>
              <td className='border border-gray-300 p-3'>Fixed $0.20/lb premium</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Who can certify</td>
              <td className='border border-gray-300 p-3'>Farms, estates, groups, cooperatives</td>
              <td className='border border-gray-300 p-3'>Cooperatives only (FLO)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Deforestation cutoff</td>
              <td className='border border-gray-300 p-3'>2014</td>
              <td className='border border-gray-300 p-3'>No specific cutoff date</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Consumer recognition</td>
              <td className='border border-gray-300 p-3'>Growing (frog logo)</td>
              <td className='border border-gray-300 p-3'>High (established brand)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ethiopian Coffee & Rainforest Alliance</h4>

      <p className='my-4'>
        Rainforest Alliance certification is widely available for Ethiopian coffee, particularly through:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Large cooperative unions:</span> Many Ethiopian unions carry both RA and Fair Trade certifications</li>
        <li><span className='font-bold'>Private exporters:</span> RA's flexibility allows certification of estate and private exporter supply chains</li>
        <li><span className='font-bold'>Forest coffee:</span> Ethiopia's shade-grown and forest coffee aligns well with RA's biodiversity requirements</li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>For Buyers:</span> Rainforest Alliance certification is often preferred by large commercial buyers and multinational roasters due to its broader supply chain coverage and lower premium costs. For specialty buyers seeking maximum social impact, Fair Trade may communicate more clearly to consumers, though RA's environmental standards are often stronger.
        </p>
      </div>

      {/* SECTION 6: BIRD FRIENDLY */}
      <h3 id="bird-friendly" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaSeedling className='text-green-600' />
        6. Bird Friendly Certification (Smithsonian)
      </h3>

      <p className='my-4'>
        <a href="https://nationalzoo.si.edu/migratory-birds/bird-friendly" target="_blank" rel="noopener noreferrer" className='text-green-600 hover:underline font-bold'>Bird Friendly certification</a> by the Smithsonian Migratory Bird Center is the most stringent shade-grown coffee certification available. It requires <span className='font-bold'>both organic certification AND specific shade-cover requirements</span> that protect habitat for migratory birds.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold text-lg mb-3'>Bird Friendly Certification Requirements</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Must be USDA Organic certified</span> (Bird Friendly is an additional layer)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Minimum 40% shade cover</span> over the coffee</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Canopy height minimum 12 meters</span></li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>At least 10 woody species</span> in shade canopy</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Multiple vegetation strata</span> (layers of growth)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Leaf litter preserved</span> on ground</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Living fences</span> or natural borders between plots</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ethiopian Coffee: Naturally Bird Friendly</h4>

      <p className='my-4'>
        Ethiopia's traditional forest coffee systems are <span className='font-bold'>ideal candidates for Bird Friendly certification</span>. The highlands of southwestern Ethiopia, particularly the Kaffa, Illubabor, and Bench Maji zones, contain the world's last remaining wild Arabica coffee forests, which exceed Bird Friendly shade standards by nature.
      </p>

      <p className='my-4'>
        However, Bird Friendly certified Ethiopian coffee remains <span className='font-bold'>relatively rare</span> due to:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Dual certification requirement:</span> Must already have organic certification</li>
        <li><span className='font-bold'>Limited awareness:</span> The certification is less known in Ethiopia than Fair Trade or Organic</li>
        <li><span className='font-bold'>Documentation burden:</span> Detailed shade measurement and species documentation required</li>
        <li><span className='font-bold'>Market access:</span> Fewer buyers specifically seek Bird Friendly compared to organic</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Bird Friendly Premiums</h4>

      <p className='my-4'>
        Bird Friendly coffee commands strong premiums due to its scarcity and combined organic + shade requirements:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Certification Level</th>
              <th className='text-left py-2'>Typical Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2'>Bird Friendly (includes organic)</td>
              <td className='py-2 font-bold'>$0.25-0.50/lb above conventional</td>
            </tr>
            <tr>
              <td className='py-2'>Bird Friendly + Fair Trade</td>
              <td className='py-2 font-bold'>$0.45-0.75/lb above conventional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Sourcing Tip:</span> If you're specifically seeking Bird Friendly Ethiopian coffee, work with exporters who source from forest coffee regions like Kaffa, Bonga, or Sheka. These coffees may meet Bird Friendly standards even if not yet certified, representing an opportunity for buyers to support certification expansion.
        </p>
      </div>

      {/* SECTION 7: DIRECT TRADE */}
      <h3 id="direct-trade" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaBalanceScale className='text-amber-600' />
        7. Direct Trade vs. Certifications: What's the Difference?
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Direct Trade</span> is often mentioned alongside certifications, but it is fundamentally different. It is a <span className='font-bold'>sourcing philosophy, not a certification</span>.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3'>Certifications</h5>
          <ul className='space-y-2 text-sm'>
            <li>✓ Third-party verified standards</li>
            <li>✓ Official audit process</li>
            <li>✓ Registered trademarks/logos</li>
            <li>✓ Standardized requirements</li>
            <li>✓ Annual fees and inspections</li>
            <li>✓ Consumer-recognized labels</li>
          </ul>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'>Direct Trade</h5>
          <ul className='space-y-2 text-sm'>
            <li>✓ No official standard or verification</li>
            <li>✓ Self-defined by each buyer</li>
            <li>✓ No official logo or trademark</li>
            <li>✓ Relationship-based approach</li>
            <li>✓ No certification fees</li>
            <li>✓ Requires buyer transparency to be credible</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>What Direct Trade Typically Means</h4>

      <p className='my-4'>
        When specialty roasters claim "direct trade," they usually mean:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Direct relationship:</span> The roaster buys directly from the producer (cooperative, estate, or exporter) without intermediary traders</li>
        <li><span className='font-bold'>Price transparency:</span> The roaster knows (and often publishes) exactly what the farmer received</li>
        <li><span className='font-bold'>Quality focus:</span> Purchases based on cupping score and quality, often 84+ points</li>
        <li><span className='font-bold'>Premium prices:</span> Typically paying well above Fair Trade minimums</li>
        <li><span className='font-bold'>Farm visits:</span> The buyer has visited the farm or cooperative personally</li>
        <li><span className='font-bold'>Long-term commitment:</span> Multi-year purchasing relationships</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-600' />
          The Direct Trade Caveat
        </p>
        <p className='text-sm'>
          Because "direct trade" has no official definition or verification, it can be misused. Some buyers use the term loosely for any coffee purchased "directly" from an exporter, even if the exporter is a large commercial trader. <span className='font-bold'>True direct trade requires transparency</span>. Credible direct trade roasters publish their pricing, share farmer stories, and can document their supply chain.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Direct Trade + Certification: The Best of Both?</h4>

      <p className='my-4'>
        Direct trade and certifications are <span className='font-bold'>not mutually exclusive</span>. Many specialty importers practice direct trade relationships while also sourcing certified coffees:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Direct trade + Organic:</span> Relationship-based sourcing of certified organic Ethiopian lots</li>
        <li><span className='font-bold'>Direct trade + Fair Trade:</span> Direct relationships with FT-certified cooperatives</li>
        <li><span className='font-bold'>Direct trade replacing certification:</span> Some specialty buyers prefer relationship transparency over third-party certification</li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Our Approach at Ethio Coffee Export:</span> We facilitate both certified and direct trade relationships. For buyers seeking certifications, we source from certified cooperatives and can provide all documentation. For buyers preferring direct trade, we offer full transparency on pricing, farmer payments, and supply chain traceability. Many of our relationships combine both approaches.
        </p>
      </div>

      {/* SECTION 8: CERTIFICATION COSTS */}
      <h3 id="certification-costs" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        8. Certification Costs & Premiums: What Buyers Pay
      </h3>

      <p className='my-4'>
        Understanding the economics of coffee certification helps buyers make informed sourcing decisions:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Cost Structure for Producers</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Typical Annual Certification Costs (Cooperative Level)</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Certification</th>
              <th className='text-left py-2'>Initial Certification</th>
              <th className='text-left py-2'>Annual Renewal</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Organic (USDA/EU)</td>
              <td className='py-2'>$2,000-5,000</td>
              <td className='py-2'>$1,500-3,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Fairtrade</td>
              <td className='py-2'>$2,000-4,000</td>
              <td className='py-2'>$1,500-2,500</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Rainforest Alliance</td>
              <td className='py-2'>$1,500-3,500</td>
              <td className='py-2'>$1,000-2,000</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Bird Friendly</td>
              <td className='py-2'>$500-1,500 (on top of organic)</td>
              <td className='py-2'>$500-1,000</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Costs vary significantly based on cooperative size, number of members, geographic spread of farms, and certifying body. Larger cooperatives achieve economies of scale.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Premium Summary for Buyers</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3'>Expected Premiums Over Conventional Ethiopian Coffee</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-amber-300'>
              <th className='text-left py-2'>Certification</th>
              <th className='text-left py-2'>Premium Range</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>Organic only</td>
              <td className='py-2'>$0.20-0.50/lb</td>
              <td className='py-2'>Higher for specialty grades</td>
            </tr>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>Fair Trade only</td>
              <td className='py-2'>$0.20/lb + price floor</td>
              <td className='py-2'>Fixed premium structure</td>
            </tr>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>Organic + Fair Trade</td>
              <td className='py-2'>$0.40-0.70/lb</td>
              <td className='py-2'>Most common dual cert</td>
            </tr>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>Rainforest Alliance</td>
              <td className='py-2'>$0.03-0.10/lb</td>
              <td className='py-2'>Negotiated differential</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Bird Friendly</td>
              <td className='py-2'>$0.25-0.50/lb</td>
              <td className='py-2'>Includes organic requirement</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 9: ETHIOPIA CERTIFICATION LANDSCAPE */}
      <h3 id="ethiopia-certification-landscape" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaGlobeAfrica className='text-amber-600' />
        9. Ethiopian Coffee Certification Landscape
      </h3>

      <p className='my-4'>
        Ethiopia's coffee certification landscape has evolved significantly over the past two decades. Here's the current state:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Certification Prevalence in Ethiopian Coffee</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>Organic:</span>
            <span className='ml-2'>Estimated 5-10% of exports carry certification, though 95%+ is grown organically</span>
          </li>
          <li>
            <span className='font-bold'>Fair Trade:</span>
            <span className='ml-2'>15-20% of exports, concentrated in cooperative unions</span>
          </li>
          <li>
            <span className='font-bold'>Rainforest Alliance/UTZ:</span>
            <span className='ml-2'>10-15% of exports, growing rapidly</span>
          </li>
          <li>
            <span className='font-bold'>Bird Friendly:</span>
            <span className='ml-2'>&lt;1% of exports, but growing interest in forest regions</span>
          </li>
          <li>
            <span className='font-bold'>4C:</span>
            <span className='ml-2'>5-10% of exports, primarily commercial grade</span>
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ethiopian Government & Certification</h4>

      <p className='my-4'>
        The <a href="https://share.google/2wukzLJwWhD4ABE9z" target="_blank" rel="noopener noreferrer" className='font-bold text-amber-700 hover:underline'>Ethiopian Coffee and Tea Authority (ECTA)</a> and the government have increasingly supported certification as a strategy for value addition:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>National organic standard:</span> Ethiopia has developed its own organic agriculture standard</li>
        <li><span className='font-bold'>Certification support:</span> Government programs help cooperatives achieve certification</li>
        <li><span className='font-bold'>EUDR preparation:</span> Ethiopia is building traceability infrastructure that will support certification documentation</li>
        <li><span className='font-bold'>Cooperative strengthening:</span> Investment in cooperative management supports certification capacity</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Key Certified Ethiopian Coffee Sources</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Major Certified Cooperative Unions</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-green-300'>
              <th className='text-left py-2'>Union</th>
              <th className='text-left py-2'>Region</th>
              <th className='text-left py-2'>Certifications</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-green-200'>
              <td className='py-2 font-bold'>OCFCU</td>
              <td className='py-2'>Oromia (multiple zones)</td>
              <td className='py-2'>Organic, Fair Trade, RA</td>
            </tr>
            <tr className='border-b border-green-200'>
              <td className='py-2 font-bold'>YCFCU</td>
              <td className='py-2'>Yirgacheffe</td>
              <td className='py-2'>Organic, Fair Trade</td>
            </tr>
            <tr className='border-b border-green-200'>
              <td className='py-2 font-bold'>SCFCU</td>
              <td className='py-2'>Sidama</td>
              <td className='py-2'>Organic, Fair Trade, RA</td>
            </tr>
            <tr className='border-b border-green-200'>
              <td className='py-2 font-bold'>Kaffa Forest Union</td>
              <td className='py-2'>Kaffa</td>
              <td className='py-2'>Organic, Fair Trade</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Bench Maji Union</td>
              <td className='py-2'>Bench Maji</td>
              <td className='py-2'>Organic</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 10: CHOOSING THE RIGHT CERTIFICATION */}
      <h3 id="choosing-certification" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        10. Choosing the Right Certification for Your Business
      </h3>

      <p className='my-4'>
        Which certification should you prioritize when sourcing Ethiopian coffee? The answer depends on your business model, customer expectations, and values:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Choose Organic If...</h4>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-gray-600' /> Your customers prioritize health and environmental concerns</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-gray-600' /> You sell through health food stores or organic retailers</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-gray-600' /> You're targeting the US or EU markets where organic labeling matters</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-gray-600' /> You want the most widely recognized sustainability certification</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-gray-600' /> You're marketing to environmentally-conscious consumers</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-3'>Choose Fair Trade If...</h4>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> Your customers care deeply about farmer welfare</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> You want to communicate social responsibility simply</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> Your business emphasizes community development stories</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> You're selling to socially-conscious retail chains</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> You want price floor protection during market downturns</li>
          </ul>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3'>Choose Rainforest Alliance If...</h4>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> You're a large-volume buyer needing broad supply</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> Environmental/biodiversity protection is your priority</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> You need certification at lower premium cost</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> You're working with corporate sustainability requirements</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> You need flexibility in supply chain structure</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>Choose Bird Friendly If...</h4>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> Your brand emphasizes environmental stewardship</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> You target environmentally-engaged niche consumers</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> You want the most rigorous shade-grown standard</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> You're willing to pay premium prices for premium positioning</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> Your marketing emphasizes biodiversity and conservation</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Recommendation:</span> For most specialty coffee roasters, <span className='font-bold'>Organic + Fair Trade dual certification</span> offers the best combination of consumer recognition, social impact, and market positioning. This combination is widely available from Ethiopian cooperatives and communicates both environmental and social responsibility.
        </p>
      </div>

      {/* SECTION 11: SOURCING CERTIFIED COFFEE */}
      <h3 id="sourcing-certified-coffee" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        11. How to Source Certified Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Ready to source certified Ethiopian coffee? Here's how to proceed:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 1: Determine Your Certification Needs</h4>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>Which certifications do your customers or retail partners require?</li>
        <li>What certifications align with your brand values?</li>
        <li>What premium are you able to pay?</li>
        <li>Do you need single certification or dual/triple certification?</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 2: Verify Certification Status</h4>

      <p className='my-4'>
        Always verify certification claims through official databases:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>Organic (USDA):</span>
            <a href='https://organic.ams.usda.gov/integrity/' target='_blank' rel='noopener noreferrer' className='ml-2 text-amber-700 hover:underline'>USDA Organic Integrity Database</a>
          </li>
          <li>
            <span className='font-bold'>Fair Trade:</span>
            <a href='https://www.fairtrade.net/about/certification' target='_blank' rel='noopener noreferrer' className='ml-2 text-amber-700 hover:underline'>FLOCERT Certified Operators</a>
          </li>
          <li>
            <span className='font-bold'>Rainforest Alliance:</span>
            <a href='https://www.rainforest-alliance.org/find-certified/' target='_blank' rel='noopener noreferrer' className='ml-2 text-amber-700 hover:underline'>RA Certificate Search</a>
          </li>
          <li>
            <span className='font-bold'>Bird Friendly:</span>
            <a href='https://nationalzoo.si.edu/migratory-birds/bird-friendly-coffee' target='_blank' rel='noopener noreferrer' className='ml-2 text-amber-700 hover:underline'>Smithsonian Bird Friendly Directory</a>
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 3: Request Documentation</h4>

      <p className='my-4'>
        When purchasing certified coffee, ensure you receive:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Valid certification certificate</span> (check expiration date)</li>
        <li><span className='font-bold'>Transaction certificate</span> for each shipment</li>
        <li><span className='font-bold'>Chain of custody documentation</span> showing traceability</li>
        <li><span className='font-bold'>Organic import certificate</span> (for US/EU organic imports)</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 4: Work with Certified Exporters</h4>

      <p className='my-4'>
        To source certified Ethiopian coffee, work with exporters who:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>Have established relationships with certified cooperatives</li>
        <li>Maintain their own certification for handling/processing</li>
        <li>Can provide full documentation and transaction certificates</li>
        <li>Understand destination market certification requirements</li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Ethio Coffee Export</span> sources from certified cooperatives across Ethiopia and can provide Organic, Fair Trade, and Rainforest Alliance certified Ethiopian coffees with full documentation. <Link href='/contact-us' className='underline font-bold'>Contact us</Link> to discuss your certification requirements and current availability.
        </p>
      </div>

      {/* SECTION 12: FUTURE OF CERTIFICATIONS */}
      <h3 id="future-certifications" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSparkles className='text-amber-600' />
        12. The Future of Coffee Certifications
      </h3>

      <p className='my-4'>
        The certification landscape is evolving. Here are key trends affecting Ethiopian coffee:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Emerging Trends</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>EUDR Integration</h5>
          <p className='text-sm'>The EU Deforestation Regulation will require traceability systems that complement and may eventually overlap with existing certifications. Ethiopian exporters preparing for EUDR will be better positioned for all certifications.</p>
        </div>

        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Living Wage Focus</h5>
          <p className='text-sm'>Both Fair Trade and Rainforest Alliance are increasing emphasis on "living income" for farmers. New standards may require buyers to contribute to closing the gap between current farmer income and calculated living income.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Carbon & Climate Certifications</h5>
          <p className='text-sm'>New certifications focused on carbon sequestration and climate resilience are emerging. Ethiopia's forest coffee systems have strong potential for carbon certification programs.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Technology-Enabled Traceability</h5>
          <p className='text-sm'>Blockchain, satellite monitoring, and digital ID systems are making certification verification more robust and reducing fraud. Ethiopia is piloting digital traceability systems.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Certification Fatigue & Alternatives</h5>
          <p className='text-sm'>Some specialty buyers are moving away from certifications toward direct trade with radical transparency. This trend favors quality-focused Ethiopian exporters who can provide detailed traceability without third-party certification.</p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopian Coffee Certifications</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What certifications are available for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee can be certified under several major programs including USDA Organic, EU Organic, JAS Organic, Fair Trade (Fairtrade International and Fair Trade USA), Rainforest Alliance (which merged with UTZ), and Smithsonian Bird Friendly. Many Ethiopian lots carry dual or triple certifications.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee naturally organic?</h4>
            <p className="text-sm text-gray-600">Most Ethiopian smallholder coffee is grown using traditional methods with little or no synthetic inputs, making it "organic by default." However, official organic certification still requires third-party audits, documentation, and annual inspections to verify compliance with USDA, EU, or JAS organic standards.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the difference between Fair Trade and Rainforest Alliance coffee certification?</h4>
            <p className="text-sm text-gray-600">Fair Trade focuses on minimum price guarantees and community development premiums paid to producer cooperatives. Rainforest Alliance (which now includes UTZ) emphasizes environmental sustainability, farm management practices, and biodiversity conservation. Both certifications can be held simultaneously.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How much does coffee certification cost for Ethiopian producers?</h4>
            <p className="text-sm text-gray-600">Certification costs vary by program and group size. Organic certification typically costs $3,000 to $15,000 annually for cooperatives, covering audit fees, documentation, and internal control systems. Fair Trade and Rainforest Alliance have similar cost structures, though some development programs subsidize initial certification for smallholder groups.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can Ethiopian coffee hold multiple certifications at once?</h4>
            <p className="text-sm text-gray-600">Yes. Dual and triple certification is common for Ethiopian coffee cooperatives. A single lot can be certified as Organic, Fair Trade, and Rainforest Alliance simultaneously, which strengthens market positioning and can command higher combined premiums from buyers.</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        How to Choose the Right Ethiopian Coffee Certification
      </h3>

      <p className='my-4'>
        Coffee certifications are tools that help communicate values, verify practices, and connect consumers with the farmers who grow their coffee. For Ethiopian coffee specifically, certifications recognize and reward traditional practices that have sustained coffee cultivation for centuries.
      </p>

      <p className='my-4'>
        Whether you choose Organic, Fair Trade, Rainforest Alliance, Bird Friendly, or pursue direct trade relationships, the key is <span className='font-bold'>alignment between your sourcing practices, brand values, and customer expectations</span>.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Ethiopian coffee is naturally suited</span> for certification due to traditional low-input farming</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Organic + Fair Trade</span> offers the best combination for most specialty roasters</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Verify all certification claims</span> through official databases</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Multiple certifications</span> are common and can strengthen market positioning</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Direct trade and certifications</span> are complementary, not mutually exclusive</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Work with experienced exporters</span> who can provide proper documentation</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Certified Ethiopian Coffee with Ethio Coffee Export</h4>
        <p className='mb-4'>
          Looking for certified Ethiopian green coffee? Ethio Coffee Export sources from certified cooperatives across Ethiopia's premier growing regions. We can provide:
        </p>
        <ul className='space-y-2 mb-4'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Organic certified (USDA/EU) Ethiopian coffees</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Fair Trade certified coffees from major unions</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Rainforest Alliance certified options</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Dual and triple certified lots</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Full documentation and transaction certificates</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Direct relationships with transparent pricing</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss your certification requirements and request current availability and pricing for certified Ethiopian specialty coffee.
        </p>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> EU Deforestation Regulation (EUDR) and Ethiopian Coffee: Complete Compliance Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Sourcing Green Coffee from Ethiopia: Complete Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Green Coffee Quality Control: Defects, Grading & What Importers Should Inspect
            </Link>
          </li>
          <li>
            <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Direct Trade Partnerships: Supporting Ethiopian Farmers
            </Link>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Certified Ethiopian Coffee</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we offer Organic, Fair Trade, and Rainforest Alliance certified Ethiopian coffee with full documentation and traceability.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide covers the major coffee certification programs available for Ethiopian coffee and what importers need to know about sourcing certified lots.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
