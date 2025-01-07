import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface UserAvatarProps {
  name: string
  image?: string
  className?: string
}

export function UserAvatar({ name, image, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback />
    </Avatar>
  )
}

