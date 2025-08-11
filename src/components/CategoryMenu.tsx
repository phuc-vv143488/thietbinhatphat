import React from 'react';

const CategoryMenu = ({ menu, categories }) => {
    return (
        <div className="danh_muc">
            <a href={menu.href} title={menu.title}>
                <h2>{menu.title}</h2>
            </a>
            {categories.map((cat, idx) => (
                <div className="menuto-home" key={idx}>
                    <a href={cat.href} title={cat.title}>
                        <h3>{cat.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CategoryMenu;
