import { tw } from '@/lib/utils'
import React from 'react'

type RootProps = React.ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className={tw(
        'inline-flex rounded-3xl px-6 py-2 text-xs font-semibold text-dark',
        props.className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
