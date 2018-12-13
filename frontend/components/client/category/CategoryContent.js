import React, { Component } from 'react'
import CategoryGrid from './CategoryGrid';

export default class CategoryContent extends Component {
  render() {
    return (
        <div className="site-content shop-content-area col-lg-9 col-12 col-md-9 order-md-last description-area-before content-with-products" role="main">
        <div className="shop-loop-head">
          <div className="woodmart-woo-breadcrumbs">
            <nav className="woocommerce-breadcrumb"><a href="https://woodmart.xtemos.com" className="breadcrumb-link breadcrumb-link-last">Home</a><span className="breadcrumb-last"> Shop</span></nav>
            <p className="woocommerce-result-count"> Showing 1–12 of 569 results</p>
          </div>
          <div className="woodmart-shop-tools">
            <div className="woodmart-show-sidebar-btn"> <span className="woodmart-side-bar-icon" /> <span>Show sidebar</span></div>
            <div className="woodmart-products-per-page"><span className="per-page-title">Show</span><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_page=9" className="per-page-variation"> <span>9</span> </a> <span className="per-page-border" /> <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_page=12" className="per-page-variation current-variation"> <span>12</span> </a> <span className="per-page-border" /> <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_page=18" className="per-page-variation"> <span>18</span> </a> <span className="per-page-border" /> <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_page=24" className="per-page-variation"> <span>24</span> </a> <span className="per-page-border" /></div>
            <div className="woodmart-products-shop-view products-view-grid_list">
              <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?shop_view=list" className="shop-view per-row-list ">
                <svg version="1.1" id="list-view" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={18} height={18} viewBox="0 0 18 18" enableBackground="new 0 0 18 18" xmlSpace="preserve">
                  <rect width={18} height={2} />
                  <rect y={16} width={18} height={2} />
                  <rect y={8} width={18} height={2} />
                </svg>
              </a>
              <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_row=2&shop_view=grid" className="per-row-2 shop-view ">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                  <path d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z" />
                  <path d="M17,2v5h-5V2H17 M19,0h-9v9h9V0L19,0z" />
                  <path d="M7,12v5H2v-5H7 M9,10H0v9h9V10L9,10z" />
                  <path d="M17,12v5h-5v-5H17 M19,10h-9v9h9V10L19,10z" />
                </svg>
              </a>
              <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_row=3&shop_view=grid" className="per-row-3 shop-view ">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                  <rect width={5} height={5} />
                  <rect x={7} width={5} height={5} />
                  <rect x={14} width={5} height={5} />
                  <rect y={7} width={5} height={5} />
                  <rect x={7} y={7} width={5} height={5} />
                  <rect x={14} y={7} width={5} height={5} />
                  <rect y={14} width={5} height={5} />
                  <rect x={7} y={14} width={5} height={5} />
                  <rect x={14} y={14} width={5} height={5} />
                </svg>
              </a>
              <a rel="nofollow" href="https://woodmart.xtemos.com/shop/?per_row=4&shop_view=grid" className="per-row-4 shop-view current-variation">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                  <rect width={4} height={4} />
                  <rect x={5} width={4} height={4} />
                  <rect x={10} width={4} height={4} />
                  <rect x={15} width={4} height={4} />
                  <rect y={5} width={4} height={4} />
                  <rect x={5} y={5} width={4} height={4} />
                  <rect x={10} y={5} width={4} height={4} />
                  <rect x={15} y={5} width={4} height={4} />
                  <rect y={15} width={4} height={4} />
                  <rect x={5} y={15} width={4} height={4} />
                  <rect x={10} y={15} width={4} height={4} />
                  <rect x={15} y={15} width={4} height={4} />
                  <rect y={10} width={4} height={4} />
                  <rect x={5} y={10} width={4} height={4} />
                  <rect x={10} y={10} width={4} height={4} />
                  <rect x={15} y={10} width={4} height={4} />
                </svg>
              </a>
            </div>
            <form className="woocommerce-ordering" method="get">
              <select name="orderby" className="orderby">
                <option value="menu_order" selected="selected">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
              <input type="hidden" name="per_row" defaultValue={4} /><input type="hidden" name="shop_view" defaultValue="grid" /><input type="hidden" name="opt" defaultValue="hover_icons_cart" /> <input type="hidden" name="per_row" defaultValue={4} /><input type="hidden" name="shop_view" defaultValue="grid" /><input type="hidden" name="opt" defaultValue="hover_icons_cart" />
            </form>
          </div>
        </div>
        <div className="woodmart-active-filters" />
        <div className="woodmart-shop-loader hidden-loader hidden-from-top" style={{marginLeft: '138px'}} />
        <CategoryGrid id={this.props.id}/>
        <div className="products-footer">
          <nav className="woocommerce-pagination">
            <ul className="page-numbers">
              <li><span aria-current="page" className="page-numbers current">1</span></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/2/?per_row=4&shop_view=grid&opt=hover_icons_cart">2</a></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/3/?per_row=4&shop_view=grid&opt=hover_icons_cart">3</a></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/4/?per_row=4&shop_view=grid&opt=hover_icons_cart">4</a></li>
              <li><span className="page-numbers dots">…</span></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/46/?per_row=4&shop_view=grid&opt=hover_icons_cart">46</a></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/47/?per_row=4&shop_view=grid&opt=hover_icons_cart">47</a></li>
              <li><a className="page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/48/?per_row=4&shop_view=grid&opt=hover_icons_cart">48</a></li>
              <li><a className="next page-numbers" href="https://woodmart.xtemos.com/shop/demo/digitals/page/2/?per_row=4&shop_view=grid&opt=hover_icons_cart">→</a></li>
            </ul>
          </nav>
        </div>
      </div>      
    )
  }
}
