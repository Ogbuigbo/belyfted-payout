import React from 'react'

import FundsHero from './_components/FundsHero'
import Header from '../../../_partials/Header'
import FundsFeaturesSection from './_components/FundsFeaturesSection'
import HowItWorksSection from './_components/HowItWorksSection'
import BusinessSection from './_components/BussinessSection'

function page() {
  return (
    <div>
        <div className="relative">
            <Header />
      <FundsHero />
      </div>
      <FundsFeaturesSection />
      <HowItWorksSection />
      <BusinessSection />
    </div>
  )
}

export default page