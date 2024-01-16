import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from '../Image'
import { Button } from '../ui/button'
import { ArrowDownRight } from '@phosphor-icons/react/dist/ssr'
import Link from '../Link'

const HeroBlock = () => {
  return (
    <section className="grid grid-rows-6 gap-6 py-12 lg:grid-cols-6 lg:py-16">
      <div className="col-span-3 row-span-4 space-y-16 rounded-2xl bg-stone-300 p-8 pt-16">
        <h1 className="font-serif text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Crafting digital products, brands, and experiences.
        </h1>
        <p className="w-1/2 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <div className="relative col-span-3 row-span-2 row-start-1 rounded-2xl lg:row-span-6">
        <Image
          src="/static/images/duy-full-body.jpg"
          alt="duy profile picture"
          fill
          className="rounded-2xl object-cover object-top"
        />
      </div>
      <div className="relative col-span-2 row-span-2 rounded-2xl bg-stone-300">
        <Image
          src="/static/images/five-rose-farine-mtl.jpg"
          alt="duy profile picture"
          fill
          className="max-h-full rounded-2xl object-cover object-top"
        />
      </div>
      <Button className="h-full rounded-2xl text-2xl" asChild>
        <Link href="/about">Let's chat!</Link>
      </Button>
      <div className="flex h-full items-center justify-center rounded-2xl bg-white text-2xl">
        <ArrowDownRight className="h-12 w-12" />
      </div>
    </section>
  )
}

export default HeroBlock
