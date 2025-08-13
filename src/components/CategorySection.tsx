import React from "react";


interface Product {
    link: string;
    title: string;
    image: string;
    price?: string;
    icon?: string; // icon nhỏ (VD: sale-off)
}

interface CategorySectionProps {
    categoryLink: string;
    categoryTitle: string;
    categoryImage?: string;
    products: Product[];
}

const ProductCard: React.FC<Product> = ({ link, title, image, price = "Liên hệ", icon }) => {
    return (
        <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="row">
                <div className="child-spsliderhone">
                    <div className="img">
                        <a href={link} title={title}>
                            <img src={image} alt={title} className="child-spsliderhoneimg" />
                            {icon && <img className="icon" src={icon} alt="icon" title="icon" />}
                        </a>
                    </div>
                    <div className="brief">
                        <a href={link} title={title}>
                            <h3>{title}</h3>
                        </a>
                        <p className="giagoc">
                            <span style={{ color: "#303030", fontWeight: "normal" }}>Giá:</span> {price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CategorySection: React.FC<CategorySectionProps> = ({
                                                             categoryLink,
                                                             categoryTitle,
                                                             categoryImage = "/style/img/min-logo.png",
                                                             products,
                                                         }) => {
    return (
        <>
            <div className="col-md-12">
                <div className="title_home">
                    <a href={categoryLink} title={categoryTitle}>
                        <img src={categoryImage} alt={categoryTitle} title={categoryTitle}/>
                        <h3>{categoryTitle}</h3>
                        <p>Xem tất cả &gt;</p>
                    </a>
                </div>
            </div>
            <div className="clear"></div>

            <div className="list-sp col-md-12 col-sm-12 col-xs-12">
                <div className="list-homechannhe">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategorySection;
