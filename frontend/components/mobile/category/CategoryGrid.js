import React, { Component } from 'react'
import '../../../static/mobile/category/category.css'
export default class CategoryGrid extends Component {
  render() {
    return (
      <>
        <div id="app">
  <div className="app-container">
    <div className="page-wrapper">
      <div className="page-category">
        <div className="shopee-navbar navbar-search">
          <div className="shopee-navbar__left-btn">
            <svg viewBox="0 0 22 17" className="navbar-generic__back">
              <g stroke="none" strokeWidth={1} fillRule="evenodd">
                <g transform="translate(-10.000000, -34.000000)">
                  <g transform="translate(0.000000, 20.000000)">
                    <g transform="translate(7.000000, 8.000000)">
                      <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="shopee-navbar__main-content">
            <div className="search-bar">
              <svg viewBox="0 0 13 14" className="search-bar__search-icon">
                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                  <g transform="translate(-56.000000, -36.000000)">
                    <g transform="translate(0.000000, 1.000000)">
                      <g transform="translate(0.000000, 20.000000)">
                        <g transform="translate(48.000000, 8.000000)">
                          <path d="M16.9914351,15.5118537 C17.0093193,15.5267114 17.0267223,15.5425664 17.043578,15.5594221 L20.6209034,19.1367476 C20.9022562,19.4181004 20.9067126,19.869807 20.6265242,20.1499954 C20.3482756,20.428244 19.9010266,20.432125 19.6132763,20.1443747 L16.0359508,16.5670492 C16.0180049,16.5491033 16.0011854,16.5304642 15.9854945,16.5112208 C15.1523331,17.1323409 14.1191023,17.5 13,17.5 C10.2385763,17.5 8,15.2614237 8,12.5 C8,9.73857625 10.2385763,7.5 13,7.5 C15.7614237,7.5 18,9.73857625 18,12.5 C18,13.6309342 17.6245255,14.6741717 16.9914351,15.5118537 Z M13,16.5 C15.209139,16.5 17,14.709139 17,12.5 C17,10.290861 15.209139,8.5 13,8.5 C10.790861,8.5 9,10.290861 9,12.5 C9,14.709139 10.790861,16.5 13,16.5 Z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <form role="search" className="search-bar__form">
                <div className="stardust-input"><input className="stardust-input__element search-bar__input search-bar__input--orange" type="search" aria-label="Thời Trang Nam" autoComplete="off" name="keyword" placeholder="Thời Trang Nam" defaultValue /></div>
              </form>
              <div>
                <div />
              </div>
            </div>
          </div>
          <div className="shopee-navbar__right-part">
            <div className="shopee-navbar__right-part-btn">
              <div className="navbar-search__filter-wrapper">
                <svg className="navbar-search__filter" viewBox="0 0 15 15">
                  <g>
                    <polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                  </g>
                </svg>
                <span className="navbar-search__filter-text typo-r10">Lọc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stardust-drawer">
          <div className="stardust-drawer__background" />
          <div className="stardust-drawer__container stardust-drawer__container--right" />
        </div>
        <div role="main">
          <div style={{marginBottom: '10px'}}>
            <div className="brand-grid">
              <div className="brand-grid-header"><span className="brand-grid-header__title typo-r12">Danh mục</span></div>
              <div className="grid-list-wrapper">
                <div className="grid-list hide-scrollbar" style={{height: '292px', padding: '0px'}}>
                  <a className="grid-cell grid-cell--with-titles" href="/Áo-thun-cat.78.2827" style={{order: 0, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Áo thun" src="https://cf.shopee.vn/file/ca37a77f47daf7d5435e6bca2c3ae626_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Áo thun</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Áo-sơ-mi-cat.78.2828" style={{order: 1, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Áo sơ mi" src="https://cf.shopee.vn/file/b8935c215fbebbfb95bbbd6d545a3ca6_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Áo sơ mi</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Áo-khoác-Áo-vest-cat.78.2829" style={{order: 2, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Áo khoác & Áo vest" src="https://cf.shopee.vn/file/6994faa596a56231391a99e0e5c9a041_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Áo khoác &amp; Áo vest</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Áo-nỉ-Áo-len-cat.78.9566" style={{order: 3, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Áo nỉ/ Áo len" src="https://cf.shopee.vn/file/2c0693e21e62f2e7e6b0e3e9934a0679_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Áo nỉ/ Áo len</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Đồ-bộ-Đồ-mặc-nhà-cat.78.9568" style={{order: 4, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Đồ bộ/ Đồ mặc nhà" src="https://cf.shopee.vn/file/c8ac08079df2ac1115df920f8dcd6fed_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Đồ bộ/ Đồ mặc nhà</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Đồ-đôi-cat.78.9570" style={{order: 5, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Đồ đôi" src="https://cf.shopee.vn/file/2c99fb98ca15977fc6f2c080bd997db4_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Đồ đôi</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Quần-cat.78.1899" style={{order: 6, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Quần" src="https://cf.shopee.vn/file/fec1d0b00ed14a18bfa182402ee28860_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Quần</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Balo-Túi-Ví-cat.78.9572" style={{order: 7, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Balo/ Túi/ Ví" src="https://cf.shopee.vn/file/dfe1d927c52ff584cc2309fbc5527521_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Balo/ Túi/ Ví</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Mắt-kính-cat.78.9594" style={{order: 8, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Mắt kính" src="https://cf.shopee.vn/file/fd5c311e26da418b25e03f6d8ebee300_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Mắt kính</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Phụ-kiện-nam-cat.78.2831" style={{order: 9, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Phụ kiện nam" src="https://cf.shopee.vn/file/559e3da0cee05a9a9090fdd412b90d27_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Phụ kiện nam</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Đồ-Trung-Niên-cat.78.15141" style={{order: 10, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Đồ Trung Niên" src="https://cf.shopee.vn/file/0e51fc92c8b606ce169ec445ded07adc_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Đồ Trung Niên</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Trang-Sức-Nam-cat.78.15139" style={{order: 11, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}><img className="grid-cell__image animated-lazy-image__image--ready" alt="Trang Sức Nam" src="https://cf.shopee.vn/file/1bbd362fc6411b546662d1159720d2dd_tn" style={{objectFit: 'contain'}} /></div>
                    <div className="grid-cell__title typo-r12">Trang Sức Nam</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Thắt-Lưng-cat.78.15135" style={{order: 12, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}>
                      <img className="grid-cell__image animated-lazy-image__image--loading" />
                      <div className="animated-lazy-image__placeholder-wrapper">
                        <svg viewBox="0 0 54 61" x={0} y={0} className="animated-lazy-image__placeholder grid-cell__placeholder">
                          <path d="M 99.2 59.9 H 86.7 c 0 -5.3 -2.7 -16.3 -11.7 -16.4 c -9.6 -.1 -11.8 11.9 -11.8 16.4 H 50.8 c -3.4 0 -2.7 3.4 -2.7 3.4 l 2.4 33 c 0 0 -.1 7.3 6.3 7.5 c .4 0 35.7 0 36.5 0 c 6.2 -.4 6.3 -7.5 6.3 -7.5 l 2.4 -33 C 102 63.2 102.5 59.8 99.2 59.9 z M 75.1 47.2 c 7.1 .2 7.9 11.7 7.7 12.6 H 67.1 C 67 58.9 67.5 47.4 75.1 47.2 z M 84.2 91.8 c -1 1.7 -2.7 3 -5 3.7 C 78 95.9 76.8 96 75.6 96 c -3.2 0 -6.5 -1.1 -9.3 -3.3 c -.8 -.6 -1 -1.5 -.5 -2.3 c .2 -.4 .7 -.7 1.2 -.8 c .4 -.1 .9 0 1.2 .3 c 3.2 2.4 8.3 4 11.9 1.6 c 1.4 -.9 2.1 -2.7 1.6 -4.3 c -.5 -1.6 -2.2 -2.7 -3.5 -3.4 c -1 -.6 -2.1 -1 -3.3 -1.4 c -.9 -.3 -1.9 -.7 -2.9 -1.2 c -2.4 -1.2 -4 -2.6 -4.8 -4.2 c -1.2 -2.3 -.6 -5.4 1.4 -7.5 c 3.6 -3.8 10 -3.2 14 -.4 c .9 .6 .9 1.7 .4 2.5 c -.5 .8 -1.4 .9 -2.2 .4 c -2 -1.4 -4.4 -2 -6.4 -1.7 c -2 .3 -4.7 2 -4.4 4.6 c .2 1.5 2 2.6 3.3 3.3 c .8 .4 1.5 .7 2.3 .9 c 4.3 1.3 7.2 3.3 8.6 5.7 C 85.4 86.9 85.4 89.7 84.2 91.8 z" transform="translate(-48 -43)" stroke="none" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid-cell__title typo-r12">Thắt Lưng</div>
                  </a>
                  <a className="grid-cell grid-cell--with-titles" href="/Đồ-lót-cat.78.15023" style={{order: 13, width: '106px', height: '146px'}}>
                    <div className="animated-lazy-image" style={{backgroundSize: 'cover', margin: '0px', width: '106px', height: '106px'}}>
                      <img className="grid-cell__image animated-lazy-image__image--loading" />
                      <div className="animated-lazy-image__placeholder-wrapper">
                        <svg viewBox="0 0 54 61" x={0} y={0} className="animated-lazy-image__placeholder grid-cell__placeholder">
                          <path d="M 99.2 59.9 H 86.7 c 0 -5.3 -2.7 -16.3 -11.7 -16.4 c -9.6 -.1 -11.8 11.9 -11.8 16.4 H 50.8 c -3.4 0 -2.7 3.4 -2.7 3.4 l 2.4 33 c 0 0 -.1 7.3 6.3 7.5 c .4 0 35.7 0 36.5 0 c 6.2 -.4 6.3 -7.5 6.3 -7.5 l 2.4 -33 C 102 63.2 102.5 59.8 99.2 59.9 z M 75.1 47.2 c 7.1 .2 7.9 11.7 7.7 12.6 H 67.1 C 67 58.9 67.5 47.4 75.1 47.2 z M 84.2 91.8 c -1 1.7 -2.7 3 -5 3.7 C 78 95.9 76.8 96 75.6 96 c -3.2 0 -6.5 -1.1 -9.3 -3.3 c -.8 -.6 -1 -1.5 -.5 -2.3 c .2 -.4 .7 -.7 1.2 -.8 c .4 -.1 .9 0 1.2 .3 c 3.2 2.4 8.3 4 11.9 1.6 c 1.4 -.9 2.1 -2.7 1.6 -4.3 c -.5 -1.6 -2.2 -2.7 -3.5 -3.4 c -1 -.6 -2.1 -1 -3.3 -1.4 c -.9 -.3 -1.9 -.7 -2.9 -1.2 c -2.4 -1.2 -4 -2.6 -4.8 -4.2 c -1.2 -2.3 -.6 -5.4 1.4 -7.5 c 3.6 -3.8 10 -3.2 14 -.4 c .9 .6 .9 1.7 .4 2.5 c -.5 .8 -1.4 .9 -2.2 .4 c -2 -1.4 -4.4 -2 -6.4 -1.7 c -2 .3 -4.7 2 -4.4 4.6 c .2 1.5 2 2.6 3.3 3.3 c .8 .4 1.5 .7 2.3 .9 c 4.3 1.3 7.2 3.3 8.6 5.7 C 85.4 86.9 85.4 89.7 84.2 91.8 z" transform="translate(-48 -43)" stroke="none" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid-cell__title typo-r12">Đồ lót</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="search-items-container">
            <div>
              <div className="stardust-tabs-header-anchor" />
              <nav className="stardust-tabs-header-wrapper" style={{top: '44px'}}>
                <ul className="stardust-tabs-header stardust-tabs-header--light">
                  <li className="stardust-tabs-header__tab stardust-tabs-header__tab--active">
                    <div className="search-items-tabs-header search-items-tabs-header--popular">
                      Phổ biến
                      <div className="search-items-tabs-header__triangles">
                        <div className="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--down" style={{borderTopColor: 'rgb(255, 87, 34)', borderBottomColor: 'transparent'}} />
                      </div>
                      <div>
                        <div />
                      </div>
                    </div>
                  </li>
                  <li className="stardust-tabs-header__tab">
                    <div className="search-items-tabs-header">Mới nhất</div>
                  </li>
                  <li className="stardust-tabs-header__tab">
                    <div className="search-items-tabs-header">Bán chạy</div>
                  </li>
                  <li className="stardust-tabs-header__tab">
                    <div className="search-items-tabs-header">
                      Giá
                      <div className="search-items-tabs-header__triangles">
                        <div className="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--up" style={{borderTopColor: 'transparent', borderBottomColor: 'currentcolor'}} />
                        <div className="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--down" style={{borderTopColor: 'currentcolor', borderBottomColor: 'transparent'}} />
                      </div>
                    </div>
                  </li>
                </ul>
                <i className="stardust-tabs-header__tab-indicator" style={{width: '150px', transform: 'translateX(0px)', display: 'block'}} />
              </nav>
              <div className="stardust-tabs-panels">
                <section className="stardust-tabs-panels__panel" style={{display: 'block'}}>
                  <div className="search-items-container__tab-panel">
                    <div className="item-card-list">
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/QUẦN-JEAN-NAM-DÀI-TRƠN-CÔNG-SỞ-DẠO-PHỐ-(-loại-1)-i.1015369.1488644875">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/051493dfe0c1a8839893a06c5d3b9283_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">QUẦN JEAN NAM DÀI TRƠN CÔNG SỞ DẠO PHỐ ( loại 1)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫420.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫357.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12029</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="_3s9Tb9">Chưa có đánh giá</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    15%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Lắc-tay-inox-nam-cao-cấp-bảo-hành-không-đen-V3-i.8235473.868744575">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/d99cd653542a8400a241f77eac5c9880_tn" style={{objectFit: 'contain'}} /></div>
                              <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-mobilemall-live-vn/assets/d8aa4be84248b3de689a0cb3d892c8cd.png" className="item-card__campaign-overlay item-card__campaign-overlay--1212" />
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Lắc tay inox nam cao cấp bảo hành không đen - V3</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫100.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫50.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10914</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '82.1429%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(28)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Ví-Nam-Dáng-Dài-Sang-Trọng-Mẫu-Hàn-i.19360245.1402316978">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/82ef04caa4334ac378a2874e31bc8059_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Ví Nam Dáng Dài Sang Trọng, Mẫu Hàn</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫420.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫210.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12822</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '40%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(5)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/ÁO-SƠ-MI-NAM-TAY-DÀI-CÔNG-SỞ-CAO-CẤP(-hàng-loại-1)-i.1015369.1527506493">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/6d8e1c438cf880892c5e5af08cf49ddb_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">ÁO SƠ MI NAM TAY DÀI CÔNG SỞ CAO CẤP( hàng loại 1)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫360.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫306.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10645</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(11)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    15%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Bông-tai-nam-inox-cao-cấp-không-đen-TH_BT_130-(-1CẶP)-i.8235473.878721791">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/5d47a21ea0618d76de29eed643d846ea_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Bông tai nam inox cao cấp không đen - TH_BT_130 ( 1CẶP)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫42.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫21.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10873</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '94.4444%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(18)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-Khoác-Nam-Dù-VIOLENCE-Mẫu-Đẹp-Cao-Cấp-i.73210046.1246052171">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/dc1e846ee2fd83dee96bc69de63886e7_tn" style={{objectFit: 'contain'}} /></div>
                              <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-mobilemall-live-vn/assets/d8aa4be84248b3de689a0cb3d892c8cd.png" className="item-card__campaign-overlay item-card__campaign-overlay--1212" />
                              <svg className="stardust-icon stardust-icon-camera item-card__video-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                <circle stroke="none" cx="7.5" cy="7.5" fill="#040000" opacity=".5" r="7.5" />
                                <path stroke="none" clipRule="evenodd" d="m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z" fill="#fff" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo Khoác Nam Dù VIOLENCE Mẫu Đẹp Cao Cấp</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫370.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫320.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">13647</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '84.2105%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(38)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    13%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-Khoác-Nam-thiết-kế-đơn-giản-trẻ-trung-cho-mùa-Xuân-Hè-i.73210046.1320094315">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/3c6f36ed7a1f24ba5a736ced0936370d_tn" style={{objectFit: 'contain'}} /></div>
                              <svg className="stardust-icon stardust-icon-camera item-card__video-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                <circle stroke="none" cx="7.5" cy="7.5" fill="#040000" opacity=".5" r="7.5" />
                                <path stroke="none" clipRule="evenodd" d="m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z" fill="#fff" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo Khoác Nam thiết kế đơn giản trẻ trung cho mùa Xuân Hè</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫480.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">13401</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(1)</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/HỘP-SỊP-MEN-4-CHIẾC-SIÊU-CO-GIÃN-THOÁNG-MÁT-LOẠI-1-CHÍNH-PHẨM-i.25584795.1379708704">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/53c582742f13440a3d5597e99af72c7c_tn" style={{objectFit: 'contain'}} /></div>
                              <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-mobilemall-live-vn/assets/d8aa4be84248b3de689a0cb3d892c8cd.png" className="item-card__campaign-overlay item-card__campaign-overlay--1212" />
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">HỘP SỊP MEN 4 CHIẾC SIÊU CO GIÃN THOÁNG MÁT LOẠI 1 CHÍNH PHẨM</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫180.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫125.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">15243</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '85.7143%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(35)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    30%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/FREESHIP-ĐƠN-99K_Áo-khoác-gió-kiểu-dáng-thể-thao-chống-thấm-nước-i.24795044.1250506788">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/c740d6d3751dbf7fc09d0931f583a2b5_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">FREESHIP ĐƠN 99K_Áo khoác gió kiểu dáng thể thao chống thấm nước</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫60.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12546</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '81.8182%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg className="stardust-icon stardust-icon-rating rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(11)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Ví-Nam-Cao-Cấp-Nam-Hàng-Nhập-Khẩu-i.19360245.1358185351">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/376e870a7e9eb88a61f69680fe1bc99a_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Ví Nam Cao Cấp Nam - Hàng Nhập Khẩu</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫420.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12">₫210.000</div>
                                <div className="item-card__spacer" />
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12942</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '54.5455%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(22)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/♦️Hộp-4-sịp-đùi-Men's-thông-hơi♦️chất-thun-conton-mát-lạnh-hàng-loại-1📸Video-ảnh-thật-i.23309991.1251287990">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/5cacb9a491f8fa062f49d4b4bfed09e0_tn" style={{objectFit: 'contain'}} /></div>
                              <svg className="stardust-icon stardust-icon-camera item-card__video-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                <circle stroke="none" cx="7.5" cy="7.5" fill="#040000" opacity=".5" r="7.5" />
                                <path stroke="none" clipRule="evenodd" d="m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z" fill="#fff" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">♦️Hộp 4 sịp đùi Men's thông hơi♦️chất thun conton mát lạnh, hàng loại 1📸Video ảnh thật</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫190.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫125.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">13055</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '95.3488%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(43)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    34%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Sơmi-Linen-đũi-xước-siêu-chất-Ulzzang-(ẢNH-THẬT)-i.24705009.1442970736">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/b8f2475ad14fbe0ca3496e6fadb75821_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Sơmi Linen đũi xước siêu chất Ulzzang (ẢNH THẬT)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫400.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫200.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12769</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="_3s9Tb9">Chưa có đánh giá</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/-Freeship-từ-99K-Ví-da-nam-thời-trang-Vkingshop-i.54982612.893503064">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/dedd813676c1ba1bdc0fe655e48e3bb7_tn" style={{objectFit: 'contain'}} /></div>
                              <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-mobilemall-live-vn/assets/d8aa4be84248b3de689a0cb3d892c8cd.png" className="item-card__campaign-overlay item-card__campaign-overlay--1212" />
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">[Freeship từ 99K] Ví da nam thời trang Vkingshop</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫99.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫79.900</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">11563</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '66.6667%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(33)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    19%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/❌SỊP-Muji-nam-hộp-5-chiếc💢chất-conton-cực-đẹp📸video-hình-ảnh-thật-i.23309991.1299500803">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/7f5ebce49934b194143d4795f63ba65e_tn" style={{objectFit: 'contain'}} /></div>
                              <svg className="stardust-icon stardust-icon-camera item-card__video-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                <circle stroke="none" cx="7.5" cy="7.5" fill="#040000" opacity=".5" r="7.5" />
                                <path stroke="none" clipRule="evenodd" d="m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z" fill="#fff" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">❌SỊP Muji nam hộp 5 chiếc💢chất conton cực đẹp📸video + hình ảnh thật</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫280.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫169.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12550</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(14)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    39%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-thun-nam-Quảng-Châu-i.36052264.1479195579">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/de2d507a53ceaa9896e2ca9cd2c2468d_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo thun nam Quảng Châu</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫140.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10774</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '50%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(2)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Quần-dài-nam-i.36052264.1495515467">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/6146e23458bda3e6199e9db3082103f7_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Quần dài nam</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12">₫139.000</div>
                                <div className="item-card__spacer" />
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10734</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '66.6667%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(3)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-Khoác-Nam-phong-cách-mà-đơn-giản-trong-Ngày-Hè-Đông-i.73210046.1246027937">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/9079374d0da555fd147cc72564da12cd_tn" style={{objectFit: 'contain'}} /></div>
                              <svg className="stardust-icon stardust-icon-camera item-card__video-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                <circle stroke="none" cx="7.5" cy="7.5" fill="#040000" opacity=".5" r="7.5" />
                                <path stroke="none" clipRule="evenodd" d="m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z" fill="#fff" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo Khoác Nam phong cách mà đơn giản trong Ngày Hè - Đông</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫499.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">13532</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(25)</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Bông-tai-nam-inox-Mã-BT31-(-1CẶP)-i.8235473.615854474">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/e484ff9a0a105d420edb13dd375cd523_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Bông tai nam inox - Mã: BT31 ( 1CẶP)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫58.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫29.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10860</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '88.2353%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(17)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    50%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-hoodie-Unisex-G-Dragon-i.6561215.1405712763">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/5f924c2e08e89c0af8dfcc3769a83907_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo hoodie Unisex G-Dragon</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫120.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10744</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="_3s9Tb9">Chưa có đánh giá</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/Áo-thun-Unisex-trắng-RICH-Or-DIe-2-2018-i.6561215.1439977647">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/1d7ea175a7428857088a00b365db242a_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">Áo thun Unisex trắng RICH Or DIe 2 2018</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫120.000</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">10753</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(1)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/ÁO-SƠ-MI-NAM-TAY-NGẮN-CỔ-BẺ-CAO-CẤP-(-hàng-loại-1)-i.1015369.1474817258">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/07b3c94c1fa1fa9c9aa7242d144c1b3b_tn" style={{objectFit: 'contain'}} /></div>
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">ÁO SƠ MI NAM TAY NGẮN CỔ BẺ CAO CẤP ( hàng loại 1)</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫360.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫313.200</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">12305</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <div className="rating-stars__star">
                                      <div className="rating-stars__star-lit" style={{width: '66.6667%'}}>
                                        <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                          <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                        </svg>
                                      </div>
                                      <svg className="stardust-icon stardust-icon-rating rating-stars__star-hollow" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                        <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="_3s9Tb9">(3)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    13%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <a className="item-card hairline-border" href="/-Freeship-từ-99K-Ví-da-kiểu-ngang-thời-trang-Vkingshop-i.54982612.893509245">
                          <div>
                            <div className="item-card__cover-image-wrapper">
                              <div className="animated-lazy-image item-card__cover-image"><img className="item-card__cover-image animated-lazy-image__image--ready" src="https://cf.shopee.vn/file/bebe61dc5bc416bfc3c88b7e94b64759_tn" style={{objectFit: 'contain'}} /></div>
                              <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-mobilemall-live-vn/assets/d8aa4be84248b3de689a0cb3d892c8cd.png" className="item-card__campaign-overlay item-card__campaign-overlay--1212" />
                            </div>
                            <div className="item-card__info">
                              <div className="item-card__name typo-l14 item-card__name--two-lines">[Freeship từ 99K] Ví da kiểu ngang thời trang Vkingshop</div>
                              <div className="item-card__price-shipping">
                                <div className="item-card__price-before-discount typo-l12">₫99.000</div>
                                <div className="item-card__spacer-price" />
                                <div className="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping">₫79.900</div>
                                <div className="item-card__spacer" />
                                <svg viewBox="0 0 20 12" height={12} width={20} className="shopee-icon item-card__free-shipping-icon">
                                  <path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" />
                                  <path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" />
                                  <circle fill="#00bfa5" cx={8} cy={10} r={2} />
                                  <circle fill="#00bfa5" cx={15} cy={10} r={2} />
                                  <path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" />
                                  <path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" />
                                  <path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" />
                                  <circle fill="#047565" cx={8} cy={10} r={1} />
                                  <circle fill="#047565" cx={15} cy={10} r={1} />
                                </svg>
                              </div>
                              <div className="item-card__popularity">
                                <div className="item-card__likes typo-r12">
                                  <svg className="stardust-icon stardust-icon-like-2 item-card__likes-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                    <path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                                  </svg>
                                  <div className="item-card__likes-text">11540</div>
                                </div>
                                <div className="bnFPPI typo-r10 item-card__ratings">
                                  <div className="rating-stars">
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                    <svg className="stardust-icon stardust-icon-rating-solid rating-stars__star" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                      <path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="_3s9Tb9">(10)</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-card__badge-left-wrapper">
                              <div className="badge__horizontal badge__preferred badge__preferred--left-triangle">
                                <svg className="stardust-icon stardust-icon-tick" enableBackground="new 0 0 15 15" viewBox="0 0 15 15">
                                  <path stroke="none" d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z" />
                                </svg>
                                &nbsp;Yêu thích
                              </div>
                            </div>
                            <div className="item-card__badge-right-wrapper">
                              <div className="badge-text badge-text--promotion">
                                <div className="badge-text__text typo-r12">
                                  <div className="badge__promotion">
                                    19%
                                    <div className="badge__promotion-off">GIẢM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-card-list__item-card-wrapper">
                        <div>
                          <div style={{minHeight: '397px'}} />
                        </div>
                      </div>
                      <div className="infinite-scroll" style={{position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-400px'}}>
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="stardust-tabs-panels__panel" style={{display: 'none'}}>
                  <div />
                </section>
                <section className="stardust-tabs-panels__panel" style={{display: 'none'}}>
                  <div />
                </section>
                <section className="stardust-tabs-panels__panel" style={{display: 'none'}}>
                  <div />
                </section>
                <section className="stardust-tabs-panels__panel" style={{display: 'none'}}>
                  <div />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </>
    )
  }
}
