import Link from 'next/link'
import { posts } from '@/app/data/data'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineUserCircle, HiOutlineClock, HiOutlineCalendarDays } from 'react-icons/hi2'
import { insightContentMap, hasContentFile } from '../content'
import AutoScrollTo from '@/app/components/AutoScrollTo'

// Estimated reading times (words per post, divided by 238 wpm average reading speed)
// These are pre-calculated from actual content word counts
const readingTimeMap: Record<string, number> = {
  'ethiopian-coffee-dry-milling-export-guide': 14,
  'ethiopian-coffee-pricing-fob-guide': 22,
  'top-ethiopian-coffee-importers-buyers-2024-2025': 32,
  'rising-ethiopian-coffee-prices-explained': 15,
  'private-vs-cooperative-ethiopian-coffee-exporters': 14,
  'how-to-import-ethiopian-coffee-to-usa': 18,
  'importing-ethiopian-coffee-to-canada-guide': 16,
  'importing-ethiopian-coffee-to-saudi-arabia': 20,
  'importing-ethiopian-coffee-to-uae': 16,
  'importing-ethiopian-coffee-to-south-korea': 30,
  'importing-ethiopian-coffee-to-japan': 20,
  'importing-ethiopian-coffee-to-germany': 25,
  'importing-ethiopian-coffee-to-holland': 15,
  'importing-ethiopian-coffee-to-uk': 16,
  'importing-ethiopian-coffee-to-australia': 32,
  'ecx-and-ethiopian-coffee-export': 15,
  'top-10-specialty-coffee-shops-world': 13,
  'new-sca-coffee-value-assessment': 15,
  'complete-guide-to-understanding-coffee': 28,
  'eu-deforestation-regulation-ethiopian-coffee-compliance': 22,
  'afca-taste-of-harvest-ethiopian-coffee-competition': 24,
  'ethiopia-coffee-origin-birthplace': 13,
  'ethiopian-dry-coffee-production-quality-control': 13,
  'sidama-coffee-production-productivity-export': 10,
  'ethiopia-china-coffee-trade-partnership': 13,
  'ethiopian-coffee-certifications-organic-fairtrade-rainforest': 15,
  'ethiopian-heirloom-coffee-varieties-landraces': 32,
  'minimum-order-quantities-ethiopian-coffee-moq': 38,
  'benefits-investing-ethiopian-coffee-production': 14,
  'navigating-2026-ethiopian-specialty-coffee-exporters': 12,
  'specialty-coffee-storage-freight-logistics': 13,
  'how-to-cup-evaluate-ethiopian-coffee-samples': 24,
  'top-premium-coffee-exporters-global-guide': 20,
  'best-cupping-school': 13,
  'selective-coffee-harvesting': 12,
  'ethio-coffee-export-launch': 14,
  'best-ethiopian-coffee-exporter-for-importers': 11,

  'ethiopian-coffee-ceremony': 11,
  'direct-trade-ethiopian-farmers': 13,
  'coffee-plant-taxonomy-species-varieties': 15,
  'coffee-is-agriculture-production-farming': 14,
  'coffee-is-processing-drying-milling': 14,
  'coffee-is-commerce-exporting-importing-buying': 20,
  'coffee-is-science-analysis-compounds-evaluation': 14,
  'coffee-is-art-roasting-brewing': 14,
  'how-to-source-green-coffee-from-ethiopia': 17,
  'guide-ethiopian-coffee-origins': 14,
  'yirgacheffe-vs-sidamo-vs-guji-comparison': 13,
  'washed-vs-natural-ethiopian-coffee-processing': 13,
  'green-coffee-quality-control-defects-grading': 14,
  'ethiopian-coffee-harvest-2025-season-outlook': 14,
  'specialty-coffee-trends-2026': 12,
  'ethiopian-coffee-climate-change-impact': 26,
  'women-in-ethiopian-coffee-industry': 18,
  'most-expensive-coffee-in-the-world': 18,
  'how-to-make-coffee-without-a-coffeemaker': 14,
  'how-to-choose-ethiopian-coffee-export-company': 14,
  'certified-organic-coffee-bean-exporters-bulk-orders': 16,
  'roasting-ethiopian-coffee-beans-guide': 17,
  'green-coffee-shelf-life-storage-guide': 18,
  'ethiopian-coffee-contracts-payment-terms-guide': 20,
  'decaf-green-coffee-processing-sourcing-guide': 18,
  'ethiopian-coffee-vs-colombian-coffee': 14,
  'ethiopian-coffee-harvest-calendar-buying-guide': 16,
  'best-coffee-guide-french-press-pour-over-scales': 19,
  'ethiopian-coffee-vs-kenyan-coffee': 14,
  'ethiopian-coffee-traceability-guide': 14,
  'micro-lot-ethiopian-coffee-sourcing-guide': 13,
  'ethiopian-coffee-landed-cost-guide': 14,
  'anaerobic-ethiopian-coffee-processing-buyers-guide': 17,
  'green-coffee-financing-hedging-importers-guide': 14,
  'green-coffee-packaging-bag-types-guide': 11,
  'ethiopian-coffee-washing-stations-buyers-guide': 13,
  'ethiopian-coffee-export-process-buyers-guide': 14,
  'importing-ethiopian-coffee-to-turkey': 13,
  'saudi-arabia-specialty-coffee-market-guide': 14,
  'germany-specialty-coffee-market-guide': 14,
  'importing-ethiopian-coffee-to-france': 18,
  'importing-ethiopian-coffee-to-italy': 15,
  'bombe-sidama-coffee-sourcing-guide': 12,
  'green-coffee-moisture-content-water-activity-guide': 12,
  'importing-ethiopian-coffee-to-india': 14,
}

function getReadingTime(slug: string): number {
  return readingTimeMap[slug] || 10
}

type Props = {
  params: Promise<{
    insightId: string
  }>
}

// Generate static params for all insight pages
export async function generateStaticParams() {
  return posts.map((post) => ({
    insightId: post.slug || '',
  }))
}

// Metadata is generated in layout.tsx to avoid duplicate generateMetadata conflicts
// layout.tsx provides the full metadata including canonical, keywords, OG article type, and publishedTime

const Insight = async ({params}: Props) => {
  // Await params in server component
  const { insightId } = await params;
  
  // Find post by slug (insightId is now a slug)
  const ind = posts.findIndex(post => post.slug === insightId);
  if(ind === -1){
    const Content = (
      <h1 className=' bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
        Insight not found
      </h1>
    )
  return Content;
  }
  
  const { title, date, large_image_url, slug } = posts[ind]
  
  // Load dynamic content if available (server-side)
  let DynamicContent = null;
  if (hasContentFile(insightId)) {
    DynamicContent = await insightContentMap[insightId]();
  }
  
  // Insight post content based on the ID
  let blogContent;
  
  // PRIORITY 1: Check if there's a dedicated content file for this insight
  if (DynamicContent) {
    blogContent = <DynamicContent title={title} date={date} large_image_url={large_image_url} />;
  }
  // Fallback for any insight articles without custom content
  else {
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight'>
            {title}
          </h1>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Insights from Ethiopian coffee sourcing and the specialty coffee industry.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Ethiopian coffee insight article`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            This article is being prepared. Check back soon for insights on Ethiopian coffee sourcing, 
            industry trends, and practical guidance for importers.
          </p>
          
          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              In the meantime, explore our other articles or get in touch to discuss your sourcing needs.
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/insights' className='underline font-bold'>
                VIEW ALL POSTS
              </Link>
              <Link href='/contact-us' className='underline font-bold'>
                CONTACT US
              </Link>
            </div>
          </div>
        </>
      );
    }

    const readingTime = getReadingTime(slug || '')

    const Content = (
      <>
        <AutoScrollTo />
        <section id='insight-content' className='p-4 flex flex-col items-center justify-center bg-primary text-dark'>
          <div className="container max-w-4xl">
            {/* Author byline and reading time - consistent across all posts */}
            <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-6 border-b border-gray-200 pb-4'>
              <span className='flex items-center gap-1'>
                <HiOutlineUserCircle className='text-base' />
                By Ethio Coffee
              </span>
              <span className='flex items-center gap-1'>
                <HiOutlineCalendarDays className='text-base' />
                {date}
              </span>
              <span className='flex items-center gap-1'>
                <HiOutlineClock className='text-base' />
                {readingTime} min read
              </span>
            </div>
            {blogContent}
          </div>
        </section>
      </>
    )
    return Content;
}

export default Insight
