import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Properties {
    icon: any;
    url: string;
    [key: string]: any;
}

export default function SocialMediaIcon({ icon, url, ...rest }: Properties) {
    return <Link href={url} className="py-3 rounded-lg text-2xl bg-neutral-700 text-neutral-400 leading-none aspect-square duration-150 text-center select-none h-[47px] hover:bg-neutral-700/70 active:bg-neutral-800" {...rest}><FontAwesomeIcon icon={icon} /></Link>;
}