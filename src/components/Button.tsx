import * as React from 'react'
import { tw } from '@/lib/utils'

type ButtonProps = React.ComponentProps<'button'>

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={tw(
        'inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark-500 text-title-color',
        className,
      )}
      {...props}
      type="button"
    >
      {children}
    </button>
  )
}
