import React from 'react';
import Layout from '@/components/Layout';
import MainLayout from "../../components/MainLayout";
import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import {dichVu} from "../../data/productData";
import ProductList from "../../components/ProductList";

function getAllItems(list) {
    const res = [];
    list.forEach(i => {
        if (i.products?.length > 0) {
            res.push(...i.products.map(j => ({...j, slug: i.submenu + '/' + j.slug})));
        }
    })
    return res;
}

export default function ServicesPage() {
  const allProducts = getAllItems(dichVu);
  return (
    <Layout
      title="Dịch Vụ - Cho Thuê & Sửa Chữa Xe Nâng Người | Thiết Bị Bảo Khang An"
      description="Dịch vụ cho thuê xe nâng người, sửa chữa và bảo dưỡng xe nâng người chuyên nghiệp tại Hà Nội, Bắc Ninh, Hưng Yên. Giá cả cạnh tranh, chất lượng đảm bảo."
      keywords="cho thuê xe nâng người, sửa chữa xe nâng người, bảo dưỡng xe nâng người, dịch vụ xe nâng người"
      backgroundUrl="/images/banner/dich-vu.png"
    >
      <MainLayout
          leftContent={<LeftSide/>}
          rightContent={<RightSide
              title={`Dịch vụ (${allProducts.length})`}
              detailContent={null}
          >
            <ProductList products={allProducts}/>
          </RightSide>}
      />
    </Layout>
  );
}

