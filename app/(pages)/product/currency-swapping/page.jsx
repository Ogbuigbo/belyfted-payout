import React from 'react'
import Hero from './_components/Hero'
import Header from '../../../_partials/Header'
import WhySwapCurrenciesSection from './_components/WhySwapCurrenciesSection'
import GlobalBussiness from './_components/GlobalBussiness'
 
function page() {
  return (
    <div>
      <div className="relative">
        <Header />
      <Hero />
      </div>
      <WhySwapCurrenciesSection />
      <GlobalBussiness />
    </div>
  )
}

export default page