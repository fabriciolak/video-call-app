import * as React from 'react'
import Image from 'next/image'
import * as Badge from '@/components/Badge'
import { tw } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

type VideoChatProps = React.ComponentProps<'div'> & {
  name: string
  avatar: string
}

export function VideoChat({ avatar, name, className }: VideoChatProps) {
  return (
    <div
      className={tw(
        'flex h-full flex-col rounded-lg bg-dark-700 px-6 py-5',
        className,
      )}
    >
      <div className="flex h-10 items-center justify-end">
        <span className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-blue">
          <MoreHorizontal className="h-6 w-6 text-primary-gray" />
        </span>
      </div>

      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <Image
            src="https://github.com/fabriciolak.png"
            alt=""
            width={104}
            height={104}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex h-10 items-center justify-start">
        <Badge.Root>Fabricio</Badge.Root>
      </div>
    </div>
  )
}
