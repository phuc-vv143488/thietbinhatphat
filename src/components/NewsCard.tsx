import React from "react";
import { newsData } from "./newsData";

export const newsData = [
  {
    link: "chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom-cua-ban_175.html",
    title: "Chọn lốp xe phù hợp cho xe nâng người Boom của bạn",
    img: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-nhat-phat.jpg",
    date: "22:10:07 PM 07/08/2020",
    desc: "Lốp xe sẽ ảnh hưởng đến độ tin cậy của xe nâng người Boom, tổng chi phí sở hữu và ảnh hưởng đến hiệu suất công việc của khách hàng",
  },
  {
    link: "thong-so-tai-trong-xe-nang-nguoi-tu-hanh-z45-25_174.html",
    title: "Thông số tải trọng xe nâng người tự hành Z45/25",
    img: "https://thietbinhatphat.com/public/images/ef734fac1bd3e18db8c2.jpg",
    date: "15:52:32 PM 06/08/2020",
    desc: "Trọng lượng được liệt kê trên các tấm nối tiếp của máy được dựa trên các cấu hình máy cụ thể",
  },
  {
    link: "bao-tri-xe-nang-nguoi-thuong-xuyen_173.html",
    title: "Bảo trì xe nâng người thường xuyên",
    img: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-nhat-phat.jpg",
    date: "14:11:53 PM 06/08/2020",
    desc: "khi xe nâng người của bạn cũ đi, thực hiện bảo trì theo lịch trình và bảo trì phòng ngừa có thể giảm thiểu rủi ro sửa chữa và hỏng hóc không lường trước",
  },
  {
    link: "luu-y-khi-thue-xe-nang-nguoi-tu-hanh_172.html",
    title: "Lưu ý khi thuê xê nâng người tự hành",
    img: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-nhat-phat.jpg",
    date: "15:42:35 PM 05/08/2020",
    desc: "Trong thị trường cạnh tranh ngày nay, tại Nhất Phát, chúng tôi biết rằng điều quan trọng hơn bao giờ hết đối với bạn là lấy được sự tin tưởng của khách hàng",
  },
  {
    link: "thue-xe-nang-nguoi-awp-tai-nhat-phat_171.html",
    title: "Thuê xe nâng người AWP tại Nhất Phát",
    img: "https://thietbinhatphat.com/public/images/thang-nang-AWP-7(2).jpg",
    date: "15:36:08 PM 05/08/2020",
    desc: "Các nền tảng làm việc trên không hay AWP, như chúng ta được biết đến nhiều hơn là các mô hình di động, kinh tế nâng một hoặc hai công nhân.",
  },
  {
    link: "ung-dung-cua-xe-nang-nguoi-tren-cao--phan-2-_170.html",
    title: "Ứng dụng của xe nâng ngươi trên cao (phần 2)",
    img: "https://thietbinhatphat.com/public/images/singapo-2(1).jpg",
    date: "17:11:19 PM 04/08/2020",
    desc: "Ngoài các ứng dụng trong công nghiệp và xây dựng, Xe nâng người còn được sử dụng trong các trung tâm thương mại, các cơ sở hành chính hay các nhà hát, khu vực thể thao",
  },
  {
    link: "ung-dung-cua-xe-nang-nguoi-tren-cao--phan-1-_169.html",
    title: "Ứng dụng của xe nâng ngươi trên cao (phần 1)",
    img: "https://thietbinhatphat.com/public/images/xe-nang-nguoi-nhat-phat.jpg",
    date: "16:26:27 PM 04/08/2020",
    desc: "Nền tảng làm việc nâng cao di động (xe nâng người) hay còn gọi là xe nâng người tự hành được sử dụng trong nhiều môi trường làm việc khác nhau.",
  },
  {
    link: "cach-van-hanh-xe-nang-nguoi-boom-lifts-an-toan_168.html",
    title: "Cách vận hành xe nâng người Boom Lifts an toàn",
    img: "https://thietbinhatphat.com/public/images/ef734fac1bd3e18db8c2.jpg",
    date: "19:26:56 PM 03/08/2020",
    desc: "Cả hai loại xe nâng người boom thường có ổ đĩa bốn bánh, và một trong hai loại sẽ hoạt động tốt cho nhiều công việc khác nhau.",
  },
];

export default function NewsList({newsData = newsData}) {
  return (
      <div className="list_mutinews">
        <ul>
          {newsData.map((item, index) => (
              <li key={index}>
                <a href={item.link} title={item.title}>
                  <img src={item.img} alt={item.title} title={item.title} />
                </a>
                <a href={item.link} title={item.title}>
                  <h3>{item.title}</h3>
                </a>
                <span>({item.date})</span>
                <p>{item.desc}</p>
              </li>
          ))}
        </ul>
      </div>
  );
}
