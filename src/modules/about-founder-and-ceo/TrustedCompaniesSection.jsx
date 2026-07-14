import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";

const brands = [
  {
  type:'image',
  image:'/netflix1.png'
},
  {
  type:'image',
  image:'/google1.png'
},
  {
  type:'text',
  image:'BOLLYWOOD'
},
  {
  type:'text',
  image:'HOLLYWOOD'
},
 {
  type:'image',
  image:'/skype1.png'
},
 {
  type:'image',
  image:'/hoichoi1.png'
},
];

export default function TrustedCompaniesSection() {
  return (
    <section className="rounded-[28px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="lg:w-[80%]">
          <h2 className="text-base sm:text-3xl font-semibold uppercase text-blue">
            Trusted By World&apos;s Leading Companies
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            {brands.map((brand) => (
             <div key={brand?.image} >
              {
                brand?.type === 'image' ?
                  <Image
                    src={brand?.image}
                    alt="brand image"
                    width={2172}
                    height={724}
                    priority
                    quality={100}
                    className="h-auto w-[80px] md:w-[100px] object-contain"
                  />
                :
               <span className="text-[1.3rem] md:text-[1.7rem] font-semibold tracking-[-0.03em] text-white/90">{brand?.image}</span>
              }
             </div>
            ))}
            <span className="text-sm font-normal tracking-normal text-textWhiteLight">&amp; Many More...</span>
          </div>
        </div>

        <div className="lg:border-l-2 border-lightBlue  sm:px-5 py-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-lightBlue bg-[#081629] text-blue">
              <RiTeamLine className="h-8 w-8" />
            </div>
            <div>
              <p className="sm:text-[2.7rem] font-semibold leading-none text-blue">2,000+</p>
              <p className="mt-2 text-sm sm:text-[1.1rem] text-textWhiteLight">Successful &amp; Trusted Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
