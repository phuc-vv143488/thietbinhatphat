import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

// Sample products data - in a real app, this would come from an API or database
const products = [
  {
    id: '1',
    title: 'Xe Nâng Người Genie GS-1930',
    slug: 'xe-nang-nguoi-genie-gs-1930',
    image: '/images/xe-nang-nguoi-tu-hanh-gs1930-1(1).jpg',
    description: 'Xe nâng người tự hành GS-1930 với chiều cao làm việc 7.79m, tải trọng 227kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '2',
    title: 'Xe Nâng Người Genie GS-2032',
    slug: 'xe-nang-nguoi-genie-gs-2032',
    image: '/images/xe-nang-nguoi-tu-hanh-gs2032-12.jpg',
    description: 'Xe nâng người tự hành GS-2032 với chiều cao làm việc 8.15m, tải trọng 227kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '3',
    title: 'Xe Nâng Người Genie GS-2046',
    slug: 'xe-nang-nguoi-genie-gs-2046',
    image: '/images/xe-nang-nguoi-tu-hanh-gs2046-1.jpg',
    description: 'Xe nâng người tự hành GS-2046 với chiều cao làm việc 8.15m, tải trọng 227kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '4',
    title: 'Xe Nâng Người Genie GS-2646',
    slug: 'xe-nang-nguoi-genie-gs-2646',
    image: '/images/xe-nang-nguoi-tu-hanh-gs2646-122.jpg',
    description: 'Xe nâng người tự hành GS-2646 với chiều cao làm việc 10.05m, tải trọng 227kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '5',
    title: 'Xe Nâng Người Genie GS-3268',
    slug: 'xe-nang-nguoi-genie-gs-3268',
    image: '/images/gs-3268-12.jpg',
    description: 'Xe nâng người tự hành GS-3268 với chiều cao làm việc 11.75m, tải trọng 454kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '6',
    title: 'Xe Nâng Người Genie S-125',
    slug: 'xe-nang-nguoi-genie-s-125',
    image: '/images/S-125-1.png',
    description: 'Xe nâng người dạng S-boom với chiều cao làm việc 40.15m, tầm với ngang 22.86m',
    price: 'Liên hệ',
    category: 'Xe Nâng S Boom'
  },
  {
    id: '7',
    title: 'Xe Nâng Người Genie S-45',
    slug: 'xe-nang-nguoi-genie-s-45',
    image: '/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s45.jpg',
    description: 'Xe nâng người dạng S-boom với chiều cao làm việc 15.72m, tầm với ngang 7.47m',
    price: 'Liên hệ',
    category: 'Xe Nâng S Boom'
  },
  {
    id: '8',
    title: 'Xe Nâng Người Genie S-65',
    slug: 'xe-nang-nguoi-genie-s-65',
    image: '/images/san-pham/s-boom/xe-nang-nguoi-tu-hanh-genie-s65.jpg',
    description: 'Xe nâng người dạng S-boom với chiều cao làm việc 21.95m, tầm với ngang 15.24m',
    price: 'Liên hệ',
    category: 'Xe Nâng S Boom'
  },
  {
    id: '9',
    title: 'Xe Nâng Người Genie Z45/25',
    slug: 'xe-nang-nguoi-genie-z45-25',
    image: '/images/Z45-25-IC-2.png',
    description: 'Xe nâng người dạng Z-boom với chiều cao làm việc 15.72m, tầm với ngang 7.47m',
    price: 'Liên hệ',
    category: 'Xe Nâng Z Boom'
  },
  {
    id: '10',
    title: 'Xe Nâng Người Genie Z30/20',
    slug: 'xe-nang-nguoi-genie-z30-20',
    image: '/images/Z30-20-101.png',
    description: 'Xe nâng người dạng Z-boom với chiều cao làm việc 11.15m, tầm với ngang 5.59m',
    price: 'Liên hệ',
    category: 'Xe Nâng Z Boom'
  },
  {
    id: '11',
    title: 'Thang Nâng AWP-30S',
    slug: 'thang-nang-awp-30s',
    image: '/images/san-pham/AWP-30s-1.jpg',
    description: 'Thang nâng AWP-30S với chiều cao làm việc 11.1m, nhỏ gọn và linh hoạt',
    price: 'Liên hệ',
    category: 'Thang Nâng AWP'
  },
  {
    id: '12',
    title: 'Xe Nâng Người JLG 4069',
    slug: 'xe-nang-nguoi-jlg-4069',
    image: '/images/rsz_jlg-4069-2.jpg',
    description: 'Xe nâng người JLG 4069 với chiều cao làm việc 14.2m, tải trọng 227kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người JLG'
  }
];

const categories = [
  'Tất cả',
  'Xe Nâng Người GS',
  'Xe Nâng S Boom',
  'Xe Nâng Z Boom',
  'Thang Nâng AWP',
  'Xe Nâng Người JLG'
];

export default function ProductsPage() {
  return (
    <Layout
      title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Nhất Phát"
      description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
      keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Sản Phẩm Xe Nâng Người</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">
                <div className="widget">
                  <h3>Danh Mục Sản Phẩm</h3>
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}>
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget">
                  <h3>Liên Hệ Tư Vấn</h3>
                  <div className="contact-info">
                    <p><strong>Hotline:</strong></p>
                    <p><a href="tel:0967098118">0967.098.118</a></p>
                    <p><a href="tel:0962098118">0962.098.118</a></p>
                    <p><strong>Email:</strong></p>
                    <p><a href="mailto:thietbinhatphat@gmail.com">thietbinhatphat@gmail.com</a></p>
                  </div>
                </div>

                <div className="widget">
                  <h3>Tại Sao Chọn Chúng Tôi?</h3>
                  <ul className="features-list">
                    <li>✓ Sản phẩm chính hãng 100%</li>
                    <li>✓ Giá cả cạnh tranh nhất</li>
                    <li>✓ Bảo hành dài hạn</li>
                    <li>✓ Hỗ trợ kỹ thuật 24/7</li>
                    <li>✓ Giao hàng toàn quốc</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="products-header">
                <div className="row">
                  <div className="col-md-6">
                    <p className="products-count">
                      Hiển thị {products.length} sản phẩm
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="sort-options">
                      <select className="form-control">
                        <option>Sắp xếp theo</option>
                        <option>Tên A-Z</option>
                        <option>Tên Z-A</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-grid">
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6 col-xs-12">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pagination-wrapper">
                <nav aria-label="Products pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Trước</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">Sau</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-categories">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Danh Mục Sản Phẩm</h2>
                <p>Khám phá các dòng sản phẩm xe nâng người chuyên nghiệp</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/gs-3268-12.jpg" alt="Xe Nâng Người GS" />
                </div>
                <div className="category-content">
                  <h3>Xe Nâng Người GS (Scissor Lift)</h3>
                  <p>Xe nâng người dạng cắt kéo, ổn định và an toàn cho công việc ở độ cao trung bình.</p>
                  <ul>
                    <li>Chiều cao: 6m - 18m</li>
                    <li>Tải trọng: 230kg - 680kg</li>
                    <li>Phù hợp: Trong nhà, ngoài trời</li>
                  </ul>
                  <a href="/products?category=gs" className="btn btn-outline">Xem sản phẩm</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/S-125-1.png" alt="Xe Nâng S Boom" />
                </div>
                <div className="category-content">
                  <h3>Xe Nâng S Boom</h3>
                  <p>Xe nâng người dạng cần duỗi thẳng, phù hợp cho công trình cao tầng và tầm với xa.</p>
                  <ul>
                    <li>Chiều cao: 12m - 40m</li>
                    <li>Tầm với ngang: 7m - 23m</li>
                    <li>Phù hợp: Công trình cao tầng</li>
                  </ul>
                  <a href="/products?category=s-boom" className="btn btn-outline">Xem sản phẩm</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/Z45-25-IC-2.png" alt="Xe Nâng Z Boom" />
                </div>
                <div className="category-content">
                  <h3>Xe Nâng Z Boom</h3>
                  <p>Xe nâng người dạng cần gấp khúc, linh hoạt vượt chướng ngại vật và làm việc trong không gian hẹp.</p>
                  <ul>
                    <li>Chiều cao: 10m - 20m</li>
                    <li>Tầm với ngang: 6m - 11m</li>
                    <li>Phù hợp: Vượt chướng ngại vật</li>
                  </ul>
                  <a href="/products?category=z-boom" className="btn btn-outline">Xem sản phẩm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content">
                <h2>Cần Tư Vấn Sản Phẩm?</h2>
                <p>Liên hệ ngay với chúng tôi để được tư vấn sản phẩm phù hợp và báo giá tốt nhất</p>
                <div className="cta-buttons">
                  <a href="tel:0967098118" className="btn btn-primary">Gọi Ngay: 0967.098.118</a>
                  <a href="/contact" className="btn btn-secondary">Gửi Yêu Cầu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

