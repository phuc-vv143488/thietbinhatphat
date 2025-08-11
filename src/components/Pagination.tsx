// Pagination.jsx
import React from "react";

const Pagination = ({ pages }) => {
    return (
        <div className="page1">
            <ul>
                {pages.map((page, index) => (
                    <li key={index}>
                        <a
                            href={page.link}
                            className={page.active ? "current" : ""}
                        >
                            {page.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
