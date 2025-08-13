"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

export default function CategoryMenu() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + "/");

    // Nếu là trang chủ -> hiện toàn bộ menuData
    // Ngược lại -> lọc nhóm cần thiết
    const titles = ["Sản phẩm", "Dịch Vụ"];
    const sidebarGroups = menuData.filter(item =>
        titles.includes(item.title) && (pathname === "/" || item.subMenu)
    );


    return (
        <div className="left_home">
            {sidebarGroups.map((group) => (
                <div className="danh_muc" key={group.href}>
                    <Link href={group.href} title={group.title}>
                        <h2>{group.title}</h2>
                    </Link>
                    {group.subMenu?.map((item) => (
                        <div className="menuto-home" key={item.href}>
                            <Link
                                href={item.href}
                                title={item.title}
                                className={isActive(item.href) ? "current" : ""}
                            >
                                <h3>{item.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
