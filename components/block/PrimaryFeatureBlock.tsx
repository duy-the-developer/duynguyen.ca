import React from 'react'
import GridSectionContainer from '../GridSectionContainer'
import BentoChildContainer from '../BentoChildContainer'
import { Shapes, Code, RocketLaunch } from '@phosphor-icons/react/dist/ssr'

const PrimaryFeatureBlock = () => {
  return (
    <GridSectionContainer>
      <BentoChildContainer className="col-span-4 row-span-4 rounded-2xl">
        <p className="text-3xl leading-tight">
          Let me run your website, so you can run your business{' '}
          <span className="text-stone-500">
            – From expert web development and captivating design to seamless user experiences, I've
            got you covered.
          </span>
        </p>
      </BentoChildContainer>
      <BentoChildContainer className="col-span-2 row-span-4 rounded-2xl">
        <h2 className="text-4xl font-bold leading-12 tracking-tight">
          Everything You Need To Establish An Online Presence
        </h2>
      </BentoChildContainer>
      <BentoChildContainer className="col-span-2 row-span-2 flex items-center gap-x-2 rounded-2xl text-2xl">
        <Shapes size={32} className="text-stone-500" />
        Design
      </BentoChildContainer>
      <BentoChildContainer className="col-span-2 row-span-2 flex items-center gap-x-2 rounded-2xl text-2xl">
        <Code size={32} className="text-stone-500" />
        Develop
      </BentoChildContainer>
      <BentoChildContainer className="col-span-2 row-span-2 flex items-center gap-x-2 rounded-2xl text-2xl">
        <RocketLaunch size={32} className="text-stone-500" />
        Deploy
      </BentoChildContainer>
    </GridSectionContainer>
  )
}

export default PrimaryFeatureBlock
