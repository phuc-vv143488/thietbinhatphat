// Breadcrumb.jsx
import React from 'react';
import Link from 'next/link';

const Breadcrumb = () => {
    return (
        <div id="chuyenmuc" style={{ marginBottom: '15px' }}>
            <div className="container">
                <div className="row">
                    <Link href="/"><h2>Trang chủ</h2></Link>
                    <span>/</span>
                    <Link href="/products"><h3>Sản phẩm</h3></Link>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
