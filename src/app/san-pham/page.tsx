import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import MainLayout from "../../components/MainLayout";
import LeftSide from "../../components/LeftSide";
import {productDatas} from "../../data/productData";
import CategorySection from "../../components/CategorySection";
import RightSide from "../../components/RightSide";

export const products = [
    {
        link: "xe-nang-genie-z30-20-dc_p79.html",
        title: "Xe nâng Genie Z30/20 DC",
        image: "https://thietbinhatphat.com/public/images/Z30-20-101.png",
        alt: "Xe nâng Genie Z30/20 DC",
        price: "Liên hệ",
    },
    {
        link: "khung-nang-di-dong-awp_p52.html",
        title: "Khung nâng di động AWP",
        image: "https://thietbinhatphat.com/public/images/thang-nang-ap-1.jpg",
        alt: "Khung nâng di động AWP",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-gs-3268_p48.html",
        title: "Xe nâng Genie GS-3268",
        image: "https://thietbinhatphat.com/public/images/gs-3268-12.jpg",
        alt: "Xe nâng Genie GS-3268",
        price: "Liên hệ",
    },
    {
        link: "may-san-gat_p47.html",
        title: "Máy San gạt",
        image: "https://thietbinhatphat.com/public/images/san-pham/may-cong-trinh/may-san-gat.jpg",
        alt: "Máy San gạt",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-s125_p109.html",
        title: "Xe nâng Genie S125",
        image: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s125.jpg",
        alt: "Xe nâng Genie S125",
        price: "Liên hệ",
    },
    {
        link: "may-ui_p108.html",
        title: "Máy ủi",
        image: "https://thietbinhatphat.com/public/images/mayui-1.jpg",
        alt: "Máy ủi",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-s85_p105.html",
        title: "Xe nâng Genie S85",
        image: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s85.jpg",
        alt: "Xe nâng Genie S85",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-gs-2646_p103.html",
        title: "Xe nâng Genie GS-2646",
        image: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-tu-hanh-gs2646-122.jpg",
        alt: "Xe nâng Genie GS-2646",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-gs-2046_p101.html",
        title: "Xe nâng Genie GS-2046",
        image: "https://thietbinhatphat.com/public/images/GS-2046-1.png",
        alt: "Xe nâng Genie GS-2046",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-s65_p99.html",
        title: "Xe nâng Genie S65",
        image: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s65.jpg",
        alt: "Xe nâng Genie S65",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-s45_p98.html",
        title: "Xe nâng Genie S45",
        image: "https://thietbinhatphat.com/public/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s45.jpg",
        alt: "Xe nâng Genie S45",
        price: "Liên hệ",
        icon: "style/img/sale-off.png",
    },
    {
        link: "xe-nang-genie-gs-2032_p97.html",
        title: "Xe nâng Genie GS-2032",
        image: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-tu-hanh-gs2032-12.jpg",
        alt: "Xe nâng Genie GS-2032",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-gs-1930_p96.html",
        title: "Xe nâng Genie GS-1930",
        image: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-tu-hanh-gs1930-1(1).jpg",
        alt: "Xe nâng Genie GS-1930",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-z60-34-ic_p83.html",
        title: "Xe nâng Genie Z60/34 IC",
        image: "https://thietbinhatphat.com/public/images/san-pham/z-boom/xe-nang-nguoi-tu-hanh-genie-z6034-IC.jpg",
        alt: "Xe nâng Genie Z60/34 IC",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-z45-25-dc_p82.html",
        title: "Xe nâng Genie Z45/25 DC",
        image: "https://thietbinhatphat.com/public/images/rsz_1xe_na__ng_genie_z45_25_dc-2.png",
        alt: "Xe nâng Genie Z45/25 DC",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-z45-25-ic_p80.html",
        title: "Xe nâng Genie Z45/25 IC",
        image: "https://thietbinhatphat.com/public/images/san-pham/z-boom/xe-nang-nguoi-tu-hanh-genie-z4525-IC.jpg",
        alt: "Xe nâng Genie Z45/25 IC",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-genie-gs-1530_p60.html",
        title: "Xe nâng Genie GS-1530",
        image: "https://thietbinhatphat.com/public/images/GS-1530-52.png",
        alt: "Xe nâng Genie GS-1530",
        price: "Liên hệ",
    },
    {
        link: "may-xuc_p46.html",
        title: "Máy xúc",
        image: "https://thietbinhatphat.com/public/images/san-pham/may-cong-trinh/mayxuc.jpg",
        alt: "Máy xúc",
        price: "Liên hệ",
        icon: "style/img/sale-off.png",
    },
    {
        link: "may-lu-rung-hamm-hd-110_p42.html",
        title: "Máy lu rung HAMM HD 110",
        image: "https://thietbinhatphat.com/public/images/lu-hamm-hd-110-2.jpg",
        alt: "Máy lu rung HAMM HD 110",
        price: "Liên hệ",
    },
    {
        link: "xe-nang-tu-hanh-dang-cat-keo-gs-4069-dc_p41.html",
        title: "Xe nâng tự hành dạng cắt kéo GS-4069 DC",
        image: "https://thietbinhatphat.com/public/images/GS-4390-111.png",
        alt: "Xe nâng tự hành dạng cắt kéo GS-4069 DC",
        price: "Liên hệ",
        icon: "style/img/sale-off.png",
    },
    {
        link: "xe-nang-nguoi-genie-z80-60_p143.html",
        title: "XE NÂNG NGƯỜI GENIE Z80/60",
        image: "https://thietbinhatphat.com/public/images/thang-long-24.jpg",
        alt: "XE NÂNG NGƯỜI GENIE Z80/60",
        price: "Liên hệ",
    },
    {
        link: "thang-nang-thang-awp-40s_p128.html",
        title: "thang nâng thẳng AWP 40S",
        image: "https://thietbinhatphat.com/public/images/thang-nang-AWP-8(1).jpg",
        alt: "thang nâng thẳng AWP 40S",
        price: "Liên hệ",
    },
    {
        link: "thang-nang-thang-awp-36s_p127.html",
        title: "thang nâng thẳng AWP 36S",
        image: "https://thietbinhatphat.com/public/images/thang-nang-AWP-7(1).jpg",
        alt: "thang nâng thẳng AWP 36S",
        price: "Liên hệ",
    },
    {
        link: "thang-nang-thang-awp-30s_p123.html",
        title: "thang nâng thẳng AWP 30S",
        image: "https://thietbinhatphat.com/public/images/san-pham/AWP-30s-1.jpg",
        alt: "thang nâng thẳng AWP 30S",
        price: "Liên hệ",
    },
];

export const pages = [
  { label: "1", link: "#", active: true },
  { label: "2", link: "san-pham_trang-2.html", active: false },
  { label: "Next", link: "san-pham_trang-2.html", active: false },
];

export const detailContent = `
<p>Bạn là các công ty, doanh nghiệp, nhà thầu đang hoạt động tại Hà Nội? 
Bạn có nhu cầu sử dụng dịch vụ cho thuê xe nâng người giá rẻ, chất lượng tại đây? 
Chỉ cần nhấc máy lên và liên hệ tới hotline 0967 098 118 của Nhất Phát, quý khách hàng sẽ được sử dụng dịch vụ 
<strong><a href="san-pham.html">cho thuê <b>xe nâng người</b></a></strong>, chất lượng, an toàn và nhanh chóng nhất.</p>
<p style="text-align: center;">
  <img src="https://thietbinhatphat.com/public/images/xe-nang-nguoi-nhat-phat.jpg" width="900" height="675" />
</p>
<p>Với nhu cầu các công việc yêu cầu người lao động phải làm việc trên cao, 
mang tính chất nguy hiểm thì luôn cần đến các thiết bị đảm bảo an toàn như xe nâng người. 
Nhằm mang tới sự hiệu quả, an toàn cho người lao động và tiết kiệm chi phí cho các công ty, 
Nhất Phát đem tới cho quý khách hàng dịch vụ bán và cho thuê 
<a href="index.html"><b>xe nâng người</b></a> trên toàn quốc.</p>
`;

const data = {
  title: "Sản phẩm",
  products,
  pages,
  detailContent
};

export default function ProductsPage() {
  return (
    <Layout
      title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Nhất Phát"
      description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
      keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
    >
      <MainLayout
        leftContent={<LeftSide/>}
        rightContent={<RightSide
          {...data}

      />}
      />
    </Layout>
  );
}

