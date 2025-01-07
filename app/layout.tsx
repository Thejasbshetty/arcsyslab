import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chat Interface",
  description: "Modern chat interface built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        {children}
        <footer className="p-4 border-t border-border">
          <div className="container flex justify-between items-center">
            <div className="text-xl font-semibold">Logo</div>
            <div className="text-sm text-muted-foreground">Contact@00000000.tech</div>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

