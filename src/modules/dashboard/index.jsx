import React from 'react'
import Dashboard1 from '@/modules/dashboard/Dashboard1.jsx'
import Dashboard2 from '@/modules/dashboard/Dashboard2.jsx'
import HeroSection from '@/modules/dashboard/HeroSection.jsx'
const index = () => {
  return (
    <div className='bg-[#010103]'>
      <HeroSection/>
      <Dashboard1/>
      <Dashboard2/>

    </div>
  )
}

export default index
