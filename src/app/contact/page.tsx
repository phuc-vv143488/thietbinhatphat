import React from 'react';
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout
      title="Liên Hệ - Thiết Bị Nhất Phát | Xe Nâng Người Genie"
      description="Liên hệ với Thiết Bị Nhất Phát để được tư vấn và báo giá xe nâng người Genie. Hotline: 0967.098.118 - 0962.098.118. Địa chỉ: Hà Nội."
      keywords="liên hệ thiết bị nhất phát, hotline xe nâng người, địa chỉ công ty xe nâng người, tư vấn xe nâng người"
    >
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Liên Hệ Với Chúng Tôi</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Liên hệ</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Thông Tin Liên Hệ</h2>
                <p>Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="/style/img/phone_mobile.png" alt="Điện thoại" />
                </div>
                <div className="contact-content">
                  <h3>Điện Thoại</h3>
                  <p><a href="tel:0967098118">0967.098.118</a></p>
                  <p><a href="tel:0962098118">0962.098.118</a></p>
                  <p className="note">Hỗ trợ 24/7</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="/style/img/email.png" alt="Email" />
                </div>
                <div className="contact-content">
                  <h3>Email</h3>
                  <p><a href="mailto:thietbinhatphat@gmail.com">thietbinhatphat@gmail.com</a></p>
                  <p><a href="mailto:info@thietbinhatphat.com">info@thietbinhatphat.com</a></p>
                  <p className="note">Phản hồi trong 24h</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="/style/img/map.png" alt="Địa chỉ" />
                </div>
                <div className="contact-content">
                  <h3>Địa Chỉ</h3>
                  <p>Số 18 - Đường Bãi Cát</p>
                  <p>Lĩnh Nam - Hoàng Mai - Hà Nội</p>
                  <p className="note">Mở cửa: 8:00 - 17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-form">
                <h2>Gửi Yêu Cầu Tư Vấn</h2>
                <p>Điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
                
                <form className="contact-form-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Họ và tên *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="form-control" 
                          required 
                          placeholder="Nhập họ và tên của bạn"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Số điện thoại *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          className="form-control" 
                          required 
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="form-control" 
                          placeholder="Nhập địa chỉ email"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="company">Công ty</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="form-control" 
                          placeholder="Tên công ty (nếu có)"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Dịch vụ quan tâm</label>
                    <select id="service" name="service" className="form-control">
                      <option value="">Chọn dịch vụ</option>
                      <option value="mua-xe-nang-nguoi">Mua xe nâng người</option>
                      <option value="cho-thue-xe-nang-nguoi">Cho thuê xe nâng người</option>
                      <option value="sua-chua-bao-duong">Sửa chữa & bảo dưỡng</option>
                      <option value="tu-van-khac">Tư vấn khác</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Nội dung yêu cầu *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control" 
                      rows={5} 
                      required 
                      placeholder="Mô tả chi tiết yêu cầu của bạn..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Gửi Yêu Cầu
                    </button>
                    <p className="form-note">
                      * Các trường bắt buộc. Chúng tôi cam kết bảo mật thông tin của bạn.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-sidebar">
                <div className="contact-widget">
                  <h3>Liên Hệ Trực Tiếp</h3>
                  <div className="quick-contact">
                    <div className="quick-contact-item">
                      <strong>Hotline Bán Hàng:</strong>
                      <p><a href="tel:0967098118">0967.098.118</a></p>
                    </div>
                    <div className="quick-contact-item">
                      <strong>Hotline Kỹ Thuật:</strong>
                      <p><a href="tel:0962098118">0962.098.118</a></p>
                    </div>
                    <div className="quick-contact-item">
                      <strong>Zalo:</strong>
                      <p><a href="https://zalo.me/0967098118">0967.098.118</a></p>
                    </div>
                  </div>
                </div>

                <div className="contact-widget">
                  <h3>Giờ Làm Việc</h3>
                  <div className="working-hours">
                    <div className="working-hour-item">
                      <strong>Thứ 2 - Thứ 6:</strong>
                      <span>8:00 - 17:30</span>
                    </div>
                    <div className="working-hour-item">
                      <strong>Thứ 7:</strong>
                      <span>8:00 - 12:00</span>
                    </div>
                    <div className="working-hour-item">
                      <strong>Chủ nhật:</strong>
                      <span>Nghỉ</span>
                    </div>
                    <p className="note">Hỗ trợ khẩn cấp 24/7</p>
                  </div>
                </div>

                <div className="contact-widget">
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

      <section className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2>Bản Đồ Vị Trí</h2>
                <p>Địa chỉ: Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0969470203!2d105.78423061533!3d20.9303025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbbd%3A0x3c5c8aa5d1234567!2zSOG6oW5nIE3hu5l0LCBMw6xuaCBOYW0sIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ vị trí Thiết Bị Nhất Phát"
                ></iframe>
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
                <h2>Cần Hỗ Trợ Ngay?</h2>
                <p>Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn 24/7</p>
                <div className="cta-buttons">
                  <a href="tel:0967098118" className="btn btn-primary btn-lg">
                    <img src="/style/img/phone_mobile.png" alt="Phone" />
                    Gọi Ngay: 0967.098.118
                  </a>
                  <a href="https://zalo.me/0967098118" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                    Chat Zalo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

