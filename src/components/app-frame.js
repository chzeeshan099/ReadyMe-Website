import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function AppFrame({ children }) {
  return (
    <>
      <div className="w-full">
        <SiteHeader />
        <main>
          <div>{children}</div>
        </main>
        {/* <SiteFooter /> */}
      </div>
    </>
  );
}
