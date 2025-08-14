import React from "react";
// import Script from "next/script";
// import Head from "next/head";

interface ProductImageZoomProps {
    mainImage: string;
    thumbnails: string[];
    title: string;
}

const ProductImageZoom: React.FC<ProductImageZoomProps> = ({ mainImage, thumbnails , title}) => {
    return (
        <div className="preview col-md-6 col-sm-6 col-xs-12">
            {/*Todo: Cho css vaf js magiczoom vao day*/}
            {/*<Head>*/}
            {/*    <link*/}
            {/*        href="https://thietbinhatphat.com/magiczoomplus/magiczoomplus.css"*/}
            {/*        rel="stylesheet"*/}
            {/*        type="text/css"*/}
            {/*        media="screen"*/}
            {/*    />*/}
            {/*</Head>*/}
            {/*<Script src="https://thietbinhatphat.com/magiczoomplus/magiczoomplus.js" strategy="lazyOnload" />*/}
            <div className="app-figure" id="zoom-fig">
                <a id="Zoom-1" className="MagicZoom" href={mainImage}>
                    <img src={`${mainImage}?scale.height=400`} alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
                </a>
                <div className="selectors">
                    {thumbnails.map((thumb, i) => (
                        <a
                            key={i}
                            data-zoom-id="Zoom-1"
                            className={`zoom-${i + 1} mz-thumb${i === 0 ? "-selected" : ""} mz-thumb`}
                            href={thumb}
                            data-image={`${thumb}?scale.height=400`}
                        >
                            <img srcSet={`${thumb}?scale.width=112 2x`} src={`${thumb}?scale.width=56`}  alt={title}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImageZoom;
