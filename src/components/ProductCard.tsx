// ProductCard.jsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ProductCard = ({ slug, title, image, alt, price, icon }) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
      <div className="col-md-3 col-sm-6 col-xs-6">
        <div className="child-sp">
          <div className="img">
            <a href={pathname + "/" + slug} title={title}>
              <img src={image} alt={alt} />
              {icon && <img className="icon" src={icon} alt="sale off" title="sale off" />}
            </a>
          </div>
          <div className="brief">
            <a href={pathname + "/" + slug} title={title}>
              <h3>{title}</h3>
            </a>
            <p className="giagoc">
              <font>Giá:</font> {price}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
