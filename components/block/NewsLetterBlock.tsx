import React from 'react'
import Link from 'next/link'

const NewsLetterBlock = () => {
  return (
    <div className="flex justify-end text-base font-medium leading-6">
      <Link
        href="/blog"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        aria-label="All posts"
      >
        All Posts &rarr;
      </Link>
    </div>
  )
}

export default NewsLetterBlock
