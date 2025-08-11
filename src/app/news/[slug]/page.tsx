import React from 'react';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';

// Sample news data - in a real app, this would come from an API or database
const newsItems = {
  'chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom': {
    id: '1',
    title: 'Chọn lốp xe phù hợp cho xe nâng người boom của bạn',
    slug: 'chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom',
    excerpt: 'Hướng dẫn chi tiết cách chọn lốp xe phù hợp cho các loại xe nâng người boom để đảm bảo an toàn và hiệu quả làm việc.',
    image: '/images/xe-123.png',
    publishedAt: '2024-01-15',
    author: 'Nhất Phát',
    category: 'Hướng dẫn sử dụng',
    content: `
      <p>Việc chọn lốp xe phù hợp cho xe nâng người boom là một yếu tố quan trọng ảnh hưởng trực tiếp đến hiệu suất làm việc, độ an toàn và tuổi thọ của thiết bị. Trong bài viết này, chúng tôi sẽ hướng dẫn bạn cách lựa chọn loại lốp xe phù hợp nhất cho từng loại xe nâng người boom.</p>

      <h2>Các loại lốp xe nâng người boom</h2>
      
      <h3>1. Lốp đặc (Solid Tires)</h3>
      <p>Lốp đặc là loại lốp không chứa không khí bên trong, được làm từ cao su đặc hoặc polyurethane. Đây là lựa chọn phổ biến cho các xe nâng người làm việc trong môi trường khắc nghiệt.</p>
      
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Không bị thủng, xì hơi</li>
        <li>Tuổi thọ cao, ít bảo trì</li>
        <li>Phù hợp với mặt đất gồ ghề</li>
        <li>Chịu được vật sắc nhọn</li>
      </ul>
      
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Độ êm ái kém hơn lốp hơi</li>
        <li>Giá thành cao hơn</li>
        <li>Trọng lượng lớn hơn</li>
      </ul>

      <h3>2. Lốp hơi (Pneumatic Tires)</h3>
      <p>Lốp hơi là loại lốp truyền thống chứa không khí bên trong, cung cấp độ êm ái và khả năng hấp thụ sốc tốt.</p>
      
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Độ êm ái cao</li>
        <li>Khả năng hấp thụ sốc tốt</li>
        <li>Giá thành thấp hơn</li>
        <li>Trọng lượng nhẹ</li>
      </ul>
      
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Có thể bị thủng, xì hơi</li>
        <li>Cần bảo trì thường xuyên</li>
        <li>Không phù hợp với môi trường có vật sắc nhọn</li>
      </ul>

      <h3>3. Lốp bọt (Foam-Filled Tires)</h3>
      <p>Lốp bọt là sự kết hợp giữa lốp hơi và lốp đặc, được bơm đầy bọt polyurethane thay vì không khí.</p>
      
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Không bị thủng như lốp hơi</li>
        <li>Độ êm ái tốt hơn lốp đặc</li>
        <li>Tuổi thọ cao</li>
        <li>Phù hợp với nhiều loại địa hình</li>
      </ul>

      <h2>Yếu tố cần xem xét khi chọn lốp</h2>

      <h3>1. Môi trường làm việc</h3>
      <p>Đây là yếu tố quan trọng nhất khi lựa chọn loại lốp:</p>
      <ul>
        <li><strong>Trong nhà:</strong> Lốp đặc hoặc lốp không để lại vết</li>
        <li><strong>Ngoài trời:</strong> Lốp hơi hoặc lốp bọt</li>
        <li><strong>Địa hình gồ ghề:</strong> Lốp đặc với gai</li>
        <li><strong>Môi trường có vật sắc nhọn:</strong> Lốp đặc</li>
      </ul>

      <h3>2. Loại xe nâng người</h3>
      <p>Mỗi loại xe nâng người có yêu cầu khác nhau về lốp xe:</p>
      <ul>
        <li><strong>Xe nâng GS (Scissor):</strong> Thường sử dụng lốp đặc hoặc lốp không để lại vết</li>
        <li><strong>Xe nâng S-boom:</strong> Lốp hơi hoặc lốp bọt cho độ ổn định</li>
        <li><strong>Xe nâng Z-boom:</strong> Lốp phù hợp với địa hình di chuyển</li>
      </ul>

      <h3>3. Tần suất sử dụng</h3>
      <p>Nếu xe được sử dụng thường xuyên, nên chọn lốp có tuổi thọ cao như lốp đặc hoặc lốp bọt.</p>

      <h2>Bảo dưỡng lốp xe nâng người</h2>

      <h3>Kiểm tra định kỳ</h3>
      <ul>
        <li>Kiểm tra áp suất lốp hơi hàng tuần</li>
        <li>Kiểm tra độ mòn của lốp</li>
        <li>Kiểm tra các vết nứt, rách</li>
        <li>Làm sạch lốp sau mỗi ca làm việc</li>
      </ul>

      <h3>Thay thế lốp</h3>
      <p>Cần thay thế lốp khi:</p>
      <ul>
        <li>Độ mòn vượt quá giới hạn cho phép</li>
        <li>Có vết nứt sâu hoặc rách lớn</li>
        <li>Lốp bị biến dạng</li>
        <li>Mất khả năng bám đường</li>
      </ul>

      <h2>Kết luận</h2>
      <p>Việc chọn lốp xe phù hợp cho xe nâng người boom không chỉ đảm bảo an toàn mà còn tối ưu hóa hiệu suất làm việc và giảm chi phí vận hành. Hãy cân nhắc kỹ các yếu tố như môi trường làm việc, loại xe và tần suất sử dụng để đưa ra lựa chọn tốt nhất.</p>
      
      <p>Để được tư vấn chi tiết về việc chọn lốp xe nâng người phù hợp, hãy liên hệ với Thiết Bị Nhất Phát qua hotline <strong>0967.098.118</strong> hoặc email <strong>thietbinhatphat@gmail.com</strong>.</p>
    `
  },
  'cho-thue-xe-nang-nguoi-tai-cong-ty-pronics': {
    id: '2',
    title: 'Cho thuê xe nâng người tại công ty Pronics KCN Đông Vân 3',
    slug: 'cho-thue-xe-nang-nguoi-tai-cong-ty-pronics',
    excerpt: 'Dự án cung cấp dịch vụ cho thuê xe nâng người tại công ty Pronics, khu công nghiệp Đông Vân 3.',
    image: '/images/pronics.jpg',
    publishedAt: '2024-01-10',
    author: 'Nhất Phát',
    category: 'Dự án thực hiện',
    content: `
      <p>Thiết Bị Nhất Phát vừa hoàn thành thành công dự án cung cấp dịch vụ cho thuê xe nâng người tại công ty Pronics, khu công nghiệp Đông Vân 3, Hưng Yên. Đây là một trong những dự án tiêu biểu thể hiện năng lực và chất lượng dịch vụ của chúng tôi.</p>

      <h2>Thông tin dự án</h2>
      <p><strong>Khách hàng:</strong> Công ty Pronics<br>
      <strong>Địa điểm:</strong> KCN Đông Vân 3, Hưng Yên<br>
      <strong>Thời gian thực hiện:</strong> Tháng 12/2023 - Tháng 1/2024<br>
      <strong>Loại thiết bị:</strong> Xe nâng người Genie GS-2646 và Z45/25</p>

      <h2>Yêu cầu của khách hàng</h2>
      <p>Công ty Pronics cần thuê xe nâng người để thực hiện các công việc bảo trì và lắp đặt hệ thống trong nhà máy. Các yêu cầu cụ thể bao gồm:</p>
      <ul>
        <li>Xe nâng người có chiều cao làm việc từ 10-15m</li>
        <li>Khả năng di chuyển linh hoạt trong không gian hẹp</li>
        <li>Đảm bảo an toàn tuyệt đối cho người vận hành</li>
        <li>Hỗ trợ kỹ thuật và hướng dẫn vận hành</li>
        <li>Thời gian thuê linh hoạt theo tiến độ công việc</li>
      </ul>

      <h2>Giải pháp của Thiết Bị Nhất Phát</h2>
      
      <h3>1. Lựa chọn thiết bị phù hợp</h3>
      <p>Sau khi khảo sát thực tế, chúng tôi đã đề xuất sử dụng:</p>
      <ul>
        <li><strong>Xe nâng người Genie GS-2646:</strong> Phù hợp cho công việc trong nhà với chiều cao 10m</li>
        <li><strong>Xe nâng người Genie Z45/25:</strong> Linh hoạt vượt chướng ngại vật với chiều cao 15m</li>
      </ul>

      <h3>2. Dịch vụ hỗ trợ toàn diện</h3>
      <ul>
        <li>Giao nhận thiết bị tận nơi</li>
        <li>Hướng dẫn vận hành chi tiết cho nhân viên</li>
        <li>Hỗ trợ kỹ thuật 24/7 trong suốt thời gian thuê</li>
        <li>Bảo trì và kiểm tra định kỳ</li>
        <li>Cung cấp phụ tùng thay thế khi cần thiết</li>
      </ul>

      <h2>Quá trình thực hiện</h2>
      
      <h3>Giai đoạn 1: Khảo sát và tư vấn</h3>
      <p>Đội ngũ kỹ thuật của Thiết Bị Nhất Phát đã đến khảo sát thực tế tại công ty Pronics để:</p>
      <ul>
        <li>Đánh giá điều kiện môi trường làm việc</li>
        <li>Xác định yêu cầu cụ thể về chiều cao và tải trọng</li>
        <li>Lập kế hoạch sử dụng thiết bị hiệu quả</li>
        <li>Đề xuất giải pháp tối ưu</li>
      </ul>

      <h3>Giai đoạn 2: Giao thiết bị và đào tạo</h3>
      <p>Thiết bị được giao đúng thời gian cam kết và trong tình trạng hoàn hảo. Đội ngũ kỹ thuật đã:</p>
      <ul>
        <li>Kiểm tra toàn bộ hệ thống trước khi bàn giao</li>
        <li>Hướng dẫn chi tiết cách vận hành an toàn</li>
        <li>Đào tạo nhân viên về quy trình bảo trì cơ bản</li>
        <li>Cung cấp tài liệu hướng dẫn đầy đủ</li>
      </ul>

      <h3>Giai đoạn 3: Hỗ trợ trong quá trình sử dụng</h3>
      <p>Trong suốt thời gian thuê, chúng tôi đã:</p>
      <ul>
        <li>Theo dõi tình trạng hoạt động của thiết bị</li>
        <li>Hỗ trợ kỹ thuật khi có vấn đề phát sinh</li>
        <li>Thực hiện bảo trì định kỳ theo lịch</li>
        <li>Đảm bảo thiết bị luôn hoạt động ổn định</li>
      </ul>

      <h2>Kết quả đạt được</h2>
      
      <h3>Về hiệu quả công việc</h3>
      <ul>
        <li>Công việc bảo trì được hoàn thành đúng tiến độ</li>
        <li>Năng suất làm việc tăng 40% so với phương pháp truyền thống</li>
        <li>Giảm thời gian thi công xuống còn 60%</li>
        <li>Chất lượng công việc được đảm bảo cao</li>
      </ul>

      <h3>Về an toàn lao động</h3>
      <ul>
        <li>Không có tai nạn lao động nào xảy ra</li>
        <li>100% nhân viên được đào tạo về an toàn</li>
        <li>Tuân thủ nghiêm ngặt các quy định an toàn</li>
        <li>Môi trường làm việc an toàn và chuyên nghiệp</li>
      </ul>

      <h3>Về chi phí</h3>
      <ul>
        <li>Tiết kiệm 25% chi phí so với việc mua thiết bị</li>
        <li>Không phát sinh chi phí bảo trì, sửa chữa</li>
        <li>Linh hoạt trong việc điều chỉnh thời gian thuê</li>
        <li>ROI (Return on Investment) cao</li>
      </ul>

      <h2>Đánh giá của khách hàng</h2>
      <blockquote>
        <p>"Chúng tôi rất hài lòng với dịch vụ cho thuê xe nâng người của Thiết Bị Nhất Phát. Thiết bị chất lượng cao, đội ngũ kỹ thuật chuyên nghiệp và hỗ trợ tận tình. Đây chắc chắn sẽ là đối tác lâu dài của chúng tôi."</p>
        <footer>- Ông Nguyễn Văn A, Giám đốc Kỹ thuật Công ty Pronics</footer>
      </blockquote>

      <h2>Cam kết của Thiết Bị Nhất Phát</h2>
      <p>Thành công của dự án tại công ty Pronics một lần nữa khẳng định cam kết của chúng tôi:</p>
      <ul>
        <li>Cung cấp thiết bị chính hãng, chất lượng cao</li>
        <li>Dịch vụ chuyên nghiệp, tận tâm</li>
        <li>Hỗ trợ kỹ thuật 24/7</li>
        <li>Giá cả cạnh tranh, minh bạch</li>
        <li>Đảm bảo an toàn tuyệt đối</li>
      </ul>

      <h2>Liên hệ với chúng tôi</h2>
      <p>Nếu bạn đang có nhu cầu thuê xe nâng người cho dự án của mình, hãy liên hệ với Thiết Bị Nhất Phát để được tư vấn miễn phí:</p>
      <ul>
        <li><strong>Hotline:</strong> 0967.098.118 - 0962.098.118</li>
        <li><strong>Email:</strong> thietbinhatphat@gmail.com</li>
        <li><strong>Địa chỉ:</strong> Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</li>
      </ul>
    `
  }
  // Add more news items as needed
};

const relatedNews = [
  {
    id: '3',
    title: 'Chuyên cung cấp và cho thuê xe nâng người làm việc trên cao',
    slug: 'chuyen-cung-cap-va-cho-thue-xe-nang-nguoi-lam-viec-tren-cao',
    excerpt: 'Thiết Bị Nhất Phát chuyên cung cấp và cho thuê xe nâng người cho các công việc làm việc trên cao.',
    image: '/images/thang-nang-AWP-7.jpg',
    publishedAt: '2024-01-05',
    author: 'Nhất Phát'
  },
  {
    id: '4',
    title: 'Bảo dưỡng xe nâng người định kỳ - Tại sao quan trọng?',
    slug: 'bao-duong-xe-nang-nguoi-dinh-ky-tai-sao-quan-trong',
    excerpt: 'Việc bảo dưỡng xe nâng người định kỳ không chỉ giúp kéo dài tuổi thọ thiết bị mà còn đảm bảo an toàn.',
    image: '/images/ac-quy-xe-nang.jpg',
    publishedAt: '2023-12-28',
    author: 'Nhất Phát'
  }
];

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = newsItems[params.slug as keyof typeof newsItems];

  if (!news) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
      title={`${news.title} - Thiết Bị Nhất Phát`}
      description={news.excerpt}
      keywords={`${news.title}, tin tức xe nâng người, ${news.category}`}
      ogImage={news.image}
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{news.title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item"><a href="/news">Tin tức</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{news.title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="news-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article className="news-article">
                <div className="article-header">
                  <div className="article-meta">
                    <span className="article-date">{formatDate(news.publishedAt)}</span>
                    <span className="article-author">Bởi {news.author}</span>
                    <span className="article-category">{news.category}</span>
                  </div>
                  
                  <div className="article-image">
                    <img src={news.image} alt={news.title} className="img-responsive" />
                  </div>
                </div>

                <div className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: news.content }} />
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <h4>Tags:</h4>
                    <span className="tag">xe nâng người</span>
                    <span className="tag">genie</span>
                    <span className="tag">thiết bị nâng hạ</span>
                    <span className="tag">{news.category.toLowerCase()}</span>
                  </div>

                  <div className="article-share">
                    <h4>Chia sẻ:</h4>
                    <div className="share-buttons">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                        <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png" alt="Facebook" />
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(news.title)}`} target="_blank" rel="noopener noreferrer">
                        <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png" alt="Twitter" />
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                        <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png" alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <div className="related-news">
                <h3>Bài Viết Liên Quan</h3>
                <div className="row">
                  {relatedNews.map((relatedNewsItem) => (
                    <div key={relatedNewsItem.id} className="col-md-6">
                      <NewsCard news={relatedNewsItem} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget">
                  <h3>Liên Hệ Tư Vấn</h3>
                  <div className="contact-info">
                    <p><strong>Hotline:</strong></p>
                    <p><a href="tel:0967098118">0967.098.118</a></p>
                    <p><a href="tel:0962098118">0962.098.118</a></p>
                    <p><strong>Email:</strong></p>
                    <p><a href="mailto:thietbinhatphat@gmail.com">thietbinhatphat@gmail.com</a></p>
                    <div className="contact-buttons">
                      <a href="tel:0967098118" className="btn btn-primary">Gọi Ngay</a>
                      <a href="/contact" className="btn btn-secondary">Gửi Yêu Cầu</a>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h3>Bài Viết Mới Nhất</h3>
                  <div className="recent-posts">
                    {relatedNews.map((recentNews) => (
                      <div key={recentNews.id} className="recent-post">
                        <div className="post-image">
                          <img src={recentNews.image} alt={recentNews.title} />
                        </div>
                        <div className="post-content">
                          <h4><a href={`/news/${recentNews.slug}`}>{recentNews.title}</a></h4>
                          <p className="post-date">{formatDate(recentNews.publishedAt)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="widget">
                  <h3>Danh Mục Tin Tức</h3>
                  <ul className="category-list">
                    <li><a href="/news?category=tin-tuc-san-pham">Tin tức sản phẩm</a></li>
                    <li><a href="/news?category=huong-dan-su-dung">Hướng dẫn sử dụng</a></li>
                    <li><a href="/news?category=du-an-thuc-hien">Dự án thực hiện</a></li>
                    <li><a href="/news?category=xu-huong-nganh">Xu hướng ngành</a></li>
                    <li><a href="/news?category=an-toan-lao-dong">An toàn lao động</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Generate static params for known news items
export async function generateStaticParams() {
  return Object.keys(newsItems).map((slug) => ({
    slug,
  }));
}

