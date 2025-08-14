// RightSide.jsx
import React from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import CategoryDetail from "./CategoryDetail";


const RightSide = ({title, detailContent, children}) => {
    return (
        <>
            <div className="right_product">
                {title && <div className="title_news_home1">
                    <a href="#" title={title}>
                        <h3 style={{marginTop: 0}}>
                            {title}
                        </h3>
                    </a>
                    <span/>
                    <p/>
                </div>}
                { children }
                {/*{pages && <Pagination pages={pages}/>}*/}
                {/*{detailContent && <CategoryDetail content={detailContent}/>}*/}
            </div>
        </>
    );
};

export default RightSide;
