'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

import headerNavLinks from '@/data/headerNavLinks'
// import siteMetadata from '@/data/siteMetadata'
import { cn } from '../lib/utils'
import Logo from './Logo'
// import { Badge } from '@/registry/new-york/ui/badge'

export default function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo />
      </Link>
      <nav className="flex items-center gap-2 ">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Button
              asChild
              variant="ghost"
              className={cn('transition-all hover:shadow', pathname === link.href ? 'shadow' : '')}
            >
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            </Button>
          ))}
      </nav>
    </div>
  )
}
