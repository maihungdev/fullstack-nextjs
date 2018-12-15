import React, { Component } from 'react'
import Cart from './Cart';
import ListCategory from './client/header/ListCategory';


class Header extends Component {
  constructor(props) {
    super(props)
    this.store = props.store

  }
  onClick = () => {
    this.child.showDrawer() 
  }
 render() {
  return (
    <div className="website-wrapper">
    <header className="whb-header whb-sticky-shadow whb-scroll-slide whb-sticky-clone">
      <div className="whb-main-header">
        <div className="whb-row whb-top-bar whb-not-sticky-row whb-with-bg whb-border-fullwidth whb-color-light whb-flex-flex-middle whb-hidden-mobile">
          <div className="container">
            <div className="whb-flex-row whb-top-bar-inner">
              <div className="whb-column whb-col-left whb-visible-lg">
                <div className="whb-divider-element whb-divider-stretch " />
                <ListCategory/>
                <div className="whb-divider-element whb-divider-stretch " />
                <div className="whb-text-element reset-mb-10 "><strong>FREE SHIPPING FOR ALL ORDERS OF $150</strong></div>
              </div>
              <div className="whb-column whb-col-center whb-visible-lg whb-empty-column" />
              <div className="whb-column whb-col-right whb-visible-lg">
                <div className="woodmart-social-icons text-center icons-design-default icons-size- color-scheme-light social-share social-form-circle"> <a href="https://www.facebook.com/sharer/sharer.php?u=https://woodmart.xtemos.com/demo-retail/demo/retail/" target="_blank" className=" woodmart-social-icon social-facebook"> <i className="fa fa-facebook" /> <span className="woodmart-social-icon-name">Facebook</span> </a> <a href="http://twitter.com/share?url=https://woodmart.xtemos.com/demo-retail/demo/retail/" target="_blank" className=" woodmart-social-icon social-twitter"> <i className="fa fa-twitter" /> <span className="woodmart-social-icon-name">Twitter</span> </a> <a href="http://plus.google.com/share?url=https://woodmart.xtemos.com/demo-retail/demo/retail/" target="_blank" className=" woodmart-social-icon social-google"> <i className="fa fa-google-plus" /> <span className="woodmart-social-icon-name">Google</span> </a> <a href="mailto:?subject=Check this https://woodmart.xtemos.com/demo-retail/demo/retail/" target="_blank" className=" woodmart-social-icon social-email"> <i className="fa fa-envelope" /> <span className="woodmart-social-icon-name">Email</span> </a> <a href="http://pinterest.com/pin/create/button/?url=https://woodmart.xtemos.com/demo-retail/demo/retail/&media=https://woodmartcdn-cec2.kxcdn.com/wp-includes/images/media/default.png" target="_blank" className=" woodmart-social-icon social-pinterest"> <i className="fa fa-pinterest" /> <span className="woodmart-social-icon-name">Pinterest</span> </a></div>
                <div className="whb-divider-element whb-divider-stretch " />
                <div className="whb-navigation whb-secondary-menu site-navigation woodmart-navigation menu-right navigation-style-bordered" role="navigation">
                  <div className="menu-top-bar-container">
                    <ul id="menu-top-bar" className="menu">
                      <li id="menu-item-2191" className="woodmart-open-newsletter menu-item menu-item-type-custom menu-item-object-custom menu-item-2191 item-level-0 menu-item-design-default menu-simple-dropdown item-event-hover"><a href="http://#" className="woodmart-nav-link"><i className="fa fa-envelope-o" /><span className="nav-link-text">Newsletter</span></a></li>
                      <li id="menu-item-2193" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2193 item-level-0 menu-item-design-default menu-simple-dropdown item-event-hover"><a href="https://woodmart.xtemos.com/contact-us/demo/retail/" className="woodmart-nav-link"><span className="nav-link-text">Contact Us</span></a></li>
                      <li id="menu-item-2194" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2194 item-level-0 menu-item-design-default menu-simple-dropdown item-event-hover"><a href="https://woodmart.xtemos.com/faqs/demo/retail/" className="woodmart-nav-link"><span className="nav-link-text">FAQs</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="whb-divider-element whb-divider-stretch " />
              </div>
              <div className="whb-column whb-col-mobile whb-hidden-lg whb-empty-column" />
            </div>
          </div>
        </div>
        <div className="whb-row whb-general-header whb-sticky-row whb-with-bg whb-without-border whb-color-light whb-flex-flex-middle">
          <div className="container">
            <div className="whb-flex-row whb-general-header-inner">
              <div className="whb-column whb-col-left whb-visible-lg">
                <div className="site-logo">
                  <div className="woodmart-logo-wrap"> <a href="https://woodmart.xtemos.com/" className="woodmart-logo woodmart-main-logo" rel="home"> <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/wood-logo-white.svg" alt="WoodMart" style={{maxWidth: '245px'}} /> </a></div>
                </div>
              </div>
              <div className="whb-column whb-col-center whb-visible-lg">
                <div className="whb-space-element " style={{width: '10px'}} />
                <div className="woodmart-search-form">
                  <form role="search" method="get" className="searchform  has-categories-dropdown search-style-with-bg woodmart-ajax-search" action="https://woodmart.xtemos.com/" data-thumbnail={1} data-price={1} data-post_type="product" data-count={20}>
                    <input type="text" className="s" placeholder="Search for products" defaultValue name="s" autoComplete="off" style={{paddingRight: '225px'}} /> <input type="hidden" name="post_type" defaultValue="product" />
                    <div className="search-by-category input-dropdown">
                      <div className="input-dropdown-inner woodmart-scroll-content">
                        <input type="hidden" name="product_cat" defaultValue={0} /> <a href="#" data-val={0}>Select category</a>
                        <div className="list-wrapper woodmart-scroll">
                          <ul className="woodmart-scroll-content">
                            <li style={{display: 'none'}}><a href="#" data-val={0}>Select category</a></li>
                            <li className="cat-item cat-item-184"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/uncategorized/demo/retail/" data-val="uncategorized" data-title="Uncategorized">Uncategorized</a></li>
                            <li className="cat-item cat-item-17"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/clocks/demo/retail/" data-val="clocks" data-title="Clocks">Clocks</a></li>
                            <li className="cat-item cat-item-14"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/lighting/demo/retail/" data-val="lighting" data-title="Lighting">Lighting</a></li>
                            <li className="cat-item cat-item-15"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/furniture/demo/retail/" data-val="furniture" data-title="Furniture" title="[html_block id=&quot;6139&quot;]">Furniture</a></li>
                            <li className="cat-item cat-item-13"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/accessories/demo/retail/" data-val="accessories" data-title="Accessories" title="[html_block id=&quot;5842&quot;]">Accessories</a></li>
                            <li className="cat-item cat-item-30"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/cooking/demo/retail/" data-val="cooking" data-title="Cooking">Cooking</a></li>
                            <li className="cat-item cat-item-16"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/toys/demo/retail/" data-val="toys" data-title="Toys">Toys</a></li>
                            <li className="cat-item cat-item-103">
                              <a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/demo/retail/" data-val="other" data-title="Other">Other</a>
                              <ul className="children">
                                <li className="cat-item cat-item-239"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/sell/demo/retail/" data-val="sell" data-title="Best sellers">Best sellers</a></li>
                                <li className="cat-item cat-item-205"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/bike-parts/demo/retail/" data-val="bike-parts" data-title="Bike parts">Bike parts</a></li>
                                <li className="cat-item cat-item-203"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/bikes/demo/retail/" data-val="bikes" data-title="Bikes">Bikes</a></li>
                                <li className="cat-item cat-item-354"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/black-friday/demo/retail/" data-val="black-friday" data-title="Black friday">Black friday</a></li>
                                <li className="cat-item cat-item-190"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/books/demo/retail/" data-val="books" data-title="Books">Books</a></li>
                                <li className="cat-item cat-item-305"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/camping/demo/retail/" data-val="camping" data-title="Camping">Camping</a></li>
                                <li className="cat-item cat-item-169"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/christmas/demo/retail/" data-val="christmas" data-title="Christmas">Christmas</a></li>
                                <li className="cat-item cat-item-167"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/cookbook/demo/retail/" data-val="cookbook" data-title="Cookbook">Cookbook</a></li>
                                <li className="cat-item cat-item-168"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/cosmetics/demo/retail/" data-val="cosmetics" data-title="Cosmetics">Cosmetics</a></li>
                                <li className="cat-item cat-item-303"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/decor/demo/retail/" data-val="decor" data-title="Decor">Decor</a></li>
                                <li className="cat-item cat-item-170"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/digitals/demo/retail/" data-val="digitals" data-title="Digitals">Digitals</a></li>
                                <li className="cat-item cat-item-189"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/electronics-2/demo/retail/" data-val="electronics-2" data-title="Electronics">Electronics</a></li>
                                <li className="cat-item cat-item-204"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/equipment/demo/retail/" data-val="equipment" data-title="Equipment">Equipment</a></li>
                                <li className="cat-item cat-item-356"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/flowers/demo/retail/" data-val="flowers" data-title="Flowers">Flowers</a></li>
                                <li className="cat-item cat-item-166"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/food/demo/retail/" data-val="food" data-title="Food">Food</a></li>
                                <li className="cat-item cat-item-193"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/glasses/demo/retail/" data-val="glasses" data-title="Glasses">Glasses</a></li>
                                <li className="cat-item cat-item-188"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/hardware/demo/retail/" data-val="hardware" data-title="Hardware">Hardware</a></li>
                                <li className="cat-item cat-item-211"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/hotspot/demo/retail/" data-val="hotspot" data-title="Hotspot">Hotspot</a></li>
                                <li className="cat-item cat-item-173"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/jewelry/demo/retail/" data-val="jewelry" data-title="Jewelry">Jewelry</a></li>
                                <li className="cat-item cat-item-183"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/kids-toys/demo/retail/" data-val="kids-toys" data-title="Kids Toys">Kids Toys</a></li>
                                <li className="cat-item cat-item-355"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/pixel-3/demo/retail/" data-val="pixel-3" data-title="Landing Pixel">Landing Pixel</a></li>
                                <li className="cat-item cat-item-177"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/lingerie/demo/retail/" data-val="lingerie" data-title="Lingerie">Lingerie</a></li>
                                <li className="cat-item cat-item-192"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/literature/demo/retail/" data-val="literature" data-title="Literature">Literature</a></li>
                                <li className="cat-item cat-item-175"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/marketplace/demo/retail/" data-val="marketplace" data-title="Marketplace">Marketplace</a></li>
                                <li className="cat-item cat-item-241"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/motorcycle/demo/retail/" data-val="motorcycle" data-title="Motorcycle">Motorcycle</a></li>
                                <li className="cat-item cat-item-176"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/organic/demo/retail/" data-val="organic" data-title="Organic">Organic</a></li>
                                <li className="cat-item cat-item-238"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/retail/demo/retail/" data-val="retail" data-title="Retail">Retail</a></li>
                                <li className="cat-item cat-item-185"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/shoes/demo/retail/" data-val="shoes" data-title="Shoes">Shoes</a></li>
                                <li className="cat-item cat-item-174"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/sport/demo/retail/" data-val="sport" data-title="Sport">Sport</a></li>
                                <li className="cat-item cat-item-212"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/travel/demo/retail/" data-val="travel" data-title="Travel">Travel</a></li>
                                <li className="cat-item cat-item-160"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/watch/demo/retail/" data-val="watch" data-title="Watch">Watch</a></li>
                                <li className="cat-item cat-item-240"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/wine/demo/retail/" data-val="wine" data-title="Wine">Wine</a></li>
                                <li className="cat-item cat-item-165"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/dark/demo/retail/" data-val="dark" data-title="Woodmart Dark">Woodmart Dark</a></li>
                                <li className="cat-item cat-item-141"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/cars/demo/retail/" data-val="cars" data-title="Cars">Cars</a></li>
                                <li className="cat-item cat-item-155"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/decore/demo/retail/" data-val="decore" data-title="Decore">Decore</a></li>
                                <li className="cat-item cat-item-139"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/fashion-colored/demo/retail/" data-val="fashion-colored" data-title="Fashion Colored">Fashion Colored</a></li>
                                <li className="cat-item cat-item-137"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/fashion-flat/demo/retail/" data-val="fashion-flat" data-title="Fashion Flat">Fashion Flat</a></li>
                                <li className="cat-item cat-item-109"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/electronics/demo/retail/" data-val="electronics" data-title="Electronics">Electronics</a></li>
                                <li className="cat-item cat-item-128"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/fashion-other/demo/retail/" data-val="fashion-other" data-title="Fashion">Fashion</a></li>
                                <li className="cat-item cat-item-127"><a className="pf-value" href="https://woodmart.xtemos.com/product-category/other/minimalism/demo/retail/" data-val="minimalism" data-title="Minimalism">Minimalism</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="searchsubmit"> Search </button>
                  </form>
                  <div className="search-results-wrapper">
                    <div className="woodmart-scroll">
                      <div className="woodmart-search-results woodmart-scroll-content">
                        <div className="autocomplete-suggestions" style={{position: 'absolute', display: 'none', maxHeight: '300px', zIndex: 9999}} />
                      </div>
                    </div>
                    <div className="woodmart-search-loader" />
                  </div>
                </div>
                <div className="whb-space-element " style={{width: '10px'}} />
              </div>
              <div className="whb-column whb-col-right whb-visible-lg">
                <div className="whb-space-element " style={{width: '15px'}} />
                <div className="whb-header-links woodmart-navigation woodmart-header-links">
                  <ul className="menu">
                    <li className="item-level-0 my-account-with-text login-side-opener menu-item-register menu-simple-dropdown item-event-hover"> <a href="https://woodmart.xtemos.com/my-account/demo/retail/"> <span> Login / Register </span> </a></li>
                  </ul>
                </div>
                <div className="woodmart-wishlist-info-widget whb-wishlist-icon without-product-count" title="My Wishlist"> <a href="https://woodmart.xtemos.com/wishlist/demo/retail/"> <span className="wishlist-info-wrap"> <span className="wishlist-icon"> </span> <span className="wishlist-label"> Wishlist </span> </span> </a></div>
                <Cart onRef={ref => (this.child = ref)}>
                <div
          className="woodmart-shopping-cart woodmart-cart-design-2 woodmart-cart-alt cart-widget-opener"
          onClick={this.onClick}
        >
          <span className="woodmart-cart-wrapper">
            <span className="woodmart-cart-icon" />
            <span className="woodmart-cart-totals">
              <span className="woodmart-cart-number">
               11 <span>items</span>
              </span>
              <span className="subtotal-divider">/</span>
              <span className="woodmart-cart-subtotal">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  807.00
                </span>
              </span>
            </span>{" "}
          </span>
        </div>
                  </Cart>
              </div>
              <div className="whb-column whb-mobile-left whb-hidden-lg">
                <div className="woodmart-burger-icon mobile-nav-icon whb-mobile-nav-icon mobile-style-text"> <span className="woodmart-burger" /> <span className="woodmart-burger-label">Menu</span></div>
              </div>
              <div className="whb-column whb-mobile-center whb-hidden-lg">
                <div className="site-logo">
                  <div className="woodmart-logo-wrap"> <a href="https://woodmart.xtemos.com/" className="woodmart-logo woodmart-main-logo" rel="home"> <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/wood-logo-white.svg" alt="WoodMart" style={{maxWidth: '179px'}} /> </a></div>
                </div>
              </div>
              <div className="whb-column whb-mobile-right whb-hidden-lg">
              <Cart onRef={ref => (this.child = ref)}>
                <div className="woodmart-shopping-cart woodmart-cart-design-5 woodmart-cart-alt cart-widget-opener" onClick={this.onClick}> <span className="woodmart-cart-wrapper"> <span className="woodmart-cart-icon"> </span> <span className="woodmart-cart-totals"> 						<span className="woodmart-cart-number">3 <span>items</span></span>
                        <span className="subtotal-divider">/</span> 						<span className="woodmart-cart-subtotal"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>807.00</span></span>
                      </span> </span> 
                </div>
</Cart>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: ".whb-top-bar{background-color:rgba(9,33,67,1);border-color:rgba(58,77,105,1);border-bottom-width:1px;border-bottom-style:solid}" }} />
      <style type="text/css" dangerouslySetInnerHTML={{__html: ".whb-general-header{background-color:rgba(9,33,67,1);border-bottom-width:0;border-bottom-style:solid}" }} />
    </header>
  </div>      
)
  }
}

export default Header
