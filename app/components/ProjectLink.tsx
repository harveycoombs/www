import Link from "next/link";

interface Properties {
    title: string;
    url: string;
}

export default function ProjectLink({ title, url }: Properties) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="group relative py-0.5 pb-1.5 px-1.5 leading-none duration-200 hover:text-gray-800 active:text-gray-800">
            <span className="relative z-10">{title}</span>
            <div className="bg-gray-200 absolute inset-0 w-full h-full scale-y-0 duration-200 origin-bottom z-0 group-hover:scale-y-100 group-active:scale-y-100"></div>
        </Link>
    )
}