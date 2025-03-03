import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    [key: string]: any;
}

export default function Button({ children, url, classes, ...rest }: Properties) {
    let classList = `py-2.5 px-4 rounded-sm text-sm leading-none select-none cursor-pointer text-white font-semibold bg-slate-600 text-center duration-100 hover:bg-slate-600/80 active:bg-slate-600/70 ${classes?.length ? " " + classes : ""}`;

    return url?.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}