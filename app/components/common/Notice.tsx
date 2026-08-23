interface Properties {
     children: React.ReactNode;
     type?: "success" | "warning" | "error";
     classes?: string;
     [key: string]: any;
}

export default function Notice({ children, type = "success", classes = "", ...rest }: Properties) {
     let colors;

     switch (type) {
          case "success":
               colors = "border-green-400 bg-green-400/10 text-green-400";
               break;
          case "warning":
               colors = "border-yellow-400 bg-yellow-400/10 text-yellow-400";
               break;
          case "error":
               colors = "border-red-400 bg-red-400/10 text-red-400";
               break;
     }
     
     return <div className={`px-3 py-3 pb-3.5 rounded-md border leading-none ${colors} ${classes}`} {...rest}>{children}</div>;
}