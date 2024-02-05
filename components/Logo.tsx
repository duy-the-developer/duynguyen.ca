import siteMetadata from '@/data/siteMetadata'
import React from 'react'

const Logo = () => {
  return (
    <span className="hidden text-lg font-bold tracking-tight sm:inline-block">
      {siteMetadata.title}
    </span>
  )
}

export default Logo
