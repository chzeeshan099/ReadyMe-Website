import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function AppFrame({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="py-8 md:py-12">
        <div className="shell space-y-8">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
