import type { Metadata } from 'next'
import { posts } from '@/app/data/data'

type Props = {
  params: Promise<{ blogId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params
  const index = Number.parseInt(blogId, 10)
  const post = Number.isFinite(index) ? posts[index] : undefined

  if (!post) {
    return {
      title: 'Blog Post Not Found | Ethio Coffee',
      description: 'The blog post you are looking for does not exist.',
      alternates: { canonical: 'https://ethiocoffee.et/blog' },
    }
  }

  const title = `${post.title} | Ethio Coffee`
  const description = post.desc

  return {
    title,
    description,
    alternates: {
      canonical: `https://ethiocoffee.et/blog/${blogId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://ethiocoffee.et/blog/${blogId}`,
      images: [{ url: `/images/${post.large_image_url}` }],
    },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children
}
