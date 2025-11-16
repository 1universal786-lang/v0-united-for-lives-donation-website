'use client'

import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-sm text-foreground">
                APS
              </div>
              <span className="text-xl font-bold">APS</span>
            </div>
            <p className="text-background/80">
              Anonymous Problems Solver – Share privately. Get solutions confidently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#trust" className="text-background/80 hover:text-background transition-colors">Why Trust Us</a></li>
              <li><a href="#stories" className="text-background/80 hover:text-background transition-colors">Stories</a></li>
              <li><a href="#submit" className="text-background/80 hover:text-background transition-colors">Submit Problem</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact & Legal</h4>
            <div className="space-y-3">
              <a href="mailto:help@anonymousproblems.com" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
                <span>help@anonymousproblems.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm text-background/80">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <div className="text-right md:text-left">© 2025 Anonymous Problems Solver. All rights reserved.</div>
          </div>
          <p className="text-center text-background/70 text-xs">
            We prioritize your privacy and security. Your anonymity is non-negotiable.
          </p>
        </div>
      </div>
    </footer>
  )
}
