import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { UserAvatar } from "./user-avatar";
import { Plus } from 'lucide-react';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={`w-80 border-r border-border bg-card ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="font-medium text-sm">ALL YOUR CHATS</div>
      </div>
      
      {/* Chat Images Button */}
      <div className="px-4 py-2">
        <Button
          className="w-full rounded-lg bg-[#F3AE9F] text-sm font-medium text-white py-2 hover:opacity-90"
        >
          Chat Images ON
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          When a bot sends you images, you will be charged one secondary image
        </p>
      </div>

      {/* Chat List */}
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-2 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg bg-transparent hover:bg-[#F3AE9F] hover:opacity-90"
          >
            <UserAvatar
              name="Caressa Jessalin"
              image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
              className="mr-2 h-8 w-8"
            />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium">Caressa Jessalin</div>
              <div className="text-xs text-muted-foreground">Lorem ipsum dolor sit am...</div>
            </div>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg bg-transparent hover:bg-[#F3AE9F] hover:opacity-90"
          >
            <UserAvatar
              name="Letty Bride"
              image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
              className="mr-2 h-8 w-8"
            />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium">Letty Bride</div>
              <div className="text-xs text-muted-foreground">Lorem ipsum dolor sit am...</div>
            </div>
          </Button>
        </div>
        
        {/* Create New Bot Button */}
        <hr className="my-4 border-t border-border" />
        <Button
          variant="ghost"
          className="mx-4 flex w-[calc(100%-2rem)] items-center justify-start rounded-lg bg-transparent hover:bg-[#F3AE9F] hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border mr-2 bg-[#F3AE9F]">
            <Plus className="h-4 w-4 font-black text-black" />
          </div>
          <span className="text-sm">Create new bot</span>
        </Button>
      </ScrollArea>
    </div>
  );
}
