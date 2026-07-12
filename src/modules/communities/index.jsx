import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <>
    <div>
        <div className='w-full lg:w-1/2'>
            <Image
              src="/communities.png"
              alt="missing communities page image"
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

export default index
