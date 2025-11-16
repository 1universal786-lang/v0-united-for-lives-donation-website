'use client'

import { NavigationBar } from '@/components/navigation-bar'
import { Search } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { name: 'Entertainment', icon: '🎬', color: 'from-pink-500 to-rose-500' },
  { name: 'Music', icon: '🎵', color: 'from-purple-500 to-indigo-500' },
  { name: 'Comedy', icon: '😂', color: 'from-yellow-500 to-orange-500' },
  { name: 'Travel', icon: '✈️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Tech', icon: '💻', color: 'from-green-500 to-emerald-500' },
  { name: 'Fitness', icon: '💪', color: 'from-red-500 to-pink-500' },
  { name: 'Food', icon: '🍜', color: 'from-orange-500 to-yellow-500' },
  { name: 'Art', icon: '🎨', color: 'from-purple-500 to-pink-500' },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Explore Zyntero</h1>
          <p className="text-muted-foreground mb-8">Discover trending videos and new creators</p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search videos, creators..."
              className="w-full bg-card border border-border rounded-full py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} hover:scale-105 transition-transform duration-300 text-white text-center group`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <p className="font-semibold group-hover:translate-y-0 transition-transform">{category.name}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
