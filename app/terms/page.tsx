import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service | Ethio Coffee',
  description:
    'Terms of Service for Ethio Coffee (Ethio Coffee Import and Export PLC), including website use, wholesale inquiries, quotes, and business-to-business orders.',
  alternates: {
    canonical: 'https://ethiocoffee.et/terms',
  },
  openGraph: {
    title: 'Terms of Service | Ethio Coffee',
    description:
      'Terms of Service for Ethio Coffee (Ethio Coffee Import and Export PLC), including website use, wholesale inquiries, quotes, and business-to-business orders.',
    url: 'https://ethiocoffee.et/terms',
    type: 'article',
  },
}

const EFFECTIVE_DATE = 'January 25, 2026'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className='text-2xl font-extrabold tracking-tight text-dark'>{title}</h2>
      <div className='mt-4 space-y-4 text-dark/90 leading-relaxed'>{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>TERMS OF SERVICE</h1>
      </header>

      <section className='container mx-auto px-4 py-12'>
        <article className='mx-auto max-w-4xl rounded-lg border border-black/10 bg-white/60 p-6 md:p-10'>
          <div className='mb-8'>
            <p className='text-sm text-gray-700'>Effective date: {EFFECTIVE_DATE}</p>
            <p className='mt-2 text-gray-800'>
              These Terms of Service ("Terms") govern your access to and use of the website located at{' '}
              <a
                href='https://ethiocoffee.et'
                className='underline underline-offset-4'
                rel='noopener noreferrer'
                target='_blank'
              >
                https://ethiocoffee.et
              </a>{' '}
              (the "Site") and any inquiries, quote requests, sample requests, or communications submitted through the
              Site.
            </p>
          </div>

          <div className='space-y-12'>
            <Section title='1) Who We Are'>
              <p>
                The Site is operated by <strong>Ethio Coffee Import and Export PLC</strong> (operating as{' '}
                <strong>Ethio Coffee</strong>) ("Ethio Coffee", "we", "us", or "our"). We provide information about
                Ethiopian coffee offerings and facilitate business-to-business inquiries for coffee export supply.
              </p>
              <p>
                For Middle East customers, transactions may be handled through{' '}
                <strong dir="rtl" lang="ar">إثيو كوفي للاستيراد</strong> (Ethio Coffee Import), our dedicated presence in Saudi Arabia, which maintains regional inventory and logistics.
                For Canadian customers, transactions may be handled through{' '}
                <strong>Ethio Coffee Company Inc.</strong>, our dedicated presence in Canada, which maintains local inventory and logistics.
              </p>
            </Section>

            <Section title='2) Acceptance of These Terms'>
              <p>
                By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.
                If you are using the Site on behalf of a company or other entity, you represent that you have
                authority to bind that entity and that entity agrees to these Terms.
              </p>
            </Section>

            <Section title='3) Business-to-Business Use'>
              <p>
                The Site is intended primarily for <strong>business customers</strong> (e.g., cafés, roasters, importers,
                distributors, hospitality groups) seeking wholesale coffee supply information and quotes. The Site is
                not intended for consumer retail purchases.
              </p>
            </Section>

            <Section title='4) Information Only; No Online Checkout'>
              <p>
                Product descriptions, profiles, origin notes, specifications, and availability shown on the Site are
                for informational purposes. They may change and may vary by lot, season, and shipment. The Site does
                not provide a checkout feature. Purchases (if any) are completed through an off-site, written
                commercial process (e.g., via email, invoice, purchase order, and/or contract).
              </p>
            </Section>

            <Section title='5) Inquiries, Quote Requests, and Samples'>
              <p>
                You may submit inquiries or quote requests via the Site. Any response, quotation, or indication of
                availability we provide is <strong>non-binding</strong> unless and until confirmed by written acceptance,
                invoice, or contract signed/issued by us.
              </p>
              <p>
                Sample requests are subject to availability and may require additional information. Shipping costs,
                handling fees, and/or sample charges may apply, as communicated to you.
              </p>
            </Section>

            <Section title='6) Orders, Contracts, and Priority of Terms'>
              <p>
                If you place an order with us, the governing terms for that transaction will be set out in the written
                documents applicable to that order (e.g., quotation, pro forma invoice, commercial invoice, purchase
                order acceptance, and/or a separate supply agreement) ("Order Terms").
              </p>
              <p>
                If there is any conflict between these Terms and the Order Terms, the Order Terms control for that
                transaction.
              </p>
            </Section>

            <Section title='7) Pricing, Payment, and Taxes'>
              <p>
                Prices and payment terms are determined on a case-by-case basis and will be stated in the applicable
                Order Terms. Standard payment terms for new customers are 50% deposit with 50% due against shipping
                documents. Established customers may qualify for Net 30/60 terms. Letters of Credit are accepted
                from recognized banks.
              </p>
              <p>
                Our standard invoicing currency is <strong>USD</strong>. Middle East partners may transact in{' '}
                <strong>SAR</strong> through our Saudi entity. Canadian partners may transact in{' '}
                <strong>CAD</strong> through our Canadian entity. We may also invoice in EUR or GBP for international buyers.
              </p>
              <p>
                Unless stated otherwise, prices may exclude shipping, insurance, banking fees, customs
                duties, taxes, tariffs, and other charges. You are responsible for any taxes, duties, or government
                charges associated with importation or receipt of goods in your jurisdiction, unless the applicable
                Order Terms expressly provide otherwise.
              </p>
            </Section>

            <Section title='8) Shipping, Delivery, and Risk of Loss'>
              <p>
                Shipping terms (including Incoterms®, freight arrangements, insurance, delivery timelines, and
                transfer of risk) will be set out in the applicable Order Terms. Delivery dates and lead times are
                estimates unless expressly agreed in writing.
              </p>
              <p>
                Export and international logistics may be affected by events outside our control (including port
                delays, customs holds, carrier disruptions, or force majeure events). We are not responsible for
                delays caused by third parties or governmental actions.
              </p>
            </Section>

            <Section title='9) Quality, Lot Variation, and Claims'>
              <p>
                Coffee is an agricultural product; characteristics can vary by harvest, lot, processing, storage, and
                transport conditions. Except as expressly stated in the applicable Order Terms, we do not guarantee
                that every shipment will match a particular flavor note description.
              </p>
              <p>
                If you believe goods are non-conforming or damaged, you must notify us within{' '}
                <strong>seven (7) days</strong> of receipt with photos, cupping notes, and supporting documentation.
                We retain samples from every lot for comparison. Resolution options may include price adjustments,
                replacement coffee, or third-party arbitration.
              </p>
            </Section>

            <Section title='10) Returns, Cancellations, and Refunds'>
              <p>
                Because coffee and related goods are commonly handled and stored under variable conditions, returns
                are generally not accepted unless expressly agreed in writing or required by applicable law. Any
                approved returns, credits, cancellations, or refunds will be handled according to the Order Terms.
              </p>
            </Section>

            <Section title='11) Acceptable Use'>
              <p>You agree not to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Use the Site for any unlawful, fraudulent, or misleading purpose.</li>
                <li>Attempt to gain unauthorized access to the Site or its systems.</li>
                <li>Interfere with the Site’s operation (including introducing malware or abuse of forms).</li>
                <li>Scrape, harvest, or collect information from the Site at scale without our permission.</li>
                <li>Use the Site to infringe any person’s intellectual property or privacy rights.</li>
              </ul>
            </Section>

            <Section title='12) Intellectual Property'>
              <p>
                The Site and its content (including text, images, graphics, logos, and design) are owned by or
                licensed to Ethio Coffee and are protected by applicable intellectual property laws. You may view and
                use the Site for your internal business evaluation purposes. You may not copy, reproduce, distribute,
                or create derivative works from the Site content without our prior written permission, except as
                permitted by law.
              </p>
            </Section>

            <Section title='13) Third-Party Services and Links'>
              <p>
                The Site may link to third-party websites or services. We do not control and are not responsible for
                third-party content, policies, or practices. Your use of third-party services is at your own risk.
              </p>
            </Section>

            <Section title='14) Privacy and Communications'>
              <p>
                When you submit a contact or quote request, you provide information that we use to respond to you,
                evaluate your request, and conduct business communications. You agree that we may contact you at the
                email address and/or phone number you provide.
              </p>
              <p>
                Do not submit sensitive personal data (such as government ID numbers or payment card details) through
                the Site’s forms.
              </p>
            </Section>

            <Section title='15) Disclaimers'>
              <p className='font-semibold uppercase'>
                The site is provided on an “as is” and “as available” basis. To the maximum extent permitted by law,
                we disclaim all warranties, express or implied, including implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </p>
            </Section>

            <Section title='16) Limitation of Liability'>
              <p className='font-semibold uppercase'>
                To the maximum extent permitted by law, Ethio Coffee will not be liable for any indirect, incidental,
                consequential, special, or punitive damages, or any loss of profits, revenue, data, or goodwill,
                arising out of or related to your use of (or inability to use) the site.
              </p>
              <p className='font-semibold uppercase'>
                If you enter into an order with us, any liability related to that order will be governed by the order
                terms.
              </p>
            </Section>

            <Section title='17) Indemnification'>
              <p>
                You agree to indemnify and hold harmless Ethio Coffee and its officers, directors, employees, and
                agents from and against claims, liabilities, damages, losses, and expenses (including reasonable
                legal fees) arising out of or related to your use of the Site, your violation of these Terms, or your
                violation of any rights of another.
              </p>
            </Section>

            <Section title='18) Compliance With Laws'>
              <p>
                You are responsible for complying with all laws and regulations applicable to your use of the Site
                and any importation, resale, labeling, and marketing of products you purchase from us, including
                customs, food safety, and sanctions/export-control requirements where applicable.
              </p>
            </Section>

            <Section title='19) Force Majeure'>
              <p>
                We will not be liable for any failure or delay in performance to the extent caused by circumstances
                beyond our reasonable control, including natural disasters, war, terrorism, labor disputes,
                government actions, supply chain interruptions, carrier delays, and port congestion.
              </p>
            </Section>

            <Section title='20) Governing Law and Dispute Resolution'>
              <p>
                These Terms are governed by the laws of the Federal Democratic Republic of Ethiopia, without regard
                to conflict of law principles. Any dispute arising out of or relating to these Terms will be brought
                in the courts located in Addis Ababa, Ethiopia, unless mandatory law provides otherwise.
              </p>
              <p>
                For disputes related to coffee quality or contract performance, we follow{' '}
                <strong>Green Coffee Association (GCA) arbitration procedures</strong> when applicable. Most issues
                are resolved through direct discussion and sample comparison before formal proceedings.
              </p>
            </Section>

            <Section title='21) Changes to These Terms'>
              <p>
                We may update these Terms from time to time. The “Effective date” above indicates when these Terms
                were last updated. Your continued use of the Site after changes become effective constitutes
                acceptance of the updated Terms.
              </p>
            </Section>

            <Section title='22) Contact'>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a href='mailto:info@ethiocoffee.et' className='underline underline-offset-4'>
                  info@ethiocoffee.et
                </a>{' '}
                or visit our{' '}
                <Link href='/contact-us' className='underline underline-offset-4'>
                  Contact Us
                </Link>{' '}
                page.
              </p>
            </Section>
          </div>

          {/* Call to Action */}
          <div className='mt-12 text-center'>
            <p className='text-gray-700 mb-6'>Ready to source premium Ethiopian green coffee?</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/offerings'
                className='px-6 py-3 bg-accent hover:bg-dark text-white hover:text-primary rounded-md font-bold transition-colors'
              >
                Browse Offerings
              </Link>
              <Link
                href='/contact-us'
                className='px-6 py-3 border border-dark hover:bg-dark hover:text-white rounded-md font-bold transition-colors'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
