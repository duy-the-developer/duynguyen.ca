import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import NewsLetterBlock from '@/components/block/NewsLetterBlock'
import HeroBlock from '@/components/block/HeroBlock'
import GrainyFilter from '@/components/GrainyFilter'
import BlogListBlock from '@/components/block/BlogListBlock'

export const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <HeroBlock />
      </div>
      <BlogListBlock posts={posts} />
      {posts.length > MAX_DISPLAY && <NewsLetterBlock />}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
