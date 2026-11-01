"use client";
import Link from "next/link";

interface Properties {
     children: React.ReactNode;
     url?: string;
     classes?: string;
     [key: string]: any;
}

export default function Button({ children, url = "", classes = "", ...rest }: Properties) {
     const classList = `px-4.5 py-3.5 border-2 border-amber-400 text-amber-300 text-sm font-bold leading-none duration-200 cursor-pointer hover:bg-amber-300/15 active:bg-amber-300/25 ${classes}`;
     return url.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}