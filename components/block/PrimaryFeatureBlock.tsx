import React from 'react'
import GridSectionContainer from '../GridSectionContainer'
import BentoChildContainer from '../BentoChildContainer'
import { Shapes, Code, RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

const features = [
  {
    title: 'Design',
    icon: Shapes,
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Develop',
    icon: Code,
    imageUrl:
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Deploy',
    icon: RocketLaunch,
    imageUrl:
      'https://images.unsplash.com/photo-1596741964346-791466b552b6?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const PrimaryFeatureBlock = () => {
  return (
    <GridSectionContainer className="grid-rows-none lg:grid-rows-5">
      <BentoChildContainer className="col-span-full row-span-2 rounded-2xl lg:col-span-2 lg:col-start-5 lg:row-span-2">
        <h2 className="text-4xl font-bold leading-12 tracking-tight">
          Everything You Need To Establish An Online Presence
        </h2>
      </BentoChildContainer>
      <BentoChildContainer className="group col-span-full row-span-1 rounded-2xl lg:col-span-4 lg:row-span-2 lg:row-start-1">
        <p className="text-lg leading-tight tracking-tight lg:text-3xl">
          Let me run your website, so you can run your business{' '}
          <span className="text-stone-500 transition-colors duration-300 ease-in-out group-hover:text-primary-500">
            – From expert web development and captivating design to seamless user experiences, I've
            got you covered.
          </span>
        </p>
      </BentoChildContainer>
      {features.map((feature, index) => (
        <BentoChildContainer
          key={index}
          className="group col-span-full row-span-3 flex flex-col justify-start rounded-2xl px-2 pb-2 pt-4 text-2xl lg:col-span-2 lg:justify-end"
        >
          <div className="flex items-center gap-x-2 px-6 pb-2">
            <feature.icon
              size={32}
              className="text-stone-500 transition-colors duration-300 ease-in-out group-hover:text-primary-500"
              aria-hidden
            />
            {feature.title}
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={feature.imageUrl}
              alt=""
              width={2000}
              height={1600}
              className="aspect-video rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 lg:aspect-[4/5]"
            />
          </div>
        </BentoChildContainer>
      ))}
    </GridSectionContainer>
  )
}

export default PrimaryFeatureBlock
