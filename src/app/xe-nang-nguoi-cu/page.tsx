import React from 'react';
import Layout from '@/components/Layout';

export default function ServicesPage() {
  return (
    <Layout
      title="Dịch Vụ - Cho Thuê & Sửa Chữa Xe Nâng Người | Thiết Bị Nhất Phát"
      description="Dịch vụ cho thuê xe nâng người, sửa chữa và bảo dưỡng xe nâng người chuyên nghiệp tại Hà Nội, Bắc Ninh, Hưng Yên. Giá cả cạnh tranh, chất lượng đảm bảo."
      keywords="cho thuê xe nâng người, sửa chữa xe nâng người, bảo dưỡng xe nâng người, dịch vụ xe nâng người"
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Dịch Vụ Của Chúng Tôi</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dịch vụ</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="services-overview">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Dịch Vụ Chuyên Nghiệp</h2>
                <p>Cung cấp đầy đủ các dịch vụ liên quan đến xe nâng người với chất lượng cao nhất</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="/images/thang-nang-AWP-7.jpg" alt="Cho thuê xe nâng người" />
                </div>
                <div className="service-content">
                  <h3>Cho Thuê Xe Nâng Người</h3>
                  <p>
                    Dịch vụ cho thuê xe nâng người đa dạng các loại: GS, S-boom, Z-boom, AWP. 
                    Phù hợp cho mọi công trình từ nhỏ đến lớn.
                  </p>
                  <ul className="service-features">
                    <li>Cho thuê theo ngày, tuần, tháng</li>
                    <li>Giao nhận tận nơi</li>
                    <li>Hướng dẫn vận hành</li>
                    <li>Hỗ trợ kỹ thuật 24/7</li>
                  </ul>
                  <div className="service-price">
                    <span className="price-label">Giá từ:</span>
                    <span className="price-value">500.000đ/ngày</span>
                  </div>
                  <a href="tel:0967098118" className="btn btn-primary">Liên hệ báo giá</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="/images/mayui-1.jpg" alt="Sửa chữa xe nâng người" />
                </div>
                <div className="service-content">
                  <h3>Sửa Chữa Xe Nâng Người</h3>
                  <p>
                    Dịch vụ sửa chữa, thay thế linh kiện xe nâng người các hãng Genie, JLG, 
                    Skyjack với đội ngũ kỹ thuật viên chuyên nghiệp.
                  </p>
                  <ul className="service-features">
                    <li>Chẩn đoán lỗi chính xác</li>
                    <li>Linh kiện chính hãng</li>
                    <li>Bảo hành dịch vụ</li>
                    <li>Sửa chữa tại xưởng hoặc hiện trường</li>
                  </ul>
                  <div className="service-price">
                    <span className="price-label">Chi phí:</span>
                    <span className="price-value">Tùy theo tình trạng</span>
                  </div>
                  <a href="tel:0967098118" className="btn btn-primary">Liên hệ tư vấn</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="/images/ac-quy-xe-nang.jpg" alt="Bảo dưỡng xe nâng người" />
                </div>
                <div className="service-content">
                  <h3>Bảo Dưỡng Định Kỳ</h3>
                  <p>
                    Dịch vụ bảo dưỡng định kỳ giúp xe nâng người hoạt động ổn định, 
                    kéo dài tuổi thọ và đảm bảo an toàn tuyệt đối.
                  </p>
                  <ul className="service-features">
                    <li>Kiểm tra toàn diện hệ thống</li>
                    <li>Thay dầu và bảo dưỡng động cơ</li>
                    <li>Kiểm tra hệ thống thủy lực</li>
                    <li>Lập báo cáo chi tiết</li>
                  </ul>
                  <div className="service-price">
                    <span className="price-label">Gói từ:</span>
                    <span className="price-value">2.000.000đ</span>
                  </div>
                  <a href="tel:0967098118" className="btn btn-primary">Đặt lịch bảo dưỡng</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rental-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Chi Tiết Dịch Vụ Cho Thuê</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="rental-info">
                <h3>Các Loại Xe Cho Thuê</h3>
                <div className="rental-types">
                  <div className="rental-type">
                    <h4>Xe Nâng Người GS (Scissor Lift)</h4>
                    <ul>
                      <li>Chiều cao: 6m - 18m</li>
                      <li>Tải trọng: 230kg - 680kg</li>
                      <li>Phù hợp: Công việc trong nhà, ngoài trời</li>
                    </ul>
                  </div>
                  
                  <div className="rental-type">
                    <h4>Xe Nâng Người S-Boom</h4>
                    <ul>
                      <li>Chiều cao: 12m - 40m</li>
                      <li>Tầm với ngang: 7m - 23m</li>
                      <li>Phù hợp: Công trình cao tầng</li>
                    </ul>
                  </div>
                  
                  <div className="rental-type">
                    <h4>Xe Nâng Người Z-Boom</h4>
                    <ul>
                      <li>Chiều cao: 10m - 20m</li>
                      <li>Tầm với ngang: 6m - 11m</li>
                      <li>Phù hợp: Vượt chướng ngại vật</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="rental-process">
                <h3>Quy Trình Cho Thuê</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Liên Hệ Tư Vấn</h4>
                      <p>Gọi hotline hoặc gửi yêu cầu để được tư vấn loại xe phù hợp</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Báo Giá & Hợp Đồng</h4>
                      <p>Nhận báo giá chi tiết và ký hợp đồng cho thuê</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Giao Xe & Hướng Dẫn</h4>
                      <p>Giao xe tận nơi và hướng dẫn vận hành an toàn</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Hỗ Trợ & Thu Hồi</h4>
                      <p>Hỗ trợ kỹ thuật trong quá trình sử dụng và thu hồi xe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-areas">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Khu Vực Phục Vụ</h2>
                <p>Chúng tôi cung cấp dịch vụ tại các tỉnh thành sau</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="area-item">
                <h4>Hà Nội</h4>
                <ul>
                  <li>Tất cả các quận, huyện</li>
                  <li>Giao nhận trong ngày</li>
                  <li>Hỗ trợ 24/7</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="area-item">
                <h4>Bắc Ninh</h4>
                <ul>
                  <li>Các khu công nghiệp</li>
                  <li>Thành phố Bắc Ninh</li>
                  <li>Các huyện lân cận</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="area-item">
                <h4>Hưng Yên</h4>
                <ul>
                  <li>Thành phố Hưng Yên</li>
                  <li>Các khu công nghiệp</li>
                  <li>Vùng phụ cận</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="area-item">
                <h4>Các Tỉnh Khác</h4>
                <ul>
                  <li>Hải Phòng</li>
                  <li>Quảng Ninh</li>
                  <li>Thái Nguyên</li>
                </ul>
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
                <h2>Cần Dịch Vụ Xe Nâng Người?</h2>
                <p>Liên hệ ngay với chúng tôi để được tư vấn và báo giá tốt nhất</p>
                <div className="cta-buttons">
                  <a href="tel:0967098118" className="btn btn-primary">Hotline: 0967.098.118</a>
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

