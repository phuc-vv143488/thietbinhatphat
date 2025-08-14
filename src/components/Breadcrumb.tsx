"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

function findItemBySlug(slug: string) {
    // Tìm trong productDatas
    for (const menu of productDatas) {
        const product = menu.products.find(p => p.slug === slug);
        if (product) {
            return {
                type: "product",
                menu,
                item: product,
                href: `/san-pham/${menu.submenu}/${product.slug}`
            };
        }
    }

    // Tìm trong newsDatas
    for (const category of newsDatas) {
        const article = category.articles.find(a => a.slug === slug);
        if (article) {
            return {
                type: "news",
                category,
                item: article,
                href: `/tin-tuc/${category.category}/${article.slug}`
            };
        }
    }

    return null;
}

function getBreadcrumbFromSlug(slug: string) {
    const found = findItemBySlug(slug);
    if (!found) return [{ label: "Trang chủ", href: "/" }];

    const crumbs = [{ label: "Trang chủ", href: "/" }];

    if (found.type === "product") {
        crumbs.push({ label: found.menu.title, href: `/san-pham/${found.menu.submenu}` });
    }
    if (found.type === "news") {
        crumbs.push({ label: found.category.title, href: `/tin-tuc/${found.category.category}` });
    }

    crumbs.push({ label: found.item.title, href: found.href });

    return crumbs;
}

/*
export default function Page({ params }: { params: { slug: string } }) {
    const breadcrumb = getBreadcrumbFromSlug(params.slug);

    return (
        <nav>
            {breadcrumb.map((c, i) => (
                <span key={i}>
          <a href={c.href}>{c.label}</a>
                    {i < breadcrumb.length - 1 && " / "}
        </span>
            ))}
        </nav>
    );
}
*/


const Breadcrumb = () => {
    const pathname = usePathname();
    if (pathname === "/") return null;

    const pathParts = pathname.split("/").filter(Boolean); // bỏ "" khi split

    // Hàm tìm tên menu/submenu theo slug
    const findMenuTitle = (slug: string, parentSlug?: string) => {
        if (!parentSlug) {
            const menu = menuData.find((item) => item.href.split("/")[1] === slug);
            return menu ? menu.title : slug;
        } else {
            const parentMenu = menuData.find((item) => item.href.split("/")[1] === parentSlug);
            const submenu = parentMenu?.subMenu?.find(
                (child) => child.href.split("/").pop() === slug
            );
            return submenu ? submenu.title : slug;
        }
    };

    return (
        <div id="chuyenmuc">
            <div className="container">
                <div className="row items-center gap-2">
                    <Link href="/">
                        <h2>Trang chủ</h2>
                    </Link>

                    {pathParts.map((part, index) => {
                        const href = "/" + pathParts.slice(0, index + 1).join("/");
                        const title =
                            index === 0
                                ? findMenuTitle(part)
                                : findMenuTitle(part, pathParts[0]);

                        return (
                            <React.Fragment key={href}>
                                <span>/</span>
                                <Link href={href}>
                                    <h3>{title}</h3>
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
