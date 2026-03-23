import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineScale,
  HiOutlineClipboardDocumentList
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToNordicCountries({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        Import Ethiopian Coffee to Nordic Countries
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A Buyer&rsquo;s Guide to Sourcing Ethiopian Specialty Coffee for Sweden, Norway, Finland, and Denmark
      </h2>

      {/* Hero Image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/importing-ethiopian-coffee-to-nordic-countries.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans prepared for export to Nordic countries including Sweden, Norway, Finland, and Denmark'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Category */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Nordic Market / Ethiopian Coffee Export / Scandinavian Specialty Coffee</span>
      </div>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Nordic countries consume more coffee per capita than any other region on earth; Finland leads at 12 kg per person annually, followed by Sweden (9.9 kg) and Norway (8.6 kg). Roughly 90% of supermarket coffee sold in Scandinavia carries a sustainability certification. Ethiopian specialty coffees, with their bright acidity, floral complexity, and light-roast compatibility, are a natural fit for this market. This guide covers regulations, certification requirements, buyer segments, port logistics, and a step-by-step market entry strategy for Ethiopian exporters.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#nordic-market' className='text-amber-700 hover:underline'>1. Why Nordic Countries Are a Priority Market</a></li>
          <li><a href='#country-profiles' className='text-amber-700 hover:underline'>2. Country-by-Country Market Profiles</a></li>
          <li><a href='#buyer-segments' className='text-amber-700 hover:underline'>3. Buyer Segments and Sales Channels</a></li>
          <li><a href='#regulations' className='text-amber-700 hover:underline'>4. EU and Norwegian Regulatory Framework</a></li>
          <li><a href='#certification' className='text-amber-700 hover:underline'>5. Certification Requirements</a></li>
          <li><a href='#shipping' className='text-amber-700 hover:underline'>6. Shipping Routes and Port Logistics</a></li>
          <li><a href='#landed-cost' className='text-amber-700 hover:underline'>7. Landed Cost Breakdown</a></li>
          <li><a href='#competitive-edge' className='text-amber-700 hover:underline'>8. Ethiopian Coffee&rsquo;s Competitive Edge</a></li>
          <li><a href='#market-entry' className='text-amber-700 hover:underline'>9. How to Enter the Nordic Market</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='my-4 text-lg leading-relaxed'>
        To import Ethiopian coffee to Nordic countries is to enter the most coffee-devoted region in the world. Finland, Sweden, Norway, and Denmark collectively consume over 400,000 metric tons of green coffee annually, with per-capita rates that dwarf those of major markets like the United States and Japan. The Nordic preference for light-roast, single-origin Arabica aligns directly with Ethiopian coffee&rsquo;s signature profile: bright acidity, floral and fruit complexity, and exceptional cup scores that regularly exceed 85 SCA points.
      </p>
      <p className='my-4'>
        For Ethiopian exporters, the Nordic market offers strong prices, long-term buyer relationships, and a buyer base that values traceability and direct sourcing relationships. This guide covers every step from regulatory compliance to container loading, drawing on ethiocoffee.co&rsquo;s three decades of export experience across all six Ethiopian coffee regions.
      </p>

      {/* Section 1: Why Nordic Countries */}
      <section id='nordic-market'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
          1. Why Nordic Countries Are a Priority Market
        </h3>

        <p className='my-4'>
          Four of the world&rsquo;s top six coffee-consuming nations per capita are Nordic. According to International Coffee Organization (ICO) data, the combined Nordic market imports approximately 180,000 tonnes of green coffee per year. These numbers make Scandinavia a high-value destination for specialty-grade Ethiopian Arabica.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Country</th>
                <th className='p-3 text-left font-bold'>Per Capita (kg/year)</th>
                <th className='p-3 text-left font-bold'>Global Rank</th>
                <th className='p-3 text-left font-bold'>Population (M)</th>
                <th className='p-3 text-left font-bold'>Specialty Segment</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Finland</td>
                <td className='p-3'>12.0</td>
                <td className='p-3'>1st&ndash;2nd</td>
                <td className='p-3'>5.6</td>
                <td className='p-3'>Growing rapidly</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Sweden</td>
                <td className='p-3'>9.9</td>
                <td className='p-3'>3rd&ndash;4th</td>
                <td className='p-3'>10.5</td>
                <td className='p-3'>Large, well-established</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Norway</td>
                <td className='p-3'>8.6</td>
                <td className='p-3'>5th&ndash;6th</td>
                <td className='p-3'>5.5</td>
                <td className='p-3'>Leading globally</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Denmark</td>
                <td className='p-3'>6.6</td>
                <td className='p-3'>8th&ndash;10th</td>
                <td className='p-3'>5.9</td>
                <td className='p-3'>Fast-growing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='my-4'>
          Beyond volume, these markets command premium prices. Nordic buyers consistently pay above-average for certified and traceable coffee. The CBI reports that average prices paid by Scandinavian importers exceed the European mean, driven by their preference for certified, high-quality lots.
        </p>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
          <h4 className='font-bold mb-2'>Nordic Light-Roast Culture</h4>
          <p className='text-sm text-gray-700'>
            Scandinavian roasters pioneered the light-roast movement that now defines third-wave coffee worldwide. This roasting style preserves origin character, acidity, and floral notes, which is exactly what Ethiopian Yirgacheffe, Guji, and Sidamo coffees deliver. Ethiopian heirloom varieties roasted light produce cup profiles that Nordic consumers actively seek: jasmine, bergamot, stone fruit, and citrus.
          </p>
        </div>
      </section>

      {/* Section 2: Country Profiles */}
      <section id='country-profiles'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
          2. Country-by-Country Market Profiles
        </h3>

        <h4 className='text-xl font-bold mt-8 mb-4'>Sweden</h4>
        <p className='my-4'>
          Sweden is the largest Nordic coffee market by total volume. Four large roasters, Arvid Nordquist, G&euml;valia (Jacobs Douwe Egberts), L&ouml;fbergs, and Zo&eacute;gas (Nestl&eacute;), control approximately 84% of the retail market. Most large roasters buy 100% certified coffee. G&euml;valia is the exception, offering only uncertified but exclusively Arabica products.
        </p>
        <p className='my-4'>
          Sweden also has a thriving specialty segment. Stockholm, Gothenburg, and Malm&ouml; are home to dozens of micro-roasters who source directly or via trade agents. The <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>traceability and origin storytelling</Link> that Ethiopian coffee offers resonates strongly with these buyers.
        </p>

        <h4 className='text-xl font-bold mt-8 mb-4'>Norway</h4>
        <p className='my-4'>
          Norway punches above its weight in specialty coffee. Oslo-based companies like Nordic Approach (now majority-owned by Neumann Kaffee Gruppe) and Tropiq are leading trade agents that connect Ethiopian exporters with Scandinavian roasters. Norway&rsquo;s largest roaster, Joh. Johannson Kaffe, buys 100% certified coffee. Norway is not an EU member but participates in the European Economic Area (EEA), meaning EU food safety regulations apply in practice. Norway has also enacted its own Transparency Act (2022), which imposes supply chain due diligence requirements on companies exceeding NOK 70 million in revenue.
        </p>

        <h4 className='text-xl font-bold mt-8 mb-4'>Finland</h4>
        <p className='my-4'>
          Finland consumes more coffee per person than any other nation. Paulig, Gustav Paulig&rsquo;s legacy company, dominates the Finnish market and sources globally. Finnish consumers favor filter-brewed light roasts, making <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> washed coffees a strong fit. Finland&rsquo;s specialty scene, centered in Helsinki, Turku, and Tampere, is expanding quickly as younger consumers shift toward single-origin and micro-lot purchases.
        </p>

        <h4 className='text-xl font-bold mt-8 mb-4'>Denmark</h4>
        <p className='my-4'>
          Denmark&rsquo;s coffee culture blends with its design-forward lifestyle. Copenhagen is home to multiple World Barista Championship finalists and influential specialty roasters. Danish buyers value sustainability, traceability, and clean cup profiles. Denmark&rsquo;s lower per-capita consumption relative to its neighbors reflects a higher share of espresso-based drinks and specialty-forward cafes rather than lower overall demand. For Ethiopian exporters, Denmark represents an entry into high-margin specialty channels.
        </p>
      </section>

      {/* Section 3: Buyer Segments */}
      <section id='buyer-segments'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
          3. Buyer Segments and Sales Channels
        </h3>

        <div className='grid md:grid-cols-2 gap-6 my-6'>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Large Roasters</h4>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li>Buy via international trading companies (NKG, LDC, ECOM, Volcafe) or directly from origin exporters</li>
              <li>Minimum first purchase: typically 1 container (21 tonnes)</li>
              <li>Require certification (Rainforest Alliance, Fairtrade, or Organic)</li>
              <li>Focus on consistent quality and volume over multiple seasons</li>
              <li>Payment terms: 30&ndash;180 days</li>
            </ul>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Small and Micro Roasters</h4>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li>Buy via Scandinavian trade agents (Nordic Approach, Tropiq) or directly from exporters</li>
              <li>Volumes: 1&ndash;10 bags to partial containers</li>
              <li>Personal relationships and farm stories matter more than certification</li>
              <li>Willing to pay premium prices for traceable, high-scoring lots</li>
              <li>Often visit origin and request <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>pre-shipment samples</Link></li>
            </ul>
          </div>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-6'>
          <h4 className='font-bold mb-2'>Trade Agents: Your Nordic Market Bridge</h4>
          <p className='text-sm text-gray-700'>
            Most small-to-medium Nordic roasters source through local trade agents who hold stock in European warehouses (often in Belgium or Hamburg). Working with a trade agent gives the exporter access to dozens of roaster accounts without managing each relationship individually. Choose agents carefully; most prefer exclusive offerings from each origin supplier to differentiate their portfolio.
          </p>
        </div>
      </section>

      {/* Section 4: Regulations */}
      <section id='regulations'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
          4. EU and Norwegian Regulatory Framework
        </h3>

        <p className='my-4'>
          Sweden, Finland, and Denmark are EU member states. Norway participates in the EEA, which extends EU single-market rules to EFTA countries. In practice, the same food safety and import regulations apply across all four markets. Key regulations include:
        </p>

        <ul className='list-disc ml-5 space-y-2 my-4'>
          <li><strong>General Food Law</strong> (EC 178/2002): Requires traceability one step forward, one step back through the supply chain.</li>
          <li><strong>Contaminants Regulation</strong> (EC 1881/2006): Sets maximum levels for ochratoxin A (5 &mu;g/kg for roasted coffee, 10 &mu;g/kg for soluble).</li>
          <li><strong>Pesticide Residues</strong> (EC 396/2005): Maximum residue limits (MRLs) for pesticides. DDT, endosulfan, and several other chemicals are banned.</li>
          <li><strong>Microbiological Criteria</strong> (EC 2073/2005): Food safety and process hygiene standards.</li>
        </ul>

        <h4 className='text-xl font-bold mt-8 mb-4'>EUDR Compliance</h4>
        <p className='my-4'>
          The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EU Deforestation Regulation (EUDR)</Link> requires importers to demonstrate that coffee was not produced on land deforested after December 31, 2020. Exporters must provide geolocation data for sourcing areas. Ethiopian exporters with strong traceability systems, including GPS coordinates of washing stations and farm clusters, are well-positioned to meet EUDR requirements.
        </p>

        <h4 className='text-xl font-bold mt-8 mb-4'>Norway&rsquo;s Transparency Act</h4>
        <p className='my-4'>
          Norway&rsquo;s &Aring;penhetsloven (Transparency Act), effective July 2022, requires companies meeting two of three thresholds (NOK 70M revenue, NOK 35M assets, 50+ employees) to conduct supply chain due diligence on human rights and working conditions. Norwegian buyers increasingly request documentation on labor practices, fair pricing, and community impact at the farm level. Ethio Coffee&rsquo;s <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>traceability infrastructure</Link> addresses these requirements directly.
        </p>

        <h4 className='text-xl font-bold mt-8 mb-4'>Trade Tariffs</h4>
        <p className='my-4'>
          Green coffee (HS 0901.11, 0901.12) enters the EU and Norway duty-free under the Everything But Arms (EBA) preferential arrangement for least developed countries. Ethiopia qualifies for EBA, meaning zero customs duty on green coffee exports to all four Nordic markets. Roasted coffee attracts 7.5% duty; decaffeinated roasted coffee 9%.
        </p>
      </section>

      {/* Section 5: Certification */}
      <section id='certification'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
          5. Certification Requirements
        </h3>

        <p className='my-4'>
          Certification is more important in the Nordic market than in nearly any other European region. According to CBI research, approximately 90% of coffee sold through Scandinavian supermarkets carries at least one sustainability label. The three dominant certifications are Rainforest Alliance, Fairtrade, and EU/USDA Organic.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Certification</th>
                <th className='p-3 text-left font-bold'>Nordic Relevance</th>
                <th className='p-3 text-left font-bold'>Ethiopian Supply</th>
                <th className='p-3 text-left font-bold'>Premium Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Rainforest Alliance</td>
                <td className='p-3'>Required by most large roasters</td>
                <td className='p-3'>Available from major cooperatives</td>
                <td className='p-3'>$0.03&ndash;$0.10/lb</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Fairtrade</td>
                <td className='p-3'>Strong consumer recognition in all four markets</td>
                <td className='p-3'>Available through cooperative unions (e.g. YCFCU, SCFCU)</td>
                <td className='p-3'>$0.20/lb minimum + $0.20 social premium</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>EU Organic</td>
                <td className='p-3'>High demand, especially in Sweden and Denmark</td>
                <td className='p-3'>Ethiopian forest and garden coffee qualifies; requires annual audit</td>
                <td className='p-3'>$0.30&ndash;$0.60/lb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='my-4'>
          For <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian coffee certifications</Link>, most certified supply flows through cooperative unions. Private exporters like Ethio Coffee can also source certified lots through vertically integrated supply chains where washing stations hold group certification.
        </p>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
          <div className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
            <p className='text-sm text-gray-700'>
              <strong>Specialty exception:</strong> Most Nordic specialty and micro roasters do not require formal certification. They verify sustainability through direct relationships, origin visits, and detailed lot documentation. If you supply traceable, high-scoring Ethiopian specialty lots, certification is not a barrier to accessing this premium segment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Shipping */}
      <section id='shipping'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineTruck className='w-8 h-8 text-amber-600' />
          6. Shipping Routes and Port Logistics
        </h3>

        <p className='my-4'>
          Ethiopian coffee ships from the port of Djibouti on the Red Sea. The standard route to Nordic ports passes through the Suez Canal into the Mediterranean, continuing through the Strait of Gibraltar and up to Northern Europe. Transit times and port options for each country:
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Destination Port</th>
                <th className='p-3 text-left font-bold'>Country</th>
                <th className='p-3 text-left font-bold'>Transit Time (FCL)</th>
                <th className='p-3 text-left font-bold'>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Gothenburg</td>
                <td className='p-3'>Sweden</td>
                <td className='p-3'>25&ndash;35 days</td>
                <td className='p-3'>Scandinavia&rsquo;s largest port; main hub for Swedish green coffee</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Oslo / Larvik</td>
                <td className='p-3'>Norway</td>
                <td className='p-3'>28&ndash;38 days</td>
                <td className='p-3'>Oslo handles most import volume; Larvik serves regional roasters</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Helsinki / Vuosaari</td>
                <td className='p-3'>Finland</td>
                <td className='p-3'>30&ndash;40 days</td>
                <td className='p-3'>Vuosaari container terminal; some shipments route via Hamburg</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Copenhagen / Aarhus</td>
                <td className='p-3'>Denmark</td>
                <td className='p-3'>25&ndash;35 days</td>
                <td className='p-3'>Aarhus handles bulk cargo; Copenhagen serves metro area</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Hamburg (transshipment)</td>
                <td className='p-3'>Germany</td>
                <td className='p-3'>22&ndash;30 days</td>
                <td className='p-3'>Major transshipment hub; many Nordic-bound containers clear here</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='my-4'>
          Many Nordic importers and trade agents maintain warehouses in Hamburg or Antwerp, clearing goods there before distributing to Nordic roasters. This hub model reduces per-container costs for smaller buyers who consolidate multiple origins. For FCL (full container load) shipments, <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>proper container stowage and hermetic packaging</Link> protect quality during the 4&ndash;6 week transit through varying climate zones.
        </p>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-6'>
          <h4 className='font-bold mb-2'>Packaging for Nordic Buyers</h4>
          <p className='text-sm text-gray-700'>
            Nordic specialty buyers expect GrainPro or equivalent hermetic liners inside jute or woven polypropylene bags. Standard 60 kg jute bags are acceptable for commercial grades, but specialty lots should use 30 kg GrainPro bags for better moisture protection and portion flexibility. See the <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>packaging guide</Link> for a full comparison.
          </p>
        </div>
      </section>

      {/* Section 7: Landed Cost */}
      <section id='landed-cost'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
          7. Landed Cost Breakdown
        </h3>

        <p className='my-4'>
          Understanding the full <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost</Link> helps Nordic buyers budget accurately and helps Ethiopian exporters set competitive FOB pricing. The table below illustrates a typical cost structure for a 19.2-tonne FCL of Grade 1 washed Ethiopian coffee shipping Djibouti to Gothenburg.
        </p>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Cost Component</th>
                <th className='p-3 text-left font-bold'>Estimated Range (USD/kg)</th>
                <th className='p-3 text-left font-bold'>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='p-3 font-bold'>FOB Djibouti</td>
                <td className='p-3'>$4.50&ndash;$8.00</td>
                <td className='p-3'>Varies by grade, origin, and season</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Ocean Freight (FCL)</td>
                <td className='p-3'>$0.15&ndash;$0.30</td>
                <td className='p-3'>Djibouti to Gothenburg/Hamburg; rate depends on line and season</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Marine Insurance</td>
                <td className='p-3'>$0.02&ndash;$0.04</td>
                <td className='p-3'>Typically 0.3%&ndash;0.5% of cargo value</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Customs Duty</td>
                <td className='p-3'>$0.00</td>
                <td className='p-3'>Zero under EBA for green coffee</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Port Handling &amp; THC</td>
                <td className='p-3'>$0.03&ndash;$0.06</td>
                <td className='p-3'>Terminal charges, unloading, inspection</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Customs Brokerage</td>
                <td className='p-3'>$0.01&ndash;$0.02</td>
                <td className='p-3'>Filing, documentation, EUDR compliance cost</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Inland Transport</td>
                <td className='p-3'>$0.02&ndash;$0.05</td>
                <td className='p-3'>Port to warehouse or roaster</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Warehousing (if applicable)</td>
                <td className='p-3'>$0.01&ndash;$0.03/month</td>
                <td className='p-3'>Only if stored in EU warehouse before delivery</td>
              </tr>
              <tr className='bg-amber-50 font-bold'>
                <td className='p-3'>Total Landed (estimated)</td>
                <td className='p-3'>$4.74&ndash;$8.50</td>
                <td className='p-3'>Grade-dependent; specialty lots at higher end</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='my-4'>
          The zero-duty access under EBA makes Ethiopian green coffee price-competitive against other origins that may face tariffs. For a detailed cost calculation methodology and worked examples, see the full <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link>.
        </p>
      </section>

      {/* Section 8: Competitive Edge */}
      <section id='competitive-edge'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineScale className='w-8 h-8 text-amber-600' />
          8. Ethiopian Coffee&rsquo;s Competitive Edge in Nordic Markets
        </h3>

        <p className='my-4'>
          The main competitors for Ethiopian coffee in Scandinavia are Brazil, Colombia, Peru, Honduras, Nicaragua, and Kenya. Ethiopia holds several distinct advantages in this market:
        </p>

        <div className='grid md:grid-cols-2 gap-6 my-6'>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Flavor Compatibility</h4>
            <p className='text-sm text-gray-700'>
              Nordic light-roast culture amplifies origin character. Ethiopian coffees from <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> deliver the floral, citrus, and stone-fruit complexity that Nordic roasters prize. No other origin produces this range of cup diversity from heirloom genetic stock.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Genetic Diversity</h4>
            <p className='text-sm text-gray-700'>
              Ethiopia harbors over 10,000 <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>heirloom coffee varieties</Link>, compared to the narrow genetic base of most producing countries. This diversity offers Nordic roasters differentiation that no blending strategy from other origins can replicate.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Duty-Free Access</h4>
            <p className='text-sm text-gray-700'>
              Ethiopia&rsquo;s EBA status means zero customs duty on green coffee imports to the EU and, via the EEA, to Norway. Brazil and Colombia do not have equivalent duty-free access for all coffee types, giving Ethiopian coffee a landed-cost advantage.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h4 className='font-bold mb-2'>Sustainability Narrative</h4>
            <p className='text-sm text-gray-700'>
              Over 95% of Ethiopian coffee grows under shade canopy in smallholder forest or garden systems. This aligns with Nordic buyers&rsquo; sustainability values without requiring expensive retrofitting. Combined with strong <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certification infrastructure</Link>, Ethiopian coffee offers a compelling sustainability story.
            </p>
          </div>
        </div>

        <div className='overflow-x-auto my-6'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Factor</th>
                <th className='p-3 text-left font-bold'>Ethiopia</th>
                <th className='p-3 text-left font-bold'>Brazil</th>
                <th className='p-3 text-left font-bold'>Colombia</th>
                <th className='p-3 text-left font-bold'>Kenya</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Cup Complexity</td>
                <td className='p-3'>High (floral, fruit, citrus)</td>
                <td className='p-3'>Medium (nutty, chocolate)</td>
                <td className='p-3'>Medium-High (balanced, citrus)</td>
                <td className='p-3'>High (blackcurrant, citrus)</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>EU Duty</td>
                <td className='p-3'>0% (EBA)</td>
                <td className='p-3'>0% (most)</td>
                <td className='p-3'>0% (FTA)</td>
                <td className='p-3'>0% (EBA)</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Variety Diversity</td>
                <td className='p-3'>10,000+ heirlooms</td>
                <td className='p-3'>Narrow (Catuai, Mundo Novo)</td>
                <td className='p-3'>Moderate (Caturra, Castillo)</td>
                <td className='p-3'>Narrow (SL-28, SL-34)</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='p-3 font-bold'>Shade Grown %</td>
                <td className='p-3'>95%+</td>
                <td className='p-3'>Low (mechanized)</td>
                <td className='p-3'>Variable</td>
                <td className='p-3'>Low-Medium</td>
              </tr>
              <tr className='border-b'>
                <td className='p-3 font-bold'>Cert. Availability</td>
                <td className='p-3'>RA, FT, Organic</td>
                <td className='p-3'>RA, UTZ, some Organic</td>
                <td className='p-3'>RA, FT, Organic</td>
                <td className='p-3'>Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Market Entry */}
      <section id='market-entry'>
        <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
          <HiOutlineLightBulb className='w-8 h-8 text-amber-600' />
          9. How to Enter the Nordic Market
        </h3>

        <p className='my-4'>
          A structured market entry strategy maximizes the chances of building lasting Nordic buyer relationships. Here is a step-by-step approach for Ethiopian exporters:
        </p>

        <ol className='list-decimal ml-5 space-y-4 my-4'>
          <li>
            <strong>Identify your buyer segment.</strong> If you can supply FCL volumes of certified coffee consistently, target large roasters directly or their preferred trading companies. If you offer specialty micro-lots, approach trade agents and micro-roasters.
          </li>
          <li>
            <strong>Prepare documentation.</strong> Assemble your export license, CLU certificates, <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>phytosanitary certificates</Link>, and EUDR geolocation data before approaching buyers. Nordic buyers expect professional documentation from day one.
          </li>
          <li>
            <strong>Send samples.</strong> Offer <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping samples</Link> of your best available lots (200&ndash;300g per sample). Include lot information: region, washing station, altitude, process, variety, SCA score, and moisture/water activity data.
          </li>
          <li>
            <strong>Attend trade fairs.</strong> The World of Coffee event rotates across European cities (it was held in Copenhagen in 2024). The Nordic Roaster Forum, Gothenburg Coffee Festival, and Helsinki Coffee Festival also provide direct access to Nordic buyers.
          </li>
          <li>
            <strong>Build the relationship.</strong> Nordic buyers value honesty, consistency, and transparency. Invite buyers to visit origin. Provide regular crop updates and be forthcoming about quality variations between seasons.
          </li>
          <li>
            <strong>Negotiate <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contract terms</Link>.</strong> Start with spot contracts for the first season. Move to forward contracts once the relationship is established. Standard payment is via letter of credit (L/C) or cash against documents (CAD), with terms of 30&ndash;60 days for new relationships.
          </li>
        </ol>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
          <h4 className='font-bold mb-2'>Working with Ethio Coffee for Nordic Market Entry</h4>
          <p className='text-sm text-gray-700'>
            Ethio Coffee Import and Export PLC sources from cooperatives and washing stations across all six major Ethiopian coffee regions: Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Our heritage sourcing network and full export documentation streamline entry into the Nordic market, whether you need a single specialty container or ongoing seasonal supply. We handle <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export documentation</Link>, <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>packaging to buyer specifications</Link>, and <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>FOB Djibouti logistics</Link>.
          </p>
        </div>
      </section>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee for the Nordic Market</h4>
        <p className='my-2'>
          Request samples, review our current offer sheet, or connect with our export team to discuss certified and specialty lots for Scandinavian delivery.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is there customs duty on Ethiopian green coffee imported to Nordic countries?</h4>
            <p className='text-sm text-gray-600'>
              No. Ethiopia qualifies for the EU&rsquo;s Everything But Arms (EBA) arrangement, which grants zero customs duty on green coffee. Norway extends equivalent treatment through the EEA. Roasted coffee, if exported, would attract 7.5% duty.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do Nordic buyers require certification for Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>
              Large Scandinavian roasters (Arvid Nordquist, L&ouml;fbergs, Zo&eacute;gas) buy almost exclusively certified coffee. Smaller specialty roasters prioritize cup quality and traceability over formal certification. Both segments value sustainability; they verify it through different mechanisms.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for shipping Ethiopian coffee to Scandinavia?</h4>
            <p className='text-sm text-gray-600'>
              For FCL shipments, one 20-foot container carries approximately 19.2 tonnes (320 bags of 60 kg). LCL shipments can start from a few pallets, though per-kilogram costs are higher. Trade agents often consolidate smaller orders from multiple origins. See the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for details.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does shipping take from Ethiopia to Nordic ports?</h4>
            <p className='text-sm text-gray-600'>
              Transit from Djibouti to major Nordic ports takes 25 to 40 days depending on the destination and shipping line. Routes through Hamburg as a transshipment hub are common and can add 3 to 5 days. Total lead time from contract to delivery, including processing and export clearance, is typically 8 to 14 weeks.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee origins are most popular in Nordic markets?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe washed coffees are the most established Ethiopian origin in Nordic light-roast specialty. Guji naturals have gained significant traction for their fruit-forward profiles. Sidamo and Limu washed lots are favored for blending and filter-focused roasters. Harar naturals appeal to roasters seeking bold, berry-driven single origins.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-holland' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the Netherlands</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the UK</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-france' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to France</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Certification</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>Choosing an Ethiopian Export Company</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Data sourced from the International Coffee Organization, CBI, European Coffee Federation, and Eurostat.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
