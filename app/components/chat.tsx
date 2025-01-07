'use client'

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { UserAvatar } from "./user-avatar"
import { ArrowLeft, Send, Trash2 } from 'lucide-react'
import { useState } from "react"

export function Chat() {
    // romoved unwanted components 
    const [messages] = useState([
      {
        role: 'assistant',
        content: 'Your order according to application yes?',
        avatar: 'https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__',
        name: 'Assistant',
        timestamp: '2:30 PM'
      },
      {
        role: 'user',
        content: 'Yes my order according to application. Thank you!',
        name: 'User',
        timestamp: '2:31 PM'
      },
      {
        role: 'assistant',
        content: 'How can I help You?',
        avatar: 'https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__',
        name: 'Assistant',
        timestamp: '2:32 PM'
      }
    ])
  
    return (
      <div className="flex flex-col h-[calc(100vh-3.5rem)]">
        <div className="flex items-center justify-between border-b border-border px-4 md:px-6 py-2">
          <div className="flex items-center space-x-3">
            <UserAvatar
              name="Caressa jessalin"
              image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
              className="h-8 w-8"
            />
            <span className="text-sm font-medium">Caressa jessalin</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 px-4 md:px-6 py-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className="flex items-end space-x-2 max-w-[80%]">
                  {message.role === 'assistant' && (
                    <UserAvatar
                    name={message.name}
                    image="https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__"
                    className="h-8 w-8 rounded-full object-cover object-top"
                  /> 
                  )}
                  <div className="flex flex-col gap-1">
                    <Card className={`p-3 ${
                      message.role === 'user' 
                        ? 'bg-[#F3AE9F] text-[#2C2C2C] ml-auto' 
                        : 'bg-secondary'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </Card>
                    <span className="text-[10px] text-muted-foreground px-1">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t border-border p-4">
          <div className="flex space-x-2">
            <Input
              className="flex-1 bg-secondary border-0 text-sm"
              placeholder="Message"
              type="text"
            />
            <Button size="icon" className="bg-[#F3AE9F] text-[#2C2C2C] hover:bg-[#F3AE9F]/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }