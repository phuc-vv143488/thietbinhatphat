// CategoryDetail.jsx
import React from "react";

const CategoryDetail = ({ content }) => {
    return (
        <div className="detail_cate" dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default CategoryDetail;
