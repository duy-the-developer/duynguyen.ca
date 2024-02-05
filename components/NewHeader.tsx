'use client'
import Link from './Link'

import siteMetadata from '@/data/siteMetadata'
import { cn } from '../lib/utils'
// import { CommandMenu } from '../components/CommandMenu'
import MainNav from '@/components/MainNav'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import { buttonVariants } from '../components/ui/button'
import SectionContainer from '@/components/SectionContainer'
import { GithubLogo, TwitterLogo } from '@phosphor-icons/react'
import { Button } from './ui/button'

export default function NewHeader() {
  return (
    <SectionContainer className="sticky top-4 z-50">
      <header className="supports-[backdrop-filter]:bg-background/60 flex h-14 w-full items-center rounded-2xl bg-white/50 px-8 backdrop-blur-xl dark:bg-stone-800/50 dark:shadow-stone-900">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/*   <CommandMenu /> */}
            <Button asChild className="text-base hover:cursor-pointer">
              <Link href="#contact">Contact</Link>
            </Button>
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
      </header>
    </SectionContainer>
  )
}
