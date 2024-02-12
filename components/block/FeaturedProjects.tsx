import React from 'react'
import GridSectionContainer from '../GridSectionContainer'
import BentoChildContainer from '../BentoChildContainer'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import { ButtonToLiveProject } from '../ButtonToLiveProject'

const FeaturedProjects = () => {
  return (
    <GridSectionContainer className="grid-rows-none">
      <BentoChildContainer className="col-span-full">
        <h2 className="text-4xl font-bold leading-12 tracking-tight">Notable Projects</h2>
      </BentoChildContainer>
      {projectsData.map((p) => (
        <BentoChildContainer className="col-span-full p-0">
          <Link href={p.href}>
            <GridSectionContainer className="grid-rows-none p-2 lg:grid-rows-3 lg:p-2">
              <div className="group col-span-full flex flex-col justify-start p-6 lg:col-span-4 lg:col-start-3">
                <h3 className="mb-4 flex items-center justify-between text-lg leading-tight tracking-tight lg:text-3xl">
                  {p.title}
                  {p.hrefLive && p.hrefLive !== '' && <ButtonToLiveProject href={p.hrefLive} />}
                </h3>
                <p className="text-stone-500 transition-colors duration-300 ease-in-out">
                  {p.description}
                </p>
              </div>
              <div className="col-span-full overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-3 lg:row-start-1">
                <Image
                  src={p.imgSrcMobile}
                  alt=""
                  width={2000}
                  height={1600}
                  className="col-span-full aspect-[9/16] object-cover lg:aspect-[unset] lg:h-full"
                />
              </div>
              <div className="col-span-full hidden overflow-hidden rounded-2xl lg:col-span-4 lg:row-span-2 lg:flex">
                <Image
                  src={p.imgSrc}
                  alt=""
                  width={2000}
                  height={1600}
                  className="col-span-full object-cover"
                />
              </div>
            </GridSectionContainer>
          </Link>
        </BentoChildContainer>
      ))}
    </GridSectionContainer>
  )
}

export default FeaturedProjects
