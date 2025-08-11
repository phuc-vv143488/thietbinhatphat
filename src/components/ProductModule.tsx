import React from "react";
import Slider from "react-slick";

const ProductItem = ({ href, title, imgSrc, price, iconSrc }) => (
    <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="row">
            <div className="child-spsliderhone">
                <div className="img">
                    <a href={href} title={title}>
                        <img src={imgSrc} alt={title} className="child-spsliderhoneimg" />
                        {iconSrc && (
                            <img className="icon" src={iconSrc} alt="sale off" title="sale off" />
                        )}
                    </a>
                </div>
                <div className="brief">
                    <a href={href} title={title}>
                        <h3>{title}</h3>
                    </a>
                    <p className="giagoc">
                        <span style={{ color: "#303030", fontWeight: "normal" }}>Giá:</span>{" "}
                        {price}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

// Custom Next Arrow component
const NextArrow = ({ onClick }) => (
    <button
        className="next"
        onClick={onClick}
        style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "35%",
            right: 0,
            zIndex: 9,
        }}
    >
        <img title="phải" alt="phải" src="style/img/next1.png" />
    </button>
);

// Custom Prev Arrow component
const PrevArrow = ({ onClick }) => (
    <button
        className="prev"
        onClick={onClick}
        style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "35%",
            left: 0,
            zIndex: 9,
        }}
    >
        <img title="trái" alt="trái" src="style/img/prev1.png" />
    </button>
);

const ProductModule = ({ title, link, products, isCarousel = false }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <div className="col-md-12">
                <div className="title_home">
                    <a href={link} title={title}>
                        <img src="style/img/min-logo.png" alt={title} title={title} />
                        <h3>{title}</h3>
                        <p>Xem tất cả &gt;</p>
                    </a>
                </div>
            </div>

            <div className="clear"></div>

            <div className="list-sp col-md-12 col-sm-12 col-xs-12" style={{ position: "relative" }}>
                {isCarousel ? (
                    <Slider {...settings}>
                        {products.map((p, i) => (
                            <div key={i}>
                                <ProductItem {...p} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="list-homechannhe">
                        {products.map((p, i) => (
                            <ProductItem key={i} {...p} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductModule;
