import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service | Ethio Coffee',
  description:
    'Terms of Service for Ethio Coffee, including website use, online purchases, shipping, returns, and consumer rights.',
  alternates: {
    canonical: 'https://ethiocoffee.co/terms',
  },
  openGraph: {
    title: 'Terms of Service | Ethio Coffee',
    description:
      'Terms of Service for Ethio Coffee, including website use, online purchases, shipping, returns, and consumer rights.',
    url: 'https://ethiocoffee.co/terms',
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
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website located at{' '}
              <a
                href='https://ethiocoffee.co'
                className='underline underline-offset-4'
                rel='noopener noreferrer'
                target='_blank'
              >
                https://ethiocoffee.co
              </a>{' '}
              (the &quot;Site&quot;) and any purchases made through our online store.
            </p>
          </div>

          <div className='space-y-12'>
            <Section title='1) Who We Are'>
              <p>
                The Site is operated by <strong>Ethio Coffee Company Inc.</strong> (operating as{' '}
                <strong>Ethio Coffee</strong>) (&quot;Ethio Coffee&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are a Canadian company that sources, 
                roasts, and sells premium Ethiopian coffee directly to consumers.
              </p>
              <p>
                Our headquarters and roasting facility are located in Toronto, Ontario, Canada.
              </p>
            </Section>

            <Section title='2) Acceptance of These Terms'>
              <p>
                By accessing or using the Site, or by placing an order, you agree to these Terms. If you do not agree, 
                please do not use the Site or make purchases.
              </p>
            </Section>

            <Section title='3) Products and Orders'>
              <p>
                All products displayed on our Site are subject to availability. We reserve the right to limit quantities, 
                refuse orders, or discontinue products at any time without prior notice.
              </p>
              <p>
                When you place an order, you will receive an email confirmation. This confirmation acknowledges receipt 
                of your order but does not constitute acceptance. We reserve the right to cancel orders due to pricing 
                errors, inventory issues, or suspected fraud.
              </p>
            </Section>

            <Section title='4) Pricing and Payment'>
              <p>
                All prices are displayed in <strong>Canadian Dollars (CAD)</strong> and include applicable taxes for 
                Canadian customers. Prices are subject to change without notice.
              </p>
              <p>
                We accept major credit cards (Visa, Mastercard, American Express) and other payment methods as 
                displayed at checkout. Payment is processed at the time of order.
              </p>
              <p>
                For orders shipped within Canada, <strong>13% HST</strong> (Harmonized Sales Tax) will be applied at checkout.
              </p>
            </Section>

            <Section title='5) Shipping and Delivery'>
              <p>
                We currently ship within <strong>Canada only</strong>. Orders are typically processed within 1-2 business 
                days and delivered within 3-7 business days, depending on your location.
              </p>
              <p>
                <strong>Free shipping</strong> is available on orders over $75 CAD. For orders under $75 CAD, a flat 
                shipping rate of $9.99 applies.
              </p>
              <p>
                Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping 
                carriers, weather, or other circumstances beyond our control.
              </p>
            </Section>

            <Section title='6) Freshness Guarantee'>
              <p>
                All our coffee is <strong>roasted to order</strong> and shipped within days of roasting to ensure 
                maximum freshness. Each bag includes a roast date for your reference.
              </p>
              <p>
                For the best experience, we recommend consuming your coffee within 4-6 weeks of the roast date and 
                storing it in a cool, dry place away from direct sunlight.
              </p>
            </Section>

            <Section title='7) Returns and Refunds'>
              <p>
                Due to the perishable nature of coffee, we generally do not accept returns. However, if you receive 
                damaged, defective, or incorrect products, please contact us within <strong>7 days</strong> of delivery 
                with photos and a description of the issue.
              </p>
              <p>
                If we determine the product was damaged or defective, we will offer a replacement or full refund at 
                our discretion. Refunds will be processed to the original payment method within 5-10 business days.
              </p>
              <p>
                If you are unsatisfied with your purchase for any other reason, please contact us. We value your 
                satisfaction and will work with you to find a resolution.
              </p>
            </Section>

            <Section title='8) Cancellations'>
              <p>
                You may cancel your order within <strong>1 hour</strong> of placing it by contacting us immediately. 
                Once an order has been processed or shipped, it cannot be cancelled.
              </p>
            </Section>

            <Section title='9) Account Registration'>
              <p>
                You may browse our Site without creating an account. If you choose to create an account, you are 
                responsible for maintaining the confidentiality of your login credentials and for all activities 
                under your account.
              </p>
            </Section>

            <Section title='10) Privacy'>
              <p>
                Your privacy is important to us. We collect and use your personal information only as necessary to 
                fulfill orders, improve our services, and communicate with you. We do not sell your personal 
                information to third parties.
              </p>
              <p>
                For more details, please review our Privacy Policy (coming soon).
              </p>
            </Section>

            <Section title='11) Intellectual Property'>
              <p>
                All content on the Site, including text, images, logos, and design, is owned by or licensed to 
                Ethio Coffee and protected by intellectual property laws. You may not copy, reproduce, or distribute 
                our content without written permission.
              </p>
            </Section>

            <Section title='12) Acceptable Use'>
              <p>You agree not to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Use the Site for any unlawful or fraudulent purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the Site&apos;s operation or security</li>
                <li>Submit false information or impersonate others</li>
                <li>Use automated tools to scrape or collect data from the Site</li>
              </ul>
            </Section>

            <Section title='13) Limitation of Liability'>
              <p className='font-semibold uppercase'>
                To the maximum extent permitted by law, Ethio Coffee will not be liable for any indirect, incidental, 
                consequential, or punitive damages arising from your use of the Site or purchase of products.
              </p>
              <p>
                Our total liability for any claim related to your purchase will not exceed the amount you paid for 
                the product(s) in question.
              </p>
            </Section>

            <Section title='14) Governing Law'>
              <p>
                These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada 
                applicable therein. Any disputes will be resolved in the courts of Ontario, Canada.
              </p>
            </Section>

            <Section title='15) Changes to These Terms'>
              <p>
                We may update these Terms from time to time. The &quot;Effective date&quot; above indicates when these Terms 
                were last updated. Continued use of the Site after changes constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title='16) Contact Us'>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a href='mailto:hello@ethiocoffee.co' className='underline underline-offset-4'>
                  hello@ethiocoffee.co
                </a>{' '}
                or visit our{' '}
                <Link href='/contact-us' className='underline underline-offset-4'>
                  Contact
                </Link>{' '}
                page.
              </p>
            </Section>
          </div>

          <div className='mt-12 text-center'>
            <p className='text-gray-700 mb-6'>Ready to try our premium Ethiopian coffee?</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/shop'
                className='px-6 py-3 bg-accent hover:bg-dark text-white hover:text-primary rounded-md font-bold transition-colors'
              >
                Shop Now
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
