import React from 'react'
import Hero from './Hero'
import Card from './Card'
import EveryThingYouNeed from './EveryThingYouNeed'
import Mission from './Mission'
import Card2 from './Card2'
import { Reveal } from "@/components/motion-system";

const index = () => {
  return (
   <>
     <div>
        <Reveal direction="left">
          <Hero/>
        </Reveal>
        <Reveal delay={0.04} direction="right">
          <Card/>
        </Reveal>
        <Reveal delay={0.08} direction="bottom">
          <EveryThingYouNeed/>
        </Reveal>
        <Reveal delay={0.12} direction="left">
          <Mission/>
        </Reveal>
        <Reveal delay={0.16} direction="right">
          <Card2/>
        </Reveal>
     </div>
   </>
  )
}

export default index
