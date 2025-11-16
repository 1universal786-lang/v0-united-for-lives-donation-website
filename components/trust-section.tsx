'use client'

import { Card } from '@/components/ui/card'

export function TrustSection() {
  const trustPoints = [
    {
      title: 'Complete Privacy',
      description: 'Your identity is never revealed. We use encrypted systems and zero-knowledge protocols to protect your anonymity.'
    },
    {
      title: 'Professional Support',
      description: 'Receive guidance from experienced professionals trained in psychology, finance, relationships, and personal development.'
    },
    {
      title: 'Fast Response',
      description: 'We understand urgency. Most problems receive expert guidance within 24-48 hours.'
    },
    {
      title: 'Confidential Archive',
      description: 'All conversations are securely stored and can only be accessed by you. Complete control over your data.'
    },
    {
      title: 'No Judgment',
      description: 'We listen without judgment. Every problem matters, and you deserve respectful, compassionate support.'
    },
    {
      title: 'Secure Platform',
      description: 'Military-grade encryption ensures your messages are protected from unauthorized access at all times.'
    }
  ]

  return (
    <section id="trust" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why People Trust Us</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Privacy, professionalism, and care form the foundation of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, idx) => (
            <Card key={idx} className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
