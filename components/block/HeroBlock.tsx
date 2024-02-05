import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from '../Image'
import { Button } from '../ui/button'
import { ArrowDownRight } from '@phosphor-icons/react/dist/ssr'
import Link from '../Link'
import ThemeSwitch from '../ThemeSwitch'
import ThemeToggle from '../ThemeToggle'
import GridSectionContainer from '../GridSectionContainer'

const HeroBlock = () => {
  return (
    <GridSectionContainer>
      <div className="col-span-full row-span-2 space-y-8 rounded-2xl bg-stone-300 p-8 pt-16 dark:bg-stone-800 lg:col-span-3 lg:row-span-4 lg:space-y-12">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Web Developer, Digital Partner, Problem Solver.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 lg:w-1/2">
          {siteMetadata.description}
        </p>
      </div>
      <div className="relative col-span-full row-span-2 row-start-1 overflow-hidden rounded-2xl lg:col-span-3 lg:row-span-6">
        <Image
          src="/static/images/duy-full-body.jpg"
          alt="duy profile picture"
          fill
          className="rounded-2xl object-cover object-top transition-all duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative col-span-full overflow-hidden rounded-2xl bg-stone-300 lg:col-span-2 lg:row-span-2">
        <Image
          src="/static/images/five-rose-farine-mtl.jpg"
          alt="duy profile picture"
          fill
          className="max-h-full rounded-2xl object-cover object-[50%_25%] transition-all duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <Button
        className="group peer col-span-4 h-full rounded-2xl text-lg lg:col-span-1 lg:text-xl xl:text-2xl"
        asChild
      >
        <Link href="/about">
          <span className="transition-all ease-in-out group-hover:scale-105">Let's chat!</span>
        </Link>
      </Button>
      <div className="col-span-2 flex h-full items-center justify-center overflow-hidden rounded-2xl bg-white text-2xl dark:bg-black lg:col-span-1">
        <ThemeToggle />
      </div>
    </GridSectionContainer>
  )
}

export default HeroBlock
