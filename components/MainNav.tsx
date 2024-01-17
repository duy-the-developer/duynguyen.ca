'use client'

import * as React from 'react'
import Link from 'next/link'
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
      <nav className="flex items-center gap-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.title}
            </Link>
          ))}
      </nav>
    </div>
  )
}
