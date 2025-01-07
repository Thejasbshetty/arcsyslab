'use client'

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { UserAvatar } from "./user-avatar"
import { ArrowLeft, Send, Trash2 } from 'lucide-react'
import { useState } from "react"

export function Chat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Your order according to application yes?',
      avatar: '/4663198a91f8a512885819053f01fa64.jpg',
      name: 'Assistant'
    },
    {
      role: 'user',
      content: 'Yes my order according to application. Thank you!',
      name: 'User'
    },
    {
      role: 'assistant',
      content: 'How can I help You?',
      avatar: '/4663198a91f8a512885819053f01fa64.jpg',
      name: 'Assistant'
    }
  ])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between border-b border-border px-6 py-3">
        <div className="flex items-center space-x-4">
          <UserAvatar
            name="Caressa jessalin"
            image="/4663198a91f8a512885819053f01fa64.jpg"
          />
          <span className="font-semibold">Caressa jessalin</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className="flex items-end space-x-2">
                {message.role === 'assistant' && (
                  <UserAvatar
                    name={message.name}
                    image={message.avatar}
                    className="h-8 w-8"
                  />
                )}
                <Card className={`max-w-md p-3 ${
                  message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                }`}>
                  <p>{message.content}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t border-border p-4">
        <div className="flex space-x-2">
          <Input
            className="flex-1"
            placeholder="Message"
            type="text"
          />
          <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

