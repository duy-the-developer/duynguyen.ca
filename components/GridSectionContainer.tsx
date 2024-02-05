import React from 'react'

const GridSectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-6 grid-rows-6 gap-2 py-12 lg:gap-4 lg:py-16">
      {children}
    </section>
  )
}

export default GridSectionContainer
