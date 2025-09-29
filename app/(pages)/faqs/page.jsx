import React from 'react'
import FaqHero from './_components/FaqHero'
import Header from '../../_partials/Header'
import FaqSection from './FaqSection'

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <FaqHero />
      </div>
      <FaqSection />
    </div>
  )
}

export default page