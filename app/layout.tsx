import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"]
});

const description = "The official website of Harvey Coombs.";

export const metadata: Metadata = {
    title: "Harvey Coombs",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Harvey Coombs",
        description: description,
        url: "https://www.harveycoombs.com",
        images: [{
            url: "https://www.harveycoombs.com/images/splash.jpg",
            width: 1200,
            height: 630,
            alt: "Harvey Coombs splash image"
        }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Harvey Coombs",
        description: description,
        creator: "",
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <head>
                    <meta name="theme-color" content="#0D0D0C" />
     
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                    <link rel="canonical" href="https://www.harveycoombs.com" />
               </head>
     
               <body className={`${inter.className} antialiased min-h-screen scroll-smooth overflow-x-hidden`}>
                    {children}
               </body>
          </html>
     );
}
