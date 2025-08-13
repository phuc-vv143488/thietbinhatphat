// src/data/menuData.ts
export interface SubMenuItem {
    title: string;
    href: string;
}

export interface MenuItem {
    title: string;
    href: string;
    subMenu?: SubMenuItem[];
}

export const menuData: MenuItem[] = [
    {
        title: "Trang chủ",
        href: "/",
    },
    {
        title: "Giới Thiệu",
        href: "/gioi-thieu",
    },
    {
        title: "Sản phẩm",
        href: "/san-pham",
        subMenu: [
            { title: "Xe Nâng Người Tự Hành", href: "/xe-nang-nguoi-tu-hanh" },
            { title: "Xe nâng người GS", href: "/xe-nang-nguoi-gs" },
            { title: "Xe Nâng S boom", href: "/xe-nang-s-boom" },
            { title: "Xe Nâng Z Boom", href: "/xe-nang-z-boom" },
            { title: "Xe Nâng Người JLG", href: "/xe-nang-nguoi-jlg" },
            { title: "Thang Nâng AWP", href: "/thang-nang-awp" },
            { title: "Xe Nâng Người Dạng Cắt kéo", href: "/xe-nang-nguoi-dang-cat-keo" },
            { title: "Máy công trình", href: "/may-cong-trinh" },
        ],
    },
    {
        title: "Dịch Vụ",
        href: "/dich-vu",
        subMenu: [
            { title: "Cho thuê xe nâng người", href: "/cho-thue-xe-nang-nguoi" },
            { title: "Sửa Chữa Xe Nâng Người", href: "/sua-chua-xe-nang-nguoi" },
        ],
    },
    {
        title: "Tin Tức",
        href: "/tin-tuc",
    },
    {
        title: "Xe Nâng Người Cũ",
        href: "/xe-nang-nguoi-cu",
    },
    {
        title: "Hình ảnh - Dự án",
        href: "/hinh-anh-du-an",
    },
    {
        title: "Videos",
        href: "/videos",
    },
    {
        title: "Liên Hệ",
        href: "/lien-he",
    },
];
