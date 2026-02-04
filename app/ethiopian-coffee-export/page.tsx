import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import AutoScrollTo from '../components/AutoScrollTo'
import { HiOutlineGlobeAmericas, HiOutlineDocumentCheck, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineCube, HiOutlineBeaker } from 'react-icons/hi2'
import { GiCoffeeBeans } from 'react-icons/gi'

const exportRegions = [
  {
    name: 'Yirgacheffe',
    description: 'World-renowned specialty coffee with floral and citrus notes. Our Yirgacheffe specialty exports (SCA 84-88+) feature jasmine aromatics, lemon acidity, and tea-like body.',
    grades: 'Grade 1, Grade 2 (Specialty)',
    processing: 'Washed & Natural',
    cupScore: '84-88+',
  },
  {
    name: 'Sidamo',
    description: 'Complex specialty coffee with berry sweetness. Sidamo specialty exports offer blueberry notes, wine-like acidity, and smooth body.',
    grades: 'Grade 1, Grade 2 (Specialty)',
    processing: 'Washed & Natural',
    cupScore: '84-87+',
  },
  {
    name: 'Guji',
    description: 'Bold specialty coffee with exceptional clarity. Guji specialty exports deliver stone fruit, floral complexity, and bright acidity.',
    grades: 'Grade 1, Grade 2 (Specialty)',
    processing: 'Washed, Natural & Honey',
    cupScore: '85-89+',
  },
  {
    name: 'Harar',
    description: 'Ethiopia\'s legendary dry-processed specialty coffee. Harar exports feature wild berry, wine, and chocolate characteristics unique to this ancient region.',
    grades: 'Grade 4, Grade 5',
    processing: 'Natural (Dry)',
    cupScore: '82-86+',
  },
  {
    name: 'Limu',
    description: 'Balanced specialty washed coffee with wine notes. Limu specialty exports offer spicy undertones and medium body.',
    grades: 'Grade 2, Grade 3',
    processing: 'Washed',
    cupScore: '82-85+',
  },
  {
    name: 'Jimma',
    description: 'Commercial grade with earthy characteristics. Jimma exports serve the commercial coffee market with reliable, consistent quality.',
    grades: 'Grade 4, Grade 5',
    processing: 'Natural & Washed',
    cupScore: '78-82',
  },
]

const exportServices = [
  {
    icon: <GiCoffeeBeans className="w-8 h-8" />,
    title: 'Direct Specialty Sourcing',
    description: 'We source specialty Ethiopian coffee directly from our family estates and trusted partner farms, cupping every lot to ensure SCA 80+ quality from cherry to export.',
  },
  {
    icon: <HiOutlineBeaker className="w-8 h-8" />,
    title: 'SCA-Standard Quality Control',
    description: 'Every specialty export lot undergoes rigorous SCA protocol cupping, defect grading, and moisture testing. We only export lots that meet specialty standards.',
  },
  {
    icon: <HiOutlineDocumentCheck className="w-8 h-8" />,
    title: 'Export Documentation',
    description: 'Complete ICO certificates, phytosanitary certificates, certificates of origin, and all required export paperwork.',
  },
  {
    icon: <HiOutlineTruck className="w-8 h-8" />,
    title: 'Logistics Coordination',
    description: 'FOB Djibouti or CIF to your destination. We coordinate with trusted freight forwarders for reliable delivery.',
  },
  {
    icon: <HiOutlineCube className="w-8 h-8" />,
    title: 'Professional Packaging',
    description: 'GrainPro hermetic liners in jute bags. Standard 60kg or 30kg bags with vacuum options for micro-lots.',
  },
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    title: 'Certifications',
    description: 'Organic, Fair Trade, and Rainforest Alliance certified coffees available depending on lot availability.',
  },
]

const exportStats = [
  { value: '30+', label: 'Years Family Legacy' },
  { value: '84+', label: 'Avg. SCA Cup Score' },
  { value: '6', label: 'Specialty Regions' },
  { value: '10+', label: 'Countries Served' },
]

const EthiopianCoffeeExport = () => {
  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='export-hero' />
      
      {/* Hero Section */}
      <section id='export-hero' className='bg-dark text-primary py-20 lg:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2'>
              <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4'>
                Ethiopian Specialty Coffee Export Services
              </p>
              <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                ETHIOPIAN SPECIALTY COFFEE EXPORT
              </h1>
              <p className='text-xl text-primary/90 mb-6'>
                Export <strong>specialty-grade green coffee</strong> from Ethiopia to anywhere in the world. 
                We are your trusted <strong>Ethiopian specialty coffee export</strong> partner.
              </p>
              <p className='text-primary/80 mb-8 max-w-[60ch]'>
                Ethio Coffee Export PLC specializes in <strong>exporting Ethiopian specialty coffee</strong> - 
                SCA 80+ rated lots - to importers, roasters, and distributors worldwide. From the floral highlands 
                of Yirgacheffe to the fruity slopes of Guji, we <strong>export specialty coffee from Ethiopia</strong> with 
                full traceability, professional cupping reports, and the exceptional quality your customers expect.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link 
                  href='/offerings' 
                  className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-all'
                >
                  View Export Lots
                </Link>
                <Link 
                  href='/contact-us' 
                  className='px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark rounded-xl font-bold transition-all'
                >
                  Request Export Quote
                </Link>
              </div>
            </div>
            <div className='lg:w-1/2'>
              <ResponsiveImage
                src='/images/about-us.webp'
                alt='Ethiopian specialty coffee export - premium green coffee beans being prepared for export shipment'
                width={600}
                height={400}
                className='rounded-lg w-full'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - NEW */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4 text-center'>
              Our Story
            </p>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              A Family Legacy in Ethiopian Specialty Coffee
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                Ethio Coffee Export PLC was founded by <strong>two brothers</strong> - one rooted in Ethiopia, 
                the other in Canada. This unique partnership bridges the gap between origin and the global 
                specialty coffee market, combining deep local expertise with international business perspective.
              </p>
              <p>
                Our story begins with our father, who spent <strong>over 30 years</strong> traveling across 
                Ethiopia's coffee regions. He built relationships with farming communities, invested in his own 
                farm, and learned every detail of what makes Ethiopian coffee special - from cherry selection 
                to drying methods to the subtle differences between micro-regions.
              </p>
              <p>
                Through decades of local trade, our father witnessed a recurring problem: <strong>exceptional 
                specialty coffee</strong> often lost value between the farm gate and international markets. 
                Farmers doing the hardest work weren't always benefiting from the specialty premiums their 
                coffee deserved. Communication gaps and lack of transparency made it difficult for importers 
                to source with confidence.
              </p>
              <p>
                In <strong>2022</strong>, we formalized Ethio Coffee Export PLC to address these challenges. 
                We built an export operation focused on specialty coffee, combining our father's 30+ years of 
                origin expertise with professional documentation, clear communication, and the transparency 
                modern specialty importers need.
              </p>
              <p className='text-lg font-semibold text-dark'>
                Today, we export specialty Ethiopian coffee to roasters and importers across 40+ countries - 
                maintaining the quality standards, traceability, and relationship-based approach that our 
                family has practiced for three decades.
              </p>
            </div>
            <div className='mt-8 text-center'>
              <Link 
                href='/about' 
                className='text-accent hover:underline font-semibold inline-flex items-center gap-2'
              >
                Read Our Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* What is Specialty Coffee & Ethiopian Coffee Export Section */}
      <section className='py-20 bg-stone-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              What is Ethiopian Specialty Coffee Export?
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                <strong>Specialty coffee</strong> is defined by the Specialty Coffee Association (SCA) as coffee 
                that scores <strong>80 points or above</strong> on a 100-point scale during professional cupping 
                evaluation. This distinction sets specialty apart from commercial-grade coffee, representing the 
                top 5-10% of all coffee produced globally.
              </p>
              <p>
                <strong>Ethiopian specialty coffee export</strong> is the process of sourcing, cupping, grading, 
                and shipping these exceptional SCA 80+ rated green coffee beans from Ethiopia to international 
                markets. Ethiopia - the birthplace of Arabica coffee - produces some of the world's most 
                sought-after specialty coffees, with regions like Yirgacheffe, Guji, and Sidamo consistently 
                scoring 84-90+ points for their distinctive floral, fruity, and complex flavor profiles.
              </p>
              <p>
                What makes Ethiopian coffee ideal for <strong>specialty export</strong>? The answer lies in 
                genetics and terroir. Ethiopia is home to thousands of indigenous heirloom coffee varieties 
                that have evolved over millennia in the country's diverse microclimates. These varieties, 
                combined with traditional processing methods and ideal growing conditions (1,500-2,200m altitude), 
                produce flavor profiles impossible to replicate elsewhere.
              </p>
              <p>
                As an <strong>Ethiopian specialty coffee exporter</strong>, Ethio Coffee Export PLC handles 
                every aspect of the export process: sourcing from our family estates and trusted partners, 
                SCA-protocol cupping and grading, export licensing and documentation, specialty-grade packaging, 
                and logistics coordination to your destination port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Regions for Export */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Ethiopian Specialty Coffee Regions We Export
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              We export specialty and commercial grade green coffee from all major Ethiopian coffee regions. 
              Each origin offers unique specialty flavor profiles shaped by altitude, terroir, and traditional processing methods.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {exportRegions.map((region, index) => (
              <article key={index} className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-2xl font-bold text-dark mb-3'>
                  {region.name} Specialty Export
                </h3>
                <p className='text-dark/70 mb-4'>{region.description}</p>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-dark/60'>Available Grades:</span>
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className='py-20 bg-stone-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Our Ethiopian Specialty Coffee Export Services
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              From sourcing to shipping, we provide complete <strong>Ethiopian specialty coffee export</strong> services 
              to make importing SCA 80+ Ethiopian green coffee straightforward for your business.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {exportServices.map((service, index) => (
              <div key={index} className='bg-white rounded-xl p-8 shadow-sm'>
                <div className='text-accent mb-4'>{service.icon}</div>
                <h3 className='text-xl font-bold text-dark mb-3'>{service.title}</h3>
                <p className='text-dark/70'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Ethiopian Specialty Coffee Export Works */}
      <section className='py-20 bg-dark text-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold mb-4'>
              How Ethiopian Specialty Coffee Export Works
            </h2>
            <p className='text-primary/70 max-w-2xl mx-auto'>
              The process of exporting specialty coffee from Ethiopia involves careful quality control at every step. 
              Here's how we handle your Ethiopian specialty coffee export from start to finish.
            </p>
          </div>
          
          <div className='max-w-4xl mx-auto'>
            <div className='space-y-8'>
              {[
                {
                  step: '01',
                  title: 'Inquiry & Sample Request',
                  description: 'Contact us with your specialty requirements. We\'ll discuss volumes, cup score targets, origins, and send pre-shipment samples with detailed cupping notes for evaluation.'
                },
                {
                  step: '02',
                  title: 'Contract & Payment Terms',
                  description: 'Once you approve samples, we formalize the export contract with agreed pricing, Incoterms (FOB/CIF), and payment terms.'
                },
                {
                  step: '03',
                  title: 'Sourcing & Quality Control',
                  description: 'We source specialty lots from our family estates and partners, conduct SCA-protocol cupping, and prepare the lot to meet your specialty specifications.'
                },
                {
                  step: '04',
                  title: 'Export Documentation',
                  description: 'We prepare all required documents: ICO certificate, phytosanitary certificate, certificate of origin, cupping report, commercial invoice, and bill of lading.'
                },
                {
                  step: '05',
                  title: 'Specialty Packaging & Loading',
                  description: 'Specialty coffee is packed in GrainPro-lined jute bags to preserve quality, loaded into containers at our warehouse, and transported to Djibouti port.'
                },
                {
                  step: '06',
                  title: 'Shipment & Delivery',
                  description: 'Container ships to your destination port. We provide tracking and coordinate with your freight forwarder for smooth delivery of your specialty coffee.'
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

      {/* Export Specifications */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold text-dark mb-4'>
              Ethiopian Specialty Coffee Export Specifications
            </h2>
            <p className='text-dark/70 max-w-2xl mx-auto'>
              Technical details for importing Ethiopian specialty green coffee. All our specialty exports meet SCA standards and international food safety requirements.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Specialty Packaging Standards</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>60kg jute bags with GrainPro hermetic liners (standard)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>30kg bags available for specialty micro-lots</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Vacuum-sealed options for high-value lots</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>275-320 bags per 20ft container</span>
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
                  <span>Cup score: 80+ for specialty, varies for commercial</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Shipping Terms</h3>
              <ul className='space-y-3 text-dark/80'>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>FOB Djibouti (most common)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>CIF to major ports worldwide</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Transit time: 2-6 weeks depending on destination</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-accent font-bold'>•</span>
                  <span>Full container load (FCL) minimum</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-white rounded-xl p-8'>
              <h3 className='text-xl font-bold text-dark mb-6'>Documentation Provided</h3>
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
                  <span>SCA Cupping Report (for specialty lots)</span>
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

      {/* Why Export Ethiopian Specialty Coffee */}
      <section className='py-20 bg-stone-100'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-8 text-center'>
              Why Export Ethiopian Specialty Coffee?
            </h2>
            <div className='prose prose-lg max-w-none text-dark/90 space-y-6'>
              <p>
                <strong>Ethiopian specialty coffee export</strong> offers unique advantages for importers and roasters 
                seeking exceptional cup quality and differentiation. Here's why Ethiopian specialty coffee stands apart:
              </p>
              
              <h3 className='text-2xl font-bold text-dark mt-8'>Birthplace of Specialty Coffee</h3>
              <p>
                Ethiopia is where Coffea Arabica originated - the species that defines specialty coffee worldwide. 
                The country's indigenous heirloom varieties have evolved over millennia, creating complex flavor profiles 
                impossible to replicate elsewhere. When you <strong>export specialty coffee from Ethiopia</strong>, 
                you're sourcing from coffee's genetic homeland.
              </p>
              
              <h3 className='text-2xl font-bold text-dark mt-8'>Unmatched Flavor Diversity for Specialty Roasters</h3>
              <p>
                No other origin offers the specialty flavor range of Ethiopian coffee. From the jasmine and bergamot 
                of Yirgacheffe (SCA 84-88+) to the blueberry bomb naturals of Guji (SCA 85-89+) to the wild, winey Harars - 
                <strong>Ethiopian specialty coffee exports</strong> give roasters a palette of exceptional flavors to build their offerings around.
              </p>
              
              <h3 className='text-2xl font-bold text-dark mt-8'>Growing Specialty Consumer Demand</h3>
              <p>
                Specialty coffee consumers increasingly seek single-origin Ethiopian coffees. The name 
                "Ethiopia" on a specialty bag signals exceptional quality and authenticity. Importing Ethiopian specialty green coffee 
                helps roasters meet this demand with traceable, SCA 80+ rated products that command premium prices.
              </p>
              
              <h3 className='text-2xl font-bold text-dark mt-8'>Competitive Specialty Pricing</h3>
              <p>
                Despite its premium reputation, <strong>Ethiopian specialty coffee export</strong> pricing remains 
                competitive compared to other specialty origins like Kenya, Panama, or Colombia. Grade 1 and Grade 2 
                specialty lots (SCA 84+) offer excellent value for the exceptional cup quality delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-accent text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-extrabold mb-6'>
            Ready to Export Ethiopian Specialty Coffee?
          </h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8 text-lg'>
            Whether you're an established importer or new to <strong>Ethiopian specialty coffee export</strong>, 
            we're here to help. Request specialty samples with cupping notes, get pricing, or discuss your requirements with our team.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link 
              href='/offerings' 
              className='px-8 py-4 bg-white text-accent hover:bg-primary rounded-xl font-bold transition-all'
            >
              Browse Specialty Lots
            </Link>
            <Link 
              href='/contact-us' 
              className='px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent rounded-xl font-bold transition-all'
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-extrabold text-dark mb-12 text-center'>
              Ethiopian Specialty Coffee Export FAQ
            </h2>
            
            <div className='space-y-6'>
              {[
                {
                  q: 'What is specialty coffee and what SCA score qualifies?',
                  a: 'Specialty coffee is defined by the Specialty Coffee Association (SCA) as coffee scoring 80 points or above on a 100-point scale during professional cupping. Our Ethiopian specialty exports typically score 84-89+ points, placing them in the top tier of global specialty coffee.'
                },
                {
                  q: 'What is the minimum order for Ethiopian specialty coffee export?',
                  a: 'Our minimum order is one full container (FCL), approximately 19-21 metric tons or 275-320 bags depending on bag size. You can mix different specialty origins and grades within one container to create a diverse offering.'
                },
                {
                  q: 'What specialty grades of Ethiopian coffee can you export?',
                  a: 'We specialize in Grade 1 and Grade 2 Ethiopian coffee - both are specialty grade (SCA 80+ cup score). Grade 1 typically scores 84-89+, while Grade 2 scores 80-84+. We also export commercial grades (3-5) for blending purposes.'
                },
                {
                  q: 'Do you provide cupping reports with specialty exports?',
                  a: 'Yes, every specialty lot ships with detailed SCA-protocol cupping notes, including aroma, flavor, aftertaste, acidity, body, balance, and overall scores. We can also arrange third-party Q-grader certification if required.'
                },
                {
                  q: 'How long does Ethiopian specialty coffee export take?',
                  a: 'From order confirmation to arrival at your port, expect 4-8 weeks depending on destination. This includes 1-2 weeks for specialty lot preparation, cupping verification, and documentation, plus 2-6 weeks sea transit.'
                },
                {
                  q: 'Can you provide certified specialty Ethiopian coffee for export?',
                  a: 'Yes, we have access to Organic (USDA/EU), Fair Trade, and Rainforest Alliance certified specialty lots depending on seasonal availability. Many of our specialty coffees also qualify for single-origin and micro-lot designations.'
                },
                {
                  q: 'What makes your family different from other Ethiopian exporters?',
                  a: 'Our 30+ year family legacy in Ethiopian coffee means established relationships with farming communities and deep knowledge of what creates exceptional specialty coffee. With one brother on the ground in Ethiopia and one internationally, we bridge communication gaps that often frustrate importers.'
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

      {/* Related Links */}
      <section className='py-16 bg-stone-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-dark mb-8 text-center'>
            Learn More About Ethiopian Specialty Coffee
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/offerings' className='text-accent hover:underline font-semibold'>
              Current Specialty Offerings →
            </Link>
            <Link href='/ordering-info' className='text-accent hover:underline font-semibold'>
              Ordering & Export FAQ →
            </Link>
            <Link href='/about' className='text-accent hover:underline font-semibold'>
              Our Family Story →
            </Link>
            <Link href='/insights' className='text-accent hover:underline font-semibold'>
              Specialty Coffee Insights →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EthiopianCoffeeExport