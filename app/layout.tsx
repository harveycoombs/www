import type { Metadata } from "next";
import { Literata } from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const literata = Literata({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Harvey Coombs",
    description: "The official personal website of Harvey Coombs.",
    icons: { icon: "/images/icon.png" }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#615FFF" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://harveycoombs.com" />
            </head>

            <body className={`${literata.className} min-h-screen bg-[linear-gradient(to_bottom,rgba(31,41,55,0.85),rgba(55,65,81,0.85)),url('/images/background.jpg')] bg-cover bg-center bg-no-repeat text-gray-300 select-none`}>
                <Header />
                {children}
                <Footer />  
            </body>
        </html>
    );
}