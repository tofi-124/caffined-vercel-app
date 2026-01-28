'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import AutoScrollTo from '../components/AutoScrollTo'
import ResponsiveImage from '../components/ResponsiveImage'
import { 
  HiOutlineCube, 
  HiOutlineGlobeAmericas, 
  HiOutlineCreditCard, 
  HiOutlineShieldCheck, 
  HiOutlineUserGroup,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineNewspaper
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
    title: 'About Our Green Coffee',
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
              for the coffees you're interested in. If a lot is sold out, join our allocation list to be notified when it's available.
            </p>
            <p>
              From there, we'll provide a formal quotation, finalize terms, and handle all export documentation and logistics coordination.
            </p>
          </>
        ),
      },
      {
        question: 'Can I request a sample before placing a larger order?',
        answer: (
          <p>
            Yes! We offer 100-300g samples for roast profiling and cupping. Sample costs and shipping fees may apply depending on whether you qualify for our <strong>free sample policy</strong>. Ask us when requesting a quote.
          </p>
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
              <strong>For Middle East & North American partners:</strong> We import and stock coffee through our regional subsidiaries in Saudi Arabia (<span dir="rtl" lang="ar">إثيو كوفي للاستيراد</span>) and Canada (Ethio Coffee Company Inc.), making it easy to order smaller quantities. The minimum order is just <strong>1 bag (60 kg)</strong> for coffees available in our regional inventory - perfect for roasters who want to test a lot or maintain flexible inventory.
            </p>
            <p>
              <strong>For direct export orders:</strong> We recommend a minimum of <strong>half a container</strong> (approximately 10 metric tons) or <strong>one full container</strong> (approximately 19–21 metric tons, around 320 bags of 60 kg). Full containers are the most cost-effective option for international shipping.
            </p>
            <p>
              <strong>LCL (Less than Container Load):</strong> For international buyers needing smaller volumes, we can arrange consolidated shipments subject to shipping schedules.
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
              <strong>Ethiopia:</strong> Climate-controlled warehouses in Addis Ababa maintain optimal conditions during pre-export.
            </p>
            <p>
              <strong>Middle East:</strong> Our Saudi Arabia subsidiary (<span dir="rtl" lang="ar">إثيو كوفي للاستيراد</span>) maintains qualified food-safe warehouse facilities in Riyadh for regional spot inventory, enabling smaller orders with faster delivery for Middle East and GCC roasters.
            </p>
            <p>
              <strong>North America:</strong> Qualified food-safe warehouse in Canada for spot inventory enabling smaller orders with faster delivery for North American roasters.
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
              <li><strong>CFR/CIF:</strong> We arrange freight to your port</li>
              <li><strong>DAP:</strong> Door delivery, you clear customs</li>
              <li><strong>DDP (Middle East & North America):</strong> Full door-to-door through our regional subsidiaries, we handle everything</li>
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
            Pricing depends on <strong>quality grade</strong>, <strong>origin/traceability</strong>, <strong>processing method</strong>, <strong>certifications</strong>, <strong>volume</strong>, and <strong>shipping terms</strong>. We provide transparent, itemized quotations in USD (per kg or lb) so you know exactly what you're paying for.
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
              <strong>USD</strong> is our standard invoicing currency. <strong>Middle East partners:</strong> Transact in <strong>SAR</strong> through our Saudi entity (<span dir="rtl" lang="ar">إثيو كوفي للاستيراد</span>). <strong>Canadian partners:</strong> Transact in <strong>CAD</strong> through our Canadian entity (Ethio Coffee Company Inc.) - no currency conversion fees. We may also invoice in EUR or GBP for international buyers.
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
            Specialty roasters, importers, café chains, private labels, distributors, and industrial buyers. Whether you need one container a year or one container a month, we're interested in building a relationship with you.
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
              <strong>2.</strong> Request samples for coffees that interest you.<br />
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

  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='faq-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary text-center px-4'>ORDERING INFO & FAQ</h1>
      </header>

      {/* Two-column intro section matching About page style */}
      <section id='faq-content' className='container mx-auto px-4'>
        <div className='flex max-lg:flex-col items-center justify-center'>
          <div className='lg:w-1/2'>
            <h2 className='py-12 lg:py-24 text-5xl font-extrabold leading-tight text-dark'>
              ORDERING WITH ETHIO COFFEE
            </h2>
          </div>
          <div className='lg:w-1/2 py-2 lg:py-24 lg:px-12 lg:border-l-2 border-black'>
            <p className='my-2'>
              Everything you need to know about buying premium Ethiopian green coffee from us. Whether you're a first-time importer or an experienced roaster, we're here to make sourcing Ethiopian coffee straightforward and transparent.
            </p>
            <p className='my-4'>
              Simply visit our{' '}
              <Link href='/offerings' className='underline underline-offset-4 font-semibold hover:text-dark/70'>
                Current Offerings
              </Link>{' '}
              to see which coffees are available. Our offerings page displays all our spot coffees, as well as any coffees currently in transit or available for forward booking.
            </p>

            <h3 className='mt-8 text-3xl font-extrabold text-dark'>How It Works</h3>
            <ul className='mt-4 list-disc space-y-3 pl-5 font-inconsolata'>
              <li>
                <span className='font-bold'>Browse Offerings:</span> Explore our current lots with detailed profiles, cup scores, and availability status.
              </li>
              <li>
                <span className='font-bold'>Request Samples:</span> Try before you commit. We offer samples for evaluation and roast profiling.
              </li>
              <li>
                <span className='font-bold'>Get a Quote:</span> Tell us what you need and we'll provide a transparent, itemized quotation.
              </li>
              <li>
                <span className='font-bold'>We Handle the Rest:</span> From documentation to logistics, we make importing Ethiopian coffee easy.
              </li>
            </ul>

            <h3 className='mt-8 text-3xl font-extrabold text-dark'>Closer to You</h3>
            <p className='my-4'>
              If you're in the Middle East, our Saudi Arabia team at <strong dir="rtl" lang="ar">إثيو كوفي للاستيراد</strong> can help. If you're in North America, <strong>Ethio Coffee Company Inc.</strong> in Canada has you covered. Either way, you get local warehousing, 1-bag minimums, local currency options, and none of the usual importing complexity.
            </p>
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
              className='inline-block bg-dark text-primary font-bold px-8 py-3 rounded hover:bg-dark/80 transition-colors'
            >
              Contact Us
            </Link>
            <Link
              href='/offerings'
              className='inline-block border-2 border-dark text-dark font-bold px-8 py-3 rounded hover:bg-dark hover:text-primary transition-colors'
            >
              View Offerings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
