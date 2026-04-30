import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
});

const description = "The official personal website of Harvey Coombs.";

export const metadata: Metadata = {
    title: "Harvey Coombs",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Harvey Coombs",
        description: description,
        url: "https://coombstech.com",
        images: [{
            url: "https://coombstech.com/images/splash.webp",
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
                <meta name="theme-color" content="#869BB5" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://harveycoombs.com" />
            </head>

            <body className={`${poppins.className} min-h-screen select-none`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}