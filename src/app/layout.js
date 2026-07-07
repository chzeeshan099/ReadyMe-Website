import "./globals.css";

export const metadata = {
  title: "Ready Me Website",
  description: "Responsive Ready Me website built from the existing app flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

