import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex items-center justify-between'>
      <div className='border border-red-500 w-1/2'>
           <Image
            src="/owner%20images/struggle.png"
            alt="missing struggle page image"
            width={100}
            height={100}
            priority
            className="w-full h-auto"
            />
      </div>
      <div className='border border-green-500 w-1/2'>
           <Image
            src="/struggle1.png" 
            alt="missing struggle page image"
            width={100}
            height={100}
            priority
            className="w-full h-auto"
            />
      </div>
    </div>
    </>
  )
}

export default Hero
