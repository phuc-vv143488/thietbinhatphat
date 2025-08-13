"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

const Breadcrumb = () => {
    const pathname = usePathname();
    if (pathname === "/") return null;
    return (
        <div id="chuyenmuc" style={{ marginBottom: '15px' }}>
            <div className="container">
                <div className="row">
                    <Link href="/"><h2>Trang chủ</h2></Link>
                    {menuData.map((item) => (item.href !== "/" && pathname.startsWith(item.href) &&
                        <>
                            <span>/</span>
                            <Link href={item.href}><h3>{item.title}</h3></Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
