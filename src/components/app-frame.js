import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { AmbientMotion, PageTransition } from "@/components/motion-system";

export default function AppFrame({ children }) {
  return (
    <>
    <section className="relative overflow-hidden bg-black text-white">
      <AmbientMotion />
      <div className="w-full">
        <SiteHeader />
        <main className="px-4 mx-auto w-[calc(100%-18px)] max-w-[1540px] py-5 sm:w-[calc(100%-28px)]">
          <PageTransition>{children}</PageTransition>
        </main>
        {/* <SiteFooter /> */}
      </div>
    </section>
    </>
  );
}
