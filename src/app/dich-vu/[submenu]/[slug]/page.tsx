// src/app/san-pham/[submenu]/[slug]/page.tsx
import { dichVu } from "@/data/productData";
import ProductImageZoom from "../../../../components/ProductImageZoom";
import ProductInfo from "../../../../components/ProductInfo";
import ProductTabs from "../../../../components/ProductTabs";
import { Metadata } from "next";
import MainLayout from "../../../../components/MainLayout";
import LeftSide from "../../../../components/LeftSide";
import RightSide from "../../../../components/RightSide";
import ProductList from "../../../../components/ProductList";
import Layout from "../../../../components/Layout";

// Tạo static params cho tất cả sản phẩm
export async function generateStaticParams() {
  return dichVu.flatMap(menu =>
      menu.products.map(product => ({
        submenu: menu.submenu,
        slug: product.slug,
      }))
  );
}

interface PageProps {
    params: Promise<{ submenu: string; slug: string }>; // Quan trọng: params là Promise
}

const phone = "0986 001 709"

// Tạo metadata động dựa vào submenu & slug
export async function generateMetadata({ params }: PageProps) : Promise<Metadata>  {
const { submenu, slug } = await params; // Phải await ở đây
  const menu = dichVu.find(m => m.submenu === submenu);
  const product = menu?.products.find(p => p.slug === slug);

  if (product) {
    return {
      title: product.seoTitle || product.title,
      description: product.seoDescription || "",
    };
  }

  // Nếu slug không khớp thì fallback về metadata của submenu
  if (menu) {
    return {
      title: menu.seoTitle || menu.title,
      description: menu.seoDescription || "",
    };
  }

  // Fallback cuối nếu không tìm thấy
  return {
    title: "Sản phẩm",
    description: "Thông tin sản phẩm",
  };
}

export default async function ProductDetailPage({params}: PageProps) {
    const { submenu, slug } = await params; // Cũng phải await khi dùng
    const product = (dichVu.find((p) => p.submenu === submenu) || {})?.products?.find(p => p.slug === slug);

    if (!product) {
        return <p>Sản phẩm không tồn tại.</p>;
    }

    return (
        <Layout
            title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Bảo Khang An"
            description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
            keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
        >
            <MainLayout
                leftContent={<LeftSide/>}
                rightContent={<RightSide
                    title={null}
                >
                    <div>
                        <ProductImageZoom
                            mainImage={product.image}
                            thumbnails={product.thumbnails}
                            title={product.title}
                        />
                        <ProductInfo
                            title={product.title}
                            priceLabel={product.price}
                            description={product.description}
                            phone={phone}
                        />
                        <div className="clear" />
                        <ProductTabs
                            detailHtml={product.detailHtml}
                            specsHtml={product.specsHtml}
                        />
                    </div>
                </RightSide>
                }
            />
        </Layout>
    );
}
