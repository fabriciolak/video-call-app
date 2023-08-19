import { v4 as uuidv4 } from 'uuid'
import { twMerge } from 'tailwind-merge'

export function tw(...className: string[]): string {
  return twMerge(...className)
}

export function generateUUID() {
  const uuid = uuidv4()

  console.log(uuid)

  return uuid.slice(0, 4) + '-' + uuid.slice(4, 8) + '-' + uuid.slice(9, 13)
}
