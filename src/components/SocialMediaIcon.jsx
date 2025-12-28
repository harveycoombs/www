import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcon({ icon, url, ...rest }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-2xl inline-block align-middle duration-200 hover:text-white/75 active:text-white/50"
            {...rest}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}