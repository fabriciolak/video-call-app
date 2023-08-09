import React from 'react'

type RootProps = React.ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="inline-flex rounded-3xl bg-green px-6 py-2 text-xs font-semibold text-dark"
      {...props}
    >
      {props.children}
    </div>
  )
}
