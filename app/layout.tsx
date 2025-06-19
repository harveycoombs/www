import type { Metadata } from "next";
import localFont from "next/font/local";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/Header";
import Marquee from "@/app/components/Marquee";
import Footer from "@/app/components/Footer";

const specialGothicExpandedOne = localFont({
    src: [{
        path: "../public/fonts/SpecialGothicExpandedOne-Regular.woff",
        weight: "400",
        style: "normal"
    }],
    display: "swap"
});

const description = "The official website for Harvey Coombs.";

export const metadata: Metadata = {
    title: "Harvey Coombs · Official Website",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Harvey Coombs",
        description: description,
        url: "https://harveycoombs.com",
        images: [{
            url: "https://harveycoombs.com/images/me.jpg",
            width: 1200,
            height: 630,
            alt: "Me next to my car"
        }],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Harvey Coombs",
        description: description
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://harveycoombs.com" />
            </head>

            <body className={`${specialGothicExpandedOne.className} h-screen bg-[linear-gradient(0deg,rgb(0_0_0/85%),rgb(10_10_10/70%)),url(/images/background.jpg?v=1)] bg-cover bg-center overflow-hidden text-white`}>
                <Header />

                {children}

                <Marquee speed={1.5} direction="left">Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>

                <Footer />
            </body>
        </html>
    );
}