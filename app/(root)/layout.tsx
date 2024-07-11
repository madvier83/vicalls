import StreamVideoProvider from "@/providers/StreamClientProvider";
import Head from "next/head";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Vicalls - Meeting App" />
        <meta property="og:description" content="Published by Advie.R" />
        <meta property="og:url" content="https://vicalls.vercel.app" />
        <meta property="og:site_name" content="Vicalls" />
        <meta
          property="og:image"
          content="https://vicalls.vercel.app/images/ss.png"
        />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="800" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vicalls - Meeting App" />
        <meta name="twitter:description" content="Published by Advie.R" />
        <meta name="twitter:url" content="https://vicalls.vercel.app" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta
          name="twitter:image"
          content="https://vicalls.vercel.app/images/ss.png"
        />
      </Head>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
