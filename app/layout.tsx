import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin", "cyrillic"], // Add the necessary subsets
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${font.className} bg-header w-screen`}>
      <body>{children}</body>
    </html>
  );
}
