'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Anonymous Problems Solver
            </h1>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
              Share your problems privately. Get solutions confidently.
            </p>
            <p className="text-base md:text-lg text-foreground/65">
              Whether it's personal, emotional, financial, or social—share your struggles anonymously and receive professional guidance and support while your identity remains completely protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors shadow-lg text-center">
                Share Your Problem
              </a>
              <a href="#how-it-works" className="bg-muted text-foreground px-8 py-3 rounded-lg font-semibold border border-border hover:bg-muted/80 transition-colors text-center">
                Get Instant Help
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-[550px] flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-0uZPcIW7c7WgMlTYJd6IZR4R4vIP8F.jpeg"
              alt="Anonymous Problems Solver - Professional and Confidential"
              width={400}
              height={550}
              className="object-cover rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
