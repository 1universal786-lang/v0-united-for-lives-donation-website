'use client'

import { NavigationBar } from '@/components/navigation-bar'
import { TrendingUp } from 'lucide-react'

const trendingVideos = [
  { id: 1, title: 'Viral Dance Challenge', creator: 'Dance Pro', views: '2.5M', likes: '125K' },
  { id: 2, title: 'Cooking Secret Revealed', creator: 'Chef Master', views: '1.8M', likes: '98K' },
  { id: 3, title: 'Tech Gadget Review', creator: 'Tech Guru', views: '1.5M', likes: '87K' },
  { id: 4, title: 'Travel Vlog Japan', creator: 'World Explorer', views: '1.2M', likes: '65K' },
  { id: 5, title: 'Fitness Transformation', creator: 'Fit Coach', views: '985K', likes: '52K' },
  { id: 6, title: 'Comedy Sketch', creator: 'Laugh Out', views: '876K', likes: '48K' },
]

export default function TrendingPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Trending Now</h1>
        </div>

        <div className="space-y-4">
          {trendingVideos.map((video) => (
            <div
              key={video.id}
              className="bg-card border border-border rounded-xl p-4 hover:bg-card/80 transition-colors cursor-pointer hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">by {video.creator}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{video.views} views</p>
                  <p className="text-sm text-primary">{video.likes} likes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
