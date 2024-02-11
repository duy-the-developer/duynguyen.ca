import React from 'react'
import { cn } from '../lib/utils'

const GridSectionContainer = ({
  children,
  className,
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('grid grid-cols-6 grid-rows-6 gap-2 py-12 lg:gap-4 lg:py-16', className)}>
      {children}
    </div>
  )
}

export default GridSectionContainer
