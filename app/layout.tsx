import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Footer from "@/app/components/Footer";

const barlow = Barlow({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
});

const description = "The official website of Harvey Coombs.";

export const metadata: Metadata = {
    title: "Harvey Coombs – Entrepreneur & Engineer",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Harvey Coombs – Entrepreneur & Engineer",
        description: description,
        url: "https://www.harveycoombs.com",
        images: [{
            url: "https://www.harveycoombs.com/images/splash.webp",
            width: 1200,
            height: 630,
            alt: "Harvey Coombs splash image"
        }],
        type: "website"
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
                <meta name="theme-color" content="#000000" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://www.harveycoombs.com" />
            </head>

            <body className={`${barlow.className} bg-black text-white min-h-screen`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}