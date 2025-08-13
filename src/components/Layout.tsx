import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumb";
import PartnerLogos from "./PartnerLogos";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import CallToAction from "./CallToAction";
import ScrollToTopButton from "./ScrollToTopButton";


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  backgroundUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát",
  description = "Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh",
  keywords = "xe nâng người, xe nâng người genie, xe nâng người Giá Rẻ, xe nâng người tại Hà Nội, xe nâng người tại Bắc Ninh, xe nâng người tại Hưng Yên, xe nâng người Nhập Khẩu, xe nâng người Chính Hãng, Giá Xe Nâng Người",
  ogImage = "/images/logo.png",
   backgroundUrl
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="content-type" content="text/html" charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="Language" content="vi" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />


        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Thiết Bị Nhất Phát" />
        
        {/* Twitter Card tags */}
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*<meta name="twitter:title" content={title} />*/}
        {/*<meta name="twitter:description" content={description} />*/}
        {/*<meta name="twitter:image" content={ogImage} />*/}
        
        {/* Favicon */}
        {/*<link rel="icon" href="/favicon.ico" />*/}
        {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="apple-touch-icon" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="icon" sizes="192x192" />
        <link href="https://thietbinhatphat.com/public/media/images/logo/favicon.png" rel="icon" sizes="128x128" />
        
        {/* CSS Files */}
        <link rel="stylesheet" href="/Content/css/common.css" />
        <link rel="stylesheet" href="/style/engine1/slide.css" />
        <link rel="stylesheet" href="/style/css/bootstrap.css" />
        <link rel="stylesheet" href="/style/css/deki.css" />
        <link rel="stylesheet" href="/style/css/sp.css" />
        <link rel="stylesheet" href="/style3/css/jquery.css" />
        <link rel="stylesheet" href="/magiczoomplus/magiczoomplus.css" />
      </Head>

        <Header />
        <Banner backgroundUrl={backgroundUrl}/>
        <Breadcrumb/>
          {children}
        <PartnerLogos/>
        <Footer />
        <ScrollToTopButton/>
        <CallToAction/>
      {/*</body>*/}
    </>
  );
};

export default Layout;

