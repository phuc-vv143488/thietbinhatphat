// app/san-pham/[submenu]/page.tsx
import { Metadata } from "next";
import { menuData } from "@/data/menuData";
import MainLayout from "../../../components/MainLayout";
import LeftSide from "../../../components/LeftSide";
import RightSide from "../../../components/RightSide";
import Layout from "../../../components/Layout";
import {productDatas} from "../../../data/productData";
import ProductList from "../../../components/ProductList";

interface Props {
    params: { submenu: string };
}

// Tạo static paths từ menuData
export function generateStaticParams() {
    const sanPhamMenu = menuData.find(m => m.href === "/san-pham");
    if (!sanPhamMenu?.subMenu) return [];

    return sanPhamMenu.subMenu.map(sub => ({
        submenu: sub.href.split("/").pop()!, // lấy slug cuối
    }));
}

// Tạo metadata động
interface PageProps {
    params: Promise<{ submenu: string }>; // Quan trọng: params là Promise
}

function findSubItem(submenu) {
    const sanPhamMenu = menuData.find(m => m.href === "/san-pham");
    return sanPhamMenu?.subMenu?.find(
        sub => sub.href.split("/").pop() === submenu
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { submenu } = await params; // Phải await ở đây
    const subItem = findSubItem(submenu);

    return {
        title: subItem ? `${subItem.title} - Sản phẩm` : "Danh mục sản phẩm",
        description: subItem?.title ?? "Danh mục sản phẩm",
    };
}

export default async function SubMenuPage({ params }: PageProps) {
    const { submenu } = await params; // Cũng phải await khi dùng
    const subItem = findSubItem(submenu);
    const items = productDatas.find(product => product.submenu === submenu) || {};

    return (
        <Layout
            title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Bảo Khang An"
            description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
            keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
        >
            <MainLayout
                leftContent={<LeftSide/>}
                rightContent={<RightSide
                    title={`${items.title || subItem?.title} (${items.products?.length || 0})`}
                    // products={items.products}
                    // pages={null}
                    // detailContent={null}
                >
                    {items.products?.length ? <ProductList products={items.products}/> : <p>Dữ liệu đang cập nhật</p>}
                </RightSide>
            }
            />
        </Layout>
    );
}
