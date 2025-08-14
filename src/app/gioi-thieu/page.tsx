import React from 'react';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="Giới Thiệu - Công Ty TNHH Bảo Khang An"
      description="Công Ty TNHH Bảo Khang An - Đơn vị hàng đầu cung cấp xe nâng người Genie chính hãng tại Việt Nam. Với nhiều năm kinh nghiệm trong lĩnh vực thiết bị nâng hạ."
      keywords="giới thiệu công ty, thiết bị Bảo Khang An, xe nâng người genie, lịch sử công ty"
      backgroundUrl="/images/banner/gioi-thieu.jpg"
    >
      <div className="container">
      <div className="chitiettin">
        <div className="title1">
          <h1>Giới thiệu</h1>
          <span></span>
        </div>

        <p className="extract">Công ty TNHH Bảo Khang An</p>
        <p className="date">15:43 16/03/2018</p>

        <div className="chitiet1">
          <p>
            &nbsp;Là đơn vị chuyên cung cấp dịch vụ cho thuê xe nâng người
            chuyên dụng phục vụ thi công xây dựng, lắp đặt công nghiệp, bảo trì hệ thống và các công
            việc trên cao khác.
          </p>
          <p>
            Với trụ sở chính tại Khu công nghiệp Liên Hà Thái, tỉnh Hưng Yên, và văn phòng điều hành tại
            TP. Thái Bình, công ty luôn sẵn sàng đáp ứng nhanh chóng và hiệu quả cho mọi nhu cầu thuê
            xe nâng người tại khu vực miền Bắc và trên toàn quốc.
          </p>
          <p>
            Chúng tôi sở hữu đội xe nâng người hiện đại, đầy đủ các dòng boom lift, scissor lift, với chiều
            cao làm việc từ 8m đến 45m. Cùng với đó là đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào
            tạo bài bản, sẵn sàng hỗ trợ khách hàng trong suốt quá trình sử dụng thiết bị.
          </p>
          <p>
            Bảo Khang An cam kết cung cấp giải pháp tối ưu – an toàn – tiết kiệm, góp phần nâng cao
            hiệu quả thi công cho mọi công trình.
          </p>
          <p>&nbsp;</p>
          <p>
            <p style={{ fontFamily: "Arial", fontSize: "14.4px" }}>
                CÔNG TY TNHH BẢO KHANG AN
            </p>
          </p>
          <p>
            <p style={{ fontFamily: "Arial", fontSize: "14.4px" }}>
              Địa chỉ văn phòng: Nhà số 01B, Ngõ 2, Tổ 2, Đường Phạm Huy Quang, Phường Trần Lãm, Hưng Yên
            </p>
          </p>
          <p>
            <p style={{ fontFamily: "Arial", fontSize: "14.4px" }}>
                Trụ sở chính: KCN Liên Hà Thái, xã Thái Thuỵ, tỉnh Hưng Yên
            </p>
          </p>
          <p> 
            <p style={{ fontFamily: "Arial", fontSize: "14.4px" }}>
                Điện thoại: 0356 389 883 / 0393 189 883
            </p>
          </p>
          <p>
            <p style={{ fontFamily: "Arial", fontSize: "14.4px" }}>
                Email: baokhanganco.ltd8386@gmail.com
            </p>
          </p>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

