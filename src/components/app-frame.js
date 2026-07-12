import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function AppFrame({ children }) {
  return (
    <>
    <section className="overflow-hidden bg-black text-white">
      <div className="w-full">
        <SiteHeader />
        <main className="px-4 mx-auto w-[calc(100%-18px)] max-w-[1540px] py-5 sm:w-[calc(100%-28px)]">
          <div>{children}</div>
        </main>
        {/* <SiteFooter /> */}
      </div>
    </section>
    </>
  );
}
