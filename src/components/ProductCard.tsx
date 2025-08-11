// ProductCard.jsx
import React from "react";

const ProductCard = ({ link, title, image, alt, price, icon }) => {
  return (
      <div className="col-md-3 col-sm-6 col-xs-6">
        <div className="child-sp">
          <div className="img">
            <a href={link} title={title}>
              <img src={image} alt={alt} />
              {icon && <img className="icon" src={icon} alt="sale off" title="sale off" />}
            </a>
          </div>
          <div className="brief">
            <a href={link} title={title}>
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
