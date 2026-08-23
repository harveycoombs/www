import Link from "next/link";

interface Properties {
     children: React.ReactNode;
     url?: string;
     type?: "primary" | "secondary" | "destructive";
     classes?: string;
     [key: string]: any;
}

export default function Button({ children, url = "", type = "primary", classes = "", ...rest }: Properties) {
     let colors;

     switch (type) {
          case "primary":
               colors = "text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700";
               break;
          case "secondary":
               colors = "text-white bg-white/20 hover:bg-white/25 active:bg-white/30";
               break;
          case "destructive":
               colors = "text-red-400 bg-red-400/20 hover:bg-red-400/25 active:bg-red-400/30";
               break;
     }

     const classList = `font-semibold text-sm px-4.75 pt-2.5 pb-2.75 rounded-md cursor-pointer select-none duration-150 uppercase ${colors} active:scale-97 ${classes}`;
     return url.length > 0 ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}