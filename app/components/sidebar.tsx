import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Switch } from "./ui/switch"
import { UserAvatar } from "./user-avatar"
import { Plus } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-80 border-r border-border bg-card pb-12">
      <div className="p-4 font-semibold text-lg">ALL YOUR CHATS</div>
      <div className="px-4 py-2">
        <div className="rounded-lg bg-accent p-4">
          <div className="flex items-center space-x-2">
            <Switch id="chat-images" />
            <label htmlFor="chat-images" className="text-sm font-medium">
              Chat Images ON
            </label>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            When a bot sends you images, you will be charged one secondary image
          </p>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            <UserAvatar
              name="Caressa jessalin"
              image="/4663198a91f8a512885819053f01fa64.jpg"
              className="mr-2 h-8 w-8"
            />
            <div className="flex-1 text-left">
              <div className="font-semibold">Caressa jessalin</div>
              <div className="text-xs text-muted-foreground">Lorem ipsum dolor sit am...</div>
            </div>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UserAvatar
              name="Letty Bride"
              image="/4663198a91f8a512885819053f01fa64.jpg"
              className="mr-2 h-8 w-8"
            />
            <div className="flex-1 text-left">
              <div className="font-semibold">Letty Bride</div>
              <div className="text-xs text-muted-foreground">Lorem ipsum dolor sit am...</div>
            </div>
          </Button>
        </div>
        <Button variant="ghost" className="mx-4 flex w-[calc(100%-2rem)] items-center justify-start">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border mr-2">
            <Plus className="h-4 w-4" />
          </div>
          Create new bot
        </Button>
      </ScrollArea>
    </div>
  )
}

