import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function AppFrame({ children }) {
  return (
    <>
    <div className="max-w-[2000px] border border-green-500 mx-auto">
      <SiteHeader />
      <main className="">
        <div className="">{children}</div>
      </main>
      {/* <SiteFooter /> */}
    </div>
    </>
  );
}

