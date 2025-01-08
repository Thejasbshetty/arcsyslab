import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { UserAvatar } from "./user-avatar";
import { Plus } from 'lucide-react';

interface SidebarProps {
  className?: string;
  onChatSelect: (chatName: string) => void;
  activeChat: string;
}

export function Sidebar({ className, onChatSelect, activeChat }: SidebarProps) {
  const chats = [
    { name: "Caressa Jessalin", lastMessage: "Hey there!" },
    { name: "Letty Bride", lastMessage: "How are you?" },
  ];

  return (
    <div className={`w-80 bg-[#1C1C1C] overflow-hidden rounded-2xl ${className}`}>
      <div className="flex items-center justify-between p-4">
        <div className="font-medium text-sm text-white">ALL YOUR CHATS</div>
      </div>
      
      <div className="px-4 py-2">
        <Button
          className="w-full rounded-lg bg-[#FFB7A0] text-sm font-medium text-black py-2 hover:opacity-90"
        >
          Chat Images ON
        </Button>
        <p className="mt-2 text-xs text-gray-400">
          When a bot sends you images, you will be charged one secondary image
        </p>
      </div>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="space-y-2 p-4">
          {chats.map((chat) => (
            <Button
              key={chat.name}
              variant="ghost"
              className={`w-full justify-start rounded-lg ${
                activeChat === chat.name ? 'bg-[#3C3C3C]' : 'bg-[#2C2C2C]'
              } hover:bg-[#3C3C3C] text-white`}
              onClick={() => onChatSelect(chat.name)}
            >
              <UserAvatar
                name={chat.name}
                image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
                className="mr-2 h-8 w-8"
              />
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">{chat.name}</div>
                <div className="text-xs text-gray-400">{chat.lastMessage}</div>
              </div>
            </Button>
          ))}
        </div>
        
        <hr className="my-4 border-t border-[#2C2C2C]" />
        <Button
          variant="ghost"
          className="mx-4 flex w-[calc(100%-2rem)] items-center justify-start rounded-lg bg-[#2C2C2C] hover:bg-[#3C3C3C] text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FFB7A0] mr-2">
            <Plus className="h-4 w-4 text-[#FFB7A0]" />
          </div>
          <span className="text-sm">Create new bot</span>
        </Button>
      </ScrollArea>
    </div>
  );
}

