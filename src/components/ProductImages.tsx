import React from "react";
import {projects} from "@/data/productData";

const ProjectImages = () => (
    <div className="hinh-anh">
        <div className="container">
            <div className="row">
                <div className="title_home title_home_mobile">
                    <a href="/hinh-anh-du-an" title="Hình ảnh - Dự án">
                        <img src="style/img/min-logo.png" alt="Hình ảnh - Dự án" title="Hình ảnh - Dự án" />
                        <h3>Hình ảnh - Dự án</h3>
                        <p>Xem tất cả &gt;</p>
                    </a>
                </div>

                <div className="box2">
                    {projects.slice(0, 4).map(({ slug, title, image }, index) => (
                        <div key={index} className="col-md-3 col-sm-3 col-xs-6">
                            <div className="hinh-anh-du-an">
                                <a href={"/hinh-anh-du-an/" + slug} title={title}>
                                    <img src={image} alt={title} />
                                </a>
                                <a href={"/hinh-anh-du-an/" + slug} title={title}>
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
