'use client'

import { Card } from '@/components/ui/card'

export function StoriesSection() {
  const stories = [
    {
      title: 'Overcome Career Burnout',
      description: 'A professional struggling with burnout received expert guidance on work-life balance, negotiation tactics, and career pivoting. Today, they work in a more fulfilling role with better boundaries.'
    },
    {
      title: 'Navigate Relationship Challenges',
      description: 'Someone facing communication issues in their marriage got personalized counseling strategies. They now have healthier conversations and renewed trust in their relationship.'
    },
    {
      title: 'Manage Financial Stress',
      description: 'A person drowning in debt received a comprehensive financial plan and budgeting advice. Within months, they regained control and started building savings.'
    },
    {
      title: 'Handle Family Conflicts',
      description: 'An individual dealing with toxic family dynamics received support in setting healthy boundaries. They now maintain relationships while protecting their mental health.'
    },
    {
      title: 'Address Mental Health',
      description: 'Someone struggling with anxiety got resources and coping strategies from professionals. They learned techniques that significantly improved their daily life.'
    },
    {
      title: 'Build Confidence',
      description: 'A person lacking self-confidence received personalized guidance on self-development and public speaking. They now feel empowered in social and professional situations.'
    }
  ]

  return (
    <section id="stories" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real transformations from people who trusted us with their problems. Names and details changed to protect anonymity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{story.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
