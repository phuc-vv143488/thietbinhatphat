import React from 'react';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="Giới Thiệu - Công Ty Thiết Bị Nhất Phát"
      description="Công ty Thiết Bị Nhất Phát - Đơn vị hàng đầu cung cấp xe nâng người Genie chính hãng tại Việt Nam. Với nhiều năm kinh nghiệm trong lĩnh vực thiết bị nâng hạ."
      keywords="giới thiệu công ty, thiết bị nhất phát, xe nâng người genie, lịch sử công ty"
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Giới Thiệu Công Ty</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="about-text">
                <h2>Công Ty Thiết Bị Nhất Phát</h2>
                <p>
                  Công ty Thiết Bị Nhất Phát là đơn vị hàng đầu tại Việt Nam chuyên cung cấp các sản phẩm 
                  xe nâng người Genie chính hãng với chất lượng cao và giá cả cạnh tranh. Với nhiều năm 
                  kinh nghiệm trong lĩnh vực thiết bị nâng hạ, chúng tôi đã khẳng định được vị thế và 
                  uy tín trên thị trường.
                </p>

                <h3>Lịch Sử Hình Thành</h3>
                <p>
                  Được thành lập từ năm 2010, Công ty Thiết Bị Nhất Phát bắt đầu từ một đơn vị nhỏ 
                  chuyên kinh doanh thiết bị công nghiệp. Qua quá trình phát triển, chúng tôi đã 
                  chuyên sâu vào lĩnh vực xe nâng người và trở thành đại lý chính thức của thương 
                  hiệu Genie tại Việt Nam.
                </p>

                <h3>Tầm Nhìn & Sứ Mệnh</h3>
                <div className="vision-mission">
                  <div className="vision">
                    <h4>Tầm Nhìn</h4>
                    <p>
                      Trở thành đơn vị hàng đầu Việt Nam trong lĩnh vực cung cấp thiết bị nâng hạ, 
                      đặc biệt là xe nâng người, góp phần nâng cao hiệu quả và an toàn lao động 
                      trong các công trình xây dựng.
                    </p>
                  </div>
                  <div className="mission">
                    <h4>Sứ Mệnh</h4>
                    <p>
                      Cung cấp các sản phẩm xe nâng người chất lượng cao, dịch vụ chuyên nghiệp 
                      và giải pháp tối ưu cho khách hàng. Đồng thời, đảm bảo an toàn tuyệt đối 
                      cho người sử dụng và môi trường làm việc.
                    </p>
                  </div>
                </div>

                <h3>Giá Trị Cốt Lõi</h3>
                <ul className="core-values">
                  <li><strong>Chất lượng:</strong> Cam kết cung cấp sản phẩm chính hãng, chất lượng cao</li>
                  <li><strong>Uy tín:</strong> Xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng</li>
                  <li><strong>Chuyên nghiệp:</strong> Đội ngũ nhân viên được đào tạo bài bản, chuyên sâu</li>
                  <li><strong>An toàn:</strong> Đặt an toàn lên hàng đầu trong mọi hoạt động</li>
                  <li><strong>Sáng tạo:</strong> Không ngừng cải tiến và phát triển dịch vụ</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-sidebar">
                <div className="company-info">
                  <h3>Thông Tin Công Ty</h3>
                  <div className="info-item">
                    <strong>Tên công ty:</strong>
                    <p>Công ty Thiết Bị Nhất Phát</p>
                  </div>
                  <div className="info-item">
                    <strong>Địa chỉ:</strong>
                    <p>Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</p>
                  </div>
                  <div className="info-item">
                    <strong>Điện thoại:</strong>
                    <p>0967.098.118 - 0962.098.118</p>
                  </div>
                  <div className="info-item">
                    <strong>Email:</strong>
                    <p>thietbinhatphat@gmail.com</p>
                  </div>
                  <div className="info-item">
                    <strong>Website:</strong>
                    <p>thietbinhatphat.com</p>
                  </div>
                </div>

                <div className="certifications">
                  <h3>Chứng Nhận & Giải Thưởng</h3>
                  <ul>
                    <li>Đại lý chính thức Genie tại Việt Nam</li>
                    <li>Chứng nhận ISO 9001:2015</li>
                    <li>Giấy phép kinh doanh thiết bị công nghiệp</li>
                    <li>Top 10 đơn vị uy tín ngành thiết bị nâng hạ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Đội Ngũ Chuyên Nghiệp</h2>
                <p>Đội ngũ nhân viên giàu kinh nghiệm, được đào tạo chuyên sâu</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="team-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Nhân viên</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Kỹ thuật viên</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-stats">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Khách hàng tin tưởng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Tại Sao Chọn Chúng Tôi?</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/style/img/ico-1.png" alt="Sản phẩm chính hãng" />
                </div>
                <div className="feature-content">
                  <h3>Sản Phẩm Chính Hãng</h3>
                  <p>100% sản phẩm Genie chính hãng, nhập khẩu trực tiếp từ nhà sản xuất</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/style/img/support.png" alt="Hỗ trợ 24/7" />
                </div>
                <div className="feature-content">
                  <h3>Hỗ Trợ 24/7</h3>
                  <p>Đội ngũ kỹ thuật sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/style/img/ico-cap2.png" alt="Giá cả cạnh tranh" />
                </div>
                <div className="feature-content">
                  <h3>Giá Cả Cạnh Tranh</h3>
                  <p>Cam kết mức giá tốt nhất thị trường với chất lượng đảm bảo</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/style/img/tick.png" alt="Bảo hành dài hạn" />
                </div>
                <div className="feature-content">
                  <h3>Bảo Hành Dài Hạn</h3>
                  <p>Chế độ bảo hành và bảo trì toàn diện, dài hạn cho mọi sản phẩm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

