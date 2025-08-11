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
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="hotline col-md-8 col-sm-8 col-xs-8">
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
            <div className="lang col-md-4 col-sm-4 col-xs-12">
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
        <div id="m-header" style={{position: 'fixed'}}>
          <div className="show-menu fl-l">
            <div className="header-list-bg icon-quick-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm Kiếm..."
              maxLength={100}
              autoComplete="off"
            />
            <input type="submit" value="" />
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
                            <a href="https://www.google.com/maps" title="Address">
                              <p>Đ/C: <span>Số 18 - Đường Bãi Cát - Lĩnh Nam - Hoàng Mai - Hà Nội</span></p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <div className="search">
                        <form onSubmit={handleSearch}>
                          <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tìm Kiếm..."
                            maxLength={100}
                            autoComplete="off"
                          />
                          <input type="submit" value="" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Menu */}
        <nav id="nav">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <ul className="nav navbar-nav">
                  <li><Link href="/">Trang Chủ</Link></li>
                  <li><Link href="/about">Giới Thiệu</Link></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle">Sản Phẩm</a>
                    <ul className="dropdown-menu">
                      <li><Link href="/products">Tất cả sản phẩm</Link></li>
                      <li><Link href="/products/xe-nang-nguoi-tu-hanh">Xe Nâng Người Tự Hành</Link></li>
                      <li><Link href="/products/xe-nang-nguoi-gs">Xe nâng người GS</Link></li>
                      <li><Link href="/products/xe-nang-s-boom">Xe Nâng S boom</Link></li>
                      <li><Link href="/products/xe-nang-z-boom">Xe Nâng Z Boom</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/services">Dịch Vụ</Link></li>
                  <li><Link href="/news">Tin Tức</Link></li>
                  <li><Link href="/contact">Liên Hệ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

