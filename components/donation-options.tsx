'use client'

import { useState } from 'react'

export function DonationOptions() {
  const [selectedAmount, setSelectedAmount] = useState(20)
  const [customAmount, setCustomAmount] = useState('')

  const amounts = [5, 10, 20, 50]

  const handleDonate = () => {
    const amount = customAmount || selectedAmount
    console.log(`Donation initiated for: $${amount}`)
    // TODO: Integrate with Stripe payment
  }

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Choose Your Impact</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70">
            Your donation may be small for you, but it is life-changing for them.
          </p>
        </div>

        <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
          <div className="space-y-8">
            {/* Preset Amounts */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Select Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-white text-foreground border-2 border-primary/30 hover:border-primary'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Custom Amount</label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      if (e.target.value) setSelectedAmount(0)
                    }}
                    placeholder="Enter amount"
                    className="w-full bg-white border-2 border-primary/30 rounded-lg py-4 pl-8 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
              <p className="text-foreground/80 font-semibold text-center">
                Your ${customAmount || selectedAmount} donation will provide meals, shelter, and hope to those who need it most.
              </p>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors shadow-lg"
            >
              Proceed to Donation
            </button>

            <p className="text-center text-sm text-foreground/60">
              100% secure. Your information is encrypted and protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
