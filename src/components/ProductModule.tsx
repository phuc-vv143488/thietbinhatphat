"use client"; // cần vì Swiper chạy trên client

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Product Item
const ProductItem = ({ href, title, imgSrc, price, iconSrc }) => (
    <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="row">
            <div className="child-spsliderhone">
                <div className="img">
                    <a href={href} title={title}>
                        <img
                            src={imgSrc}
                            alt={title}
                            className="child-spsliderhoneimg"
                        />
                        {iconSrc && (
                            <img
                                className="icon"
                                src={iconSrc}
                                alt="sale off"
                                title="sale off"
                            />
                        )}
                    </a>
                </div>
                <div className="brief">
                    <a href={href} title={title}>
                        <h3>{title}</h3>
                    </a>
                    <p className="giagoc">
            <span style={{ color: "#303030", fontWeight: "normal" }}>
              Giá:
            </span>{" "}
                        {price}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const ProductModule = ({ title, link, products, isCarousel = false }) => {
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

            <div
                className="list-sp col-md-12 col-sm-12 col-xs-12"
                style={{ position: "relative" }}
            >
                {isCarousel ? (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".next",
                            prevEl: ".prev",
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={1700}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                        }}
                    >
                        {products.map((p, i) => (
                            <SwiperSlide key={i}>
                                <ProductItem {...p} />
                            </SwiperSlide>
                        ))}

                        {/* Custom arrows */}
                        <button className="prev" style={arrowStyle.left}>
                            <img
                                title="trái"
                                alt="trái"
                                src="style/img/prev1.png"
                            />
                        </button>
                        <button className="next" style={arrowStyle.right}>
                            <img
                                title="phải"
                                alt="phải"
                                src="style/img/next1.png"
                            />
                        </button>
                    </Swiper>
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

const arrowStyle = {
    left: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "35%",
        left: 0,
        zIndex: 9,
    },
    right: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "35%",
        right: 0,
        zIndex: 9,
    },
};

export default ProductModule;
