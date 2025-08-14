import React from "react";

interface ProductInfoProps {
    title: string;
    priceLabel: string;
    description: string;
    phone: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, priceLabel, description, phone }) => {
    return (
        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="info-sanpham">
                <h1>{title}</h1>
                <p className="giaban" style={{ width: "100%" }}>
                    <span style={{color: "#303030"}}>Giá cho:</span> {priceLabel}
                </p>

                <form id="dathang123" className="dathang123" name="dathang123" method="POST" action="">
                    <div className="ty-mota">
                        <label>Mô tả:</label>
                        <div className="mota">
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className="phone-sp">
                        <label style={{ color: "#303030" }}>Hỗ trợ trực tuyến</label>
                        <p>{phone}</p>
                    </div>

                    <div>
                        <input type="submit" name="submit" className="addcart dathang" id="icon2" value="Đặt hàng" />
                    </div>
                </form>

                <div className="share_mxh" style={{ width: "100%", float: "left", overflow: "hidden" }}>
                    <div style={{ textAlign: "left", paddingBottom: 5, marginTop: 20 }}>
                        <a href="#">
                            <img
                                src="https://www.etan.org/etan_files/lg-share-en.gif"
                                width="125"
                                height="16"
                                alt="Bookmark and Share"
                                style={{ border: 0 }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
