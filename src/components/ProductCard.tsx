import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  price?: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            className="img-responsive"
          />
        </Link>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">
          <Link href={`/products/${product.slug}`}>
            {product.title}
          </Link>
        </h3>
        
        <p className="product-description">
          {product.description}
        </p>
        
        {product.price && (
          <div className="product-price">
            <span className="price">{product.price}</span>
          </div>
        )}
        
        <div className="product-actions">
          <Link href={`/products/${product.slug}`} className="btn btn-primary">
            Xem chi tiết
          </Link>
          <a href="tel:0967098118" className="btn btn-secondary">
            Liên hệ
          </a>
        </div>
        
        <div className="product-category">
          <span className="category-tag">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

