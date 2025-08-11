'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Search for:', searchQuery);
      // window.location.href='https://thietbinhatphat.com/'+'tim-kiem/'+encodeURIComponent(searchQuery);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="hotline col-md-6 col-sm-6 col-xs-6">
              <ul className="sharehead">
                <li>
                  <a target="_blank" href="https://www.facebook.com/nhat.phat.9674" title="Facebook">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/fa.png" alt="Facebook" title="Facebook" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" title="Twitter">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/tw.png" alt="Twitter" title="Twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" title="LinkedIn">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/in.png" alt="LinkedIn" title="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" title="Print">
                    <img src="https://thietbinhatphat.com/public/media/media/files/mang-xa-hoi/pr.png" alt="Print" title="Print" />
                  </a>
                </li>
              </ul>
              <p><span>XE NÂNG NGƯỜI NHẤT PHÁT</span>.</p>
            </div>
            <div className="lang col-md-6 col-sm-6 col-xs-12">
              <p>
                <img style={{marginRight: '10px', marginTop: '-2px'}} src="/style/img/email.png" alt="email" title="email" />
                Email: thietbinhatphat@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="header_mobile_an_desktop">
        <div id="m-quick-menu" style={{display: 'none', position: 'fixed', overflow: 'scroll', top: '61px'}}>
        <div className="quick-menu-content" id="q-menu-content" style={{left: '-70%'}}>
          <ul>
            <li><a href="gioi-thieu.html" className="qb_info" title="Giới Thiệu">Giới Thiệu</a></li><li className="mn_root"><a href="san-pham.html" title="Sản phẩm"><span className="mr_text">Sản phẩm</span></a>
              <ul className="mn_sub1"><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-nguoi-tu-hanh.html" className="qb_info" title="Xe Nâng Người Tự Hành">Xe Nâng Người Tự Hành</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-nguoi-gs.html" className="qb_info" title="Xe nâng người GS">Xe nâng người GS</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-s-boom.html" className="qb_info" title="Xe Nâng S boom">Xe Nâng S boom</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-z-boom.html" className="qb_info" title="Xe Nâng Z Boom">Xe Nâng Z Boom</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-nguoi-jlg.html" className="qb_info" title="Xe Nâng Người JLG">Xe Nâng Người JLG</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="thang-nang-awp.html" className="qb_info" title="Thang nâng AWP">Thang nâng AWP</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="xe-nang-nguoi-dang-cat-keo.html" className="qb_info" title="Xe Nâng Người Dạng Cắt kéo">Xe Nâng Người Dạng Cắt kéo</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="may-cong-trinh.html" className="qb_info" title="Máy công trình">Máy công trình</a></li></ul>
            </li>		<li className="mn_root"><a href="dich-vu.html" title="Dịch Vụ"><span className="mr_text">Dịch Vụ</span></a>
              <ul className="mn_sub1"><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="cho-thue-xe-nang-nguoi.html" className="qb_info" title="Cho thuê xe nâng người">Cho thuê xe nâng người</a></li><li className="sub1_li"><a style={{paddingLeft: '40px'}} href="sua-chua-xe-nang-nguoi.html" className="qb_info" title="Sửa Chữa Xe Nâng Người">Sửa Chữa Xe Nâng Người</a></li></ul>
            </li>		<li className="mn_root"><a href="tin-tuc.html" title="Tin Tức"><span className="mr_text">Tin Tức</span></a>
              <ul className="mn_sub1" />
            </li>		<li className="mn_root"><a href="xe-nang-nguoi-cu.html" title="Xe Nâng Người Cũ"><span className="mr_text">Xe Nâng Người Cũ</span></a>
              <ul className="mn_sub1" />
            </li>		<li className="mn_root"><a href="hinh-anh---du-an.html" title="Hình ảnh - Dự án"><span className="mr_text">Hình ảnh - Dự án</span></a>
              <ul className="mn_sub1" />
            </li>		<li><a href="videos.html" className="qb_info" title="Videos">Videos</a></li><li className="mn_root"><a href="lien-he.html" title="Liên Hệ"><span className="mr_text">Liên Hệ</span></a>
              <ul className="mn_sub1" />
            </li>		              </ul>
        </div>
        <div className="quick-menu-bg" style={{height: '100%'}} />
        <div className="clear-both" />
      </div>
        <div id="m-header" style={{position: 'fixed'}}>
          <div className="show-menu fl-l">
            <div className="header-list-bg icon-quick-menu"> {/*onClick={() => setIsMenuOpen(!isMenuOpen)}*/}
            </div>
          </div>
          <div className="logo_mobile fl-l">
            <Link href="/" title="Trang chủ">
              <img src="https://thietbinhatphat.com/public/images/Logo/Logo.png" title="Logo" alt="Logo" />
            </Link>
          </div>
          <div className="clear-both"></div>
        </div>
        
        <div className="search">
          <form name="search" id="nsearch1" onSubmit={handleSearch}>
            <input
              id="key1"
              type="text"
              size={24}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm Kiếm..."
              maxLength={100}
              autoComplete="off"
            />
            <input id="searchbutton" type="submit" value="" />
          </form>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="header_mobile_hien_mobile">
        <header id="header">
          <div className="container" id="head1">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-12">
                <div className="row">
                  <div className="navbar-header">
                    <Link className="navbar-brand" href="/" title="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát">
                      <img src="https://thietbinhatphat.com/public/images/Logo/Logo.png" alt="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát"/>
                    </Link>
                    <h1 style={{display: 'none'}}>Xe Nâng Người</h1>
                  </div>
                </div>
              </div>
              
              <div className="col-md-9 col-sm-9 col-xs-12">
                <div className="row">
                  <div className="right_header">
                    <div className="col-md-7 col-sm-7 col-xs-12">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                          <div className="top_items">
                            <img src="https://thietbinhatphat.com/public/media/files/logo/tel.png" alt="Hotline" title="Hotline" />
                            <a href="tel:0967098118" title="Hotline">
                              <p>HỖ TRỢ GỌI NGAY</p>
                              <p><span>0967098118 - 0962098118</span></p>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                          <div className="top_items">
                            <img src="https://thietbinhatphat.com/public/media/files/logo/add.png" alt="Address" title="Address" />
                            <a href="https://www.google.com/maps/place/Việt+Á+Tower/@21.0303025,105.7842306,18.25z/data=!4m8!1m2!2m1!1zdMOyYSBuaMOgIFZp4buHdCDDgSwgc-G7kSA5IHBo4buRIER1eSBUw6JuLCAgcGjGsOG7nW5nIEThu4tjaCBW4buNbmcgSOG6rXUsIHF14bqtbiBD4bqndSBHaeG6pXksIEjDoCBO4buZaS4!3" title="Address">
                              <p>Đ/C: <span>Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</span></p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <div className="search">
                        <form name="search" id="nsearch" onSubmit={handleSearch}>
                          <input id="key" size="24" name="keyword"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tìm Kiếm..."
                            maxLength={100}
                            autoComplete="off"
                          />
                          <input id="searchbutton" type="submit" value="" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Navigation Menu */}
      <div id="menu">
        <div className="menu">
          <div className="container">
            <ul className="nav1">
              <li>
                <a href="index.html" title="Xe Nâng Người Genie Nhập Khẩu Chính Hãng Giá Rẻ - Công Ty Nhất Phát">
                  <h2>Trang chủ</h2>
                </a>
              </li>
              <li>
                <a href="gioi-thieu.html" title="Giới Thiệu"><h2>Giới Thiệu</h2></a> </li><li className="current">
                <a href="san-pham.html" title="Sản phẩm"><h2>Sản phẩm</h2></a><ul><li><a href="xe-nang-nguoi-tu-hanh.html" title="Xe Nâng Người Tự Hành"><h2>Xe Nâng Người Tự Hành</h2></a></li><li><a href="xe-nang-nguoi-gs.html" title="Xe nâng Người GS"><h2>Xe nâng Người GS</h2></a></li><li><a href="xe-nang-s-boom.html" title="Xe Nâng Người S boom"><h2>Xe Nâng Người S boom</h2></a></li><li><a href="xe-nang-z-boom.html" title="Xe Nâng Người Z Boom"><h2>Xe Nâng Người Z Boom</h2></a></li><li><a href="xe-nang-nguoi-jlg.html" title="Xe Nâng Người JLG"><h2>Xe Nâng Người JLG</h2></a></li><li><a href="thang-nang-awp.html" title="Thang Nâng AWP"><h2>Thang Nâng AWP</h2></a></li><li><a href="xe-nang-nguoi-dang-cat-keo.html" title="Xe Nâng Người Dạng Cắt kéo"><h2>Xe Nâng Người Dạng Cắt kéo</h2></a></li><li><a href="may-cong-trinh.html" title="Máy công trình"><h2>Máy công trình</h2></a></li></ul> </li><li>
                <a href="dich-vu.html" title="Dịch Vụ"><h2>Dịch Vụ</h2></a><ul><li><a href="cho-thue-xe-nang-nguoi.html" title="Cho thuê xe nâng người"><h2>Cho thuê xe nâng người</h2></a></li><li><a href="sua-chua-xe-nang-nguoi.html" title="Sửa Chữa Xe Nâng Người"><h2>Sửa Chữa Xe Nâng Người</h2></a></li></ul> </li><li>
                <a href="tin-tuc.html" title="Tin Tức"><h2>Tin Tức</h2></a> </li><li>
                <a href="xe-nang-nguoi-cu.html" title="Xe Nâng Người Cũ"><h2>Xe Nâng Người Cũ</h2></a> </li><li>
                <a href="hinh-anh---du-an.html" title="Hình ảnh - Dự án"><h2>Hình ảnh - Dự án</h2></a> </li><li>
                <a href="videos.html" title="Videos"><h2>Videos</h2></a> </li><li>
                <a href="lien-he.html" title="Liên Hệ"><h2>Liên Hệ</h2></a> </li>
            </ul>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </>
  );
};

export default Header;

