import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    [key: string]: any;
}

export default function Button({ children, url, small, classes, transparent, loading, disabled, ...rest }: Properties) {
    const classList = `px-5.5 py-3.5 rounded-lg text-[0.8rem] bg-red-500 text-white uppercase duration-150 text-center select-none${classes?.length && " " + classes} hover:bg-red-600 active:bg-red-700`;
    return url?.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}