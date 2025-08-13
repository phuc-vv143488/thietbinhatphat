// RightSide.jsx
import React from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import CategoryDetail from "./CategoryDetail";


const RightSide = ({ title, products, pages, detailContent }) => {
    return (
        <>
                <div className="right_product">
                    <div className="title_news_home1">
                        <a href="#" title={title}>
                            <h3 style={{ marginTop: 0 }}>
                                {title} {!!products.length && <font>({products.length})</font>}
                            </h3>
                        </a>
                        <span/>
                        <p/>
                    </div>
                    {/*// Todo*/}
                    <ProductList products={products} />
                    <Pagination pages={pages} />
                    <CategoryDetail content={detailContent} />
                </div>
        </>
    );
};

export default RightSide;
