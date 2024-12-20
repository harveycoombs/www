import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const inter = Nunito({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"]
});

const description = "The official website for Harvey Coombs, a software engineer from the United Kingdom.";

export const metadata: Metadata = {
    title: "Harvey Coombs · Personal Website",
    description: description,
    icons: { icon: "/images/me.jpeg" },
    openGraph: {
        title: "Harvey Coombs",
        description: description,
        url: "https://harveycoombs.com",
        images: [{
            url: "https://harveycoombs.com/images/me.jpeg",
            width: 1200,
            height: 630,
            alt: "Me next to my car"
        }],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Harvey Coombs",
        description: description,
        creator: "@harveycoombs23"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`h-screen ${inter.className} bg-white text-slate-500`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}