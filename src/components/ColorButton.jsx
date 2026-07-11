import React from 'react'
import Link from "next/link";
const ColorButton = ({href=null , children}) => {
  return (
    <>
      <button>
           <Link
              href={href}
              className="inline-flex items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#6D28FF] to-[#0B7BFF] px-4 py-3.5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(17,85,255,0.24)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_22px_44px_rgba(17,85,255,0.32)] lg:px-[22px] lg:py-4 lg:text-base"
            >
              {children}
            </Link>
      </button>
      </>
  )
}

export default ColorButton
