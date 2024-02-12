import React from 'react'
import { cn } from 'lib/utils'

const BentoChildContainer = ({
  children,
  className,
}: { children: React.ReactNode } & React.ComponentPropsWithRef<'div'>) => {
  return (
    <div className={cn('rounded-2xl bg-stone-300 p-8 pt-16 dark:bg-stone-800', className)}>
      {children}
    </div>
  )
}

export default BentoChildContainer
