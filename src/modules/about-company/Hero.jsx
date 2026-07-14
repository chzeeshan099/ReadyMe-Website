import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-1 mb-6">
               <div className="w-full md:w-[50%] ">
              
                 <div className="mt-0 inline-flex rounded-full border border-blue bg-[#07101d]/80 p-2 md:p-3 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] text-textWhiteLight shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                   <p>
                     Learn More. <span className="text-blue">Achieve More.</span>
                   </p>
                 </div>
   
                 <h1 className="mt-8 text-[35px] md:text-5xl lg:text-6xl font-semibold text-white">
                   About Ready 
                   <span className="pl-2 text-blue">
                      Me
                   </span>
                 </h1>
   
                 <p className="mt-4  text-[1.15rem] leading-7 text-[#c6cfdf] sm:text-[1.45rem]">
                  ReadyMe is an all in one AI-powered learning platform built for  <span className='text-blue'>IGCSE, O Levels, and A Levels (AS & A2)</span> students.
                  We bring everything you need to learn, practice, and succeed all in one place.
                 </p>
   
               
               </div>
   
               <div className="mx-auto mt-2 md:mt-0  w-full md:w-[50%]">
                 <Image
                   src="/about.png"
                   alt="ReadyMe live-classes app preview"
                   width={1535}
                   height={1024}
                   priority
                   quality={100}
                  //  sizes="(max-width: 1280px) 100vw, 50vw"
                   className="relative z-10 md:h-[300px] lg:h-88 w-full"
                 />
               </div>
             </div>
   </>
  )
}

export default Hero
