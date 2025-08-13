"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showScrollTop) return null;

    return (
        <div
            id="bttop"
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                cursor: "pointer",
                fontWeight: "bold",
                zIndex: 1000,
                display: "block"
            }}
            onClick={scrollToTop}
        >
            <img src="/style/img/arrow-up.png" alt="về đầu trang" />
        </div>
    );
}
