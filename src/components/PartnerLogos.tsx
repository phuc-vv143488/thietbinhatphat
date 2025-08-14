import React from "react";

const partnerLogos = [
    {
        href: "#",
        title: "CÔNG TY TNHH OHSUNG VINA THÁI BÌNH",
        src: "/images/doi-tac/1.jpg",
    },
    {
        href: "#",
        title: "CÔNG TY TNHH QUỐC TẾ NAM TÀI THÁI BÌNH",
        src: "/images/doi-tac/2.jpg",
    },
    {
        href: "#",
        title: "CÔNG TY TNHH GREENWORKS (VIỆT NAM)",
        src: "/images/doi-tac/3.jpg",
    },
    {
        href: "#",
        title: "CÔNG TY TNHH PEGAVISION VIỆT NAM",
        src: "/images/doi-tac/4.jpg",
    },
];

export default function PartnerLogos() {
    return (
        <div className="container">
            <div className="row">
                {/* Logo */}
                <div id="logo" style={{ width: "100%", marginLeft: "0px" }}>
                    <ul className="logo1" style={{ marginLeft: "50%", transform: "translateX(-25%)" }}>
                        {partnerLogos.map((logo, index) => (
                            <li key={index} style={{height: "90px", textAlign: "center"}}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={logo.href}
                                    title={logo.title}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.title}
                                        title={logo.title}
                                        style={{height: "100%", objectFit: "cover"}}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Các ul logo2 trống */}
                    <ul className="logo2"/>
                    <ul className="logo2"/>
                    <ul className="logo2"/>
                </div>
            </div>
        </div>
    );
}
