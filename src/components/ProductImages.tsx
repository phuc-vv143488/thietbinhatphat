import React from "react";

const projects = [
    {
        href: "-cho-thue-xe-nang-nguoi-tai-cong-ty-pronics-kcn-dong-van-3_163.html",
        title: "Cho thuê xe nâng người tại công ty Pronics kcn Đồng Văn 3",
        imgSrc: "https://thietbinhatphat.com/public/images/pronics.jpg",
    },
    {
        href: "-cho-thue-xe-nang-nguoi-tai-truong-quoc-te-singapore_153.html",
        title: "Cho thuê xe nâng người tại trường quốc tế Singapore",
        imgSrc: "https://thietbinhatphat.com/public/images/singapo-5.jpg",
    },
    {
        href: "cho-thue-xe-nang-nguoi-tai-kcn-yen-phong-mo-rong_152.html",
        title: "Cho thuê xe nâng người tại KCN Yên Phong mở rộng",
        imgSrc: "https://thietbinhatphat.com/public/images/xe_na__ng_genie_z45_25_dc3.jpg",
    },
    {
        href: "cho-thue-xe-nang-nguoi-tai-svd-my-dinh_151.html",
        title: "Cho thuê xe nâng người tại SVĐ Mỹ Đình",
        imgSrc: "https://thietbinhatphat.com/public/images/thang-nang-AWP-7.jpg",
    },
];

const ProjectImages = () => (
    <div className="hinh-anh">
        <div className="container">
            <div className="row">
                <div className="title_home title_home_mobile">
                    <a href="hinh-anh---du-an.html" title="Hình ảnh - Dự án">
                        <img src="style/img/min-logo.png" alt="Hình ảnh - Dự án" title="Hình ảnh - Dự án" />
                        <h3>Hình ảnh - Dự án</h3>
                        <p>Xem tất cả &gt;</p>
                    </a>
                </div>

                <div className="box2">
                    {projects.map(({ href, title, imgSrc }, index) => (
                        <div key={index} className="col-md-3 col-sm-3 col-xs-6">
                            <div className="hinh-anh-du-an">
                                <a href={href} title={title}>
                                    <img src={imgSrc} alt={title} />
                                </a>
                                <a href={href} title={title}>
                                    <h3>{title}</h3>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProjectImages;
