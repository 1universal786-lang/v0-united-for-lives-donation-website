'use client'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
          </div>

          {/* Center - Creator Credit */}
          <div className="text-sm text-center">
            <p className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Created by SUBHAN ZAFAR KAYANI – Pakistan
            </p>
          </div>

          {/* Right Section */}
          <div className="text-xs text-muted-foreground">
            © 2025 Zyntero. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
