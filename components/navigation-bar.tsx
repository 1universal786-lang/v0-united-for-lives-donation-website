'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Upload, User, Menu, X } from 'lucide-react'

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
              Z
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hidden sm:inline">Zyntero</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link href="/explore" className="text-foreground/80 hover:text-foreground transition-colors">Explore</Link>
            <Link href="/trending" className="text-foreground/80 hover:text-foreground transition-colors">Trending</Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs mx-8">
            <div className="w-full relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search videos, users..." 
                className="w-full bg-card border border-border rounded-full py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </button>
            
            <button className="p-2 rounded-full hover:bg-card transition-colors text-foreground/80 hover:text-foreground">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/" className="block text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link href="/explore" className="block text-foreground/80 hover:text-foreground transition-colors">Explore</Link>
            <Link href="/trending" className="block text-foreground/80 hover:text-foreground transition-colors">Trending</Link>
            <div className="relative pt-2">
              <Search className="absolute left-3 top-5 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search videos, users..." 
                className="w-full bg-card border border-border rounded-lg py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
