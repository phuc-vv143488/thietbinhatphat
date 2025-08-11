const contactInfo = [
  "CÔNG TY TNHH THIẾT BỊ CÔNG TRÌNH NHẤT PHÁT",
  "",
  "Địa chỉ: Số 18 - Đường Bãi Cát - Phường Lĩnh Nam - Quận Hoàng Mai - Hà Nội",
  "Hotline: 0967 098 118",
  "Tel: (024)66 577 177 - Fax: (024)66 577 177",
  "Email: thietbinhatphat@gmail.com",
];

const aboutLinks = [
  {
    text: "Bảo mật thông tin",
    href: "http://garlic.com.vn/vn/ho-tro-khach-hang_bao-mat-thong-tin.html",
  },
  {
    text: "Chỉnh sách bảo hành",
    href: "http://garlic.com.vn/vn/ho-tro-khach-hang_chinh-sach-bao-hanh.html",
  },
  { text: "Liên hệ hợp tác", href: "#" },
  { text: "Đối tác truyền thống", href: "#" },
];

const productLinks = [
  { text: "Xe nâng Z Boom", href: "#" },
  { text: "Xe nâng S boom", href: "#" },
  { text: "Thang nâng AWP", href: "#" },
  { text: "Xe nâng GS", href: "#" },
  { text: "Máy công trình", href: "#" },
];

const policyLinks = [
  { text: "Chính Sách Và Qui Định Chung", href: "#" },
  { text: "Chính sách bảo mật thông tin cá nhân", href: "#" },
  { text: "Chính sách đổi trả và bảo hành", href: "#" },
  { text: "Chính sách vận chuyển", href: "#" },
];

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/nhat.phat.9674",
    img: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png",
  },
  {
    title: "Twitter",
    href: "#",
    img: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png",
  },
  {
    title: "In",
    href: "#",
    img: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png",
  },
  {
    title: "Print",
    href: "#",
    img: "https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/pr.png",
  },
];

const paymentMethod = {
  title: "Phương thức thanh toán",
  href: "#",
  img: "https://thietbinhatphat.com/public/media/media/files/thanh-toan/paypal.jpg",
};

export default function Footer() {
  return (
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Thông tin liên hệ */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <p className="title2">Thông tin liên hệ</p>
              <p className="line2"/>
              <div className="clear"/>
              <div className="diachi">
                <h4>
                  {contactInfo.map((line, i) => (
                      <p key={i} style={{ margin: "0 0 10px" }}>
                        {line}
                      </p>
                  ))}
                </h4>
              </div>
            </div>

            {/* Về chúng tôi */}
            <FooterColumn title="Về chúng tôi" links={aboutLinks} />

            {/* Sản phẩm cung cấp */}
            <FooterColumn title="Sản phẩm cung cấp" links={productLinks} />

            {/* Chính sách ưu đãi */}
            <FooterColumn title="Chính sách ưu đãi" links={policyLinks} />
          </div>

          {/* Line */}
          <div className="line3"/>

          {/* Mạng xã hội */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <ul className="share">
                {socialLinks.map((item, i) => (
                    <li key={i}>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href}
                          title={item.title}
                      >
                        <img src={item.img} alt={item.title} title={item.title} />
                      </a>
                    </li>
                ))}
              </ul>
              <p className="copyright">
                Copyright ©2018 THIETBINHATPHAT. All rights reserved
              </p>
            </div>
          </div>

          {/* Phương thức thanh toán */}
          <div className="right_bottom col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <a href={paymentMethod.href} title={paymentMethod.title}>
                <img
                    src={paymentMethod.img}
                    alt={paymentMethod.title}
                    title={paymentMethod.title}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

/* Component nhỏ cho các cột link */
function FooterColumn({ title, links }) {
  return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <p className="title2">{title}</p>
        <p className="line2"/>
        <div className="text_link">
          <ul>
            {links.map((item, i) => (
                <li key={i}>
                  <a href={item.href} title={item.text}>
                    {item.text}
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
