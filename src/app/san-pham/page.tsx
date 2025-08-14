import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import MainLayout from "../../components/MainLayout";
import LeftSide from "../../components/LeftSide";
import {productDatas} from "../../data/productData";
import RightSide from "../../components/RightSide";
import ProductList from "../../components/ProductList";


// export const pages = [
//   { label: "1", link: "#", active: true },
//   { label: "2", link: "san-pham_trang-2.html", active: false },
//   { label: "Next", link: "san-pham_trang-2.html", active: false },
// ];

function getAllItems(list) {
    const res = [];
    list.forEach(i => {
        if (i.products?.length > 0) {
            res.push(...i.products.map(j => ({...j, slug: i.subMenu + j.slug})));
        }
    })
    return res;
}

export default function ProductsPage() {
    const allProducts = getAllItems(productDatas);

    return (
        <Layout
            title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Bảo Khang An"
            description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
            keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
            backgroundUrl="/images/banner/du-an.jpg"
        >
            <MainLayout
                leftContent={<LeftSide/>}
                rightContent={<RightSide
                    title={`Sản phẩm (${allProducts.length})`}
                    // products={allProducts}
                    // pages={null}
                    detailContent={null}
                >
                    <ProductList products={allProducts}/>
                </RightSide>}
            />
        </Layout>
    );
}

