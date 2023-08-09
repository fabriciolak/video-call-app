import * as TabsRadix from '@radix-ui/react-tabs'

import { X } from 'lucide-react'

type RootProps = React.RefAttributes<HTMLDivElement> & TabsRadix.TabsProps

export function Root({ value, children, ...props }: RootProps) {
  return (
    <TabsRadix.Root className="grid gap-6" value={value} {...props}>
      {children}
    </TabsRadix.Root>
  )
}

type ListProps = React.RefAttributes<HTMLDivElement> & TabsRadix.TabsListProps

export function List({ children, ...props }: ListProps) {
  return (
    <TabsRadix.List {...props}>
      <div className="flex items-center justify-between rounded-full border-2 border-dark-600 bg-dark-700 p-0.5">
        <div className="flex items-center justify-between gap-1">
          {children}
        </div>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-dark-600">
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </TabsRadix.List>
  )
}

type TriggerProps = React.RefAttributes<HTMLButtonElement> &
  TabsRadix.TabsTriggerProps & {
    participantsNumber?: number
  }

export function Trigger({
  participantsNumber,
  value,
  children,
  ...props
}: TriggerProps) {
  return (
    <TabsRadix.Trigger
      className="inline-flex rounded-full px-3 py-2 text-sm font-medium text-primary-gray data-[state=active]:bg-dark-600"
      value={value}
      {...props}
    >
      <>
        {children}
        {participantsNumber && (
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-dark-600">
            {participantsNumber}
          </span>
        )}
      </>
    </TabsRadix.Trigger>
  )
}

type ContentProps = React.RefAttributes<HTMLDivElement> &
  TabsRadix.TabsContentProps

export function Content({ value, children, ...props }: ContentProps) {
  return (
    <TabsRadix.Content value={value} {...props}>
      <div className="w-full">{children}</div>
    </TabsRadix.Content>
  )
}
