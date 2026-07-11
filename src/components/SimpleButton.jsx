import React from 'react'
import Link from "next/link";
const SimpleButton = ({href=null , children}) => {
  return (
    <>
      <button>
           <Link
              href={href}
              className="inline-flex min-h-16 items-center justify-center rounded-[18px] border border-white/14 bg-white/[0.02] px-4 lg:px-8 text-sm lg:text-lg font-medium text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-200 hover:bg-white/[0.05]"
            >
              {children}
            </Link>
      </button>
      </>
  )
}

export default SimpleButton
