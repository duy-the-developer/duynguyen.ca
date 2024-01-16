'use client'
import Link from 'next/link'

import siteMetadata from '@/data/siteMetadata'
import { cn } from '../lib/utils'
import { CommandMenu } from '../components/CommandMenu'
import MainNav from '@/components/MainNav'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import { buttonVariants } from '../components/ui/button'
import SectionContainer from '@/components/SectionContainer'
import { GithubLogo, TwitterLogo } from '@phosphor-icons/react'

export default function NewHeader() {
  return (
    <header className="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <SectionContainer className="flex h-14 max-w-screen-2xl items-center border-b border-stone-400">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            {siteMetadata.github && (
              <Link href={siteMetadata.github} target="_blank" rel="noreferrer">
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    'w-9 px-0'
                  )}
                >
                  <GithubLogo className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            )}
            {siteMetadata.twitter && (
              <Link href={siteMetadata.twitter} target="_blank" rel="noreferrer">
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    'w-9 px-0'
                  )}
                >
                  <TwitterLogo className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            )}
            <ThemeSwitch />
          </nav>
        </div>
      </SectionContainer>
    </header>
  )
}
