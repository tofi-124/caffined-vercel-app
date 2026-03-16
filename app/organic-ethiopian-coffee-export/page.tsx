import Link from 'next/link'

export default function OrganicEthiopianCoffeeExportPage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <section className='relative bg-dark text-primary py-20 md:py-28'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <p className='uppercase tracking-[0.3em] text-primary/60 text-sm mb-4'>Certified Organic</p>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
            Organic Ethiopian Coffee Export
          </h1>
          <p className='text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed'>
            Source certified organic Ethiopian green coffee beans - USDA, EU, and JAS organic -
            from Ethiopia&apos;s finest growing regions. <strong>Ethio Coffee Import and Export PLC</strong> is a family-owned, 
            licensed Ethiopian exporter with 30+ years of sourcing heritage, shipping to importers and roasters 
            in 40+ countries. Bulk export with full traceability
            and organic chain-of-custody documentation.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link href='/offerings' className='bg-accent text-white px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              Buy Organic Samples
            </Link>
            <Link href='/contact-us' className='border border-primary/40 px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              Get Organic Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Certification badges bar */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-6 py-6 grid grid-cols-3 gap-6 text-center text-sm'>
          <div>
            <p className='font-bold text-dark text-lg'>USDA</p>
            <p className='text-dark/50 text-xs uppercase tracking-widest mt-1'>US Organic</p>
          </div>
          <div>
            <p className='font-bold text-dark text-lg'>EU</p>
            <p className='text-dark/50 text-xs uppercase tracking-widest mt-1'>European Organic</p>
          </div>
          <div>
            <p className='font-bold text-dark text-lg'>JAS</p>
            <p className='text-dark/50 text-xs uppercase tracking-widest mt-1'>Japan Organic</p>
          </div>
        </div>
      </section>

      {/* Why organic Ethiopian coffee */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>Why Organic Ethiopian Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Ethiopia is uniquely positioned for organic coffee production. The vast majority of Ethiopian
              coffee is grown by <strong>smallholder farmers</strong> using traditional methods passed down through
              generations: shade-grown under indigenous forest canopy, without synthetic fertilizers or
              chemical pesticides. For many Ethiopian producers, coffee cultivation has been &quot;organic&quot;
              for centuries before the term existed. At our own drying station in Guji Hambella, we collect cherry directly from smallholder farmers 
              and process it ourselves, giving us hands-on quality control from the start. Our <Link href='/insights/direct-trade-ethiopian-farmers' className='underline hover:text-dark/60'>direct trade with Ethiopian farmers</Link> guide
              explains these relationships in detail.
            </p>
            <p>
              What makes certified organic Ethiopian coffee different from conventional is the
              <strong> formal documentation and audit trail</strong>. Certified organic lots require inspections
              by accredited bodies, record-keeping of farming practices, and a complete chain of custody from
              farm through processing, warehousing, and export. This certification gives roasters and importers
              the verified assurance their customers demand.
            </p>
            <p>
              <strong>Consumer demand for organic coffee continues to grow 8 to 12% annually</strong>, with
              organic specialty coffee commanding retail premiums of 20 to 40% in North American and European
              markets. For roasters, adding a certified organic Ethiopian single-origin to your program
              meets both the quality expectations of specialty consumers and the sustainability values that
              drive purchasing decisions. The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline hover:text-dark/60'>EU Deforestation Regulation</Link> also increases the value of traceable, certified supply chains.
              Our <Link href='/insights/certified-organic-coffee-bean-exporters-bulk-orders' className='underline hover:text-dark/60'>guide to certified organic coffee bean exporters for bulk orders</Link> covers
              how to evaluate and source from certified exporters.
            </p>
          </div>
        </div>
      </section>

      {/* Available organic origins */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-4 text-center'>Organic Ethiopian Coffee Origins We Export</h2>
          <p className='text-primary/60 text-center mb-10 max-w-3xl mx-auto'>
            Certified organic lots are available from Ethiopia&apos;s most celebrated specialty regions.
            Availability varies by harvest season and cooperative production.
          </p>
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                name: 'Organic Yirgacheffe',
                grade: 'Grade 1 & 2',
                score: 'SCA 84–88+',
                process: 'Washed & Natural',
                notes: 'Jasmine, bergamot, lemon, tea-like body. Many Yirgacheffe cooperatives hold long-standing organic certifications.',
                cert: 'USDA, EU, JAS available',
              },
              {
                name: 'Organic Sidamo (Sidama)',
                grade: 'Grade 1 & 2',
                score: 'SCA 84–87+',
                process: 'Washed & Natural',
                notes: 'Berry, floral, wine-like acidity, complex body. Sidama has one of the highest concentrations of organic-certified cooperatives.',
                cert: 'USDA, EU available',
              },
              {
                name: 'Organic Guji',
                grade: 'Grade 1 & 2',
                score: 'SCA 85–89+',
                process: 'Washed, Natural & Honey',
                notes: 'Stone fruit, tropical, floral complexity. Guji organic naturals consistently score among the highest in Ethiopia. We operate our own drying station in Guji Hambella, where we collect cherry from local smallholder farmers and process it ourselves.',
                cert: 'USDA, EU available',
              },
              {
                name: 'Organic Limu',
                grade: 'Grade 2 & 3',
                score: 'SCA 82–85+',
                process: 'Washed',
                notes: 'Wine, spice, balanced sweetness. Limu offers excellent value for certified organic at a competitive price point.',
                cert: 'USDA, EU available',
              },
            ].map((origin) => (
              <div key={origin.name} className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
                <h3 className='text-xl font-bold text-primary'>{origin.name}</h3>
                <div className='mt-3 grid grid-cols-2 gap-2 text-sm text-primary/70'>
                  <span><strong>Grade:</strong> {origin.grade}</span>
                  <span><strong>Score:</strong> {origin.score}</span>
                  <span><strong>Process:</strong> {origin.process}</span>
                  <span><strong>Cert:</strong> {origin.cert}</span>
                </div>
                <p className='mt-4 text-primary/70 text-sm leading-relaxed'>{origin.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic certification explained */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Understanding Organic Coffee Certifications</h2>
          <div className='space-y-8'>
            <div className='border-l-4 border-accent pl-6'>
              <h3 className='text-xl font-bold text-dark'>USDA Organic</h3>
              <p className='mt-2 text-dark/70'>
                Required for selling organic coffee in the United States. Mandates that coffee is grown without
                synthetic pesticides, herbicides, or fertilizers for at least 3 years. Annual inspections by
                <a href='https://www.usda.gov/topics/organic' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/60'>USDA</a>-accredited certifying agents. Ethiopian cooperatives are typically certified through
                international bodies like Control Union, Ecocert, or IMO.
              </p>
            </div>
            <div className='border-l-4 border-accent pl-6'>
              <h3 className='text-xl font-bold text-dark'>EU Organic</h3>
              <p className='mt-2 text-dark/70'>
                Required for the European market. Similar standards to USDA with emphasis on ecological
                balance, biodiversity preservation, and soil health. EU organic certification is recognized
                across all 27 EU member states. Many Ethiopian cooperatives hold dual USDA/EU certification.
              </p>
            </div>
            <div className='border-l-4 border-accent pl-6'>
              <h3 className='text-xl font-bold text-dark'>JAS Organic (Japan)</h3>
              <p className='mt-2 text-dark/70'>
                Japan Agricultural Standard organic certification for the Japanese market. Requires compliance
                with Japan&apos;s Ministry of Agriculture guidelines. JAS certification is less commonly held
                by Ethiopian cooperatives but is available for certain Yirgacheffe and Sidamo lots.
              </p>
            </div>
            <div className='border-l-4 border-dark/20 pl-6'>
              <h3 className='text-xl font-bold text-dark'>Additional Certifications</h3>
              <p className='mt-2 text-dark/70'>
                Many organic lots also carry <strong>Fair Trade</strong>, <strong>Rainforest Alliance</strong>,
                or <strong>UTZ</strong> certifications, which can be stacked for maximum market appeal.
                Double or triple-certified lots command the highest premiums but are subject to seasonal
                availability. Let us know your certification requirements when you inquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className='py-16 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Organic Ethiopian Coffee Pricing</h2>
          <p className='text-dark/60 text-center mb-10 max-w-3xl mx-auto'>
            Indicative FOB Djibouti pricing for certified organic Ethiopian green coffee.
            Actual pricing varies by season, availability, and additional certifications.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-dark text-primary'>
                  <th className='px-4 py-3 text-left font-bold'>Origin</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade</th>
                  <th className='px-4 py-3 text-left font-bold'>Conventional FOB</th>
                  <th className='px-4 py-3 text-left font-bold'>Organic Premium</th>
                  <th className='px-4 py-3 text-left font-bold'>Organic FOB</th>
                </tr>
              </thead>
              <tbody className='text-dark/80'>
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>Yirgacheffe</td>
                  <td className='px-4 py-3'>G2 Washed</td>
                  <td className='px-4 py-3'>$3.50–$5.00/lb</td>
                  <td className='px-4 py-3'>+$0.40–$0.70</td>
                  <td className='px-4 py-3 font-bold'>$3.90–$5.70/lb</td>
                </tr>
                <tr className='border-b border-dark/10 bg-white'>
                  <td className='px-4 py-3 font-medium'>Sidamo</td>
                  <td className='px-4 py-3'>G2 Washed</td>
                  <td className='px-4 py-3'>$3.20–$4.50/lb</td>
                  <td className='px-4 py-3'>+$0.30–$0.60</td>
                  <td className='px-4 py-3 font-bold'>$3.50–$5.10/lb</td>
                </tr>
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>Guji</td>
                  <td className='px-4 py-3'>G1 Natural</td>
                  <td className='px-4 py-3'>$4.00–$6.00/lb</td>
                  <td className='px-4 py-3'>+$0.40–$0.80</td>
                  <td className='px-4 py-3 font-bold'>$4.40–$6.80/lb</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-4 py-3 font-medium'>Limu</td>
                  <td className='px-4 py-3'>G2 Washed</td>
                  <td className='px-4 py-3'>$2.80–$3.80/lb</td>
                  <td className='px-4 py-3'>+$0.30–$0.50</td>
                  <td className='px-4 py-3 font-bold'>$3.10–$4.30/lb</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='mt-4 text-xs text-dark/40 text-center'>
            *Prices are indicative and subject to change based on market conditions, harvest season, and certification.
            Contact us for firm pricing on current-season lots.
          </p>
        </div>
      </section>

      {/* Chain of custody */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Organic Chain of Custody: How We Ensure Integrity</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-dark text-primary flex items-center justify-center font-bold'>1</div>
              <div>
                <h3 className='font-bold text-dark'>Certified Farms & Cooperatives</h3>
                <p className='mt-1'>We source exclusively from cooperatives and farms that hold current, valid organic certifications issued by accredited bodies (Control Union, Ecocert, IMO). Certification documents are verified before any purchase. Founded by two brothers - one managing sourcing and operations in Ethiopia, the other Ethiopian-Canadian handling international buyer relationships - we draw on 30+ years of family heritage in Ethiopian coffee to maintain trusted sourcing partnerships.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-dark text-primary flex items-center justify-center font-bold'>2</div>
              <div>
                <h3 className='font-bold text-dark'>Segregated Processing</h3>
                <p className='mt-1'>Organic coffee is processed separately from conventional lots at certified washing stations. Equipment is cleaned between runs. Processing records maintain full traceability from cherry intake to parchment.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-dark text-primary flex items-center justify-center font-bold'>3</div>
              <div>
                <h3 className='font-bold text-dark'>Certified Warehousing</h3>
                <p className='mt-1'>Organic parchment and green coffee is stored in designated, certified warehouse sections. No co-mingling with conventional. All movement documented with transaction certificates (TC).</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-dark text-primary flex items-center justify-center font-bold'>4</div>
              <div>
                <h3 className='font-bold text-dark'>Export Documentation</h3>
                <p className='mt-1'>Every organic shipment includes: organic transaction certificate (TC), ICO certificate, phytosanitary certificate, and SCA cupping report. The TC is the critical document that proves organic status for your customs clearance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Organic Ethiopian Coffee</h2>
          <div className='space-y-6'>
            {[
              {
                q: 'Is Ethiopian coffee organic?',
                a: 'Much of Ethiopian coffee is grown organically by default - smallholder farmers use traditional methods without synthetic inputs. However, "certified organic" requires formal third-party certification (USDA, EU, JAS), which involves annual audits and documentation. We source from cooperatives holding these certifications.',
              },
              {
                q: 'What organic certifications are available?',
                a: 'We can supply coffee with USDA Organic (US market), EU Organic (European market), and JAS Organic (Japan). Many lots also carry Fair Trade or Rainforest Alliance certifications. Availability depends on season and specific cooperative.',
              },
              {
                q: 'How much more does organic Ethiopian coffee cost?',
                a: 'Certified organic typically commands a $0.30–$0.80/lb premium over conventional equivalent grades, depending on origin, grade, and additional certifications. Contact us for current pricing.',
              },
              {
                q: 'Which regions produce certified organic?',
                a: 'Yirgacheffe, Sidamo, Guji, and Limu have the highest concentration of organic-certified cooperatives. Harar and Jimma have limited certified production. We can help you find the right organic origin for your program.',
              },
              {
                q: 'What is the minimum order for organic coffee?',
                a: 'Standard minimum is one FCL (~20 metric tons / 44,000 lbs). Organic lots must be kept separate from conventional. You can mix different organic origins within the same container as long as all are certified.',
              },
            ].map((faq, i) => (
              <div key={i} className='border-b border-primary/10 pb-6'>
                <h3 className='font-bold text-primary text-lg'>{faq.q}</h3>
                <p className='mt-2 text-primary/70 leading-relaxed'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related content */}
      <section className='bg-primary py-16'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-2xl font-extrabold text-dark mb-6'>Learn More</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='block bg-white rounded-lg p-6 border border-dark/10 hover:shadow-md transition-shadow text-left'>
              <p className='text-xs text-dark/40 uppercase tracking-widest'>Insight</p>
              <h3 className='font-bold text-dark mt-2'>Complete Guide to Ethiopian Coffee Certifications</h3>
              <p className='text-dark/60 text-sm mt-2'>Organic, Fair Trade, Rainforest Alliance - what each certification means, costs, and how to source certified lots.</p>
            </Link>
            <Link href='/ethiopian-coffee-yirgacheffe' className='block bg-white rounded-lg p-6 border border-dark/10 hover:shadow-md transition-shadow text-left'>
              <p className='text-xs text-dark/40 uppercase tracking-widest'>Origin</p>
              <h3 className='font-bold text-dark mt-2'>Yirgacheffe Coffee Beans</h3>
              <p className='text-dark/60 text-sm mt-2'>Ethiopia&apos;s most celebrated coffee origin. Jasmine, bergamot, lemon - SCA 84–88+.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-dark text-primary text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Organic Ethiopian Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Tell us your certification requirements, preferred origins, and volumes.
            We&apos;ll provide current availability, pricing, and samples. Founded by two brothers 
            with 30+ years of family sourcing heritage, we respond within 24 hours.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/offerings' className='bg-accent text-white px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              View Current Offerings
            </Link>
            <Link href='/contact-us' className='border border-primary/40 text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              Get Organic Pricing
            </Link>
            <Link href='/ordering-info' className='border border-primary/40 text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              How to Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
