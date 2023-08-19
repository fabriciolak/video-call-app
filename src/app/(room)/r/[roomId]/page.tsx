import { generateUUID } from '@/lib/utils'

interface RoomProps {
  params: {
    roomId: string
  }
}

export default function Room({ params }: RoomProps) {
  const uuid = generateUUID()

  return (
    <>
      <h1 className="text-3xl text-primary-gray">
        Your room is waiting for a user
      </h1>
      <span className="text-xl text-primary-gray">
        {params.roomId} - {uuid}
      </span>
    </>
  )
}
