import React from 'react'
import RemittanceHero from './_components/RemittanceHero'
import Header from '../../../_partials/Header'
import RemittanceFeatures from './_components/RemittanceFeatures'
import HowItWorksSection from './_components/HowItWorks'
import CTASection from './_components/CTASection'

function page() {
  return (
    <div>
      <div className="relative">
      <Header />
        <RemittanceHero />
      </div>
      <RemittanceFeatures />
      <HowItWorksSection/>
      <CTASection/>
    </div>
  )
}

export default page