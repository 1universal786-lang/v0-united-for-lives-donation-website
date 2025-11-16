'use client'

import { Card } from '@/components/ui/card'

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Share Anonymously',
      description: 'Submit your problem through our secure message box. Your identity is completely hidden—no personal information required.'
    },
    {
      number: '2',
      title: 'Expert Guidance',
      description: 'Our team reviews your situation and provides thoughtful, professional solutions tailored to your specific problem.'
    },
    {
      number: '3',
      title: 'Receive Solutions',
      description: 'Get actionable advice and support delivered confidentially. Implement solutions with confidence.'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A simple, three-step process to get the help you need while maintaining complete anonymity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
