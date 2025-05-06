"use client";
import { useEffect, useRef, useState } from "react";

interface Properties {
    children: React.ReactNode;
    speed?: number;
    direction?: string;
    classes?: string;
}

export default function Marquee({ children, speed = 1, direction = "right", classes }: Properties) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [animationDuration, setAnimationDuration] = useState(0);
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        const content = container.firstChild as HTMLElement;
        
        if (!content) return;
        
        const updateWidths = () => {
            setContentWidth(content.offsetWidth);
            setContainerWidth(container.offsetWidth);
            setAnimationDuration(content.offsetWidth / (50 * speed));
        };
        
        updateWidths();
        window.addEventListener("resize", updateWidths);
        
        return () => window.removeEventListener("resize", updateWidths);
    }, [speed]);
    
    const repeats = Math.ceil(containerWidth / contentWidth) + 1;
    
    return (
        <div 
            ref={containerRef}
            className="outline-text w-screen fixed bottom-0 overflow-hidden uppercase text-[16rem] leading-none text-transparent select-none text-center pointer-events-none max-2xl:text-[14rem] max-xl:text-[12rem] max-sm:text-[11rem]"
            style={{ 
                WebkitTextStrokeWidth: "6px",
                strokeWidth: "6px"
            }}
        >
            <div 
                className="flex whitespace-nowrap"
                style={{
                    animationName: "marquee",
                    animationDuration: `${animationDuration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationDirection: direction === "left" ? "reverse" : "normal"
                }}
            >
                {contentWidth > 0 && 
                    Array.from({ length: Math.max(1, repeats) }).map((_, index) => (
                        <div key={index} className="flex-shrink-0">
                            {children}
                        </div>
                    ))
                }
            </div>
            
            <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${contentWidth}px);
                    }
                }
            `}</style>
        </div>
    );
}