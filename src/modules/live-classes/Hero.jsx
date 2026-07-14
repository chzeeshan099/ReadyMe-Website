import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-1 mb-6">
               <div className="w-full md:w-[40%] lg:-mt-8">
              
                 <div className="mt-0 inline-flex rounded-full border border-blue bg-[#07101d]/80 p-2 md:p-3 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] text-textWhiteLight shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                   Live.Interactive.Impactful.
                 </div>
   
                 <h1 className="mt-8 text-[44px] md:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-[-0.07em] text-white">
                   Live Classes
                   <span className="mt-2 block bg-[linear-gradient(90deg,#1669ff_0%,#456dff_40%,#a948ff_100%)] bg-clip-text text-transparent">
                     That Inspire.
                   </span>
                 </h1>
   
                 <p className="mt-4  text-[1.15rem] leading-7 text-[#c6cfdf] sm:text-[1.45rem]">
                   Learn live from the world’s best teachers with <span className='text-blue'>10 to 30+ years</span>  of experience.
                   All in your <span className='text-blue'>ReadyMe</span> subscription.
                 </p>
   
               
               </div>
   
               <div className="mx-auto mt-2 md:mt-0  w-full md:w-[60%]">
                 <Image
                   src="/live-classes.png"
                   alt="ReadyMe live-classes app preview"
                   width={1535}
                   height={1024}
                   priority
                   quality={100}
                   sizes="(max-width: 1280px) 100vw, 50vw"
                   className="relative z-10 md:h-[300px] lg:h-88 w-full"
                 />
               </div>
             </div>
   </>
  )
}

export default Hero
