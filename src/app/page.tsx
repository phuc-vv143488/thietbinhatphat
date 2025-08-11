import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import NewsCard from '@/components/NewsCard';

// Sample data - in a real app, this would come from an API or database
const featuredProducts = [
  {
    id: '1',
    title: 'Xe Nâng Người Genie GS-3268',
    slug: 'xe-nang-nguoi-genie-gs-3268',
    image: '/images/gs-3268-12.jpg',
    description: 'Xe nâng người tự hành Genie GS-3268 với chiều cao nâng tối đa 11.75m, tải trọng 454kg',
    price: 'Liên hệ',
    category: 'Xe Nâng Người GS'
  },
  {
    id: '2',
    title: 'Xe Nâng Người Genie Z45/25',
    slug: 'xe-nang-nguoi-genie-z45-25',
    image: '/images/Z45-25-IC-2.png',
    description: 'Xe nâng người dạng Z-boom với chiều cao làm việc 15.72m, tầm với ngang 7.47m',
    price: 'Liên hệ',
    category: 'Xe Nâng Z Boom'
  },
  {
    id: '3',
    title: 'Xe Nâng Người Genie S-125',
    slug: 'xe-nang-nguoi-genie-s-125',
    image: '/images/S-125-1.png',
    description: 'Xe nâng người dạng S-boom với chiều cao làm việc 40.15m, phù hợp cho công trình lớn',
    price: 'Liên hệ',
    category: 'Xe Nâng S Boom'
  }
];

const latestNews = [
  {
    id: '1',
    title: 'Chọn lốp xe phù hợp cho xe nâng người boom của bạn',
    slug: 'chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom',
    excerpt: 'Hướng dẫn chi tiết cách chọn lốp xe phù hợp cho các loại xe nâng người boom để đảm bảo an toàn và hiệu quả làm việc.',
    image: '/images/xe-123.png',
    publishedAt: '2024-01-15',
    author: 'Nhất Phát'
  },
  {
    id: '2',
    title: 'Cho thuê xe nâng người tại công ty Pronics KCN Đông Vân 3',
    slug: 'cho-thue-xe-nang-nguoi-tai-cong-ty-pronics',
    excerpt: 'Dự án cung cấp dịch vụ cho thuê xe nâng người tại công ty Pronics, khu công nghiệp Đông Vân 3.',
    image: '/images/pronics.jpg',
    publishedAt: '2024-01-10',
    author: 'Nhất Phát'
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát"
      description="Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-content">
                <h1>Xe Nâng Người Genie Nhập Khẩu Chính Hãng</h1>
                <p>Cung cấp các sản phẩm xe nâng người Genie chất lượng cao với giá cả cạnh tranh. Dịch vụ cho thuê, sửa chữa và bảo dưỡng chuyên nghiệp.</p>
                <div className="hero-buttons">
                  <a href="/products" className="btn btn-primary">Xem Sản Phẩm</a>
                  <a href="tel:0967098118" className="btn btn-secondary">Liên Hệ Ngay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Sản Phẩm Nổi Bật</h2>
                <p>Các sản phẩm xe nâng người Genie được ưa chuộng nhất</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 col-xs-12">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="/products" className="btn btn-outline">Xem Tất Cả Sản Phẩm</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Dịch Vụ Của Chúng Tôi</h2>
                <p>Cung cấp đầy đủ các dịch vụ liên quan đến xe nâng người</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <div className="service-icon">
                  <img src="/style/img/ico-1.png" alt="Bán xe nâng người" />
                </div>
                <h3>Bán Xe Nâng Người</h3>
                <p>Cung cấp các loại xe nâng người Genie chính hãng với giá cả cạnh tranh, chất lượng đảm bảo.</p>
                <a href="/products" className="service-link">Xem thêm</a>
              </div>
            </div>
            
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <div className="service-icon">
                  <img src="/style/img/ico-cap2.png" alt="Cho thuê xe nâng người" />
                </div>
                <h3>Cho Thuê Xe Nâng Người</h3>
                <p>Dịch vụ cho thuê xe nâng người theo ngày, tuần, tháng với giá ưu đãi và hỗ trợ vận hành.</p>
                <a href="/services" className="service-link">Xem thêm</a>
              </div>
            </div>
            
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <div className="service-icon">
                  <img src="/style/img/support.png" alt="Sửa chữa bảo dưỡng" />
                </div>
                <h3>Sửa Chữa & Bảo Dưỡng</h3>
                <p>Dịch vụ sửa chữa, bảo dưỡng xe nâng người chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm.</p>
                <a href="/services" className="service-link">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Tin Tức Mới Nhất</h2>
                <p>Cập nhật thông tin mới nhất về sản phẩm và dịch vụ</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {latestNews.map((news) => (
              <div key={news.id} className="col-md-6 col-sm-12 col-xs-12">
                <NewsCard news={news} />
              </div>
            ))}
          </div>
          
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="/news" className="btn btn-outline">Xem Tất Cả Tin Tức</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content">
                <h2>Cần Tư Vấn Về Xe Nâng Người?</h2>
                <p>Liên hệ ngay với chúng tôi để được tư vấn miễn phí và báo giá tốt nhất</p>
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
