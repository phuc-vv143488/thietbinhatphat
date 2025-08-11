import React from 'react';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

// Sample product data - in a real app, this would come from an API or database
const products = {
  'xe-nang-nguoi-genie-gs-3268': {
    id: '1',
    title: 'Xe Nâng Người Genie GS-3268',
    slug: 'xe-nang-nguoi-genie-gs-3268',
    images: [
      '/images/gs-3268-12.jpg',
      '/images/GS-4390-111.png',
      '/images/GS-1530-52.png'
    ],
    description: 'Xe nâng người tự hành Genie GS-3268 với chiều cao nâng tối đa 11.75m, tải trọng 454kg',
    fullDescription: `
      Xe nâng người Genie GS-3268 là một trong những sản phẩm xe nâng người dạng cắt kéo (scissor lift) 
      được ưa chuộng nhất hiện nay. Với thiết kế chắc chắn, an toàn và hiệu suất cao, GS-3268 là lựa chọn 
      lý tưởng cho các công việc xây dựng, bảo trì và lắp đặt ở độ cao trung bình.
      
      Sản phẩm được sản xuất bởi Genie - thương hiệu hàng đầu thế giới về thiết bị nâng hạ, đảm bảo 
      chất lượng và độ tin cậy cao. Xe được thiết kế để hoạt động hiệu quả trong nhiều điều kiện 
      môi trường khác nhau, từ trong nhà đến ngoài trời.
    `,
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS',
    specifications: {
      'Chiều cao làm việc tối đa': '11.75m',
      'Chiều cao nền tảng tối đa': '9.75m',
      'Tải trọng tối đa': '454kg',
      'Kích thước nền tảng': '2.44m x 1.22m',
      'Chiều rộng tổng thể': '1.98m',
      'Chiều dài tổng thể': '2.59m',
      'Chiều cao gập xuống': '2.03m',
      'Trọng lượng': '3,175kg',
      'Nguồn điện': 'Điện 48V DC',
      'Tốc độ di chuyển': '4.8 km/h',
      'Khả năng vượt dốc': '25%',
      'Bán kính quay vòng': '2.29m'
    },
    features: [
      'Hệ thống an toàn đa lớp với cảm biến nghiêng',
      'Nền tảng làm việc rộng rãi và thoải mái',
      'Hệ thống điều khiển đơn giản, dễ sử dụng',
      'Pin có thể sạc lại, thời gian hoạt động dài',
      'Bánh xe không để lại vết trên sàn',
      'Khả năng di chuyển linh hoạt trong không gian hẹp',
      'Hệ thống phanh tự động khi nâng',
      'Chứng nhận CE và các tiêu chuẩn an toàn quốc tế'
    ],
    applications: [
      'Xây dựng và thi công',
      'Bảo trì và sửa chữa',
      'Lắp đặt hệ thống điện, cơ khí',
      'Sơn và trang trí nội thất',
      'Làm việc trong kho bãi',
      'Bảo trì tòa nhà và cơ sở hạ tầng'
    ]
  },
  'xe-nang-nguoi-genie-z45-25': {
    id: '2',
    title: 'Xe Nâng Người Genie Z45/25',
    slug: 'xe-nang-nguoi-genie-z45-25',
    images: [
      '/images/Z45-25-IC-2.png',
      '/images/Z30-20-101.png'
    ],
    description: 'Xe nâng người dạng Z-boom với chiều cao làm việc 15.72m, tầm với ngang 7.47m',
    fullDescription: `
      Xe nâng người Genie Z45/25 là sản phẩm xe nâng người dạng cần gấp khúc (articulating boom) 
      được thiết kế để vượt qua các chướng ngại vật và làm việc trong không gian phức tạp. 
      Với khả năng nâng cao và tầm với xa, Z45/25 là lựa chọn hoàn hảo cho các công việc 
      đòi hỏi tính linh hoạt cao.
    `,
    price: 'Liên hệ',
    category: 'Xe Nâng Z Boom',
    specifications: {
      'Chiều cao làm việc tối đa': '15.72m',
      'Chiều cao nền tảng tối đa': '13.72m',
      'Tầm với ngang tối đa': '7.47m',
      'Tải trọng tối đa': '227kg',
      'Kích thước nền tảng': '1.83m x 0.76m',
      'Chiều rộng tổng thể': '2.29m',
      'Chiều dài tổng thể': '7.01m',
      'Chiều cao gập xuống': '2.54m',
      'Trọng lượng': '7,711kg',
      'Động cơ': 'Diesel Kubota 24.8hp',
      'Tốc độ di chuyển': '5.6 km/h',
      'Khả năng vượt dốc': '45%'
    },
    features: [
      'Cần gấp khúc linh hoạt vượt chướng ngại vật',
      'Hệ thống ổn định tự động',
      'Khả năng quay 360 độ',
      'Nền tảng có thể xoay 160 độ',
      'Hệ thống điều khiển tỷ lệ',
      'Bánh lốp không để lại vết',
      'Hệ thống an toàn đa lớp',
      'Động cơ tiết kiệm nhiên liệu'
    ],
    applications: [
      'Xây dựng công trình phức tạp',
      'Bảo trì cây xanh và cắt tỉa',
      'Lắp đặt biển báo và đèn đường',
      'Sửa chữa mái nhà và tường',
      'Làm việc gần các công trình có sẵn',
      'Bảo trì cầu và cống'
    ]
  }
  // Add more products as needed
};

const relatedProducts = [
  {
    id: '3',
    title: 'Xe Nâng Người Genie S-125',
    slug: 'xe-nang-nguoi-genie-s-125',
    image: '/images/S-125-1.png',
    description: 'Xe nâng người dạng S-boom với chiều cao làm việc 40.15m',
    price: 'Liên hệ',
    category: 'Xe Nâng S Boom'
  },
  {
    id: '4',
    title: 'Xe Nâng Người Genie GS-1930',
    slug: 'xe-nang-nguoi-genie-gs-1930',
    image: '/images/xe-nang-nguoi-tu-hanh-gs1930-1(1).jpg',
    description: 'Xe nâng người tự hành GS-1930 với chiều cao làm việc 7.79m',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  }
];

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <Layout
      title={`${product.title} - Thiết Bị Nhất Phát`}
      description={product.description}
      keywords={`${product.title}, ${product.category}, xe nâng người genie, giá xe nâng người`}
      ogImage={product.images[0]}
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{product.title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item"><a href="/products">Sản phẩm</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-images">
                <div className="main-image">
                  <img src={product.images[0]} alt={product.title} className="img-responsive" />
                </div>
                {product.images.length > 1 && (
                  <div className="thumbnail-images">
                    {product.images.map((image, index) => (
                      <div key={index} className="thumbnail">
                        <img src={image} alt={`${product.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="product-info">
                <h1>{product.title}</h1>
                <div className="product-category">
                  <span className="category-tag">{product.category}</span>
                </div>
                
                <div className="product-description">
                  <p>{product.description}</p>
                </div>

                <div className="product-price">
                  <span className="price-label">Giá:</span>
                  <span className="price-value">{product.price}</span>
                </div>

                <div className="product-actions">
                  <a href="tel:0967098118" className="btn btn-primary btn-lg">
                    Liên Hệ Báo Giá
                  </a>
                  <a href="/contact" className="btn btn-secondary btn-lg">
                    Gửi Yêu Cầu
                  </a>
                </div>

                <div className="contact-info">
                  <h4>Liên Hệ Trực Tiếp</h4>
                  <p><strong>Hotline:</strong> <a href="tel:0967098118">0967.098.118</a> - <a href="tel:0962098118">0962.098.118</a></p>
                  <p><strong>Email:</strong> <a href="mailto:thietbinhatphat@gmail.com">thietbinhatphat@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details-tabs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tabs">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#description">Mô tả chi tiết</a></li>
                  <li><a href="#specifications">Thông số kỹ thuật</a></li>
                  <li><a href="#features">Tính năng</a></li>
                  <li><a href="#applications">Ứng dụng</a></li>
                </ul>

                <div className="tab-content">
                  <div id="description" className="tab-pane active">
                    <div className="description-content">
                      {product.fullDescription.split('\n').map((paragraph, index) => (
                        paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                      ))}
                    </div>
                  </div>

                  <div id="specifications" className="tab-pane">
                    <div className="specifications-table">
                      <table className="table table-striped">
                        <tbody>
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key}>
                              <td><strong>{key}</strong></td>
                              <td>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="features" className="tab-pane">
                    <div className="features-list">
                      <ul>
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div id="applications" className="tab-pane">
                    <div className="applications-list">
                      <ul>
                        {product.applications.map((application, index) => (
                          <li key={index}>{application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Sản Phẩm Liên Quan</h2>
                <p>Các sản phẩm xe nâng người khác bạn có thể quan tâm</p>
              </div>
            </div>
          </div>

          <div className="row">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="col-md-6 col-sm-6 col-xs-12">
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Generate static params for known products
export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

