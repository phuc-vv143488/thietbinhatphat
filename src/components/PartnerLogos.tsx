import React from "react";

const partnerLogos = [
    {
        href: "#",
        title: "Đối tác 3",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-4(1).jpg",
        alt: "Đối tác 3",
    },
    {
        href: "#",
        title: "Vingroup",
        src: "https://thietbinhatphat.com/public/media/files/slide/dt-1.jpg",
        alt: "Vingroup",
    },
    {
        href: "#",
        title: "Đối tác",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-8.jpg",
        alt: "Đối tác",
    },
    {
        href: "#",
        title: "Đối tác",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-7.jpg",
        alt: "Đối tác",
    },
    {
        href: "#",
        title: "Đối tác",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-1.jpg",
        alt: "Đối tác",
    },
    {
        href: "#",
        title: "Đối tác 1",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-2(1).jpg",
        alt: "Đối tác 1",
    },
    {
        href: "#",
        title: "Đối tác 2",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-3(1).jpg",
        alt: "Đối tác 2",
    },
    {
        href: "#",
        title: "Đối tác 7",
        src: "https://thietbinhatphat.com/public/media/files/doi-tac/dt-6(1).jpg",
        alt: "Đối tác 7",
    },
];

export default function PartnerLogos() {
    return (
        <div className="container">
            <div className="row">
                {/* Logo */}
                <div id="logo" style={{ width: "100%", marginLeft: "0px" }}>
                    <ul className="logo1">
                        {partnerLogos.map((logo, index) => (
                            <li key={index}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={logo.href}
                                    title={logo.title}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        title={logo.title}
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
