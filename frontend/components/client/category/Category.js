import React, { Component } from 'react'
import CategoryContent from './CategoryContent';
import CategorySidebar from './CategorySidebar';

export default class Category extends Component {
  render() {
    return (
        <div className="website-wrapper">
        <div className="main-page-wrapper">
          <div className="page-title page-title-default title-size-default title-design-centered color-scheme-light title-shop" style={{backgroundImage: 'url(https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/04/blog-title-bg6.jpg)'}}>
            <div className="container">
              <div className="nav-shop">
                <div className="shop-title-wrapper">
                  <h1 className="entry-title">Shop</h1>
                </div>
                <div className="woodmart-show-categories"><a href="#">Categories</a></div>
                <ul className="woodmart-product-categories has-product-count">
                  <li className="cat-link shop-all-link">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/shop/"> <span className="category-summary"> <span className="category-name">All</span> <span className="category-products-count"> <span className="cat-count-label">products</span> </span> </span> </a></div>
                  </li>
                  <li className="cat-item cat-item-184 wc-default-cat">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/uncategorized/demo/digitals/"><span className="category-summary"><span className="category-name">Uncategorized</span><span className="category-products-count"><span className="cat-count-number">1</span> <span className="cat-count-label">product</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-17 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/clocks/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg" alt="Clocks" className="category-icon" /><span className="category-summary"><span className="category-name">Clocks</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-14 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/lighting/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/light-bulb.svg" alt="Lighting" className="category-icon" /><span className="category-summary"><span className="category-name">Lighting</span><span className="category-products-count"><span className="cat-count-number">16</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-15 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/furniture/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/chair.svg" alt="Furniture" className="category-icon" /><span className="category-summary"><span className="category-name">Furniture</span><span className="category-products-count"><span className="cat-count-number">22</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-13 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/accessories/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/flower.svg" alt="Accessories" className="category-icon" /><span className="category-summary"><span className="category-name">Accessories</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-30 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/cooking/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/knives.svg" alt="Cooking" className="category-icon" /><span className="category-summary"><span className="category-name">Cooking</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-16 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/toys/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/rocking-horse.svg" alt="Toys" className="category-icon" /><span className="category-summary"><span className="category-name">Toys</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                  </li>
                  <li className="cat-item cat-item-103 ">
                    <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/demo/digitals/"><span className="category-summary"><span className="category-name">Other</span><span className="category-products-count"><span className="cat-count-number">488</span> <span className="cat-count-label">products</span></span></span></a></div>
                    <ul className="children">
                      <li className="cat-item cat-item-239 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/sell/demo/digitals/"><span className="category-summary"><span className="category-name">Best sellers</span><span className="category-products-count"><span className="cat-count-number">2</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-205 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/bike-parts/demo/digitals/"><span className="category-summary"><span className="category-name">Bike parts</span><span className="category-products-count"><span className="cat-count-number">4</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-203 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/bikes/demo/digitals/"><span className="category-summary"><span className="category-name">Bikes</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-354 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/black-friday/demo/digitals/"><span className="category-summary"><span className="category-name">Black friday</span><span className="category-products-count"><span className="cat-count-number">39</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-190 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/books/demo/digitals/"><span className="category-summary"><span className="category-name">Books</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-305 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/camping/demo/digitals/"><span className="category-summary"><span className="category-name">Camping</span><span className="category-products-count"><span className="cat-count-number">10</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-169 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/christmas/demo/digitals/"><span className="category-summary"><span className="category-name">Christmas</span><span className="category-products-count"><span className="cat-count-number">8</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-167 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/cookbook/demo/digitals/"><span className="category-summary"><span className="category-name">Cookbook</span><span className="category-products-count"><span className="cat-count-number">3</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-168 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/cosmetics/demo/digitals/"><span className="category-summary"><span className="category-name">Cosmetics</span><span className="category-products-count"><span className="cat-count-number">8</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-303 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/decor/demo/digitals/"><span className="category-summary"><span className="category-name">Decor</span><span className="category-products-count"><span className="cat-count-number">15</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-170 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/digitals/demo/digitals/"><span className="category-summary"><span className="category-name">Digitals</span><span className="category-products-count"><span className="cat-count-number">17</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-189 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/electronics-2/demo/digitals/"><span className="category-summary"><span className="category-name">Electronics</span><span className="category-products-count"><span className="cat-count-number">19</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-204 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/equipment/demo/digitals/"><span className="category-summary"><span className="category-name">Equipment</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-356 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/flowers/demo/digitals/"><span className="category-summary"><span className="category-name">Flowers</span><span className="category-products-count"><span className="cat-count-number">14</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-166 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/food/demo/digitals/"><span className="category-summary"><span className="category-name">Food</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-193 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/glasses/demo/digitals/"><span className="category-summary"><span className="category-name">Glasses</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-188 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/hardware/demo/digitals/"><span className="category-summary"><span className="category-name">Hardware</span><span className="category-products-count"><span className="cat-count-number">8</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-211 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/hotspot/demo/digitals/"><span className="category-summary"><span className="category-name">Hotspot</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-173 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/jewelry/demo/digitals/"><span className="category-summary"><span className="category-name">Jewelry</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-183 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/kids-toys/demo/digitals/"><span className="category-summary"><span className="category-name">Kids Toys</span><span className="category-products-count"><span className="cat-count-number">13</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-355 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/pixel-3/demo/digitals/"><span className="category-summary"><span className="category-name">Landing Pixel</span><span className="category-products-count"><span className="cat-count-number">2</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-177 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/lingerie/demo/digitals/"><span className="category-summary"><span className="category-name">Lingerie</span><span className="category-products-count"><span className="cat-count-number">10</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-192 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/literature/demo/digitals/"><span className="category-summary"><span className="category-name">Literature</span><span className="category-products-count"><span className="cat-count-number">6</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-175 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/marketplace/demo/digitals/"><span className="category-summary"><span className="category-name">Marketplace</span><span className="category-products-count"><span className="cat-count-number">66</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-241 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/motorcycle/demo/digitals/"><span className="category-summary"><span className="category-name">Motorcycle</span><span className="category-products-count"><span className="cat-count-number">13</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-176 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/organic/demo/digitals/"><span className="category-summary"><span className="category-name">Organic</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-238 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/retail/demo/digitals/"><span className="category-summary"><span className="category-name">Retail</span><span className="category-products-count"><span className="cat-count-number">30</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-185 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/shoes/demo/digitals/"><span className="category-summary"><span className="category-name">Shoes</span><span className="category-products-count"><span className="cat-count-number">17</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-174 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/sport/demo/digitals/"><span className="category-summary"><span className="category-name">Sport</span><span className="category-products-count"><span className="cat-count-number">16</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-212 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/travel/demo/digitals/"><span className="category-summary"><span className="category-name">Travel</span><span className="category-products-count"><span className="cat-count-number">8</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-160 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/watch/demo/digitals/"><span className="category-summary"><span className="category-name">Watch</span><span className="category-products-count"><span className="cat-count-number">4</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-240 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/wine/demo/digitals/"><span className="category-summary"><span className="category-name">Wine</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-165 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/dark/demo/digitals/"><span className="category-summary"><span className="category-name">Woodmart Dark</span><span className="category-products-count"><span className="cat-count-number">9</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-141 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/cars/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/break-w.svg" alt="Cars" className="category-icon" /><span className="category-summary"><span className="category-name">Cars</span><span className="category-products-count"><span className="cat-count-number">8</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-155 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/decore/demo/digitals/"><span className="category-summary"><span className="category-name">Decore</span><span className="category-products-count"><span className="cat-count-number">9</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-139 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/fashion-colored/demo/digitals/"><span className="category-summary"><span className="category-name">Fashion Colored</span><span className="category-products-count"><span className="cat-count-number">4</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-137 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/fashion-flat/demo/digitals/"><span className="category-summary"><span className="category-name">Fashion Flat</span><span className="category-products-count"><span className="cat-count-number">10</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-152 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/hand-made/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/biscuit-w.svg" alt="Hand Made" className="category-icon" /><span className="category-summary"><span className="category-name">Hand Made</span><span className="category-products-count"><span className="cat-count-number">0</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-109 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/electronics/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/008-game-console-w.svg" alt="Electronics" className="category-icon" /><span className="category-summary"><span className="category-name">Electronics</span><span className="category-products-count"><span className="cat-count-number">16</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-128 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/fashion-other/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/007-shirt-w.svg" alt="Fashion" className="category-icon" /><span className="category-summary"><span className="category-name">Fashion</span><span className="category-products-count"><span className="cat-count-number">10</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                      <li className="cat-item cat-item-127 ">
                        <div className="category-nav-link"><a href="https://woodmart.xtemos.com/product-category/other/minimalism/demo/digitals/"><img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/006-hand-bag-w.svg" alt="Minimalism" className="category-icon" /><span className="category-summary"><span className="category-name">Minimalism</span><span className="category-products-count"><span className="cat-count-number">12</span> <span className="cat-count-label">products</span></span></span></a></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row content-layout-wrapper">
            <CategoryContent/>
            <CategorySidebar/>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
