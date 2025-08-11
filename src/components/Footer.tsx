import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>CÔNG TY NHẤT PHÁT</h3>
              <div className="footer-content">
                <p><strong>Địa chỉ:</strong> Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</p>
                <p><strong>Điện thoại:</strong> 0967.098.118 - 0962.098.118</p>
                <p><strong>Email:</strong> thietbinhatphat@gmail.com</p>
                <p><strong>Website:</strong> thietbinhatphat.com</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>SẢN PHẨM</h3>
              <ul className="footer-links">
                <li><Link href="/products/xe-nang-nguoi-tu-hanh">Xe Nâng Người Tự Hành</Link></li>
                <li><Link href="/products/xe-nang-nguoi-gs">Xe nâng người GS</Link></li>
                <li><Link href="/products/xe-nang-s-boom">Xe Nâng S boom</Link></li>
                <li><Link href="/products/xe-nang-z-boom">Xe Nâng Z Boom</Link></li>
                <li><Link href="/products/xe-nang-nguoi-jlg">Xe Nâng Người JLG</Link></li>
                <li><Link href="/products/thang-nang-awp">Thang nâng AWP</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>DỊCH VỤ</h3>
              <ul className="footer-links">
                <li><Link href="/services/cho-thue-xe-nang-nguoi">Cho thuê xe nâng người</Link></li>
                <li><Link href="/services/sua-chua-xe-nang-nguoi">Sửa Chữa Xe Nâng Người</Link></li>
                <li><Link href="/services/bao-duong-xe-nang-nguoi">Bảo dưỡng xe nâng người</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>LIÊN KẾT</h3>
              <ul className="footer-links">
                <li><Link href="/about">Giới thiệu</Link></li>
                <li><Link href="/news">Tin tức</Link></li>
                <li><Link href="/contact">Liên hệ</Link></li>
                <li><Link href="/sitemap.xml">Sitemap</Link></li>
              </ul>
              
              <div className="social-links">
                <h4>THEO DÕI CHÚNG TÔI</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com/nhat.phat.9674" target="_blank" rel="noopener noreferrer">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png" alt="Facebook" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png" alt="Twitter" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>&copy; 2024 Công ty Thiết Bị Nhất Phát. Tất cả quyền được bảo lưu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="btn-top" style={{display: 'none'}}>
        <img src="/style/img/btn_top.png" alt="Back to top" />
      </div>
    </footer>
  );
};

export default Footer;

