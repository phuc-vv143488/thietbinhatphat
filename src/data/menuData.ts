// src/data/menuData.ts
export interface SubMenuItem {
    title: string;
    href: string; // ví dụ: "/san-pham/xe-nang-nguoi-tu-hanh"
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
            { title: "Xe Nâng Người Tự Hành", href: "/san-pham/xe-nang-nguoi-tu-hanh" },
            { title: "Xe nâng người GS", href: "/san-pham/xe-nang-nguoi-gs" },
            { title: "Xe Nâng S boom", href: "/san-pham/xe-nang-s-boom" },
            { title: "Xe Nâng Z Boom", href: "/san-pham/xe-nang-z-boom" },
            // { title: "Xe Nâng Người JLG", href: "/san-pham/xe-nang-nguoi-jlg" },
            // { title: "Thang Nâng AWP", href: "/san-pham/thang-nang-awp" },
            // { title: "Xe Nâng Người Dạng Cắt kéo", href: "/san-pham/xe-nang-nguoi-dang-cat-keo" },
            // { title: "Máy công trình", href: "/san-pham/may-cong-trinh" },
        ],
    },
    {
        title: "Dịch Vụ",
        href: "/dich-vu",
        subMenu: [
            { title: "Cho thuê xe nâng người", href: "/dich-vu/cho-thue-xe" },
            // { title: "Sửa Chữa Xe Nâng Người", href: "/dich-vu/sua-chua-xe-nang-nguoi" },
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
