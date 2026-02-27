'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import AutoScrollTo from '../components/AutoScrollTo'
import ResponsiveImage from '../components/ResponsiveImage'
import Script from 'next/script'
import { 
  HiOutlineCube, 
  HiOutlineGlobeAmericas, 
  HiOutlineCreditCard, 
  HiOutlineShieldCheck, 
  HiOutlineUserGroup,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
} from 'react-icons/hi2'
import { GiCoffeeBeans } from 'react-icons/gi'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

interface FAQSection {
  title: string
  icon: ReactNode
  items: FAQItem[]
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className='border-b border-black/10 last:border-b-0'>
      <button
        onClick={onToggle}
        className='flex w-full items-center justify-between py-5 text-left font-bold text-dark hover:text-dark/70 transition-colors'
        aria-expanded={isOpen}
      >
        <span className='pr-4'>{item.question}</span>
        <span className={`flex-shrink-0 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='text-dark/90 leading-relaxed font-inconsolata space-y-3'>{item.answer}</div>
      </div>
    </div>
  )
}

function FAQSectionComponent({ section, openItems, toggleItem }: { 
  section: FAQSection
  openItems: Set<string>
  toggleItem: (id: string) => void 
}) {
  return (
    <div className='mb-12'>
      <div className='flex items-center gap-3 mb-6'>
        <span className='text-3xl text-dark'>{section.icon}</span>
        <h3 className='text-2xl font-extrabold text-dark'>{section.title}</h3>
      </div>
      <div className='rounded-lg border border-black/10 bg-white/60 px-6'>
        {section.items.map((item, index) => {
          const itemId = `${section.title}-${index}`
          return (
            <FAQAccordion
              key={itemId}
              item={item}
              isOpen={openItems.has(itemId)}
              onToggle={() => toggleItem(itemId)}
            />
          )
        })}
      </div>
    </div>
  )
}

const faqData: FAQSection[] = [
  {
    title: 'Trade Basics',
    icon: <HiOutlineAcademicCap />,
    items: [
      {
        question: 'How is green coffee traded internationally?',
        answer: (
          <>
            <p>
              Unlike most coffee origins, Ethiopian coffee is <strong>not priced against the New York C Market</strong>. Pricing is set domestically through the <strong>Ethiopian Commodity Exchange (ECX)</strong>, which establishes floor prices, manages quality grading, and handles price discovery based on grade, region, and quality.
            </p>
            <p>
              The ECX floor price applies to all Ethiopian coffee regardless of sales channel. However, not all coffee trades through the ECX auction itself. Cooperatives, unions, and vertically integrated exporters who own their own washing stations can sell directly to international buyers. This direct channel is especially common for traceable specialty lots, but the ECX floor price still sets the minimum.
            </p>
            <p>
              Export prices are quoted in <strong>USD per pound</strong>. We typically offer <strong>fixed-price contracts</strong>, giving buyers clear cost certainty. Prices vary by origin, grade (G1 through G5), and processing method (washed vs. natural). We provide transparent, itemized quotations so you know exactly what you are paying for.
            </p>
          </>
        ),
      },
      {
        question: 'What is a full container load (FCL) and why is it the standard?',
        answer: (
          <>
            <p>
              A <strong>Full Container Load (FCL)</strong> uses a standard 20-foot shipping container exclusively for your cargo. For green coffee, one FCL holds approximately:
            </p>
            <ul className='list-disc pl-5 space-y-1'>
              <li><strong>~20 metric tons</strong> (20,000 kg)</li>
              <li><strong>~44,000 lbs</strong></li>
              <li><strong>~275–320 bags</strong> at 60 kg per bag</li>
            </ul>
            <p>
              FCL is the standard because it is the most cost-efficient unit for ocean freight. The per-kg shipping cost drops significantly compared to smaller shipments. It also eliminates co-loading risk (your coffee sharing a container with other goods).
            </p>
            <p>
              <strong>LCL (Less than Container Load)</strong> is possible but rarely recommended: it costs more per kg, adds handling risk, and extends transit time. For new buyers, we encourage starting with a full container, using the mix-and-match option to diversify across multiple origins or grades.
            </p>
          </>
        ),
      },
      {
        question: 'What does FOB mean and how does pricing work?',
        answer: (
          <>
            <p>
              <strong>FOB (Free on Board)</strong> is the most common Incoterm in green coffee trade. It means the seller (us) covers all costs until the coffee is loaded onto the vessel at the export port. From that point, the buyer assumes responsibility and cost.
            </p>
            <p>
              For Ethiopian coffee, the standard export point is <strong>FOB Djibouti</strong>, the nearest major port, approximately 900 km from Addis Ababa.
            </p>
            <ul className='list-disc pl-5 space-y-1'>
              <li><strong>FOB price covers:</strong> coffee cost, inland trucking to Djibouti, port handling, and export documentation</li>
              <li><strong>Buyer arranges and pays for:</strong> ocean freight, marine insurance, import duties and customs clearance, and delivery to final destination</li>
            </ul>
            <p>
              We also offer <strong>FCA (Free Carrier)</strong> terms for air freight, where we deliver to the carrier at Addis Ababa airport or a nominated freight station.
            </p>
          </>
        ),
      },
      {
        question: 'What are the key documents in a green coffee shipment?',
        answer: (
          <>
            <p>Every international green coffee shipment requires a standard set of documents. Here is what each one does:</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Commercial Invoice:</strong> States the buyer, seller, quantity, description, and agreed price. Required for customs in your country.</li>
              <li><strong>Packing List:</strong> Details each bag's weight, lot number, and markings. Used for customs and warehouse receiving.</li>
              <li><strong>Bill of Lading (B/L):</strong> The shipping contract and title document. Issued by the shipping line. You need this to release your container at destination.</li>
              <li><strong>Certificate of Origin / ICO Certificate:</strong> Confirms the coffee originated in Ethiopia. Required by most importing countries for customs clearance and duty calculation.</li>
              <li><strong>Phytosanitary Certificate:</strong> Issued by Ethiopia's Ministry of Agriculture. Confirms the coffee is free from pests and plant diseases. Required for import into virtually every country.</li>
              <li><strong>ECX Quality & Weight Certificate:</strong> Confirms the grade and weight certified by the Ethiopian Commodity Exchange.</li>
              <li><strong>Organic / Fair Trade / Rainforest Alliance Certificates:</strong> Included when applicable for certified lots.</li>
            </ul>
            <p>We prepare and provide all of the above as part of every shipment.</p>
          </>
        ),
      },
      {
        question: 'What import regulations should I be aware of in my country?',
        answer: (
          <>
            <p>Import requirements vary by destination. Here are the key ones to know:</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                <strong>United States:</strong> FDA Prior Notice required before shipment arrives. No specific coffee import duty (MFN rate is 0%) for green, unroasted coffee. Your customs broker handles entry and FDA clearance.
              </li>
              <li>
                <strong>European Union:</strong> Subject to the <strong>EU Deforestation Regulation (EUDR)</strong>, which requires due diligence documentation proving the coffee was not grown on deforested land. We provide the traceability data needed. Standard import duty on green coffee (unroasted) is 0% under MFN tariff.
              </li>
              <li>
                <strong>United Kingdom:</strong> Similar to EU. Phytosanitary certificate required. Green coffee is duty-free under the UK Global Tariff.
              </li>
              <li>
                <strong>Canada:</strong> No coffee-specific import duty. Health Canada food safety regulations apply. Phytosanitary certificate required.
              </li>
              <li>
                <strong>Australia:</strong> DAFF (Dept. of Agriculture) biosecurity import permit may be required. Phytosanitary certificate mandatory.
              </li>
            </ul>
            <p>
              We recommend working with a licensed customs broker in your country. They handle the paperwork, calculate duties, and ensure your shipment clears without delays. We provide all export-side documentation to support your broker.
            </p>
          </>
        ),
      },
      {
        question: 'What is the typical timeline from order to delivery?',
        answer: (
          <>
            <p>Here is a realistic timeline for a standard FCL order:</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Week 1–2:</strong> Sample approval, quotation, contract signing, and deposit payment</li>
              <li><strong>Week 2–4:</strong> Coffee is prepared, quality-checked, bagged, and loaded in Addis Ababa</li>
              <li><strong>Week 4–5:</strong> Inland transport to Djibouti port, customs clearance, and vessel loading</li>
              <li><strong>Transit (ocean):</strong> 2–3 weeks to Middle East, 4–5 weeks to Europe, 6–8 weeks to North America or East Asia</li>
              <li><strong>Destination:</strong> Port arrival, customs clearance (3–10 days depending on country), and delivery to your warehouse</li>
            </ul>
            <p>
              Total time from contract to warehouse: typically <strong>8–14 weeks</strong> depending on destination. Planning your inventory around this lead time is key.
            </p>
          </>
        ),
      },
      {
        question: 'What is a pre-shipment sample (PSS) and do I need one?',
        answer: (
          <>
            <p>
              A <strong>Pre-Shipment Sample (PSS)</strong> is a small quantity (typically 300–500g) pulled from the actual lot that will be loaded into your container. It is sent to you for cupping and approval before shipment begins.
            </p>
            <p>
              PSS approval is standard practice in specialty coffee trade and strongly recommended. It serves as your final quality check and creates a reference point: if the received coffee differs significantly from the PSS, you have documented grounds for a quality claim.
            </p>
            <p>
              We provide PSS as part of every wholesale export order, accompanied by cupping notes, physical analysis, and lot documentation.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: 'Ordering & Samples',
    icon: <GiCoffeeBeans />,
    items: [
      {
        question: 'How can I buy green coffee from Ethio Coffee?',
        answer: (
          <>
            <p>
              Browse our{' '}
              <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70'>
                Current Offerings
              </Link>, then{' '}
              <Link href='/contact-us' className='underline underline-offset-4 hover:text-dark/70'>
                request a quote
              </Link>{' '}
              for the coffees you're interested in. If a lot is listed as Future Lots, join our allocation list to be notified when it's available.
            </p>
            <p>
              From there, we'll provide a formal quotation, finalize terms, and handle all export documentation and logistics coordination.
            </p>
          </>
        ),
      },
      {
        question: 'Can I purchase a sample before placing a larger order?',
        answer: (
          <>
            <p>
              Yes! You can order free evaluation samples directly from any{' '}
              <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70'>product page</Link>.
              We offer <strong>100g and 300g</strong> sample sizes for roast profiling and cupping. Simply select your preferred size and complete checkout via PayPal - no quote request needed.
            </p>
            <p>
              <strong>Samples are free.</strong> A flat <strong>$50 worldwide shipping fee</strong> applies. Samples ship directly from Ethiopia.
            </p>
          </>
        ),
      },
      {
        question: 'How is the coffee packaged?',
        answer: (
          <p>
            Green coffee ships in <strong>GrainPro hermetic liners</strong> inside jute bags industry standard for quality preservation. Standard sizes are <strong>60 kg</strong> or <strong>30 kg</strong> bags. Vacuum-sealed options available for micro-lots.
          </p>
        ),
      },
      {
        question: 'What is the minimum order quantity (MOQ)?',
        answer: (
          <>
            <p>
      Our <strong>minimum order quantity is one full container load (FCL)</strong>, approximately <strong>20 metric tons / 44,000 lbs</strong>, or roughly 275–320 bags (60 kg each). This is the standard unit of international green coffee trade and the most cost-effective option for ocean freight.
            </p>
            <p>
              <strong>Mix and match:</strong> You can fill a full container with <strong>different coffee types and grades</strong> to create a diverse selection that meets your customers' needs.
            </p>
            <p>
              <strong>Less than full load:</strong> While we can ship less than a full container load in a full container, our strong recommendation is to maximize value by ordering a full container. Partial loads may incur additional per-unit costs.
            </p>
            <p>
              <strong>Sample orders:</strong> Order free evaluation samples (100g or 300g) directly from any product page via PayPal. Samples are free; a flat $50 shipping fee applies.
            </p>
          </>
        ),
      },
      {
        question: 'Does Ethio Coffee offer certified coffees?',
        answer: (
          <>
            <p>
              Yes depending on availability, we offer <strong>Organic</strong> (USDA/EU), <strong>Fair Trade</strong>, and <strong>Rainforest Alliance</strong> certified coffees.
            </p>
            <p>
              Certified lots have limited availability and may require advance booking. All certification documentation is provided with your shipment.
            </p>
          </>
        ),
      },
      {
        question: 'What traceability information do you provide?',
        answer: (
          <p>
            Each lot includes: <strong>region/woreda</strong>, <strong>washing station or cooperative</strong>, <strong>altitude</strong>, <strong>variety</strong>, <strong>processing method</strong>, <strong>harvest season</strong>, and <strong>cup score</strong> (when available). We can also share producer stories and origin photos for storytelling and marketing.
          </p>
        ),
      },
      {
        question: 'What coffee regions does Ethio Coffee source from?',
        answer: (
          <p>
            We source from Ethiopia's premier growing regions: <strong>Yirgacheffe</strong>, <strong>Sidama</strong>, <strong>Guji</strong>, <strong>Harrar</strong>, <strong>Limu</strong>, and <strong>Jimma/Kaffa</strong>. Each region has distinct flavor characteristics see our{' '}
            <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70'>
              offerings page
            </Link>{' '}
            for current availability and detailed tasting notes.
          </p>
        ),
      },
      {
        question: 'How can I verify quality before committing?',
        answer: (
          <>
            <p>
              We provide multiple quality assurances:
            </p>
            <ul className='list-disc pl-5 space-y-1'>
              <li><strong>Pre-shipment samples (PSS):</strong> Approve the exact lot before we ship</li>
              <li><strong>SCA cupping scores</strong> and detailed tasting notes</li>
              <li><strong>Physical analysis:</strong> Screen size, moisture, defect counts on request</li>
              <li><strong>Third-party inspection</strong> available if required</li>
            </ul>
          </>
        ),
      },
      {
        question: 'Where is the coffee stored?',
        answer: (
          <>
            <p>
              <strong>Ethiopia:</strong> Climate-controlled warehouses in Addis Ababa maintain optimal conditions during pre-export staging. All coffee is stored in GrainPro-lined bags to preserve quality until shipment.
            </p>
            <p>
              Once shipped, coffee is delivered directly to your designated port or warehouse. We coordinate with your freight forwarder to ensure smooth handoff and can recommend trusted logistics partners if needed.
            </p>
          </>
        ),
      },
      {
        question: 'What processing methods are available?',
        answer: (
          <p>
            We offer <strong>Washed</strong> (clean, bright acidity), <strong>Natural</strong> (fruity, full-bodied), and <strong>Honey</strong> (balanced sweetness) processed coffees. Each lot on our offerings page shows its processing method.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Shipping & Logistics',
    icon: <HiOutlineGlobeAmericas />,
    items: [
      {
        question: 'Where does Ethio Coffee ship to?',
        answer: (
          <p>
            We export worldwide primary markets include the <strong>Middle East</strong>, <strong>North America</strong>, <strong>Europe</strong>, and <strong>Asia Pacific</strong>. We can ship to most countries with coffee import regulations.
          </p>
        ),
      },
      {
        question: 'What shipping terms do you offer?',
        answer: (
          <>
            <p>
              We offer flexible Incoterms:
            </p>
            <ul className='list-disc pl-5 space-y-1'>
              <li><strong>FOB Djibouti:</strong> You arrange ocean freight</li>
              <li><strong>FCA:</strong> Delivered to carrier; buyer arranges air freight</li>
            </ul>
          </>
        ),
      },
      {
        question: 'What information do you need to arrange delivery?',
        answer: (
          <p>
            Company details (legal name, address, tax ID), contact person, delivery address, and freight forwarder info if you're arranging shipping. We'll let you know if additional documents (import license, special certifications) are required for your country.
          </p>
        ),
      },
      {
        question: 'What documents come with my shipment?',
        answer: (
          <>
            <p>
              Every shipment includes:
            </p>
            <ul className='list-disc pl-5 space-y-1'>
              <li><strong>Shipping docs:</strong> Bill of Lading, Commercial Invoice, Packing List</li>
              <li><strong>Compliance docs:</strong> Certificate of Origin, Phytosanitary Certificate, ICO Certificate</li>
              <li><strong>Quality docs:</strong> ECTA Quality Certificate, Weight Certificate</li>
            </ul>
            <p>
              Certification documents (Organic, Fair Trade) included when applicable.
            </p>
          </>
        ),
      },
      {
        question: 'What should I do when my shipment arrives?',
        answer: (
          <p>
            Verify the container seal matches the B/L, count bags, check for damage, pull arrival samples for quality verification, and move to proper storage promptly. Report any issues within <strong>7 days</strong> with photos and documentation.
          </p>
        ),
      },
      {
        question: 'Can I split my order into multiple shipments?',
        answer: (
          <p>
            Yes we offer staggered deliveries, harvest allocations, and forward contracts with scheduled shipping dates. This helps manage cash flow and freshness. Additional logistics costs may apply.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    icon: <HiOutlineCreditCard />,
    items: [
      {
        question: 'How is coffee priced?',
        answer: (
          <p>
            Pricing depends on <strong>quality grade</strong>, <strong>origin/traceability</strong>, <strong>processing method</strong>, <strong>certifications</strong>, <strong>volume</strong>, and <strong>shipping terms</strong>. We provide transparent, itemized quotations in USD per pound so you know exactly what you are paying for.
          </p>
        ),
      },
      {
        question: 'What are the payment terms?',
        answer: (
          <>
            <p>
              <strong>New customers:</strong> 50% deposit, 50% against shipping documents.<br />
              <strong>Established customers:</strong> Net 30/60 may be available.<br />
              <strong>Letter of Credit:</strong> Accepted from recognized banks.
            </p>
          </>
        ),
      },
      {
        question: 'What currencies do you accept?',
        answer: (
          <>
            <p>
              <strong>USD</strong> is our standard invoicing currency for all export transactions. We may also invoice in <strong>EUR</strong> or <strong>GBP</strong> for European buyers upon request. All pricing and contracts are denominated in the agreed currency to provide clarity and avoid conversion surprises.
            </p>
          </>
        ),
      },
      {
        question: 'Are there any hidden fees?',
        answer: (
          <p>
            No. Your quotation clearly itemizes coffee cost (FOB), freight, insurance, documentation, and certification premiums. The price you agree to is the price you pay.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Quality & Returns',
    icon: <HiOutlineShieldCheck />,
    items: [
      {
        question: 'What quality standards does Ethio Coffee follow?',
        answer: (
          <>
            <p>
              We follow <strong>SCA cupping protocols</strong> and <strong>ECTA grading</strong>. Every lot is evaluated for screen size, moisture (10–12%), defect count, and density. Full traceability from farm/cooperative to export.
            </p>
          </>
        ),
      },
      {
        question: 'What if the coffee doesn\'t match the pre-shipment sample?',
        answer: (
          <p>
            Report concerns within <strong>7 days</strong> with photos and cupping notes. We retain samples from every lot for comparison. Resolution options include price adjustments, replacement coffee, or third-party arbitration.
          </p>
        ),
      },
      {
        question: 'Does Ethio Coffee offer returns or refunds?',
        answer: (
          <p>
            Returns aren't practical for international coffee trade, but we're committed to fair dealing. Quality claims for damaged or below-spec coffee are handled through compensation or insurance claims. Contact us immediately if you notice any issues.
          </p>
        ),
      },
      {
        question: 'How do you handle quality disputes?',
        answer: (
          <p>
            Most issues are resolved through direct discussion and sample comparison. For formal disputes, we follow GCA arbitration procedures. Proactive communication prevents most problems. We encourage feedback at every stage.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Working with Ethio Coffee',
    icon: <HiOutlineUserGroup />,
    items: [
      {
        question: 'Who does Ethio Coffee work with?',
        answer: (
          <p>
            Coffee importers, trading companies, specialty roasters with import capability, café chains, private labels, and distributors. Whether you need one container a year or one container a month, we're interested in building a relationship with you.
          </p>
        ),
      },
      {
        question: 'Is there a long-term contract required?',
        answer: (
          <p>
            No start with a single order to test our coffee and service. Ongoing partners enjoy priority access to limited lots, forward contract pricing, and more flexible payment terms. We earn your business through quality, not contracts.
          </p>
        ),
      },
      {
        question: 'Can Ethio Coffee source specific coffees for me?',
        answer: (
          <p>
            Yes! We offer custom sourcing: specific regions, cup profile matching, experimental processing, consistent volume programs, or private lot selection at origin. Contact us before or during harvest season for best results.
          </p>
        ),
      },
      {
        question: 'Do you provide marketing support or origin stories?',
        answer: (
          <p>
            Yes we provide lot information sheets, photos from origin, producer stories, regional context, and shareable social content. We're happy to collaborate on materials that connect your customers with Ethiopian coffee's rich heritage.
          </p>
        ),
      },
      {
        question: 'How do I get started?',
        answer: (
          <>
            <p>
              <strong>1.</strong> Browse our{' '}
              <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70'>Current Offerings</Link>.<br />
              <strong>2.</strong> Purchase samples directly from any product page via PayPal.<br />
              <strong>3.</strong>{' '}
              <Link href='/contact-us' className='underline underline-offset-4 hover:text-dark/70'>Contact us</Link>{' '}
              to discuss terms and logistics.
            </p>
            <div className='mt-4'>
              <Link
                href='/contact-us'
                className='inline-block bg-dark text-primary font-bold px-6 py-3 rounded hover:bg-dark/80 transition-colors'
              >
                Contact Us to Get Started
              </Link>
            </div>
          </>
        ),
      },
    ],
  },
]

export default function OrderingInfoPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const expandAll = () => {
    const allIds = faqData.flatMap((section) =>
      section.items.map((_, index) => `${section.title}-${index}`)
    )
    setOpenItems(new Set(allIds))
  }

  const collapseAll = () => {
    setOpenItems(new Set())
  }

  // Create FAQ schema for all questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(section => 
      section.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === 'string' ? item.answer : 
            // For React nodes, we'll extract a simple text version
            item.question.includes('buy green coffee') ? 
              'Browse our Current Offerings, then request a quote for the coffees you are interested in. From there, we will provide a formal quotation, finalize terms, and handle all export documentation and logistics coordination.' :
            item.question.includes('sample before') ? 
              'Yes! You can order free evaluation samples directly from any product page. We offer 100g and 300g sample sizes for roast profiling and cupping. Simply select your preferred size and complete checkout via PayPal. Samples are free; a flat $50 worldwide shipping fee applies.' :
            item.question.includes('packaged') ? 
              'Green coffee ships in GrainPro hermetic liners inside jute bags. Standard sizes are 60 kg or 30 kg bags. Vacuum-sealed options available for micro-lots.' :
            item.question.includes('minimum order') ? 
      'Our minimum order quantity is one full container load (FCL), approximately 20 metric tons / 44,000 lbs, or roughly 275-320 bags (60 kg each). You can mix and match different coffee types and grades to create a diverse selection. For evaluation, order free samples (100g or 300g) directly from any product page via PayPal. A flat $50 shipping fee applies.' :
            item.question.includes('certified coffees') ? 
              'Yes, depending on availability, we offer Organic (USDA/EU), Fair Trade, and Rainforest Alliance certified coffees. Certified lots have limited availability and may require advance booking.' :
            item.question.includes('traceability') ? 
              'Each lot includes: region/woreda, washing station or cooperative, altitude, variety, processing method, harvest season, and cup score (when available).' :
            item.question.includes('coffee regions') ? 
              'We source from Ethiopias premier growing regions: Yirgacheffe, Sidama, Guji, Harrar, Limu, and Jimma/Kaffa.' :
            item.question.includes('verify quality') ? 
              'We provide pre-shipment samples (PSS), SCA cupping scores, detailed tasting notes, physical analysis, and third-party inspection available if required.' :
            item.question.includes('stored') ? 
              'Climate-controlled warehouses in Addis Ababa maintain optimal conditions during pre-export staging. All coffee is stored in GrainPro-lined bags to preserve quality.' :
            item.question.includes('processing methods') ? 
              'We offer Washed (clean, bright acidity), Natural (fruity, full-bodied), and Honey (balanced sweetness) processed coffees.' :
            item.question.includes('ship to') ? 
              'We ship worldwide, with established routes to North America, Europe, Asia, Middle East, and Australia. We work with trusted freight forwarders and can arrange delivery to your designated port.' :
            item.question.includes('How long') ? 
              'Transit time depends on destination. Typical shipping times from Djibouti: 2-3 weeks to Middle East, 4-5 weeks to Europe, 6-8 weeks to North America or East Asia.' :
            item.question.includes('Who handles') ? 
              'We handle all export documentation from Ethiopia, including phytosanitary certificates, certificates of origin, and bill of lading. You are responsible for import clearance in your country.' :
            item.question.includes('Incoterms') ? 
              'We typically quote FOB (Free on Board) Djibouti Port or FCA (Free Carrier) for air freight shipments where the buyer arranges carriage. Other terms can be discussed.' :
            item.question.includes('tracking') ? 
              'Yes, we provide full shipment tracking from warehouse to port, including container number, vessel name, and estimated arrival dates.' :
            item.question.includes('payment methods') ? 
              'We accept wire transfer (T/T), Letter of Credit (L/C), and for established customers, extended payment terms may be available.' :
            item.question.includes('payment terms') ? 
              'Standard terms are 50% deposit upon order confirmation, 50% balance before shipment. For L/C, we follow standard documentary credit procedures.' :
            item.question.includes('pricing') ? 
              'Pricing is based on current market rates, coffee grade, processing method, and order volume. Request a quote for current pricing on specific lots.' :
            item.question.includes('currency') ? 
              'All quotes and invoices are in USD (United States Dollars).' :
            item.question.includes('price fluctuate') ? 
              'Yes, prices can change based on market conditions, harvest yields, and demand. We honor quoted prices for a limited period (typically 7-14 days).' :
            item.question.includes('forward contracts') ? 
              'Yes, we offer forward contracts for future harvests. This allows you to lock in pricing and secure allocation before coffee is harvested.' :
            item.question.includes('quality standards') ? 
              'All coffee is graded according to Ethiopian Commodity Exchange (ECX) standards. We provide physical and cup quality analysis for every lot.' :
            item.question.includes('defect') ? 
              'If coffee arrives with quality issues not disclosed in pre-shipment documentation, we will work with you to resolve it, including replacement, credit, or partial refund as appropriate.' :
            item.question.includes('claims') ? 
              'Quality claims must be submitted within 14 days of arrival with supporting documentation (photos, cupping notes, third-party inspection if applicable).' :
            item.question.includes('pre-shipment samples') ? 
              'Yes, we provide pre-shipment samples (PSS) before finalizing the shipment. This allows you to approve the exact lot you will receive.' :
            item.question.includes('new customers') ? 
              'We welcome new importers! Start by browsing our offerings, request samples, and reach out with questions. We are here to make your first Ethiopian coffee import smooth and successful.' :
            item.question.includes('established importers') ? 
              'We offer volume discounts, priority allocation for new lots, flexible payment terms, and dedicated account management for regular customers.' :
            item.question.includes('communicate') ? 
              'Email is our primary communication channel. We respond within 24 hours (usually much faster) and provide regular updates throughout the ordering and shipping process.' :
            item.question.includes('origin visit') ? 
              'Yes, we welcome buyer visits to Ethiopia to tour washing stations, meet producers, and cup coffees at origin. Contact us to arrange your visit.' :
            'Contact us for more information about this topic.'
        }
      }))
    )
  }

  return (
    <main className='bg-primary'>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AutoScrollTo targetId='faq-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>How to Buy Ethiopian Green Coffee</h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase text-center'>Ordering Guide &amp; Export FAQ</p>
      </header>

      {/* Coffee Importing 101 */}
      <section id='faq-content' className='bg-primary text-dark py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold text-center mb-4'>
            COFFEE IMPORTING 101
          </h2>
          <div className='w-24 h-1 bg-accent mx-auto mb-6'></div>
          <p className='text-center text-dark/80 font-inconsolata max-w-2xl mx-auto mb-16'>
            New to importing green coffee? Here is what you need to know before placing your first order.
          </p>

          {/* MOQ Callout */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='border-2 border-dark rounded-xl p-8 lg:p-10'>
              <p className='text-xs uppercase tracking-widest text-dark/70 font-inconsolata mb-6 text-center'>Minimum Order Quantity</p>
              <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-12'>
                <div className='text-center'>
                  <p className='text-4xl font-extrabold text-accent'>1 FCL</p>
                  <p className='text-sm text-dark/70 mt-1 font-inconsolata'>Full Container Load</p>
                </div>
                <p className='text-dark/40 text-3xl hidden sm:block'>=</p>
                <div className='text-center'>
                  <p className='text-4xl font-extrabold text-dark'>~20 MT</p>
                  <p className='text-sm text-dark/70 mt-1 font-inconsolata'>metric tons</p>
                </div>
                <p className='text-dark/40 text-3xl hidden sm:block'>/</p>
                <div className='text-center'>
                  <p className='text-4xl font-extrabold text-dark'>44,000 lb</p>
                  <p className='text-sm text-dark/70 mt-1 font-inconsolata'>pounds</p>
                </div>
                <p className='text-dark/40 text-3xl hidden sm:block'>/</p>
                <div className='text-center'>
                  <p className='text-4xl font-extrabold text-dark'>~300 bags</p>
                  <p className='text-sm text-dark/70 mt-1 font-inconsolata'>at 60 kg each</p>
                </div>
              </div>
              <p className='mt-6 text-sm text-dark/70 font-inconsolata text-center'>You can mix origins and grades to fill a container. No need to order one single lot.</p>
            </div>
          </div>

          {/* Two-column: Pricing + FOB */}
          <div className='flex max-lg:flex-col gap-0 max-w-5xl mx-auto mb-20'>
            <div className='lg:w-1/2 lg:pr-12'>
              <h3 className='text-3xl font-extrabold text-dark mb-5'>How Coffee is Priced</h3>
              <p className='text-dark/70 leading-relaxed mb-4'>
                Unlike most origins, Ethiopian coffee is <strong className='text-dark'>not priced against the New York C Market</strong>. The <strong className='text-dark'>Ethiopian Commodity Exchange (ECX)</strong> sets floor prices based on grade, region, and quality, and these floors apply to all Ethiopian coffee regardless of sales channel. Coffee can also trade outside the ECX auction through direct channels, especially for traceable specialty lots.
              </p>
              <p className='text-dark/70 leading-relaxed'>
                We quote <strong className='text-dark'>fixed prices in USD per pound</strong>. Prices reflect grade (G1 through G5), processing method, origin, and current demand. You receive a transparent, itemized quotation with every offer.
              </p>
            </div>
            <div className='lg:w-1/2 lg:pl-12 lg:border-l-2 border-dark/15 max-lg:mt-10'>
              <h3 className='text-3xl font-extrabold text-dark mb-5'>FOB Djibouti Explained</h3>
              <p className='text-dark/70 leading-relaxed mb-4'>
                We quote <strong className='text-dark'>FOB Djibouti</strong> (Free on Board at the port of export). This means we cover all costs to load your coffee onto the vessel. From that point, you arrange and pay for ocean freight, insurance, and import clearance.
              </p>
              <p className='text-dark/70 leading-relaxed'>
                Djibouti is Ethiopia&#39;s primary export port, approximately 900 km from Addis Ababa. Transit from Djibouti to major ports: 2&#8211;3 weeks (Middle East), 4&#8211;5 weeks (Europe), 6&#8211;8 weeks (North America).
              </p>
            </div>
          </div>

          {/* Step-by-step timeline (matches About page milestones style) */}
          <div className='max-w-4xl mx-auto mb-20'>
            <h3 className='text-4xl font-extrabold text-center mb-4'>THE IMPORT PROCESS</h3>
            <div className='w-24 h-1 bg-accent mx-auto mb-16'></div>

            {[
              { title: 'Browse & Sample', desc: 'Review our current lots. Order free 100g or 300g samples via PayPal ($50 flat shipping). Cup them alongside your current program to assess fit.' },
              { title: 'Request a Quote', desc: 'Tell us the origin, grade, volume, and your preferred Incoterm. We respond within 24 hours with a transparent, itemized quotation in USD per pound.' },
              { title: 'Approve the Contract', desc: 'We issue a sales contract with all agreed terms: lot specs, price, payment schedule, Incoterm, and shipment window. You sign and send a deposit (typically 50%).' },
              { title: 'Pre-Shipment Sample Approval', desc: 'We pull a sample directly from your lot and send it to you. You cup and approve before we load. This is your quality confirmation step.' },
              { title: 'Export & Documentation', desc: 'We prepare and provide: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, ICO Certificate, Phytosanitary Certificate, and quality docs.' },
              { title: 'Ocean Freight', desc: 'Your freight forwarder (or ours) handles ocean freight from Djibouti. We provide the B/L and all export docs. You release the container at destination with the original B/L.' },
              { title: 'Customs Clearance', desc: 'Your customs broker clears the shipment at your port. We support with any additional documentation needed. Import duties on green coffee are 0% in the US, EU, UK, and Canada.' },
              { title: 'Delivery & Final Payment', desc: 'Coffee arrives at your warehouse. Verify the seal, count bags, pull arrival samples. Final payment (balance) is made against shipping documents before or upon arrival, per your agreed terms.' },
            ].map((item, i, arr) => (
              <div key={i} className={`relative pl-8 ${i < arr.length - 1 ? 'pb-12' : 'pb-0'} border-l-2 border-dark/15`}>
                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${i === arr.length - 1 ? 'bg-accent ring-4 ring-accent/20' : 'bg-dark'}`}></div>
                <h4 className='text-2xl font-extrabold text-dark mb-3'>
                  {item.title}
                </h4>
                <p className='text-gray-700 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Documents grid */}
          <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl font-extrabold text-center text-dark mb-10'>Documents We Provide With Every Shipment</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {[
                { name: 'Commercial Invoice', desc: 'States buyer, seller, quantity, and agreed price. Required for customs.' },
                { name: 'Packing List', desc: 'Details each bag, lot number, and markings. Used for warehouse receiving.' },
                { name: 'Bill of Lading', desc: 'The title document. You need this original to release your container.' },
                { name: 'Certificate of Origin / ICO', desc: 'Confirms Ethiopian origin. Required for customs and duty calculation.' },
                { name: 'Phytosanitary Certificate', desc: "Plant health clearance from Ethiopia's Ministry of Agriculture." },
                { name: 'ECX Quality & Weight Certificate', desc: 'Grade and weight certified by the Ethiopian Commodity Exchange.' },
              ].map((doc) => (
                <div key={doc.name} className='border-2 border-dark/10 rounded-xl p-5'>
                  <p className='font-extrabold text-dark mb-2'>{doc.name}</p>
                  <p className='text-sm text-dark/80 font-inconsolata leading-relaxed'>{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Header Section - Dark background */}
      <section className='bg-dark text-primary py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-extrabold mb-4'>Frequently Asked Questions</h2>
          <div className='w-24 h-1 bg-secondary mx-auto mb-4'></div>
          <p className='text-lg text-primary/80 mb-8'>
            Find answers to common questions about ordering, shipping, payment, and more.
          </p>
          {/* Expand/Collapse Controls */}
          <div className='flex gap-4 justify-center flex-wrap'>
            <button
              onClick={expandAll}
              className='inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-semibold text-primary transition-all'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' />
              </svg>
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className='inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-semibold text-primary transition-all'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25' />
              </svg>
              Collapse All
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>

          {faqData.map((section) => (
            <FAQSectionComponent
              key={section.title}
              section={section}
              openItems={openItems}
              toggleItem={toggleItem}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className='max-w-4xl mx-auto mt-16 rounded-lg border border-black/10 bg-white/60 p-8 text-center'>
          <h3 className='text-3xl font-extrabold text-dark mb-4'>Still Have Questions?</h3>
          <p className='text-lg mb-6'>
            We're here to help. Reach out to our team and we'll get back to you within one business day.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact-us'
              className='inline-block bg-dark hover:bg-dark/90 text-primary font-bold px-6 py-4 border-2 border-dark rounded-xl transition-all shadow-sm hover:shadow-md'
            >
              Contact Us
            </Link>
            <Link
              href='/offerings'
              className='inline-block bg-white hover:bg-dark text-dark hover:text-primary font-bold px-6 py-4 border-2 border-dark rounded-xl transition-all shadow-sm hover:shadow-md'
            >
              View Offerings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
