'use client'

import * as TabsRadix from '@radix-ui/react-tabs'
import { X } from 'lucide-react'

type RootProps = React.RefAttributes<HTMLDivElement> & TabsRadix.TabsProps

export function Root(props: RootProps) {
  return (
    <TabsRadix.Root {...props}>
      <TabsRadix.List>
        <div className="flex w-[261px] items-center justify-between" {...props}>
          {props.children}

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-500 "
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      </TabsRadix.List>
    </TabsRadix.Root>
  )
}

type ControlProps = React.ComponentProps<'div'>

export function Control(props: ControlProps) {
  return (
    <div
      className="rounded-full border-2 border-dark-600 bg-dark-700 p-0.5"
      {...props}
    >
      {props.children}
    </div>
  )
}

type TriggerProps = React.ComponentProps<'div'>

export function Trigger(props: TriggerProps) {
  return (
    <div className="flex gap-1" {...props}>
      {props.children}
    </div>
  )
}

type ItemProps = React.ComponentProps<'button'> & {
  value: string
  isActive?: boolean
}

export function Item({ isActive, value, ...props }: ItemProps) {
  // if (isActive) {
  //   return (
  //     <button
  //       type="button"
  //       className="h-full rounded-full bg-dark-600 px-3 py-2 text-sm font-medium text-primary-gray"
  //       {...props}
  //     >
  //       {props.children}
  //     </button>
  //   )
  // } else {
  //   return (
  //     <button
  //       type="button"
  //       className="h-full rounded-full  px-3 py-2 text-sm font-medium text-primary-gray"
  //       {...props}
  //     >
  //       {props.children}
  //     </button>
  //   )
  // }

  return (
    <TabsRadix.Trigger value={value}>
      {isActive ? (
        <button
          type="button"
          className="h-full rounded-full bg-dark-600 px-3 py-2 text-sm font-medium text-primary-gray"
          {...props}
        >
          {props.children}
        </button>
      ) : (
        <button
          type="button"
          className="h-full rounded-full  px-3 py-2 text-sm font-medium text-primary-gray"
          {...props}
        >
          {props.children}
        </button>
      )}
    </TabsRadix.Trigger>
  )
}

type ContentProps = React.RefAttributes<HTMLDivElement> &
  TabsRadix.TabsContentProps

export function Content({ value, children, ...props }: ContentProps) {
  return (
    <TabsRadix.Content value={value} {...props}>
      {children}
    </TabsRadix.Content>
  )
}

type BadgeNumberProps = React.ComponentProps<'span'> & {
  participantsNumber: number
}

export function BadgeNumber(props: BadgeNumberProps) {
  return (
    <span
      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-dark-600 text-sm font-medium text-primary-gray"
      {...props}
    >
      {props.participantsNumber}
    </span>
  )
}
