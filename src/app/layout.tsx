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

export const metadata: Metadata = {
    title: `Harvey Coombs · Personal Website`,
    description: ""
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