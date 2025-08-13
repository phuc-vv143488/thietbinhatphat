"use client";

import React, { useState } from "react";
import {newsItems} from "../../data/newsData";

const ITEMS_PER_PAGE = 10;

const RightProduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

  // Lấy danh sách news của trang hiện tại
  const currentItems = newsItems.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
      <div className="right_product">
        <div className="title_news_home1">
          <a href="#" title="Hình ảnh - Dự án">
            <h3 style={{ marginTop: 0 }}>Hình ảnh - Dự án</h3>
          </a>
          <span></span>
          <p></p>
        </div>

        <div className="list_mutinews">
          <ul>
            {currentItems.map(({ href, title, imgSrc, imgAlt, date, description }) => (
                <li key={href}>
                  <a href={href} title={title}>
                    <img src={imgSrc} alt={imgAlt} title={title} />
                  </a>
                  <a href={href} title={title}>
                    <h3>{title}</h3>
                  </a>
                  <span>({date})</span>
                  <p>{description}</p>
                </li>
            ))}
          </ul>
        </div>

        {/* Chỉ hiển thị phân trang khi > 10 items */}
        {newsItems.length > ITEMS_PER_PAGE && (
            <div className="page1">
              <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                <li>
                  <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      style={{ marginRight: 8 }}
                  >
                    Prev
                  </button>
                </li>

                {/* Hiển thị các số trang */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page} style={{ marginRight: 8 }}>
                      <button
                          onClick={() => handlePageChange(page)}
                          style={{
                            fontWeight: currentPage === page ? "bold" : "normal",
                          }}
                      >
                        {page}
                      </button>
                    </li>
                ))}

                <li>
                  <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
        )}

        <div className="detail_cate"></div>
      </div>
  );
};

export default RightProduct;
