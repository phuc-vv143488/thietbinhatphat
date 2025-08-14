"use client";

import React, { useState } from "react";
import {news} from "../../data/newsData";
import {productDatas} from "../../data/productData";
import MainLayout from "../../components/MainLayout";
import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import Layout from "../../components/Layout";
import NewsList from "../../components/NewsCard";
import {menuData} from "../../data/menuData";


const ITEMS_PER_PAGE = 8;

const RightNews: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  // Lấy danh sách news của trang hiện tại
  const currentItems = news.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
    return (
        <Layout
            title="Sản Phẩm Xe Nâng Người Genie - Thiết Bị Bảo Khang An"
            description="Danh sách đầy đủ các sản phẩm xe nâng người Genie: GS, S-boom, Z-boom, AWP, JLG. Chính hãng, giá tốt, chất lượng đảm bảo."
            keywords="xe nâng người genie, xe nâng người gs, xe nâng s boom, xe nâng z boom, thang nâng awp, xe nâng jlg"
            backgroundUrl="/images/banner/tin-tuc.jpg"
        >
            <MainLayout
                leftContent={<LeftSide/>}
                rightContent={<RightSide
                    title="Tin tức"
                >
                    <NewsList newsData={news}/>
                </RightSide>
                }
            />
            
        </Layout>
    );
};

export default RightNews;
