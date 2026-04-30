import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    [key: string]: any;
}

export default function Button({ children, url = "", classes = "",...rest }: Properties) {
    const classList = `px-4 py-3 rounded-lg text-sm leading-none text-white select-none cursor-pointer bg-gray-800 hover:bg-gray-700 active:bg-gray-600 active:scale-96 duration-200 ${classes}`;
    return url ? <Link href={url} target="_blank" rel="noopener noreferrer" className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}