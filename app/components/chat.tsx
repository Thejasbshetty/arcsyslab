'use client';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { UserAvatar } from './user-avatar';
import { ArrowLeft, Send, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ChatProps {
  activeChat: string;
}

export function Chat({ activeChat }: ChatProps) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Simulate loading messages for the active chat
    setMessages([
      {
        role: 'assistant',
        content: `Hey there! This is ${activeChat}.`,
        name: 'Assistant',
        timestamp: '2:30 PM',
      },
      {
        role: 'user',
        content: `Hi ${activeChat}! How are you?`,
        name: 'User',
        timestamp: '2:31 PM',
      },
    ]);
  }, [activeChat]);

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-[#1C1C1C]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#2C2C2C]">
        <div className="flex items-center space-x-3">
          <UserAvatar
            name={activeChat}
            image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
            className="h-8 w-8"
          />
          <span className="text-sm font-medium text-white">{activeChat}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white space-x-2">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-4 py-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end items-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex ${message.role === 'user' ? 'flex-row-reverse' : ''} items-end space-x-2 max-w-[80%]`}
              >
                <UserAvatar
                  name={message.name}
                  image={
                    message.role === 'assistant'
                      ? 'https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__'
                      : 'https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3MxA3JrCmOfxnsiq9Ul6zzExrys4R80jn53f7wNxLtXZVk5Ndoi3~jYA8eHorcKJ6X1--jtbMd6wrvrQjvVI9Tj9JYyoaXJXTMCbzWULoc6d~z5qQY~awEvY7BZIifxIKlgAxjyKstrG7QnWNlRBCSooAaRZKHNaU8JkROc2yANCVzHy45oYj0RERG5hTVM~xX-~eXf0p~5z2vOD2uj8JFpABUHIvkK5PNOgouiMUWe2521Q7~6BJxwmJhAYkp8kHrPCv0Gm2ucrV4hXJ6v1arEVdgFhHO3AGX3q4LUtAYZUEC73SaKrqfEmp8-Q29yjzPFBlAG68b3lLTr5Vn50A__'
                  }
                  className="h-8 w-8"
                />
                <div className="flex flex-col gap-1">
                  <Card
                    className={`p-3 ${
                      message.role === 'user'
                        ? 'bg-[#FFB7A0] text-black'
                        : 'bg-[#2C2C2C] text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </Card>
                  <span className="text-[10px] text-gray-400 px-1">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Field */}
      <div className="p-4">
        <div className="flex space-x-2">
          <Input
            className="flex-1 bg-[#2C2C2C] border-0 text-sm text-white placeholder-gray-400"
            placeholder="Message"
            type="text"
          />
          <Button size="icon" className="bg-[#FFB7A0] text-black hover:bg-[#FFB7A0]/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
