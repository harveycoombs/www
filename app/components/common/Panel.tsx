interface Properties {
     children: React.ReactNode;
     classes?: string;
     [key: string]: any;
}

export default function Panel({ children, classes = "", ...rest }: Properties) {
     return (
          <div className={`p-3 rounded-lg border border-white/12 bg-white/6 ${classes}`} {...rest}>
               {children}
          </div>
     );
}