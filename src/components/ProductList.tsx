// ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <div className="list-sp2">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
