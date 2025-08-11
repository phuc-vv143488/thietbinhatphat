import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát",
  description = "Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh",
  keywords = "xe nâng người, xe nâng người genie, xe nâng người Giá Rẻ, xe nâng người tại Hà Nội, xe nâng người tại Bắc Ninh, xe nâng người tại Hưng Yên, xe nâng người Nhập Khẩu, xe nâng người Chính Hãng, Giá Xe Nâng Người",
  ogImage = "/images/logo.png"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="Language" content="vi" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Thiết Bị Nhất Phát" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* CSS Files */}
        <link rel="stylesheet" href="/style/css/bootstrap.css" />
        <link rel="stylesheet" href="/style/css/deki.css" />
        <link rel="stylesheet" href="/style/engine1/slide.css" />
        <link rel="stylesheet" href="/Content/css/common.css" />
        <link rel="stylesheet" href="/style3/css/jquery.css" />
        <link rel="stylesheet" href="/magiczoomplus/magiczoomplus.css" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

