import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";
import { FloatingNav } from "@/components/ui/core/components/site-header";
import { siteConfig } from "@/config";




export const metadata: Metadata = siteConfig;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} font-poppin antialiased`}
      >
        <FloatingNav/>
        {children}
      </body>
    </html>
  );
}
