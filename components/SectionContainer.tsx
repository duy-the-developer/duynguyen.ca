import { ReactNode, ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/utils'

interface Props extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={cn('mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-7xl xl:px-0', className)}>
      {children}
    </section>
  )
}
