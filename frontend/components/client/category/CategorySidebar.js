import React, { Component } from 'react'

export default class CategorySidebar extends Component {
  render() {
    return (
        <aside className="sidebar-container col-lg-3 col-md-3 col-12 order-md-first sidebar-left area-sidebar-shop" role="complementary">
        <div className="widget-heading"> <a href="#" className="close-side-widget">close</a></div>
        <div className="sidebar-inner woodmart-sidebar-scroll">
          <div className="widget-area woodmart-sidebar-content">
            <div id="woocommerce_product_categories-4" className="woodmart-widget widget sidebar-widget woocommerce widget_product_categories">
              <h5 className="widget-title">Product Categories</h5>
              <ul className="product-categories">
                <li className="cat-item cat-item-13"><a href="https://woodmart.xtemos.com/product-category/accessories/demo/digitals/">Accessories</a> <span className="count">12</span></li>
                <li className="cat-item cat-item-184"><a href="https://woodmart.xtemos.com/product-category/uncategorized/demo/digitals/">Uncategorized</a> <span className="count">1</span></li>
              </ul>
            </div>
            <div id="woocommerce_price_filter-4" className="woodmart-widget widget sidebar-widget woocommerce widget_price_filter">
              <h5 className="widget-title">Filter by price</h5>
              <form method="get" action="https://woodmart.xtemos.com/shop/demo/digitals/">
                <div className="price_slider_wrapper">
                  <div className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style={{}}>
                    <div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '0%', width: '100%'}} />
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '0%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '100%'}} />
                  </div>
                  <div className="price_slider_amount">
                    <input type="text" id="min_price" name="min_price" defaultValue={5} data-min={5} placeholder="Min price" style={{display: 'none'}} /> <input type="text" id="max_price" name="max_price" defaultValue={999} data-max={999} placeholder="Max price" style={{display: 'none'}} /> <button type="submit" className="button">Filter</button>
                    <div className="price_label" style={{}}> Price: <span className="from">$5</span> — <span className="to">$999</span></div>
                    <input type="hidden" name="per_row" defaultValue={4} /><input type="hidden" name="shop_view" defaultValue="grid" /><input type="hidden" name="opt" defaultValue="hover_icons_cart" />
                    <div className="clear" />
                  </div>
                </div>
              </form>
            </div>
            <div id="woodmart-woocommerce-layered-nav-15" className="woodmart-widget widget sidebar-widget woodmart-woocommerce-layered-nav">
              <h5 className="widget-title">Filter by color</h5>
              <div className="woodmart-scroll">
                <ul className="show-labels-on swatches-normal swatches-display-list woodmart-scroll-content">
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=beige" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#f0deba'}} className>Beige</span></span><span className="layer-term-name">Beige</span></span></a> <span className="count">10</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=black" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#0a0a0a'}} className>Black</span></span><span className="layer-term-name">Black</span></span></a> <span className="count">25</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=blue" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#19a8e3'}} className>Blue</span></span><span className="layer-term-name">Blue</span></span></a> <span className="count">20</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=brown" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#49271d'}} className>Brown</span></span><span className="layer-term-name">Brown</span></span></a> <span className="count">11</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=gray" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#bfbfbf'}} className>Gray</span></span><span className="layer-term-name">Gray</span></span></a> <span className="count">22</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=green" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#50b948'}} className>Green</span></span><span className="layer-term-name">Green</span></span></a> <span className="count">13</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=orange" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#ff7900'}} className>Orange</span></span><span className="layer-term-name">Orange</span></span></a> <span className="count">4</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=red" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#cb2028'}} className>Red</span></span><span className="layer-term-name">Red</span></span></a> <span className="count">17</span></li>
                  <li className="wc-layered-nav-term  with-swatch-color"><a rel="nofollow" href="https://woodmart.xtemos.com/shop/?filter_color=yellow" className="layered-nav-link"><span className="swatch-inner"><span className="filter-swatch"><span style={{backgroundColor: '#fefb4a'}} className>Yellow</span></span><span className="layer-term-name">Yellow</span></span></a> <span className="count">13</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>      
    )
  }
}
