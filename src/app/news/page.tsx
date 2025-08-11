import React from 'react';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';

// Sample news data - in a real app, this would come from an API or database
const newsItems = [
  {
    id: '1',
    title: 'Chọn lốp xe phù hợp cho xe nâng người boom của bạn',
    slug: 'chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom',
    excerpt: 'Hướng dẫn chi tiết cách chọn lốp xe phù hợp cho các loại xe nâng người boom để đảm bảo an toàn và hiệu quả làm việc. Các yếu tố cần xem xét khi lựa chọn lốp xe.',
    image: '/images/xe-123.png',
    publishedAt: '2024-01-15',
    author: 'Nhất Phát'
  },
  {
    id: '2',
    title: 'Cho thuê xe nâng người tại công ty Pronics KCN Đông Vân 3',
    slug: 'cho-thue-xe-nang-nguoi-tai-cong-ty-pronics',
    excerpt: 'Dự án cung cấp dịch vụ cho thuê xe nâng người tại công ty Pronics, khu công nghiệp Đông Vân 3. Đội ngũ kỹ thuật chuyên nghiệp, thiết bị hiện đại.',
    image: '/images/pronics.jpg',
    publishedAt: '2024-01-10',
    author: 'Nhất Phát'
  },
  {
    id: '3',
    title: 'Chuyên cung cấp và cho thuê xe nâng người làm việc trên cao',
    slug: 'chuyen-cung-cap-va-cho-thue-xe-nang-nguoi-lam-viec-tren-cao',
    excerpt: 'Thiết Bị Nhất Phát chuyên cung cấp và cho thuê xe nâng người cho các công việc làm việc trên cao. Đảm bảo an toàn tuyệt đối và hiệu quả cao.',
    image: '/images/thang-nang-AWP-7.jpg',
    publishedAt: '2024-01-05',
    author: 'Nhất Phát'
  },
  {
    id: '4',
    title: 'Bảo dưỡng xe nâng người định kỳ - Tại sao quan trọng?',
    slug: 'bao-duong-xe-nang-nguoi-dinh-ky-tai-sao-quan-trong',
    excerpt: 'Việc bảo dưỡng xe nâng người định kỳ không chỉ giúp kéo dài tuổi thọ thiết bị mà còn đảm bảo an toàn cho người vận hành. Hướng dẫn chi tiết.',
    image: '/images/ac-quy-xe-nang.jpg',
    publishedAt: '2023-12-28',
    author: 'Nhất Phát'
  },
  {
    id: '5',
    title: 'Xu hướng phát triển của ngành thiết bị nâng hạ 2024',
    slug: 'xu-huong-phat-trien-cua-nganh-thiet-bi-nang-ha-2024',
    excerpt: 'Phân tích xu hướng phát triển của ngành thiết bị nâng hạ trong năm 2024, bao gồm công nghệ mới, yêu cầu an toàn và thị trường Việt Nam.',
    image: '/images/mayui-1.jpg',
    publishedAt: '2023-12-20',
    author: 'Nhất Phát'
  },
  {
    id: '6',
    title: 'Hướng dẫn vận hành xe nâng người an toàn',
    slug: 'huong-dan-van-hanh-xe-nang-nguoi-an-toan',
    excerpt: 'Hướng dẫn chi tiết các bước vận hành xe nâng người an toàn, từ kiểm tra trước khi sử dụng đến các thao tác trong quá trình làm việc.',
    image: '/images/thang-nang-ap-1.jpg',
    publishedAt: '2023-12-15',
    author: 'Nhất Phát'
  }
];

const categories = [
  'Tất cả',
  'Tin tức sản phẩm',
  'Hướng dẫn sử dụng',
  'Dự án thực hiện',
  'Xu hướng ngành',
  'An toàn lao động'
];

export default function NewsPage() {
  return (
    <Layout
      title="Tin Tức - Cập Nhật Thông Tin Xe Nâng Người | Thiết Bị Nhất Phát"
      description="Cập nhật tin tức mới nhất về xe nâng người, hướng dẫn sử dụng, bảo dưỡng và các dự án thực hiện của Thiết Bị Nhất Phát."
      keywords="tin tức xe nâng người, hướng dẫn sử dụng xe nâng người, bảo dưỡng xe nâng người, dự án xe nâng người"
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Tin Tức & Cập Nhật</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Tin tức</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="news-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="news-header">
                <div className="row">
                  <div className="col-md-6">
                    <p className="news-count">
                      Hiển thị {newsItems.length} bài viết
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="sort-options">
                      <select className="form-control">
                        <option>Sắp xếp theo</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                        <option>Tiêu đề A-Z</option>
                        <option>Tiêu đề Z-A</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="news-grid">
                <div className="row">
                  {newsItems.map((news) => (
                    <div key={news.id} className="col-md-6 col-sm-12 col-xs-12">
                      <NewsCard news={news} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pagination-wrapper">
                <nav aria-label="News pagination">
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

            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget">
                  <h3>Danh Mục Tin Tức</h3>
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
                  <h3>Bài Viết Mới Nhất</h3>
                  <div className="recent-posts">
                    {newsItems.slice(0, 3).map((news) => (
                      <div key={news.id} className="recent-post">
                        <div className="post-image">
                          <img src={news.image} alt={news.title} />
                        </div>
                        <div className="post-content">
                          <h4><a href={`/news/${news.slug}`}>{news.title}</a></h4>
                          <p className="post-date">{new Date(news.publishedAt).toLocaleDateString('vi-VN')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  <h3>Theo Dõi Chúng Tôi</h3>
                  <div className="social-links">
                    <a href="https://www.facebook.com/nhat.phat.9674" target="_blank" rel="noopener noreferrer">
                      <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png" alt="Facebook" />
                      Facebook
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png" alt="Twitter" />
                      Twitter
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png" alt="LinkedIn" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-signup">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter-content">
                <h2>Đăng Ký Nhận Tin Tức</h2>
                <p>Đăng ký để nhận thông tin mới nhất về sản phẩm và dịch vụ xe nâng người</p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Nhập địa chỉ email của bạn"
                      required
                    />
                    <button type="submit" className="btn btn-primary">Đăng Ký</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

