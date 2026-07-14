import { Heart, Quote, UserRound } from "lucide-react";
import Image from "next/image";
import { FaHeart, FaUser } from "react-icons/fa";

function SupportCard({ title, subtitle, quote1,quote2, tone, image}) {
       const hisFather = title.toLowerCase().includes("father");
       const hisMother = title.toLowerCase().includes("mother");
  return (
    <div className="group rounded-[22px] border border-lightBlue bg-[linear-gradient(180deg,rgba(8,18,36,0.92),rgba(5,11,22,0.98))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
      <div className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-0 items-start justify-between">
        {/* data div  */}
         <div className="w-full sm:w-[80%] lg:w-[70%]">
           <div className="flex items-start gap-3">
            {
              hisFather && 
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-blue">
                <FaUser className="custom-hover" />
            </div>
            }
            {
              hisMother && 
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-purple">
                <FaHeart className="custom-hover"/>
            </div>
            }
          
            <div className="w-[90%]">
              <p className={`text-base sm:text-xl font-semibold ${hisFather ? 'text-blue' : 'text-purple'}`}>
                {title} - 
                <span className="text-white">
                  {subtitle}
                </span>
                </p>
                <p className="text-xs sm:text-base text-textWhiteLight mt-2 whitespace-pre-line">
                  {quote1}
                </p>

            </div>
          </div>

          
            <div className="mt-4">
              <p className="text-xs sm:text-base text-textWhiteLight">{quote2}</p>
            </div>
         </div>
        {/* image div  */}
            <div className={`flex items-center justify-center w-[120px] lg:w-[200px]`}>
               <Image
                  src={image}
                  alt="support system section image"
                  width={2172}
                  height={724}
                  priority
                  quality={100}
                  className="h-auto w-full object-contain rounded-xl"
                />
         </div>
         
        </div>

      </div>
  );
}

export default function SupportSystemSection() {
  return (
    <section className="rounded-[28px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7">
      <h2 className="text-base sm:text-2xl font-semibold uppercase tracking-[-0.03em] text-blue ">
        Behind Every Success, There Is A Strong Support System.
      </h2>

      <div className="mt-6 grid gap-5">
        <SupportCard
          title="His Father"
          subtitle="The Inspiration"
          quote1="A respected public personality who always believed in him."
          quote2="He always said, “There is nothing that is difficult for you.”"
          tone="bg-[linear-gradient(135deg,#2f7dff,#1744a8)]"
          image="/human.png"
        />
        <SupportCard
          title="His Mother"
          subtitle="The Strength"
          quote1={`Not just a mother, \n but his best friend.`}
          quote2="There are no words for his mother. She is priceless."
          tone="bg-[linear-gradient(135deg,#8d3dff,#5c1ea8)]"
          image="/couple.png"
        />
      </div>
    </section>
  );
}
