import { Chat } from "./components/chat"
import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-background">
          <Chat />
        </main>
      </div>
    </div>
  )
}

