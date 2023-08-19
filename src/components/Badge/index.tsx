import * as React from 'react'
import { darken } from 'polished'
import { tw } from '@/lib/utils'

type RootProps = React.ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <span
      className={tw(
        `rounded-3xl bg-red px-6 py-2 text-xs font-bold`,
        `text-[${darken(0.8, '#DBDBDB')}]`,
        props.className,
      )}
      {...props}
    >
      {props.children}
    </span>
  )
}
