interface Properties {
    type?: string;
    classes?: string;
    [key: string]: any;
}

export default function Field({ type = "text", classes = "", ...rest }: Properties) {
    return <input type={type} className={`px-3 py-2.25 rounded-lg text-sm leading-none bg-gray-100 text-gray-800 placeholder:text-gray-400 duration-200 focus:outline-none focus:bg-gray-200 ${classes}`} {...rest} />;
}