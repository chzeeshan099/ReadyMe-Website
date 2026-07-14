import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Teachers from './Teachers'
import TrustedCard from './TrustedCard'
import { Reveal } from "@/components/motion-system";
const index = () => {
  return (
    <>
    <div>
      <Reveal direction="left">
        <Hero/>
      </Reveal>
      <Reveal delay={0.05} direction="right">
        <Features/>
      </Reveal>
      <Reveal delay={0.1} direction="bottom">
        <Teachers/>
      </Reveal>
      <Reveal delay={0.15} direction="left">
        <TrustedCard/>
      </Reveal>
    </div>
    </>
  )
}

export default index
