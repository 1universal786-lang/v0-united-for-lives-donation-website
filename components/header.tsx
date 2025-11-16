'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            APS
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">Anonymous Problems Solver</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-sm">How It Works</a>
          <a href="#trust" className="text-foreground hover:text-primary transition-colors text-sm">Why Trust Us</a>
          <a href="#stories" className="text-foreground hover:text-primary transition-colors text-sm">Stories</a>
        </nav>
        <a href="#submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent transition-colors text-sm">
          Share Problem
        </a>
      </div>
    </header>
  )
}
