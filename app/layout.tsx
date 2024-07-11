import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
// ideally, Stream Video theme should be imported before your own styles
// as this would make it easier for you to override certain video-theme rules
// import "./my-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicalls - Meeting App",
  description: "Generated by create next app",
  openGraph: {
    title: "Vicalls - Meeting App",
    description: "Published by Advie.R",
    url: "https://vicalls.vercel.app",
    siteName: "Vicalls",
    images: [
      {
        url: "https://vicalls.vercel.app/images/ss.png",
        width: 1260,
        height: 800,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicalls - Meeting App",
    description: "Published by Advie.R",
    site: "@yourtwitterhandle",
    images: ["https://vicalls.vercel.app/images/ss.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} bg-dark-2`}>
          <main>
            {children}
            <Toaster />
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
