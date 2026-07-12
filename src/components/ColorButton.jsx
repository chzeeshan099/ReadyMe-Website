import React from 'react'
import Link from "next/link";
const ColorButton = ({href='' , children}) => {
  return (
    <>
      <button>
           <Link
              href={href}
              className="inline-flex items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#6D28FF] to-[#0B7BFF] px-5 py-3.5 lg:py-4 text-sm font-bold  lg:text-base text-white shadow-[0_18px_38px_rgba(17,85,255,0.24)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_22px_44px_rgba(17,85,255,0.32)] "
            >
              {children}
            </Link>
      </button>
      </>
  )
}

export default ColorButton
