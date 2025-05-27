import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
// import NewsLetterBlock from '@/components/block/NewsLetterBlock'
import HeroBlock from '@/components/block/HeroBlock'
import BlogListBlock from '@/components/block/BlogListBlock'
import PrimaryFeatureBlock from '@/components/block/PrimaryFeatureBlock'
import FeaturedProjects from '@/components/block/FeaturedProjects'

export const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <HeroBlock />
      <PrimaryFeatureBlock />
      <FeaturedProjects />
      <BlogListBlock posts={posts} />
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
