import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCube, HiOutlineCheckCircle, HiOutlineExclamationTriangle, HiOutlineBuildingOffice } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToTurkey({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Regulations, customs duties, Red Sea shipping logistics, market insights, and sourcing guidance for Turkish roasters and importers buying Ethiopian specialty green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Insights from Ethiopian coffee sourcing and the specialty coffee industry.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to Turkey - customs regulations shipping guide for Turkish roasters and importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Turkey Market / Ethiopian Coffee Export</span>
      </div>

      <p className='my-4'>
        Turkey is one of the world&apos;s largest coffee importers. In 2024, the country brought in <a href='https://oec.world/en/profile/bilateral-product/coffee-not-roasted/reporter/tur' target='_blank' rel='noopener noreferrer'>$514 million worth of coffee</a>, ranking 20th globally by import value. Brazil dominates Turkey&apos;s supply, accounting for $333 million, but demand for African specialty origins is rising fast as Istanbul, Ankara, and Izmir develop thriving third-wave coffee scenes alongside the country&apos;s centuries-old Turkish coffee tradition.
      </p>

      <p className='my-4'>
        For Turkish roasters, cafe owners, and importers, Ethiopian coffee offers an exceptional opportunity. The flavor complexity of Yirgacheffe, Guji, and Sidamo origins stands apart from the Brazilian and Central American coffees that currently fill most Turkish supply chains. Shipping from Djibouti through the Red Sea and Suez Canal to Turkish ports takes just 7 to 10 days, giving Ethiopian exporters a notable logistics advantage over Atlantic-route origins. This guide covers everything you need to import Ethiopian coffee to Turkey: food safety regulations, customs procedures, duty rates, shipping options, landed costs, and market positioning.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Turkey imported $514M of coffee in 2024 and ranks as the 20th largest importer globally. Unroasted green coffee enters at 0% customs duty under HS 0901.11. Shipping from Djibouti to Mersin or Istanbul takes 7 to 10 days via the Red Sea. Turkish food imports require compliance with the Turkish Food Codex, a phytosanitary certificate, and customs clearance through the Ministry of Trade&apos;s electronic declaration system.</span>
        </p>
      </div>

      {/* In This Guide */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-lg font-bold mb-4'>In This Guide</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm'>
          <a href='#tr-market' className='text-dark hover:text-primary transition'>1. Why Turkey for Ethiopian Coffee</a>
          <a href='#tr-regulations' className='text-dark hover:text-primary transition'>2. Turkish Coffee Import Regulations</a>
          <a href='#tr-customs' className='text-dark hover:text-primary transition'>3. Customs Procedures &amp; Duties</a>
          <a href='#tr-shipping' className='text-dark hover:text-primary transition'>4. Shipping Ethiopian Coffee to Turkey</a>
          <a href='#tr-costs' className='text-dark hover:text-primary transition'>5. Landed Cost Breakdown</a>
          <a href='#tr-specialty' className='text-dark hover:text-primary transition'>6. Turkish Specialty Coffee Market</a>
          <a href='#tr-steps' className='text-dark hover:text-primary transition'>7. How to Import: Step by Step</a>
          <a href='#tr-working' className='text-dark hover:text-primary transition'>8. Working with an Ethiopian Exporter</a>
          <a href='#tr-faq' className='text-dark hover:text-primary transition'>9. Frequently Asked Questions</a>
        </div>
      </div>

      {/* ========== SECTION 1: WHY TURKEY ========== */}
      <h3 id='tr-market' className='text-2xl font-extrabold mt-8'>
        Why Turkey Is a Growing Market for Ethiopian Coffee
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>Turkey&apos;s Coffee Market by the Numbers</h4>
      <p className='my-4'>
        Turkey&apos;s coffee consumption has grown steadily for over a decade, driven by urbanization, rising disposable incomes, and a generational shift toward cafe culture. The numbers are compelling for exporters and importers:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>$514 million in coffee imports (2024):</span> 20th largest import market globally, with strong year-over-year growth (source: <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer'>ICO</a> / OEC trade data)</li>
        <li><span className='font-bold'>Population of 85+ million:</span> Large consumer base with growing per-capita coffee consumption alongside traditional tea</li>
        <li><span className='font-bold'>Third-wave expansion:</span> Hundreds of specialty cafes and micro-roasters have opened in Istanbul, Ankara, and Izmir since 2015</li>
        <li><span className='font-bold'>Young demographics:</span> Median age of 32.2 years; younger consumers are driving demand for single-origin and specialty coffees</li>
        <li><span className='font-bold'>UNESCO coffee heritage:</span> Turkish coffee culture is <a href='https://ich.unesco.org/en/RL/turkish-coffee-culture-and-tradition-00645' target='_blank' rel='noopener noreferrer'>inscribed on the UNESCO Intangible Cultural Heritage list</a>, sustaining deep consumer familiarity with coffee</li>
        <li><span className='font-bold'>Strategic hub:</span> Turkey re-exports processed coffee to neighboring markets including Central Asia, the Middle East, and North Africa</li>
      </ul>

      <h4 className='font-bold text-xl mb-3 mt-6'>The Ethiopia-Turkey Coffee Connection</h4>
      <p className='my-4'>
        The historical link between Ethiopian coffee and Turkey runs deeper than most buyers realize. Coffea arabica originated in Ethiopia&apos;s southwestern forests and traveled through Yemen to the Ottoman Empire, where Istanbul&apos;s first coffeehouse opened in 1554. For nearly a century (1538 to 1636), the Ottoman Empire controlled the southern Yemeni coast and the port of Mocha, the primary gateway for Ethiopian and Yemeni coffee into global trade. Turkish coffee preparation, using very finely ground beans brewed in a cezve, became a cultural institution that spread across Europe and the Middle East.
      </p>
      <p className='my-4'>
        Today, that heritage translates into commercial opportunity. Turkish consumers understand coffee quality intuitively. Ethiopian origins, the birthplace of Arabica, carry a story that resonates strongly with buyers seeking authenticity and provenance. For roasters positioning specialty Ethiopian lots in cafes or retail, the origin narrative is a built-in marketing advantage.
      </p>

      {/* ========== SECTION 2: REGULATIONS ========== */}
      <h3 id='tr-regulations' className='text-2xl font-extrabold mt-8'>
        Turkish Coffee Import Regulations
      </h3>
      <p className='my-4'>
        Turkey&apos;s food import framework is managed jointly by the <span className='font-bold'>Ministry of Agriculture and Forestry</span> and the <span className='font-bold'>Ministry of Trade</span>. As an EU accession candidate, Turkey has harmonized many of its food safety standards with EU regulations, though it maintains its own national framework. Here are the key regulatory requirements for importing green coffee:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-2xl' />
            Ministry of Agriculture and Forestry
          </h4>
          <p className='text-sm mb-3'>The Ministry oversees food safety, phytosanitary controls, and import permits for agricultural products:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Import Control Certificate:</span> Required for each shipment of green coffee; obtained through the Ministry&apos;s electronic system</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> An IPPC-standard phytosanitary certificate issued by Ethiopia&apos;s National Plant Protection Organization is mandatory</li>
            <li><span className='font-bold'>Laboratory Analysis:</span> The Ministry may sample incoming shipments for contaminant testing (aflatoxin, ochratoxin A, pesticide residues, heavy metals)</li>
            <li><span className='font-bold'>Maximum Residue Limits (MRLs):</span> Turkey follows EU-aligned MRLs for pesticides; Ethiopian coffee, much of which is de facto organic, generally passes comfortably</li>
            <li><span className='font-bold'>Port Inspection:</span> Physical inspection at the port of entry is at the Ministry&apos;s discretion based on risk assessment</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineDocumentText className='text-2xl' />
            Turkish Food Codex (Türk Gıda Kodeksi)
          </h4>
          <p className='text-sm mb-3'>The Turkish Food Codex sets the technical standards that imported food products must meet:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Contaminant Limits:</span> Maximum levels for aflatoxin B1 (5 µg/kg) and total aflatoxin (10 µg/kg) in unroasted coffee, aligned with EU Regulation 2023/915</li>
            <li><span className='font-bold'>Ochratoxin A:</span> Maximum 5 µg/kg for roasted coffee; while no specific limit for green coffee is codified, best practice is to stay below 8 µg/kg</li>
            <li><span className='font-bold'>Moisture Content:</span> Green coffee should arrive at 10 to 12.5% moisture; shipments above 12.5% face increased scrutiny</li>
            <li><span className='font-bold'>Labeling:</span> Bulk green coffee bags must display origin, grade, net weight, and lot number; consumer-facing packaging requires Turkish-language labels with full ingredient and nutritional information</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Practical Note:</span> Turkey&apos;s regulatory environment is strict on paper but efficient in practice for compliant shipments. Provide clean documentation upfront, ensure your phytosanitary certificate is current, and your Ethiopian exporter should supply a pre-shipment quality report showing moisture content and defect count. Well-documented shipments clear inspection quickly.</p>
      </div>

      {/* ========== SECTION 3: CUSTOMS & DUTIES ========== */}
      <h3 id='tr-customs' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Customs Procedures and Duties
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>HS Code Classification</h4>
      <p className='my-4'>
        Green coffee is classified under Turkey&apos;s customs tariff schedule as follows:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>HS Code</th>
              <th className='text-left py-2 pr-4'>Description</th>
              <th className='text-left py-2'>Import Duty</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.11.00</td>
              <td className='py-2'>Unroasted coffee, not decaffeinated</td>
              <td className='py-2'>0%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.12.00</td>
              <td className='py-2'>Unroasted coffee, decaffeinated</td>
              <td className='py-2'>0%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.21.00</td>
              <td className='py-2'>Roasted coffee, not decaffeinated</td>
              <td className='py-2'>8%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.22.00</td>
              <td className='py-2'>Roasted coffee, decaffeinated</td>
              <td className='py-2'>8%</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Key Advantage:</span> Turkey applies 0% customs duty on all unroasted green coffee imports, regardless of origin. This makes green coffee one of the most cost-effective agricultural commodities to import.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>VAT and Other Charges</h4>
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Turkey Coffee Import Tax Structure</h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge Type</th>
              <th className='text-left py-2 pr-4'>Rate</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Duty</td>
              <td className='py-2'>0%</td>
              <td className='py-2 text-gray-600'>Zero duty on green coffee (HS 0901.11 and 0901.12)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>KDV (Value Added Tax)</td>
              <td className='py-2'>10%</td>
              <td className='py-2 text-gray-600'>Applied on CIF value; recoverable for registered businesses</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker Fee</td>
              <td className='py-2'>~$200-500</td>
              <td className='py-2 text-gray-600'>Per shipment; varies by broker and complexity</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Port Handling / THC</td>
              <td className='py-2'>~$300-600</td>
              <td className='py-2 text-gray-600'>Terminal handling charges at port of entry</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> KDV (Katma Değer Vergisi) at 10% is Turkey&apos;s standard VAT rate for unprocessed agricultural goods. Registered importers can recover this through their regular VAT filings.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Customs Documentation Checklist</h4>
      <p className='my-4'>
        The following documents are required for customs clearance at Turkish ports:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='space-y-2 list-none'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Commercial Invoice:</span> Showing FOB/CIF value, quantity, grade, and origin details</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Bill of Lading (B/L):</span> Original ocean bill of lading or sea waybill</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Certificate of Origin:</span> Issued by the Ethiopian Chamber of Commerce or ECX</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Phytosanitary Certificate:</span> IPPC-compliant certificate from Ethiopia&apos;s plant protection authority</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Packing List:</span> Bag count, net and gross weight per bag, total shipment weight</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Insurance Certificate:</span> Marine cargo insurance covering CIF value</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>ICO Certificate of Origin:</span> International Coffee Organization certificate (Form O)</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Quality/Weight Certificate:</span> Pre-shipment quality report from CLU or independent lab</span>
          </li>
        </ul>
      </div>

      {/* ========== SECTION 4: SHIPPING ========== */}
      <h3 id='tr-shipping' className='text-2xl font-extrabold mt-8'>
        <HiOutlineTruck className='inline mr-2' />
        Shipping Ethiopian Coffee to Turkey
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>The Red Sea Advantage</h4>
      <p className='my-4'>
        Geography works in Ethiopia&apos;s favor when shipping to Turkey. Coffee leaves Ethiopia through the <span className='font-bold'>Port of Djibouti</span>, enters the Red Sea, passes through the Suez Canal, and arrives at Turkish Mediterranean or Marmara ports. The entire transit takes 7 to 10 days, significantly shorter than Atlantic routes from Brazil (25 to 30 days) or Pacific routes from Southeast Asia. This speed advantage means fresher arrivals and faster inventory turns for Turkish buyers.
      </p>

      <h4 className='font-bold text-xl mb-3 mt-6'>Key Turkish Ports for Coffee</h4>
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Port</th>
              <th className='text-left py-2 pr-4'>Location</th>
              <th className='text-left py-2 pr-4'>Transit from Djibouti</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Mersin</td>
              <td className='py-2'>Southern Turkey (Mediterranean)</td>
              <td className='py-2'>7-9 days</td>
              <td className='py-2 text-gray-600'>Turkey&apos;s largest container port; free trade zone available</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Istanbul (Ambarlı)</td>
              <td className='py-2'>Marmara Sea</td>
              <td className='py-2'>8-10 days</td>
              <td className='py-2 text-gray-600'>Closest to Istanbul&apos;s roasters and largest consumer market</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Izmir (Alsancak)</td>
              <td className='py-2'>Aegean coast</td>
              <td className='py-2'>8-10 days</td>
              <td className='py-2 text-gray-600'>Serves western Turkey; well-connected to Ankara by road</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Container Options</h4>
      <p className='my-4'>
        A standard 20-foot container holds approximately <span className='font-bold'>275 to 300 bags</span> of 60 kg green coffee (16.5 to 18 metric tons). For smaller quantities, LCL (Less than Container Load) consolidation is available through freight forwarders operating on the Djibouti-to-Turkey route, though per-unit costs are higher. Most first-time importers start with a full 20-foot container to achieve the best per-kilogram freight rate.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineTruck className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Shipping Tip:</span> Request CFR Mersin or CFR Istanbul terms from your Ethiopian exporter. Under CFR (Cost and Freight), the exporter arranges and pays for ocean freight, simplifying logistics on your end. You handle insurance and customs clearance upon arrival.</span>
        </p>
      </div>

      {/* ========== SECTION 5: COST BREAKDOWN ========== */}
      <h3 id='tr-costs' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Landed Cost Breakdown: Djibouti to Turkish Warehouse
      </h3>
      <p className='my-4'>
        The following example illustrates approximate costs for importing one 20-foot container (approximately 300 bags / 18,000 kg) of Ethiopian Grade 1 washed Yirgacheffe coffee to Mersin:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Cost Example: 20ft Container of G1 Yirgacheffe to Mersin</h4>
        <table className='w-full text-sm'>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Djibouti (18,000 kg at ~$5.50/kg)</td>
              <td className='py-2 text-right'>$99,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti to Mersin)</td>
              <td className='py-2 text-right'>$2,200 - $3,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Marine Insurance (0.3% of CIF)</td>
              <td className='py-2 text-right'>$300 - $310</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Handling &amp; THC (Mersin)</td>
              <td className='py-2 text-right'>$400 - $600</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$250 - $400</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Duty</td>
              <td className='py-2 text-right'>$0 (0%)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Inland Transport (Mersin to warehouse)</td>
              <td className='py-2 text-right'>$300 - $800</td>
            </tr>
            <tr className='border-b bg-gray-100'>
              <td className='py-2 font-bold'>Subtotal (before VAT)</td>
              <td className='py-2 text-right font-bold'>~$102,450 - $104,110</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>KDV / VAT (10% on CIF value)</td>
              <td className='py-2 text-right'>~$10,150 (recoverable)</td>
            </tr>
            <tr className='bg-amber-100'>
              <td className='py-2 font-bold'>Total Landed Cost</td>
              <td className='py-2 text-right font-bold'>~$112,600 - $114,260</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Effective cost per kg:</span> ~$6.25 to $6.35/kg landed in warehouse (before VAT recovery). After VAT recovery, the effective cost drops to approximately $5.69 to $5.78/kg. Rates vary by season, shipping line, and volume.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Cost-Reduction Strategies</h4>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Bonded warehousing:</span> Turkey&apos;s free trade zones (Mersin, Istanbul) allow deferred VAT payment until goods are released into domestic circulation</li>
        <li><span className='font-bold'>Forward contracts:</span> Lock in prices with your Ethiopian exporter 3 to 6 months ahead to avoid spot-market price spikes</li>
        <li><span className='font-bold'>Volume consolidation:</span> Partner with other Turkish roasters to share a full container, splitting freight costs while maintaining lot separation</li>
        <li><span className='font-bold'>CFR terms:</span> Let the exporter negotiate freight rates; Ethiopian exporters with volume across multiple destinations often secure better shipping rates</li>
      </ul>

      {/* ========== SECTION 6: SPECIALTY MARKET ========== */}
      <h3 id='tr-specialty' className='text-2xl font-extrabold mt-8'>
        Turkish Specialty Coffee Market Opportunity
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>Third-Wave Growth in Istanbul, Ankara, and Izmir</h4>
      <p className='my-4'>
        Turkey&apos;s specialty coffee sector has expanded rapidly. Istanbul alone had over 400 Starbucks locations by 2018, and the independent specialty scene has grown even faster since. Neighborhoods like Kadıköy, Karaköy, and Cihangir in Istanbul now host dozens of micro-roasters and single-origin-focused cafes. Ankara and Izmir have developed their own specialty clusters. Academic research from Middle East Technical University has documented this shift, noting that younger Turkish consumers are embracing third-wave coffee culture while maintaining respect for traditional Turkish coffee preparation.
      </p>
      <p className='my-4'>
        For Ethiopian coffee specifically, this dual market creates two distinct demand segments:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Segment</th>
              <th className='text-left py-2 pr-4'>Recommended Ethiopian Origins</th>
              <th className='text-left py-2'>Why It Works</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Third-wave / pour-over cafes</td>
              <td className='py-2'>Yirgacheffe G1 washed, Guji G1 washed</td>
              <td className='py-2 text-gray-600'>Bright acidity, floral and citrus notes; ideal for filter brewing and latte art</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Espresso-focused roasters</td>
              <td className='py-2'>Sidamo G2 washed, Guji natural</td>
              <td className='py-2 text-gray-600'>Balanced body with fruit sweetness; blends well or shines as single-origin espresso</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Traditional Turkish coffee</td>
              <td className='py-2'>Jimma G4/G5 natural, Sidamo natural</td>
              <td className='py-2 text-gray-600'>Full body, chocolate and berry notes; complements the intense extraction of cezve brewing</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Commercial / instant producers</td>
              <td className='py-2'>Jimma G4/G5, Limu G4</td>
              <td className='py-2 text-gray-600'>Volume availability; cost-effective for scale processing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The specialty segment is where Ethiopian origins command the strongest premiums. Turkish consumers in the specialty channel are willing to pay TRY 150 to 250+ for a 250g bag of single-origin Ethiopian roasted coffee (retail). For roasters buying green, the margin between landed cost and retail price is healthy enough to justify the sourcing investment.
      </p>

      {/* ========== SECTION 7: STEP-BY-STEP ========== */}
      <h3 id='tr-steps' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCube className='inline mr-2' />
        How to Import Ethiopian Coffee to Turkey: Step by Step
      </h3>
      <p className='my-4'>
        Here is the typical workflow for importing Ethiopian green coffee into Turkey:
      </p>

      <ol className='my-6 list-decimal ml-5 space-y-4'>
        <li>
          <span className='font-bold'>Register as an Importer</span>
          <p className='text-sm mt-1'>Obtain a Turkish tax identification number (Vergi Kimlik Numarası) and register with the Ministry of Trade&apos;s electronic customs system (BİLGE). Your customs broker can facilitate this process.</p>
        </li>
        <li>
          <span className='font-bold'>Source Coffee and Sign Contract</span>
          <p className='text-sm mt-1'>Request pre-shipment samples from your Ethiopian exporter. Evaluate quality through cupping, agree on grade, volume, price, and Incoterms (FOB Djibouti or CFR Turkish port). Sign a sales contract.</p>
        </li>
        <li>
          <span className='font-bold'>Arrange Payment</span>
          <p className='text-sm mt-1'>Common methods include Letter of Credit (L/C), Cash Against Documents (CAD), or Telegraphic Transfer (T/T). L/C is standard for first transactions; CAD and T/T are common with established relationships.</p>
        </li>
        <li>
          <span className='font-bold'>Obtain Import Control Certificate</span>
          <p className='text-sm mt-1'>Apply through the Ministry of Agriculture and Forestry&apos;s electronic portal. Submit the commercial invoice, phytosanitary certificate details, and product specifications. Processing time: 3 to 7 business days.</p>
        </li>
        <li>
          <span className='font-bold'>Ship from Djibouti</span>
          <p className='text-sm mt-1'>Your exporter arranges inland transport from Addis Ababa to Port of Djibouti and loads the container. Ocean transit to Mersin or Istanbul: 7 to 10 days.</p>
        </li>
        <li>
          <span className='font-bold'>Submit Customs Declaration</span>
          <p className='text-sm mt-1'>Your customs broker submits the electronic declaration through the BİLGE system along with all supporting documents (B/L, commercial invoice, certificate of origin, phytosanitary certificate, packing list, insurance certificate).</p>
        </li>
        <li>
          <span className='font-bold'>Clear Food Safety Inspection</span>
          <p className='text-sm mt-1'>If selected for physical inspection, Ministry officials examine documentation and may take samples for laboratory analysis. Compliant shipments with clean documentation typically clear within 1 to 3 business days.</p>
        </li>
        <li>
          <span className='font-bold'>Pay VAT and Take Delivery</span>
          <p className='text-sm mt-1'>Pay the 10% KDV at customs (or defer via free trade zone). Arrange inland transport to your warehouse or roastery. Your coffee is ready for roasting and sale.</p>
        </li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineExclamationTriangle className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Timeline:</span> From contract signing to coffee in your Turkish warehouse, expect approximately 4 to 6 weeks. This includes 1 to 2 weeks for export preparation in Ethiopia, 7 to 10 days ocean transit, and 3 to 7 days for customs clearance. First-time imports may take slightly longer as you establish your documentation workflow.</span>
        </p>
      </div>

      {/* ========== SECTION 8: WORKING WITH EXPORTER ========== */}
      <h3 id='tr-working' className='text-2xl font-extrabold mt-8'>
        <HiOutlineBuildingOffice className='inline mr-2' />
        Working with an Ethiopian Exporter
      </h3>
      <p className='my-4'>
        A reliable Ethiopian coffee exporter handles the complexity on the origin side so you can focus on your Turkish market. <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides the following for Turkish buyers:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Pre-shipment samples:</span> Cupping-ready samples of available lots before you commit to a purchase</li>
        <li><span className='font-bold'>Complete export documentation:</span> Commercial invoice, bill of lading, certificate of origin, phytosanitary certificate, ICO Form O, and quality/weight certificates</li>
        <li><span className='font-bold'>Flexible Incoterms:</span> FOB Djibouti or CFR to Mersin, Istanbul, or Izmir</li>
        <li><span className='font-bold'>Quality consistency:</span> Three decades of trusted sourcing relationships with cooperatives and washing stations across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma</li>
        <li><span className='font-bold'>Contract flexibility:</span> Spot, forward, and fixed-price contracts to match your purchasing strategy</li>
        <li><span className='font-bold'>Communication:</span> Direct contact with our team in Addis Ababa; responsive support throughout the shipping process</li>
      </ul>

      <p className='my-4'>
        With an office and warehouse in Addis Ababa and origin-connected sourcing heritage built over 30 years, Ethio Coffee Export sources from the cooperatives, washing stations, and farming communities that produce some of Ethiopia&apos;s finest lots. We understand the documentation Turkish customs requires and structure every shipment for efficient clearance. For first-time buyers and those scaling their Ethiopian coffee imports to Turkey, our team is ready to help.
      </p>

      {/* ========== SECTION 9: FAQ ========== */}
      <section id='tr-faq' className='my-10'>
        <div className='bg-gray-50 rounded-xl p-8 border border-gray-200'>
          <h3 className='text-2xl font-extrabold mb-6'>Frequently Asked Questions</h3>

          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-lg'>What is the import duty on green coffee in Turkey?</h4>
              <p className='my-2 text-sm'>
                Turkey applies 0% customs duty on unroasted green coffee under HS codes 0901.11 and 0901.12. The only tax at the border is KDV (VAT) at 10%, which is recoverable for registered businesses through standard VAT filings. Roasted coffee imports face an 8% customs duty plus VAT.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>What documents do I need to import Ethiopian coffee to Turkey?</h4>
              <p className='my-2 text-sm'>
                You need a commercial invoice, bill of lading, certificate of origin, IPPC phytosanitary certificate, packing list, insurance certificate, ICO Form O, and a quality certificate. An Import Control Certificate from the Ministry of Agriculture is also required. Your Ethiopian exporter provides the origin-side documents; your customs broker handles the Turkish declaration.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>How long does shipping from Ethiopia to Turkey take?</h4>
              <p className='my-2 text-sm'>
                Ocean transit from the Port of Djibouti to Turkish ports (Mersin, Istanbul, or Izmir) takes 7 to 10 days via the Red Sea and Suez Canal. Total time from contract signing to warehouse delivery is typically 4 to 6 weeks, including export preparation, transit, and customs clearance.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>Is there demand for Ethiopian specialty coffee in Turkey?</h4>
              <p className='my-2 text-sm'>
                Yes. Turkey&apos;s specialty coffee market is growing rapidly, particularly in Istanbul, Ankara, and Izmir. Ethiopian single-origin coffees from Yirgacheffe, Guji, and Sidamo are increasingly featured in third-wave cafes. Turkish consumers value the origin story and flavor complexity of Ethiopian Arabica. The market supports both specialty retail and traditional Turkish coffee preparation.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>Can I import a small quantity (LCL) of Ethiopian coffee to Turkey?</h4>
              <p className='my-2 text-sm'>
                Yes, LCL (Less than Container Load) shipping is available on the Djibouti-to-Turkey route through freight forwarders. However, per-kilogram shipping costs are significantly higher than FCL. Most importers find that a full 20-foot container (275 to 300 bags of 60 kg) offers the best economics. Smaller roasters can join buying groups to share a container.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='text-xl font-bold mb-2'>Source Premium Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, a leading Ethiopian coffee exporter, supplies Turkish roasters and importers with traceable Ethiopian green coffee from Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Request samples, get current pricing, or discuss your first shipment with our team.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* ========== RELATED ARTICLES ========== */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-3 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Middle East &amp; Europe Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-saudi-arabia' className='text-amber-700 hover:underline'>Importing to Saudi Arabia</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-uae' className='text-amber-700 hover:underline'>Importing to UAE</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>Understanding ECX</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Export Process Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Varieties</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========== FOOTER ========== */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A complete guide to import Ethiopian coffee to Turkey, including Turkish food safety regulations, customs duties, Red Sea shipping logistics from Djibouti to Mersin and Istanbul, landed cost analysis, and market positioning for Turkish roasters and importers. Published by Ethio Coffee Import and Export PLC. For current pricing, regulations, and shipping schedules, contact our team directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}
