import { ReactNode, ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/utils'

interface Props extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={cn('mx-auto max-w-screen-xl px-4 sm:px-6', className)}>{children}</section>
  )
}
