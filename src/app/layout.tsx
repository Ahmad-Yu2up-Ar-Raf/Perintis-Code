import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import Providers from "@/components/ui/core/layout/Provider";




export const metadata: Metadata = siteConfig;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontVariables} font-poppin antialiased`}
      >
       <Providers>

        {children}
       </Providers>
      </body>
    </html>
  );
}
