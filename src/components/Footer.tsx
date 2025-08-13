import React from "react";

const aboutLinks = [
  { href: "http://garlic.com.vn/vn/ho-tro-khach-hang_bao-mat-thong-tin.html", title: "Bảo mật thông tin" },
  { href: "http://garlic.com.vn/vn/ho-tro-khach-hang_chinh-sach-bao-hanh.html", title: "Chỉnh sách bảo hành" },
  { href: "", title: "Liên hệ hợp tác" },
  { href: "", title: "Đối tác truyền thống" },
];

const productLinks = [
  { href: "", title: "Xe nâng Z Boom" },
  { href: "", title: "Xe nâng S boom" },
  { href: "", title: "Thang nâng AWP" },
  { href: "", title: "Xe nâng GS" },
  { href: "#", title: "Máy công trình" },
];

const policyLinks = [
  { href: "", title: "Chính Sách Và Qui Định Chung" },
  { href: "", title: "Chính sách bảo mật thông tin cá nhân" },
  { href: "", title: "Chính sách đổi trả và bảo hành" },
  { href: "", title: "Chính sách vận chuyển" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/nhat.phat.9674",
    title: "Facebook",
    imgSrc: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png",
    alt: "Facebook",
  },
  {
    href: "#",
    title: "Tiwtter",
    imgSrc: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png",
    alt: "Tiwtter",
  },
  {
    href: "#",
    title: "In",
    imgSrc: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png",
    alt: "In",
  },
  {
    href: "#",
    title: "Print",
    imgSrc: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/pr.png",
    alt: "Print",
  },
];

const Footer: React.FC = () => {
  return (
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <p className="title2">Thông tin liên hệ</p>
              <p className="line2"></p>
              <div className="clear"></div>
              <div className="diachi">
                <h4 style={{ fontFamily: "Arial", fontSize: 14.4, marginBottom: "10px" }}>
                  CÔNG TY TNHH THIẾT BỊ CÔNG TRÌNH NHẤT PHÁT
                </h4>
                <p style={{ fontFamily: "Arial", fontSize: 14.4, marginBottom: "10px" }}>
                  Địa chỉ: Số 18 - Đường Bãi Cát - Phường Lĩnh Nam - Quận Hoàng Mai - Hà Nội
                </p>
                <p style={{ fontFamily: "Arial", fontSize: 14.4, marginBottom: "10px" }}>Hotline: 0967 098 118</p>
                <p style={{ fontFamily: "Arial", fontSize: 14.4, marginBottom: "10px" }}>
                  Tel: (024)66 577 177 - Fax: (024)66 577 177
                </p>
                <p style={{ fontFamily: "Arial", fontSize: 14.4, marginBottom: "10px" }}>
                  Email: thietbinhatphat@gmail.com
                </p>
              </div>
            </div>

            {/* About Us */}
            <div className="hotro col-md-2 col-sm-6 col-xs-12">
              <p className="title2">Về chúng tôi</p>
              <p className="line2"></p>
              <div className="text_link">
                <ul>
                  {aboutLinks.map(({ href, title }, idx) => (
                      <li key={idx}>
                        <a href={href} title={title}>
                          {title}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products */}
            <div className="bst col-md-3 col-sm-6 col-xs-12">
              <p className="title2">Sản phẩm cung cấp</p>
              <p className="line2"></p>
              <div className="text_link">
                <ul>
                  {productLinks.map(({ href, title }, idx) => (
                      <li key={idx}>
                        <a href={href} title={title}>
                          {title}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policies */}
            <div className="lhht col-md-3 col-sm-6 col-xs-12">
              <p className="title2">Chính sách ưu đãi</p>
              <p className="line2"></p>
              <div className="text_link">
                <ul>
                  {policyLinks.map(({ href, title }, idx) => (
                      <li key={idx}>
                        <a href={href} title={title}>
                          {title}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="line3"></div>

          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <ul className="share">
                {socialLinks.map(({ href, title, imgSrc, alt }, idx) => (
                    <li key={idx}>
                      <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
                        <img src={imgSrc} alt={alt} title={title} />
                      </a>
                    </li>
                ))}
              </ul>
              <p className="copyright">Copyright ©2018 THIETBINHATPHAT. All rights reserved</p>
            </div>
          </div>

          <div className="right_bottom col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <a href="#" title="Phương thức thanh toán">
                <img
                    src="https://thietbinhatphat.com/public/media/media/files/thanh-toan/paypal.jpg"
                    alt="Phương thức thanh toán"
                    title="Phương thức thanh toán"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
