import React from 'react'
import HeroSection from '@/modules/home/HeroSection.jsx'
import { Reveal } from "@/components/motion-system";

const index = () => {
  return (
    <div>
      <Reveal>
        <HeroSection/>
      </Reveal>
    </div>
  )
}

export default index
