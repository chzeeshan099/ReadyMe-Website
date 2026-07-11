import AppFrame from "@/components/app-frame";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

export const metadata = {
  title: "Ready Me Website",
  description: "Responsive Ready Me website built from the existing app flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppFrame>{children}</AppFrame>
        </ThemeProvider>
      </body>
    </html>
  );
}

