import React from 'react';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import { Metadata } from "next";
import Article from "../../../components/Article";
import LeftSide from "../../../components/LeftSide";
import RightSide from "../../../components/RightSide";
import MainLayout from "../../../components/MainLayout";
import { menuData } from "@/data/menuData";
import {news} from "@/data/newsData";

interface Props {
  params: { submenu: string };
}

// Tạo static paths từ menuData
export function generateStaticParams() {
  const sanPhamMenu = menuData.find(m => m.href === "/hinh-anh-du-an");
  if (!sanPhamMenu?.subMenu) return [];

  return sanPhamMenu.subMenu.map(sub => ({
    submenu: sub.href.split("/").pop()!, // lấy slug cuối
  }));
}

// Tạo metadata động
interface PageProps {
  params: Promise<{ slug: string }>; // Quan trọng: params là Promise
}

function findSubItem(slug) {
  const sanPhamMenu =  menuData.find(m => m.href === "/tin-tuc");
  return sanPhamMenu?.subMenu?.find(
      sub => sub.href.split("/").pop() === slug
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Phải await ở đây
  const subItem = findSubItem(slug);

  return {
    title: subItem ? `${subItem.title} - Tin tức` : "Tin tức",
    description: subItem?.title ?? "Tin tức",
  };
}

export default async function NewsDetailPage({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Cũng phải await khi dùng
  const project = news.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }


  return (
      <Layout
          title="Dịch Vụ - Cho Thuê & Sửa Chữa Xe Nâng Người | Thiết Bị Bảo Khang An"
          description="Dịch vụ cho thuê xe nâng người, sửa chữa và bảo dưỡng xe nâng người chuyên nghiệp tại Hà Nội, Bắc Ninh, Hưng Yên. Giá cả cạnh tranh, chất lượng đảm bảo."
          keywords="cho thuê xe nâng người, sửa chữa xe nâng người, bảo dưỡng xe nâng người, dịch vụ xe nâng người"
      >
        <MainLayout
            leftContent={<LeftSide/>}
            rightContent={<RightSide
                title="Hình ảnh - Dự án"
            >
              <Article
                  title={project.title}
                  date={project.date}
                  content={project.detailHtml}
              />
            </RightSide>
            }
        />
      </Layout>
  );
}

