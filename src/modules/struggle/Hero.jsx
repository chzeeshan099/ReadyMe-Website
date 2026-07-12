import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-between'>
      <div className='w-full lg:w-1/2'>
           <Image
            src="/owner%20images/struggle.png"
            alt="missing struggle page image"
            width={1672}
            height={941}
            priority
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
            />
      </div>
      <div className='w-full lg:w-1/2'>
           <Image
            src="/struggle1.png" 
            alt="missing struggle page image"
            width={1672}
            height={941}
            priority
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
            />
      </div>
    </div>
    </>
  )
}

export default Hero
