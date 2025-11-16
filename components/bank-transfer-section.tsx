'use client'

import { useState } from 'react'

export function BankTransferSection() {
  const [bankDetails, setBankDetails] = useState({
    accountHolder: 'UnitedForLives Charity',
    bankName: 'First Islamic Bank',
    accountNumber: '12345678901234567890',
    iban: 'PK24FIBA0000123456789012',
    swiftCode: 'FIBAPKKA',
  })

  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Bank Transfer</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70">
            Direct bank transfer option. All donations are received instantly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bank Details Display */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Bank Details</h3>
            
            {[
              { label: 'Account Holder', value: bankDetails.accountHolder, field: 'accountHolder' },
              { label: 'Bank Name', value: bankDetails.bankName, field: 'bankName' },
              { label: 'Account Number', value: bankDetails.accountNumber, field: 'accountNumber' },
              { label: 'IBAN', value: bankDetails.iban, field: 'iban' },
              { label: 'SWIFT Code', value: bankDetails.swiftCode, field: 'swiftCode' },
            ].map((detail) => (
              <div key={detail.field} className="bg-white p-4 rounded-lg border border-border">
                <label className="text-sm font-semibold text-muted-foreground block mb-2">
                  {detail.label}
                </label>
                <div className="flex items-center justify-between gap-3">
                  <code className="text-foreground font-mono text-sm break-all">
                    {detail.value}
                  </code>
                  <button
                    onClick={() => copyToClipboard(detail.value, detail.field)}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold hover:bg-accent transition-colors whitespace-nowrap"
                  >
                    {copied === detail.field ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                ✓ All donations are received instantly and securely. You will receive a confirmation receipt via email.
              </p>
            </div>
          </div>

          {/* Admin Panel Preview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Admin Dashboard</h3>
            <div className="bg-white rounded-lg border border-border p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Administrators can update bank details from the secure admin dashboard. Contact support to access the admin panel.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: '🔐', title: 'Secure Access', desc: 'Multi-factor authentication required' },
                  { icon: '📝', title: 'Edit Details', desc: 'Update all bank information in real-time' },
                  { icon: '📊', title: 'Track Donations', desc: 'View donation statistics and reports' },
                  { icon: '📧', title: 'Send Receipts', desc: 'Automated donor confirmation emails' },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-secondary/5 rounded">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                      <p className="text-xs text-foreground/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-accent transition-colors mt-6">
                Contact Admin Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
