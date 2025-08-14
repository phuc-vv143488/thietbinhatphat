import React from 'react';
import Layout from '@/components/Layout';
import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import ProductList from "../../components/ProductList";
import MainLayout from "../../components/MainLayout";

export default function ServicesPage() {
  const allProducts = [];
  return (
    <Layout
      title="Dịch Vụ - Cho Thuê & Sửa Chữa Xe Nâng Người | Thiết Bị Bảo Khang An"
      description="Dịch vụ cho thuê xe nâng người, sửa chữa và bảo dưỡng xe nâng người chuyên nghiệp tại Hà Nội, Bắc Ninh, Hưng Yên. Giá cả cạnh tranh, chất lượng đảm bảo."
      keywords="cho thuê xe nâng người, sửa chữa xe nâng người, bảo dưỡng xe nâng người, dịch vụ xe nâng người"
      backgroundUrl="/images/banner/du-an.jpg"
    >
      <MainLayout
          leftContent={<LeftSide/>}
          rightContent={<RightSide
              title={`Xe nâng người cũ (${allProducts.length})`}
              detailContent={null}
          >
            <p style={{padding:10}}> Dữ liệu đang được cập nhật!</p>
          </RightSide>}
      />
    </Layout>
  );
}

