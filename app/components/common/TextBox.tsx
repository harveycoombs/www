interface Properties {
     classes?: string;
     [key: string]: any;
}

export default function TextBox({ classes = "", ...rest }: Properties) {
     return <textarea className={`text-sm px-2.75 pt-2 pb-2.75 text-white border border-white/15 rounded-md duration-150 ${classes} focus:outline-none focus:border-white/20 focus:bg-white/3`} {...rest}/>;
}