import AppFrame from "@/components/app-frame";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ToastProvider from "@/components/ToastProvider";
export const metadata = {
  title: "Ready Me Website",
  description: "Responsive Ready Me website built from the existing app flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <ThemeProvider>
          <AppFrame>{children}</AppFrame>
           <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
