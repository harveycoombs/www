import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcon({ icon, url, ...rest }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block align-middle duration-200 hover:text-white"
            {...rest}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}