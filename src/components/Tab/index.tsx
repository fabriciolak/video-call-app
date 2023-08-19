import * as TabsRadix from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { X } from 'lucide-react'
import { tw } from '@/lib/utils'
import { twMerge } from 'tailwind-merge'

type RootProps = React.RefAttributes<HTMLDivElement> & TabsRadix.TabsProps

export function Root({
  value,
  children,
  className,
  defaultValue,
  ...props
}: RootProps) {
  return (
    <TabsRadix.Root
      className={tw('', className)}
      value={value}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsRadix.Root>
  )
}

type ListProps = React.RefAttributes<HTMLDivElement> &
  TabsRadix.TabsListProps & {
    onCloseTab?: () => void
  }
export function List({ children, onCloseTab, ...props }: ListProps) {
  return (
    <TabsRadix.List {...props}>
      <div className="flex items-center justify-between rounded-full border-2 border-dark-600 bg-dark-700 p-0.5">
        <div className="flex items-center justify-between gap-1">
          {children}
        </div>
        <button
          onClick={onCloseTab}
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-dark-600"
        >
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

export function Content({
  value,
  children,
  className,
  ...props
}: ContentProps) {
  return (
    <TabsRadix.Content
      className={twMerge('h-full w-full overflow-hidden p-2', className)}
      value={value}
      {...props}
    >
      <ScrollArea.Root className="h-[600px] w-full overflow-hidden rounded">
        <ScrollArea.Viewport className="h-full w-full rounded">
          <div>{children}</div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex touch-none select-none bg-dark-500 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-dark-700 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="ScrollAreaScrollbar"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>

        <ScrollArea.Corner />
      </ScrollArea.Root>
    </TabsRadix.Content>
  )
}
