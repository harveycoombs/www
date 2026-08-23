interface Properties {
     children: React.ReactNode;
     [key: string]: any;
}

export default function Label({ children, classes = "", ...rest }: Properties) {
     return <label className={`text-xs uppercase font-medium select-none ${classes}`} {...rest}>{children}</label>
}