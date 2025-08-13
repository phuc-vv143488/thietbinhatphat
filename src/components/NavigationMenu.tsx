"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

export default function Menu() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + "/");

    return (
        <div id="menu">
            <div className="menu">
                <div className="container">
                    <ul className="nav1">
                        {menuData.map((item) => (
                            <li key={item.href} className={isActive(item.href) ? "current" : ""}>
                                <Link href={item.href} title={item.title}>
                                    <h2>{item.title}</h2>
                                </Link>
                                {item.subMenu && (
                                    <ul>
                                        {item.subMenu.map((sub) => (
                                            <li key={sub.href} className={isActive(sub.href) ? "current" : ""}>
                                                <Link href={sub.href} title={sub.title}>
                                                    <h2>{sub.title}</h2>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
