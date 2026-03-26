"use client"

import { useState, useEffect } from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div style={{ 
            opacity: visible ? 1 : 0,     
            transform: visible ? "translateY(0px)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
         }}>
            {children}
        </div>
    )
}