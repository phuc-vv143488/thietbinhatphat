import React from 'react';
import Layout from '@/components/Layout';
import ProductModule from "@/components/ProductModule";
import MainLayout from "@/components/MainLayout";
import LeftSide from "@/components/LeftSide";
import ProjectImages from "@/components/ProductImages";
import CategorySection from "../components/CategorySection";
import {productDatas} from "../data/productData";

export default function HomePage() {

  return (
    <Layout
      title="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát"
      description="Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh"
      backgroundUrl="https://thietbinhatphat.com/public/files/Banner-slide/xe-nang-nguoi-1.jpg"
    >
      <MainLayout
          leftContent={<LeftSide/>}
          rightContent={<div className="right_home">
            <div className="hot_product_desktop">
              {productDatas.map(data => {
                return data.products.length && (
                    <CategorySection
                        key={data.title}
                        categoryLink={"san-pham/" + data.submenu}
                        categoryTitle={data.title}
                        products={data.products.slice(0, 4)}/>
                )
              })}
            </div>
          </div>}
          children={<ProjectImages/>}
      />
    </Layout>
  );
}
