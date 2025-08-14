"use client";
import React, { useState } from "react";

interface ProductTabsProps {
    detailHtml: string;
    specsHtml: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ detailHtml, specsHtml }) => {
    const [activeTab, setActiveTab] = useState<"detail" | "specs">("detail");

    return (
        <div className="cactab col-md-12 col-sm-12 col-xs-12">
            <ul id="tabsp">
                <li className="li2">
                    <h2
                        id="chitietlink"
                        className={activeTab === "detail" ? "show1" : "hide1"}
                        onClick={() => setActiveTab("detail")}
                    >
                        Chi tiết sản phẩm
                    </h2>
                </li>
                <li className="li2">
                    <h2
                        id="chatlieulink"
                        className={activeTab === "specs" ? "show1" : "hide1"}
                        onClick={() => setActiveTab("specs")}
                    >
                        Thông số kỹ thuật
                    </h2>
                </li>
            </ul>

            <div
                id="chitiettab"
                className={activeTab === "detail" ? "show2" : "hide2"}
                dangerouslySetInnerHTML={{__html: detailHtml}}
            />
            <div
                id="chatlieutab"
                className={activeTab === "detail" ? "hide2" : "show2"}
                dangerouslySetInnerHTML={{__html: specsHtml}}
            />
        </div>
    );
};

export default ProductTabs;
