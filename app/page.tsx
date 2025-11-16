'use client'

import { NavigationBar } from '@/components/navigation-bar'
import { VideoFeed } from '@/components/video-feed'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      <VideoFeed />
      <Footer />
    </main>
  )
}
