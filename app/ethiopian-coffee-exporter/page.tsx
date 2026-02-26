import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import { ArrowRight } from '../components/Arrow'
import AutoScrollTo from '../components/AutoScrollTo'
import { HiOutlineGlobeAmericas, HiOutlineDocumentCheck, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineCube, HiOutlineBeaker, HiOutlineChatBubbleLeftRight, HiOutlineClipboardDocumentCheck, HiOutlineShoppingBag, HiOutlineClipboardDocumentList, HiOutlineUsers, HiOutlineNewspaper, HiOutlineEnvelope } from 'react-icons/hi2'
import { GiCoffeeBeans } from 'react-icons/gi'

const exportRegions = [
  {
    name: 'Yirgacheffe',
    description: 'World-renowned for its floral and citrus notes, Yirgacheffe coffee (SCA 84-88+) features jasmine aromatics, lemon acidity, and a tea-like body. A favorite among specialty roasters globally.',
    grades: 'Grade 1 & Grade 2',
    processing: 'Washed & Natural',
    cupScore: '84-88+',
    altitude: '1,700-2,200m',
    link: '/ethiopian-coffee-yirgacheffe',
  },
  {
    name: 'Sidamo (Sidama)',
    description: 'Complex berry-forward coffee with wine-like acidity. Sidamo coffees deliver blueberry, floral, and stone fruit notes that make them a staple for single-origin offerings.',
    grades: 'Grade 1 & Grade 2',
    processing: 'Washed & Natural',
    cupScore: '84-87+',
    altitude: '1,550-2,200m',
    link: '/ethiopian-coffee-sidamo',
  },
  {
    name: 'Guji',
    description: 'Ethiopia\'s rising star in specialty coffee. Guji produces some of the highest-scoring lots in the country with remarkable stone fruit, tropical, and floral complexity.',
    grades: 'Grade 1 & Grade 2',
    processing: 'Washed, Natural & Honey',
    cupScore: '85-89+',
    altitude: '1,800-2,300m',
    link: '/ethiopian-coffee-guji',
  },
  {
    name: 'Harar',
    description: 'Ethiopia\'s legendary dry-processed coffee, Harar (Harrar) offers wild berry, wine, and dark chocolate characteristics. It is one of the world\'s oldest coffee trade varieties.',
    grades: 'Grade 4 & Grade 5',
    processing: 'Natural (Dry)',
    cupScore: '82-86+',
    altitude: '1,500-2,100m',
    link: '/ethiopian-coffee-harar',
  },
  {
    name: 'Limu',
    description: 'A balanced, well-rounded washed coffee with subtle wine and spice notes. Limu is an excellent choice for importers looking for a versatile Ethiopian origin.',
    grades: 'Grade 2 & Grade 3',
    processing: 'Washed',
    cupScore: '82-85+',
    altitude: '1,400-2,000m',
    link: '/ethiopian-coffee-limu',
  },
  {
    name: 'Jimma (Djimmah)',
    description: 'Ethiopia\'s primary commercial-grade coffee region, Jimma supplies consistent, earthy coffees ideal for blends and the commercial market segment.',
    grades: 'Grade 4 & Grade 5',
    processing: 'Natural & Washed',
    cupScore: '78-82',
    altitude: '1,400-1,800m',
    link: '/ethiopian-coffee-jimma',
  },
]

const exportServices = [
  {
    icon: <GiCoffeeBeans className="w-8 h-8" />,
    title: 'Direct Origin Sourcing',
    description: 'We source Ethiopian green coffee from vetted cooperatives, washing stations, and farming communities across all major origins. Every lot is hand-selected and cupped to meet SCA 80+ specialty standards.',
  },
  {
    icon: <HiOutlineBeaker className="w-8 h-8" />,
    title: 'SCA-Standard Quality Control',
    description: 'Rigorous SCA-protocol cupping by certified Q-graders, defect grading per ICO standards, moisture & water activity testing. Full cupping reports included with every shipment.',
  },
  {
    icon: <HiOutlineDocumentCheck className="w-8 h-8" />,
    title: 'Complete Export Documentation',
    description: 'ICO certificates, phytosanitary certificates, certificates of origin, weight & quality certificates, commercial invoices: all export paperwork handled end-to-end.',
  },
  {
    icon: <HiOutlineTruck className="w-8 h-8" />,
    title: 'Global Logistics & Shipping',
    description: 'FOB Djibouti for ocean freight or FCA (Free Carrier) for air freight. We coordinate with experienced freight forwarders and handle all export-side logistics.',
  },
  {
    icon: <HiOutlineCube className="w-8 h-8" />,
    title: 'Specialty-Grade Packaging',
    description: 'GrainPro hermetic liners inside jute bags preserve freshness. Standard 60kg or 30kg bags, with vacuum-seal options for micro-lots and premium coffees.',
  },
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    title: 'Certifications Available',
    description: 'Organic (USDA/EU), Fair Trade, and Rainforest Alliance certified coffees available depending on lot and seasonal availability.',
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-8 h-8" />,
    title: 'Dedicated Account Management',
    description: 'A single point of contact for your account with responsive communication, WhatsApp/email support, and regular updates from sourcing through shipping.',
  },
  {
    icon: <HiOutlineClipboardDocumentCheck className="w-8 h-8" />,
    title: 'Pre-Shipment Samples',
    description: 'Request roasted and green samples of any available lot before committing. Evaluate cup quality, assess roast profiles, and approve before we ship.',
  },
]

const exportStats = [
  { value: '30+', label: 'Years Family Legacy in Ethiopian Coffee' },
  { value: '84+', label: 'Average SCA Cup Score' },
  { value: '6', label: 'Premium Coffee Regions' },
  { value: '40+', label: 'Countries Served Worldwide' },
]

const whyChooseUs = [
  {
    title: 'Family-Owned, Origin-Based Ethiopian Exporter',
    description: 'Unlike trading companies or brokers, we are an Ethiopian family-owned export business based at origin. Three decades of sourcing heritage across Ethiopia\'s coffee regions give us direct access to the best lots and the trusted relationships that make consistent quality possible.',
  },
  {
    title: 'Dual Presence: Ethiopia + International',
    description: 'Founded by two brothers: one in Ethiopia managing sourcing, quality control, and logistics; the other internationally handling sales, communication, and buyer relationships. This dual presence eliminates the communication gaps that frustrate many importers.',
  },
  {
    title: 'Specialty-Focused Quality Control',
    description: 'We are not a volume-first exporter. Every lot is cupped to SCA protocol before export. We reject lots that don\'t meet our standards, protecting your business reputation and ensuring consistent quality shipment after shipment.',
  },
  {
    title: 'Full Traceability & Transparency',
    description: 'Know exactly where your coffee comes from. We provide farm/station-level traceability, GPS coordinates, altitude data, processing details, and harvest dates for every specialty lot we export.',
  },
  {
    title: 'Competitive Pricing, No Hidden Costs',
    description: 'Direct sourcing and lean operations mean competitive FOB pricing. We provide clear, all-inclusive pricing with no hidden fees. Our pricing is transparent and consistent, building long-term partnerships, not one-time transactions.',
  },
  {
    title: 'Reliable Communication & Responsiveness',
    description: 'We respond to inquiries within 24 hours. Regular shipping updates, proactive communication about delays or issues, and a genuine commitment to making your import experience smooth and stress-free.',
  },
]

const EthiopianCoffeeExporter = () => {
  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='exporter-hero' />
      
      {/* Hero Section - Primary keyword "Ethiopian Coffee Exporter" in H1 */}
      <section id='exporter-hero' className='bg-dark text-primary py-20 lg:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2'>
              <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4'>
                Trusted Ethiopian Coffee Exporter: Specialty & Commercial Green Coffee
              </p>
              <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                Ethiopian Coffee Exporter
              </h1>
              <p className='text-xl text-primary/90 mb-6'>
                We are <strong>Ethio Coffee Export PLC</strong>, a family-owned <strong>Ethiopian coffee exporter</strong> shipping 
                specialty-grade and commercial green coffee to roasters, importers, and distributors in <strong>40+ countries worldwide</strong>.
              </p>
              <p className='text-primary/80 mb-8 max-w-[60ch]'>
                From the floral highlands of Yirgacheffe to the fruit-forward slopes of Guji, we export 
                SCA 80+ specialty Ethiopian Arabica with full traceability, professional cupping reports, 
                and the direct-from-origin pricing that your business needs. As a <strong>licensed Ethiopian 
                coffee exporter</strong>, we handle everything from sourcing to shipping, so you can focus on 
                growing your business.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link 
                  href='/contact-us' 
                  className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-all'
                >
                  Request Samples & Pricing
                </Link>
                <Link 
                  href='/offerings' 
                  className='px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark rounded-xl font-bold transition-all'
                >
                  View Available Coffee Lots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Stats Band */}
      <section className='bg-accent py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {exportStats.map((stat, index) => (
              <div key={index} className='text-center text-white'>
                <div className='text-4xl lg:text-5xl font-extrabold mb-2'>{stat.value}</div>
                <div className='text-white/80 uppercase tracking-wider text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are - E-E-A-T Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4 text-center'>
              About Ethio Coffee Export PLC
            </p>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              A Family-Owned Ethiopian Coffee Exporter You Can Trust
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                <strong>Ethio Coffee Export PLC</strong> is a licensed Ethiopian coffee exporter founded by two brothers: 
                one based in Ethiopia, the other in Canada. We bridge the gap between Ethiopia's finest coffee-producing 
                regions and the global specialty market, combining <strong>30+ years of family expertise</strong> at origin 
                with the communication standards and professionalism that international buyers expect.
              </p>
              <p>
                Our story starts with our father, who spent over 30 years as a local coffee sourcer and trader in Ethiopia, 
                traveling across the country's coffee regions (Yirgacheffe, Sidamo, Guji, Harar, Limu, and beyond). 
                He built deep relationships with farming communities and an intimate knowledge of what makes 
                Ethiopian coffee exceptional: from cherry selection to drying methods to the subtle quality differences 
                between microclimates and processing stations.
              </p>
              <p>
                In <strong>2022</strong>, we formalized this multi-generational expertise into Ethio Coffee Export PLC, 
                a fully licensed Ethiopian coffee exporter registered with the Ethiopian Coffee and Tea Authority. 
                We specialize in <strong>specialty-grade green coffee export</strong>, focusing on SCA 80+ rated lots 
                from all major Ethiopian origins.
              </p>
              <p>
                What sets us apart as an <strong>Ethiopian coffee exporter</strong> is simple: we are not a faceless trading 
                company. We are a family that has lived and breathed Ethiopian coffee for decades. When you work with us, 
                you get direct access to origin, transparent pricing, consistent quality, and a partner who genuinely 
                cares about your success.
              </p>
              <p className='text-lg font-semibold text-dark'>
                Today, we export Ethiopian specialty and commercial-grade green coffee to roasters, importers, 
                and distributors in more than 40 countries, maintaining the quality standards, traceability, and 
                relationship-first approach that our family has practiced for three decades.
              </p>
            </div>
            <div className='mt-8 text-center'>
              <Link 
                href='/about' 
                className='text-accent hover:underline font-semibold inline-flex items-center gap-2'
              >
                Read Our Full Story <ArrowRight className='inline-block h-4 w-4' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us as Your Ethiopian Coffee Exporter */}
      <section className='py-20 bg-stone-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Why Choose Ethio Coffee as Your Ethiopian Coffee Exporter?
            </h2>
            <p className='text-dark/70 max-w-3xl mx-auto text-lg'>
              Choosing the right <strong>Ethiopian coffee exporter</strong> is critical for your business. 
              Here's why importers, roasters, and distributors in 40+ countries trust us as their go-to 
              Ethiopian coffee export partner.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {whyChooseUs.map((item, index) => (
              <div key={index} className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100'>
                <div className='w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-lg mb-4'>
                  {index + 1}
                </div>
                <h3 className='text-xl font-bold text-dark mb-3'>{item.title}</h3>
                <p className='text-dark/70'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is an Ethiopian Coffee Exporter - Educational SEO content */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              What Does an Ethiopian Coffee Exporter Do?
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                An <strong>Ethiopian coffee exporter</strong> is a licensed company that sources, processes, quality-controls, 
                and ships Ethiopian green coffee beans to international buyers. As the <strong>birthplace of Arabica coffee</strong>, 
                Ethiopia is the world's 5th largest coffee producer and Africa's #1 coffee exporter, making the role 
                of a reliable Ethiopian coffee exporter essential for the global specialty coffee supply chain.
              </p>
              <p>
                Ethiopian coffee exporters are licensed and regulated by the <strong>Ethiopian Coffee and Tea Authority (ECTA)</strong>. 
                To legally export coffee from Ethiopia, an exporter must hold a valid export license, comply with 
                quality standards set by the ECTA, and ensure all coffee passes through the proper grading and 
                inspection processes.
              </p>
              <p>
                The typical responsibilities of an Ethiopian coffee exporter include:
              </p>
              <ul className='list-none space-y-3 pl-0'>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Sourcing:</strong> Identifying and purchasing green coffee from farms, cooperatives, washing stations, and the Ethiopia Commodity Exchange (ECX)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Quality Control:</strong> Cupping, grading (Grade 1-5), defect sorting, and moisture testing to ensure export-quality standards</span>
                </li>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Processing & Preparation:</strong> Warehousing, re-bagging, milling, and preparing lots for export</span>
                </li>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Documentation:</strong> Obtaining ICO certificates, phytosanitary certificates, certificates of origin, and other required trade documents</span>
                </li>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Logistics:</strong> Coordinating land transport to Djibouti port and ocean freight to destination ports worldwide</span>
                </li>
                <li className='flex items-start gap-3'>
                  <ArrowRight className='text-accent h-5 w-5 flex-shrink-0' />
                  <span><strong>Relationship Management:</strong> Maintaining ongoing communication with buyers, providing samples, and building long-term trade partnerships</span>
                </li>
              </ul>
              <p>
                At <strong>Ethio Coffee Export PLC</strong>, we handle all of these responsibilities in-house, giving 
                you a single point of contact from origin to your warehouse. As a <strong>vertically integrated Ethiopian 
                coffee exporter</strong>, we oversee quality at every step, which means fewer surprises and more 
                consistent coffee shipment after shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Regions We Export */}
      <section className='py-20 bg-stone-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Ethiopian Coffee Regions We Export
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              As a multi-origin <strong>Ethiopian coffee exporter</strong>, we source from all 6 major Ethiopian 
              coffee regions. Each origin offers distinct flavor profiles shaped by altitude, terroir, heirloom 
              varieties, and traditional processing methods.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {exportRegions.map((region, index) => (
              <article key={index} className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow'>
                <Link href={region.link} className='group'>
                  <h3 className='text-2xl font-bold text-dark mb-3 group-hover:text-accent transition-colors'>
                    {region.name} Coffee Export
                  </h3>
                </Link>
                <p className='text-dark/70 mb-4'>{region.description}</p>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-dark/60'>Export Grades:</span>
                    <span className='font-semibold text-dark'>{region.grades}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-dark/60'>Processing:</span>
                    <span className='font-semibold text-dark'>{region.processing}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-dark/60'>Cup Score:</span>
                    <span className='font-semibold text-accent'>{region.cupScore}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-dark/60'>Altitude:</span>
                    <span className='font-semibold text-dark'>{region.altitude}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Export Services */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Our Ethiopian Coffee Export Services
            </h2>
            <p className='text-dark/70 max-w-3xl mx-auto'>
              As a full-service <strong>Ethiopian coffee exporter</strong>, we handle the entire export process 
              from sourcing to shipping, so you can focus on roasting, selling, and growing your business.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {exportServices.map((service, index) => (
              <div key={index} className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <div className='text-accent mb-4'>{service.icon}</div>
                <h3 className='text-lg font-bold text-dark mb-3'>{service.title}</h3>
                <p className='text-dark/70 text-sm'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order from Our Ethiopian Coffee Export Company */}
      <section className='py-20 bg-dark text-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold mb-4'>
              How to Order Ethiopian Coffee for Export
            </h2>
            <p className='text-primary/70 max-w-2xl mx-auto'>
              Working with our <strong>Ethiopian coffee export</strong> company is straightforward. 
              Here's our step-by-step process from first inquiry to delivery at your warehouse.
            </p>
          </div>
          
          <div className='max-w-4xl mx-auto'>
            <div className='space-y-8'>
              {[
                {
                  step: '01',
                  title: 'Send Us Your Requirements',
                  description: 'Tell us what you need: origins, grades, cup score targets, volumes, certifications, and destination. We\'ll respond within 24 hours with availability and indicative pricing.'
                },
                {
                  step: '02',
                  title: 'Receive & Evaluate Samples',
                  description: 'We ship pre-shipment samples (green and/or roasted) with detailed SCA cupping reports. Evaluate the coffee at your lab and let us know your feedback.'
                },
                {
                  step: '03',
                  title: 'Confirm Contract & Terms',
                  description: 'Once samples are approved, we formalize the export contract with agreed pricing, Incoterms (FOB Djibouti or FCA), payment terms, and delivery timeline.'
                },
                {
                  step: '04',
                  title: 'We Source, Cup & Prepare Your Lot',
                  description: 'We source and prepare your specific lots, conduct final SCA-protocol cupping to verify quality, and prepare all required export documentation.'
                },
                {
                  step: '05',
                  title: 'Packaging & Container Loading',
                  description: 'Coffee is packed in GrainPro-lined jute bags (60kg or 30kg), loaded into containers at our warehouse, and transported to Djibouti port for shipping.'
                },
                {
                  step: '06',
                  title: 'Shipment, Tracking & Delivery',
                  description: 'We provide bill of lading, tracking information, and coordinate with your freight forwarder for smooth delivery. Transit time: 2-6 weeks depending on destination.'
                },
              ].map((item, index) => (
                <div key={index} className='flex gap-6'>
                  <div className='flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl'>
                    {item.step}
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                    <p className='text-primary/70'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With - Persona-driven section */}
      <section className='py-20 bg-stone-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Who We Work With
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              As an <strong>Ethiopian coffee exporter</strong>, we serve a diverse range of international coffee businesses. 
              Whether you're a micro-roaster or a large-scale distributor, we have the capacity and flexibility to meet your needs.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                title: 'Specialty Coffee Roasters',
                description: 'Small to large roasters seeking traceable, high-scoring Ethiopian single origins for their retail and wholesale programs.',
              },
              {
                title: 'Green Coffee Importers',
                description: 'Trading companies and importers looking for a reliable Ethiopian supply partner to add Ethiopian origins to their portfolio.',
              },
              {
                title: 'Coffee Distributors',
                description: 'Regional and international distributors needing consistent, volume Ethiopian coffee supply for their customer base.',
              },
              {
                title: 'Private Label & Brands',
                description: 'Coffee brands and private label companies seeking premium Ethiopian coffee for their branded products and subscriptions.',
              },
            ].map((item, index) => (
              <div key={index} className='bg-white rounded-xl p-6 shadow-sm text-center'>
                <h3 className='text-lg font-bold text-dark mb-3'>{item.title}</h3>
                <p className='text-dark/70 text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Specifications */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Ethiopian Coffee Export Specifications
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              Technical details for importing green coffee from our Ethiopian coffee export company. 
              All exports meet international food safety requirements and SCA specialty standards.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Packaging Standards</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>60kg jute bags with GrainPro hermetic liners (standard)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>30kg bags available for micro-lots and specialty orders</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Vacuum-sealed options for high-value specialty lots</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>275-320 bags per 20ft container (FCL)</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Quality Standards</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Moisture content: 10-12% (target 11%)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Water activity: Below 0.60 aw</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Screen size: 14-18 depending on grade</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>SCA cup score: 80+ for specialty, varies for commercial</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Shipping & Incoterms</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>FOB Djibouti (most common for importers)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>FCA (Free Carrier) available for air freight</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Transit time: 2-6 weeks depending on destination</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Minimum order: 1x 20ft container (FCL)</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Export Documentation</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>ICO Certificate of Origin</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Phytosanitary Certificate</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Weight & Quality Certificate</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>SCA Cupping Report (for all specialty lots)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Commercial Invoice & Packing List</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ethiopian Coffee - Informational depth for SEO */}
      <section className='py-20 bg-stone-100'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              Why Ethiopia? The World's Premier Coffee Origin
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                Ethiopia is the <strong>birthplace of Coffea Arabica</strong>, the species that accounts for 
                approximately 60-70% of global coffee production and defines the specialty coffee industry. 
                With an estimated <strong>6,000+ indigenous coffee varieties</strong> (explore our guide to <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-semibold text-accent'>Ethiopian heirloom varieties</Link>), Ethiopia offers a level of genetic 
                variety and flavor complexity that no other coffee-producing country can match.
              </p>

              <h3 className='text-2xl font-bold text-dark mt-8'>Why Import from an Ethiopian Coffee Exporter?</h3>
              <p>
                For roasters and importers, sourcing from a trusted <strong>Ethiopian coffee exporter</strong> provides 
                access to some of the most distinguished and sought-after coffees in the world:
              </p>
              <ul className='space-y-2'>
                <li><strong>Unmatched flavor diversity:</strong> From the jasmine and bergamot of Yirgacheffe to the blueberry bombs of Guji naturals, Ethiopian coffee offers a flavor palette no other origin can deliver.</li>
                <li><strong>Consumer recognition:</strong> "Ethiopian" on a coffee bag signals quality and authenticity to specialty consumers worldwide, commanding premium retail prices.</li>
                <li><strong>Competitive FOB pricing:</strong> Despite its premium reputation, Ethiopian specialty coffee offers excellent value compared to other high-scoring origins like Kenya, Panama, or Colombia.</li>
                <li><strong>Year-round availability:</strong> With two main harvest seasons and diverse growing regions, quality Ethiopian coffee is available for export most months of the year.</li>
                <li><strong>Growing global demand:</strong> Specialty Ethiopian coffee demand continues to grow year-over-year, making it a reliable cornerstone for any roaster's single-origin program.</li>
              </ul>
              
              <h3 className='text-2xl font-bold text-dark mt-8'>Ethiopia Coffee Export Industry Overview</h3>
              <p>
                Ethiopia exports an estimated <strong>3.5-4 million bags (60kg)</strong> of green coffee annually, 
                making it Africa's largest coffee exporter and the world's 5th largest overall, according to the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline font-semibold text-accent'>International Coffee Organization (ICO)</a>. Coffee accounts for 
                approximately <strong>30-35% of Ethiopia's total export earnings</strong>, underscoring the coffee sector's 
                critical importance to the national economy.
              </p>
              <p>
                The Ethiopian coffee export sector includes both private exporters (like Ethio Coffee Export PLC) and 
                cooperative unions. Private Ethiopian coffee exporters play a vital role in connecting international 
                buyers with specialty lots that might otherwise be lost in the commodity pipeline. For a deeper look at how the export system works, read our guide on <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-semibold text-accent'>ECX and Ethiopian coffee export</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-accent text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-extrabold mb-6'>
            Ready to Source from a Trusted Ethiopian Coffee Exporter?
          </h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8 text-lg'>
            Whether you're an established importer or new to sourcing Ethiopian coffee, 
            we're here to help. Request samples, get pricing, or discuss your specific requirements 
            with our export team.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link 
              href='/contact-us' 
              className='px-8 py-4 bg-white text-accent hover:bg-primary rounded-xl font-bold transition-all'
            >
              Contact Us for Pricing & Samples
            </Link>
            <Link 
              href='/offerings' 
              className='px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent rounded-xl font-bold transition-all'
            >
              Browse Available Lots
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Comprehensive for "People Also Ask" and FAQ Schema */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-12 text-center'>
              Frequently Asked Questions About Ethiopian Coffee Export
            </h2>
            
            <div className='space-y-6'>
              {[
                {
                  q: 'How do I find a reliable Ethiopian coffee exporter?',
                  a: 'Look for an Ethiopian coffee exporter that is licensed by the Ethiopian Coffee and Tea Authority (ECTA), has a physical presence at origin, provides pre-shipment samples, offers transparent pricing, and can demonstrate a track record with international buyers. Ethio Coffee Export PLC meets all these criteria. We are a family-owned, licensed exporter with 30+ years of coffee industry experience.'
                },
                {
                  q: 'What is the minimum order quantity for Ethiopian coffee export?',
                  a: 'The standard minimum order for Ethiopian coffee export is one full container load (FCL), which is approximately 19-21 metric tons (275-320 bags of 60kg each). You can mix different origins and grades within one container. For smaller orders or trial shipments, we can discuss LCL (less than container load) options. Contact us for details.'
                },
                {
                  q: 'What grades of Ethiopian coffee are available for export?',
                  a: 'Ethiopian coffee is graded from Grade 1 (highest specialty) to Grade 5. Grades 1-2 are specialty grade (SCA 80+ cup score), Grade 3 is high-commercial, and Grades 4-5 are commercial. As an Ethiopian coffee exporter specializing in specialty, we primarily export Grade 1 and Grade 2, which typically score 84-89+ on the SCA scale.'
                },
                {
                  q: 'What documents are needed to import Ethiopian coffee?',
                  a: 'Your Ethiopian coffee exporter should provide: ICO Certificate of Origin, Phytosanitary Certificate, Weight & Quality Certificate, Commercial Invoice, Packing List, Bill of Lading, and SCA Cupping Report (for specialty lots). You may also need import permits from your country\'s food safety authority. We handle all export-side documentation.'
                },
                {
                  q: 'How long does shipping take from Ethiopia?',
                  a: 'From order confirmation to arrival at your destination, expect 4-8 weeks total. This includes 1-2 weeks for lot preparation and documentation, plus 2-6 weeks of ocean transit depending on your destination port. We ship FOB Djibouti (Ethiopia\'s primary export port) for ocean freight or FCA (Free Carrier) for air freight where the buyer arranges carriage.'
                },
                {
                  q: 'Do you provide samples before I commit to an order?',
                  a: 'Yes, we provide pre-shipment samples (green and roasted) with detailed SCA cupping reports for evaluation. We want you to be 100% satisfied with the cup quality before committing to a full container order. Sample requests can be made through our contact form.'
                },
                {
                  q: 'What is the difference between washed and natural Ethiopian coffee?',
                  a: 'Washed (wet-processed) Ethiopian coffee tends to have cleaner, brighter, and more complex acidity with floral and citrus notes, common in Yirgacheffe and Sidamo. Natural (dry-processed) Ethiopian coffee is typically fruitier, sweeter, and more full-bodied with berry and wine characteristics, common in Harar and Guji naturals. We export both processing types.'
                },
                {
                  q: 'Can you provide certified organic or Fair Trade Ethiopian coffee?',
                  a: 'Yes, we have access to Organic (USDA/EU certified), Fair Trade, and Rainforest Alliance certified lots depending on seasonal availability and origin. Many of our partner farms and cooperatives hold these certifications. Let us know your certification requirements when you inquire.'
                },
                {
                  q: 'What makes Ethiopian coffee different from other origins?',
                  a: 'Ethiopia is the birthplace and genetic homeland of Arabica coffee, with 6,000+ indigenous heirloom varieties that produce flavor profiles impossible to replicate elsewhere. Ethiopian coffee is known for its exceptional complexity, floral aromatics, fruit-forward notes, and bright acidity, qualities that have made it the most prized origin among specialty coffee roasters worldwide.'
                },
                {
                  q: 'How do I pay for Ethiopian coffee exports?',
                  a: 'Standard payment terms for Ethiopian coffee export include Letter of Credit (L/C), Cash Against Documents (CAD), and in some cases wire transfer with deposit. Payment terms depend on the relationship, order size, and agreed Incoterms. We\'ll discuss payment arrangements that work for both parties during the contracting stage.'
                },
              ].map((item, index) => (
                <div key={index} className='bg-white rounded-xl p-6'>
                  <h3 className='font-bold text-dark text-lg mb-3'>{item.q}</h3>
                  <p className='text-dark/70'>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links / Internal Linking */}
      <section className='py-20 bg-gradient-to-b from-stone-100 to-stone-200'>
        <div className='container mx-auto px-4 max-w-5xl'>
          <h2 className='text-3xl font-bold text-dark mb-4 text-center'>
            Explore More About Ethiopian Coffee Export
          </h2>
          <p className='text-center text-gray-500 text-sm mb-10'>
            Learn more about our processes, offerings, and the stories behind every bean.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Link
              href='/offerings'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineShoppingBag className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>Current Coffee Offerings</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Browse available lots &amp; grades</span>
              </span>
            </Link>
            <Link
              href='/ordering-info'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineClipboardDocumentList className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>How To Buy &amp; Export FAQ</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Ordering, shipping &amp; logistics</span>
              </span>
            </Link>
            <Link
              href='/about'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineUsers className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>Our Family Story</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Three generations of coffee heritage</span>
              </span>
            </Link>
            <Link
              href='/insights'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineNewspaper className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>Coffee Industry Insights</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Guides, trends &amp; market analysis</span>
              </span>
            </Link>
            <Link
              href='/ethiopia-coffee-export-news'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineGlobeAmericas className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>Ethiopia Coffee Export News</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Latest industry updates &amp; developments</span>
              </span>
            </Link>
            <Link
              href='/contact-us'
              className='group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-stone-200 hover:border-accent transition-all duration-200'
            >
              <span className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200'>
                <HiOutlineEnvelope className='w-5 h-5' />
              </span>
              <span>
                <span className='block font-semibold text-dark group-hover:text-accent transition-colors'>Contact Our Export Team</span>
                <span className='block text-xs text-gray-400 mt-0.5'>Get a quote or ask a question</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EthiopianCoffeeExporter
