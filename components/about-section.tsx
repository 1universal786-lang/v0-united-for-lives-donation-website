'use client'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About UnitedForLives</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            UnitedForLives is a global humanitarian initiative dedicated to saving the lives of homeless, disabled, elderly, widows, and needy families across Pakistan and around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-3">100%</div>
              <h3 className="font-bold text-foreground mb-2">Transparency</h3>
              <p className="text-foreground/70">Every donation is tracked and reported monthly with full accountability.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-xl border border-secondary/20">
              <div className="text-4xl font-bold text-secondary mb-3">Honest</div>
              <h3 className="font-bold text-foreground mb-2">Integrity</h3>
              <p className="text-foreground/70">We operate with complete honesty and maintain the highest standards of ethics.</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-xl border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-3">∞</div>
              <h3 className="font-bold text-foreground mb-2">Humanity</h3>
              <p className="text-foreground/70">Every act of kindness, no matter how small, changes someone's entire future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
