import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import React from "react";
import "../../public/Content/css/common.css";
import "../../public/style/engine1/slide.css";
import "../../public/style/css/bootstrap.css";
import "../../public/style/css/deki.css";
import "../../public/style/css/sp.css";
import "../../public/style3/css/jquery.css";
import "../../public/magiczoomplus/magiczoomplus.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty TNHH Bảo Khang An",
  description: "Cung cấp các sản phẩm Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ cùng các dịch vụ cho thuê, sửa chữa xe nâng người tại Hà Nội, Hưng Yên, Bắc Ninh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Original JavaScript Files */}
        <Script src="/style/js/jquery.min1.js" strategy="beforeInteractive" />
        <Script src="/style/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/style3/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/style3/js/jquery_002.js" strategy="beforeInteractive" />
        <Script src="/style/js/lib.js" strategy="afterInteractive" />
        <Script src="/style/js/main.js" strategy="afterInteractive" />
        <Script src="/style/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/style/js/owl.carousel.min.js" strategy="afterInteractive" />
        {/*<Script src="/style/js/script_jcarousellite.js" strategy="afterInteractive" />*/}
        <Script src="/magiczoomplus/magiczoomplus.js" strategy="afterInteractive" />
        
        {/* Index files scripts */}
        {/*<Script src="/index_files/jquery-1.8.2.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/jquery-ui.min.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/format.min.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/jquery.touchSwipe.min.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/common.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/quickMenu.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/appLocalStorage.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/BzGlobal.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/order.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/bzAcc.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/jquery.lazyload.min.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/jquery.nicescroll.js.tri%20xulng" strategy="afterInteractive" />*/}
        {/*<Script src="/index_files/main.js.tri%20xulng" strategy="afterInteractive" />*/}
        
        {/* Back to top functionality */}
        {/*<Script id="back-to-top" strategy="afterInteractive">*/}
        {/*  {`*/}
        {/*    jQuery(document).ready(function($){ 	*/}
        {/*      if($(".btn-top").length > 0){*/}
        {/*        $(window).scroll(function () {*/}
        {/*          var e = $(window).scrollTop();*/}
        {/*          if (e > 300) {*/}
        {/*            $(".btn-top").show()*/}
        {/*          } else {*/}
        {/*            $(".btn-top").hide()*/}
        {/*          }*/}
        {/*        });*/}
        {/*        $(".btn-top").click(function () {*/}
        {/*          $('body,html').animate({*/}
        {/*            scrollTop: 0*/}
        {/*          })*/}
        {/*        })*/}
        {/*      }		*/}
        {/*    });*/}
        {/*  `}*/}
        {/*</Script>*/}
        
        {/* Global variables */}
        {/*<Script id="global-vars" strategy="beforeInteractive">*/}
        {/*  {`*/}
        {/*    var base_url = '/';*/}
        {/*    var lang = 'vn';*/}
        {/*    var base_img = '/style/img/';*/}
        {/*  `}*/}
        {/*</Script>*/}
      </body>
    </html>
  );
}
