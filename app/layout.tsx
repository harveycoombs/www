import type { Metadata } from "next";
import localFont from "next/font/local";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Marquee from "@/app/components/Marquee";

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
    title: "Harvey Coombs · Personal Website",
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

            <body className={`${specialGothicExpandedOne.className} h-screen bg-[linear-gradient(0deg,rgb(0_0_0/98%),rgb(10_10_10/95%)),url(/images/background.jpg)] bg-cover bg-center backdrop-blur-md text-white`}>
                <Marquee speed={1} classes="top-40 rotate-4 max-2xl:top-32 max-lg:top-25 max-sm:text-5xl max-sm:rotate-0 max-sm:top-18">Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>

                {children}

                <Marquee speed={1} direction="left" classes="bottom-40 -rotate-4 max-2xl:bottom-32 max-lg:bottom-25 max-sm:text-5xl max-sm:rotate-0 max-sm:bottom-18">Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;Harvey Coombs&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>

                <footer className="fixed bottom-0 left-0 right-0 p-2.5 text-center text-xs text-neutral-700">
                    2020 &ndash; {new Date().getFullYear()} &middot; Harvey Coombs
                </footer>
            </body>
        </html>
    );
}