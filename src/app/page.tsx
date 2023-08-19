'use client'

import * as React from 'react'
import * as Tab from '@/components/Tab'
import * as Chat from '@/components/Chat'
import {
  AlignJustify,
  MessageSquare,
  Mic,
  PhoneOff,
  Video as VideoIcon,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/Button'
import { VideoChat } from '@/components/VideoChat'

export default function Home() {
  const [showOpenTab, setShowOpenTab] = React.useState<boolean>(false)

  const tabDataStateOpen = showOpenTab ? 'open' : 'closed'

  function onOpenChatTab() {
    setShowOpenTab((state) => !state)
  }

  return (
    <div
      className={twMerge(
        'mx-auto h-screen w-container px-8',
        showOpenTab && 'grid w-container-full grid-cols-video-chat gap-6',
      )}
    >
      {/* Video */}

      <div className="grid h-full grid-cols-video grid-rows-video">
        <div className="w-full">
          <div className="mx-auto flex h-full items-center">
            <span className="text-xl font-bold tracking-[-0.0219rem] text-title-color">
              Navigating the path to success.
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto h-full rounded-xl">
            <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
              <VideoChat
                name="Fabrício"
                avatar=""
                className="h-full w-full border border-dark-500"
              />
              <VideoChat
                name="Fabrício"
                avatar=""
                className="h-full w-full border border-dark-500"
              />
              <VideoChat
                name="Fabrício"
                avatar=""
                className="h-full w-full border border-dark-500"
              />
              <VideoChat
                name="Fabrício"
                avatar=""
                className="h-full w-full border border-dark-500"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="flex h-full items-center justify-center">
            <div className="grid w-full grid-cols-3">
              <div>
                <Button>
                  <AlignJustify className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Button>
                  <Mic className="h-6 w-6" />
                </Button>
                <Button>
                  <VideoIcon className="h-6 w-6" />
                </Button>
                <Button className="bg-danger">
                  <PhoneOff className="h-6 w-6" />
                </Button>
              </div>
              <div className="ml-auto">
                <Button onClick={onOpenChatTab}>
                  <MessageSquare className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aside */}
      {showOpenTab && (
        <aside
          className="mt-[6.125rem] flex w-full justify-between"
          data-state={tabDataStateOpen}
        >
          <Tab.Root
            className="grid w-full grid-rows-[auto_1fr_112px] gap-6"
            defaultValue="chat"
          >
            <Tab.List onCloseTab={() => setShowOpenTab((state) => !state)}>
              <Tab.Trigger value="chat">Chat</Tab.Trigger>
              <Tab.Trigger value="participants">Participants</Tab.Trigger>
            </Tab.List>

            <Tab.Content value="chat">
              <span className="mb-2 font-bold tracking-[-0.0219rem] text-primary-gray">
                Chat
              </span>

              {Array.from({ length: 8 }).map((_, index) => (
                <Chat.Root key={index}>
                  <Chat.Image imageURL="https://github.com/fabriciolak.png" />

                  <Chat.Control>
                    <Chat.About lastSeen="10 min ago">Fabrício</Chat.About>
                    <Chat.Message>Hi u all</Chat.Message>
                  </Chat.Control>
                </Chat.Root>
              ))}
            </Tab.Content>
            <Tab.Content value="participants">
              content tab Participants
            </Tab.Content>

            <div className="flex h-[112px] items-center justify-center">
              <div className="w-full">
                <Button className="w-full justify-start px-6 py-4">Oi</Button>
              </div>
            </div>
          </Tab.Root>
        </aside>
      )}
    </div>
  )
}
