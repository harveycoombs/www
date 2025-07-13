import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Properties {
    icon: any;
    url: string;
    [key: string]: any;
}

export default function SocialMediaIcon({ icon, url, ...rest }: Properties) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="text-xl inline-block align-middle ml-5 duration-200 hover:text-white" {...rest}>
            <FontAwesomeIcon icon={icon} />
        </Link>
    );
}