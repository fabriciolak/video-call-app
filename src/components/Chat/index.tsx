import NextImage from 'next/image'
import React from 'react'

type RootProps = React.ComponentProps<'div'>

export function Root({ children, ...props }: RootProps) {
  return (
    <div
      className="flex w-full gap-2 p-1 [&:not(:first-child)]:mt-4"
      {...props}
    >
      {children}
    </div>
  )
}

type ControlProps = React.ComponentProps<'div'>

export function Control(props: ControlProps) {
  return (
    <div className="flex-1 flex-col" {...props}>
      {props.children}
    </div>
  )
}

type AboutProps = React.ComponentProps<'div'> & {
  lastSeen: string
}

export function About({ lastSeen, children, ...props }: AboutProps) {
  return (
    <div className="flex h-11 items-center justify-between gap-2" {...props}>
      <p className="w-48 flex-1 truncate text-base font-medium text-primary-gray">
        {children}
      </p>
      <span className="text-xs font-medium text-tertiary-gray">{lastSeen}</span>
    </div>
  )
}

type ImageProps = React.ComponentProps<'div'> & {
  imageURL: string
}

export function Image({ imageURL, ...props }: ImageProps) {
  return (
    <div className="h-11 w-11" {...props}>
      <NextImage
        className="rounded-full"
        src={imageURL}
        alt="Profile image"
        width={42}
        height={42}
      />
    </div>
  )
}

type MessageProps = React.ComponentProps<'div'>

export function Message({ children, ...props }: MessageProps) {
  return (
    <div className="border-b border-stroke pb-6" {...props}>
      <p className="text-sm font-medium text-tertiary-gray">{children}</p>
    </div>
  )
}
