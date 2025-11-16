'use client'

export function TransparencySection() {
  const initiatives = [
    {
      title: 'Food Distribution',
      description: 'Daily meals provided to 5,000+ people in need',
      stats: '50,000+ meals distributed monthly',
      image: '/food-distribution-to-homeless-people.jpg',
    },
    {
      title: 'Medical Support',
      description: 'Free healthcare and medications for the disabled',
      stats: '2,000+ patients treated monthly',
      image: '/medical-care-for-elderly-disabled-people.jpg',
    },
    {
      title: 'Shelter Program',
      description: 'Safe housing for homeless families and elderly',
      stats: '500+ beds available year-round',
      image: '/homeless-shelter-safe-housing.jpg',
    },
    {
      title: 'Skills Training',
      description: 'Vocational training to empower individuals',
      stats: '1,500+ people trained annually',
      image: '/vocational-training-workshop.jpg',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Impact & Transparency</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real relief work with real results. Donors receive monthly transparency reports detailing every initiative and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-secondary/5 rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{initiative.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="text-lg font-bold text-primary border-t border-border pt-4">
                  {initiative.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Reports CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">Monthly Transparency Reports</h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Every donor receives detailed monthly reports showing exactly where donations go and the impact created.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-colors shadow-lg">
            Request Monthly Report
          </button>
        </div>
      </div>
    </section>
  )
}
