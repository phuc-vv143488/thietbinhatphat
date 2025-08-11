import React from 'react';
import Layout from '@/components/Layout';
import ProductModule from "@/components/ProductModule";
import MainLayout from "@/components/MainLayout";
import LeftSide from "@/components/LeftSide";
import ProjectImages from "@/components/ProductImages";

export default function HomePage() {
  const gsProducts = [
    {
      href: "xe-nang-genie-gs-3268_p48.html",
      title: "Xe nâng Genie GS-3268",
      imgSrc: "https://thietbinhatphat.com/public/images/gs-3268-12.jpg",
      price: "Liên hệ"
    },
    {
      href: "xe-nang-genie-gs-2646_p103.html",
      title: "Xe nâng Genie GS-2646",
      imgSrc: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-tu-hanh-gs2646-122.jpg",
      price: "Liên hệ"
    },
    // ... các sản phẩm khác của GS
  ];

  const sBoomProducts = [
    {
      href: "xe-nang-genie-s125_p109.html",
      title: "Xe nâng Genie S125",
      imgSrc: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s125.jpg",
      price: "Liên hệ"
    },
    {
      href: "xe-nang-genie-s85_p105.html",
      title: "Xe nâng Genie S85",
      imgSrc: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s85.jpg",
      price: "Liên hệ"
    },
    // ... các sản phẩm khác của S Boom
  ];

  return (
    <Layout
      title="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát"
      description="Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh"
    >
      <MainLayout
          leftContent={<LeftSide/>}
          rightContent={<>
            <ProductModule
                title="Xe nâng người GS"
                link="xe-nang-nguoi-gs.html"
                products={gsProducts}
                isCarousel={true}
            />

            <ProductModule
                title="Xe Nâng S boom"
                link="xe-nang-s-boom.html"
                products={sBoomProducts}
            />
          </>}
          children={<ProjectImages/>}
      />
    </Layout>
  );
}
