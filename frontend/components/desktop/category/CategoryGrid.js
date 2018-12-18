import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { Spin } from 'antd';
import '../../../static/desktop/category/category.css'

const CategoryContent = dynamic(() => import('./CategoryContent'), {
  loading: () => <div id="loading"><Spin size="large" /></div>
})

export default class CategoryGrid extends Component {
  render() {
    return (
      <>       
        <div className="shopee-page-wrapper">
  <div>
    <div>
      <div className="browse-page">
        <div className="container">
        </div>
        <div className="curated-collections container">
          <div className="shopee-header-section a-curated-collection-model shopee-header-section--simple">
            <div className="shopee-header-section__header">
              <div className="shopee-header-section__header__title">TOP SẢN PHẨM BÁN CHẠY</div>
            </div>
          </div>
        </div>
        <div className="container browse-page__body-wrapper">
          <div className="shopee-filter-panel">
            <div className="shopee-category-list">
              <a className="shopee-category-list__header" href="/all_categories">
                <svg className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate" viewBox="0 0 12 10">
                  <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                    <g transform="translate(-373 -208)">
                      <g transform="translate(155 191)">
                        <g transform="translate(218 17)">
                          <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                          <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                          <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                Tất cả Danh mục
              </a>
              <div className="shopee-category-list__body">
                <div className="shopee-category-list__category">
                  <div className="shopee-category-list__main-category shopee-category-list__main-category--active">
                    <a className="shopee-category-list__main-category__link" href="/Thời-Trang-Nam-cat.78">
                      <svg className="shopee-svg-icon shopee-category-list__main-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Thời Trang Nam
                    </a>
                  </div>
                  <div className="folding-items shopee-category-list__sub-category-list folding-items--folded">
                    <a className="shopee-category-list__sub-category" href="/Áo-thun-cat.78.2827">
                      <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Áo thun
                    </a>
                    <a className="shopee-category-list__sub-category" href="/Áo-sơ-mi-cat.78.2828">
                      <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Áo sơ mi
                    </a>
                    <a className="shopee-category-list__sub-category" href="/Áo-khoác-Áo-vest-cat.78.2829">
                      <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Áo khoác &amp; Áo vest
                    </a>
                    <a className="shopee-category-list__sub-category" href="/Áo-nỉ-Áo-len-cat.78.9566">
                      <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Áo nỉ/ Áo len
                    </a>
                    <a className="shopee-category-list__sub-category" href="/Đồ-bộ-Đồ-mặc-nhà-cat.78.9568">
                      <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                        <polygon points="4 3.5 0 0 0 7" />
                      </svg>
                      Đồ bộ/ Đồ mặc nhà
                    </a>
                    <div className="stardust-dropdown folding-items__toggle">
                      <div className="stardust-dropdown__item-header">
                        <div className="shopee-category-list__toggle-btn">
                          Thêm
                          <svg className="stardust-icon stardust-icon-arrow-down" enableBackground="new 0 0 11 11" viewBox="0 0 11 11">
                            <path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                          </svg>
                        </div>
                      </div>
                      <div className="stardust-dropdown__item-body">
                        <div className="folding-items__folded-items">
                          <a className="shopee-category-list__sub-category" href="/Đồ-đôi-cat.78.9570">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Đồ đôi
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Quần-cat.78.1899">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Quần
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Balo-Túi-Ví-cat.78.9572">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Balo/ Túi/ Ví
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Mắt-kính-cat.78.9594">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Mắt kính
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Phụ-kiện-nam-cat.78.2831">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Phụ kiện nam
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Đồ-Trung-Niên-cat.78.15141">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Đồ Trung Niên
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Trang-Sức-Nam-cat.78.15139">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Trang Sức Nam
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Thắt-Lưng-cat.78.15135">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Thắt Lưng
                          </a>
                          <a className="shopee-category-list__sub-category" href="/Đồ-lót-cat.78.15023">
                            <svg className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled" viewBox="0 0 4 7">
                              <polygon points="4 3.5 0 0 0 7" />
                            </svg>
                            Đồ lót
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-search-filter-status shopee-search-filter-status--has-margin">
              <svg className="shopee-svg-icon " enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                <g>
                  <polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                </g>
              </svg>
              <div className="shopee-search-filter-status__text">Bộ lọc tìm kiếm</div>
            </div>
            <div className="shopee-filter-group shopee-location-filter">
              <div className="shopee-filter-group__header">Nơi bán</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="Hà Nội" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Hà Nội</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="TP. Hồ Chí Minh" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">TP. Hồ Chí Minh</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="Thái Nguyên" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Thái Nguyên</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="Vĩnh Phúc" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Vĩnh Phúc</span>
                    </label>
                  </div>
                </div>
                <div className="stardust-dropdown folding-items__toggle">
                  <div className="stardust-dropdown__item-header">
                    <div className="shopee-filter-group__toggle-btn">
                      Thêm
                      <svg className="shopee-svg-icon icon-arrow-down" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                        <g>
                          <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="stardust-dropdown__item-body">
                    <div className="folding-items__folded-items">
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Hải Phòng" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Hải Phòng</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Đồng Nai" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Đồng Nai</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Hưng Yên" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Hưng Yên</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Bình Dương" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Bình Dương</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Bắc Ninh" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Bắc Ninh</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Đà Nẵng" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Đà Nẵng</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Quảng Ninh" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Quảng Ninh</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Hải Dương" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Hải Dương</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Nam Định" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Nam Định</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Cần Thơ" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Cần Thơ</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Phú Thọ" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Phú Thọ</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Bà Rịa - Vũng Tàu" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Bà Rịa - Vũng Tàu</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Đắk Lắk" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Đắk Lắk</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Thanh Hóa" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Thanh Hóa</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="Thái Bình" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Thái Bình</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={-2} />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Nước ngoài</span>
                          </label>
                        </div>
                      </div>
                      <div className="_1SGvSP">
                        <div className="stardust-popover">
                          <div className="stardust-popover__target">
                            <div className="_2vZXoe">Khác &gt;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-filter-group shopee-logistics-filter">
              <div className="shopee-filter-group__header">Đơn vị vận chuyển</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue={1} />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Shopee 4H</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue={2} />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Shopee 24H</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue={3} />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Giao Hàng Tiết Kiệm</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue={4} />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Giao Hàng Nhanh</span>
                    </label>
                  </div>
                </div>
                <div className="stardust-dropdown folding-items__toggle">
                  <div className="stardust-dropdown__item-header">
                    <div className="shopee-filter-group__toggle-btn">
                      Thêm
                      <svg className="shopee-svg-icon icon-arrow-down" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                        <g>
                          <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="stardust-dropdown__item-body">
                    <div className="folding-items__folded-items">
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={5} />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">J&amp;T Express</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={6} />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Viettel Post</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={7} />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">VNPost Nhanh</span>
                          </label>
                        </div>
                      </div>
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={8} />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">VNPost Tiết Kiệm</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-filter-group">
              <div className="shopee-filter-group__header">Loại Shop</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="officialMall" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Shopee Mall</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="preferred" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Shop Yêu thích</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-filter-group IskcVE">
              <div className="shopee-filter-group__header">Đánh giá</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="ar9Njk">
                  <div className="rating-stars__container">
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="ar9Njk">
                  <div className="rating-stars__container">
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                  </div>
                  trở lên
                </div>
                <div className="ar9Njk">
                  <div className="rating-stars__container">
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                  </div>
                  trở lên
                </div>
                <div className="ar9Njk">
                  <div className="rating-stars__container">
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                  </div>
                  trở lên
                </div>
                <div className="ar9Njk">
                  <div className="rating-stars__container">
                    <svg className="shopee-svg-icon rating-stars__star icon-rating-colored" viewBox="0 0 9.5 8">
                      <defs>
                        <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset={0} stopColor="#ffca11" />
                          <stop offset={1} stopColor="#ffad27" />
                        </linearGradient>
                        <polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" />
                      </defs>
                      <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-876 -1270)">
                          <g transform="translate(155 992)">
                            <g transform="translate(600 29)">
                              <g transform="translate(10 239)">
                                <g transform="translate(101 10)">
                                  <use stroke="#ffa727" strokeWidth=".5" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ratingStar" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                    <div className="rating-stars__star _1-wkup" style={{width: '14px', height: '14px'}}>
                      <svg className="_1nCxye" viewBox="0 0 30 30">
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                            <stop offset="0%" stopColor="#FFD211" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="none" fillRule="evenodd" stroke="url(#a)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" />
                      </svg>
                      <svg className="_1nCxye" viewBox="0 0 30 30" style={{width: '0%'}}>
                        <defs>
                          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFCA11" />
                            <stop offset="100%" stopColor="#FFAD27" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#a)" fillRule="evenodd" d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z" />
                      </svg>
                    </div>
                  </div>
                  trở lên
                </div>
              </div>
            </div>
            <div className="shopee-filter-group">
              <div className="shopee-filter-group__header">Dịch vụ &amp; Khuyến mãi</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="wholesale" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Bán buôn/sỉ</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="withDiscount" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Đang giảm giá</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="freeShipping" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Miễn Phí Vận Chuyển</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="hasLowestPriceGuarantee" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Rẻ Vô Địch</span>
                    </label>
                  </div>
                </div>
                <div className="stardust-dropdown folding-items__toggle">
                  <div className="stardust-dropdown__item-header">
                    <div className="shopee-filter-group__toggle-btn">
                      Thêm
                      <svg className="shopee-svg-icon icon-arrow-down" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                        <g>
                          <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="stardust-dropdown__item-body">
                    <div className="folding-items__folded-items">
                      <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                          <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue="preOrder" />
                            <div className="shopee-checkbox__box"><i> </i></div>
                            <span className="shopee-checkbox__label">Hàng có sẵn</span>
                          </label>
                        </div>
                      </div>
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-filter-group">
              <div className="shopee-filter-group__header">Tình trạng</div>
              <div className="folding-items shopeee-filter-group__body folding-items--folded">
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="newItem" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Sản phẩm mới</span>
                    </label>
                  </div>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <div className="shopee-checkbox">
                    <label className="shopee-checkbox__control">
                      <input type="checkbox" name defaultValue="usedItem" />
                      <div className="shopee-checkbox__box"><i> </i></div>
                      <span className="shopee-checkbox__label">Sản phẩm đã dùng</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn">
              <div className="shopee-filter-group__header shopee-price-range-filter__header">Khoảng giá</div>
              <div className="shopee-filter-group__body shopee-price-range-filter__edit">
                <div className="shopee-price-range-filter__inputs">
                  <input type="text" maxLength={13} className="shopee-price-range-filter__input" placeholder="₫ TỪ" defaultValue />
                  <div className="shopee-price-range-filter__range-line" />
                  <input type="text" maxLength={13} className="shopee-price-range-filter__input" placeholder="₫ ĐẾN" defaultValue />
                </div>
              </div>
              <button className="shopee-button-solid shopee-button-solid--primary ">Áp dụng</button>
            </div>
            <button className="shopee-button-solid shopee-button-solid--primary ">Xóa tất cả</button>
         </div>
         <CategoryContent/>
         </div>
      </div>
    </div>
  </div>
</div>
      </>
    )
  }
}
