'use client'

import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

export const ButtonToLiveProject = ({ href }: { href: string }) => {
  const navigateLiveSite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    window.open(href, '_blank')
  }
  console.log('href', href)

  return (
    <Button
      onClick={navigateLiveSite}
      variant={'link'}
      className="relative aspect-square h-10 w-10 overflow-hidden rounded-full bg-transparent p-2 transition-all duration-200 ease-linear group-hover:bg-primary-500 dark:bg-stone-950 dark:text-white lg:h-16 lg:w-16"
    >
      <ArrowUpRight
        size={32}
        className="absolute h-4 w-4 -translate-x-12 translate-y-12 text-white duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 lg:col-span-1 lg:h-8 lg:w-8"
        aria-hidden
      />
      <ArrowUpRight
        size={32}
        className="absolute h-4 w-4 duration-200 ease-out group-hover:-translate-y-12 group-hover:translate-x-12 lg:col-span-1 lg:h-8 lg:w-8"
        aria-hidden
      />
    </Button>
  )
}
