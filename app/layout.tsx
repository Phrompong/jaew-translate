import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={font.className}>
      <body>{children}</body>
    </html>
  );
}
