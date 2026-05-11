import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Osorio — Systems Builder",
  description:
    "Software, embedded systems, and robotics — interfaces, real-time backends, and hardware that work as one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased transition-colors duration-300`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='portfolio-theme';var s=localStorage.getItem(k);var dark=s==='dark'||(s!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',dark);}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
