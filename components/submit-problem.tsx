'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

export function SubmitProblemSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    category: 'personal',
    description: '',
    contact: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ category: 'personal', description: '', contact: '' })
    }, 3000)
  }

  return (
    <section id="submit" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Share Your Problem</h2>
          <p className="text-lg text-foreground/70">
            Your story is safe with us. Complete anonymity guaranteed. We'll analyze your situation and provide personalized solutions.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border border-border shadow-lg">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You</h3>
              <p className="text-foreground/70">
                Your problem has been received securely. Our team will review it and provide guidance within 24-48 hours. You'll receive a response using your provided contact method.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Problem Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="personal">Personal & Self-Development</option>
                  <option value="emotional">Emotional & Mental Health</option>
                  <option value="financial">Financial & Career</option>
                  <option value="relationships">Relationships & Family</option>
                  <option value="social">Social & Communication</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Describe Your Problem</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Share as much detail as you're comfortable with. The more context you provide, the better guidance we can offer..."
                  rows={8}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Preferred Contact Method</label>
                <input
                  type="email"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Email address (for receiving solutions securely)"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-foreground/60 mt-2">Your email will only be used to send your personalized solution. We never share it with anyone.</p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="w-5 h-5 mt-0.5 accent-primary"
                />
                <label htmlFor="privacy" className="text-sm text-foreground/70">
                  I understand my information is completely confidential and encrypted. I consent to receive professional guidance on my problem.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors shadow-lg"
              >
                Submit Problem Securely
              </button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
