import {Skeleton} from 'antd';

export default class ItemProduct extends React.Component {
    state = {
        loading: true,
      }
      componentDidMount = () => {
        this.setState({loading: false})
      }
      
  render() {
    const { loading } = this.state;
    return (
      <>
        <div
          className="product-grid-item new-label product without-stars product-no-swatches quick-shop-on quick-view-on woodmart-hover-quick  col-6 col-sm-4 col-md-3 col-lg-2 product-in-grid post-15018 type-product status-publish has-post-thumbnail product_cat-marketplace instock shipping-taxable purchasable product-type-simple"
        >
         <Skeleton loading={loading} active>
          <div className="product-element-top">
            <a
              href="https://woodmart.xtemos.com/shop/other/marketplace/tincidunt-nulla-quis/"
              className="product-image-link"
            >
              <div className="product-labels">
                <span className="new product-label">Sale</span>
              </div>
              <img
                width={430}
                height={487}
                src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1.jpg"
                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt
                srcSet="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1.jpg 1060w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-133x150.jpg 133w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-265x300.jpg 265w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-768x869.jpg 768w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-707x800.jpg 707w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-290x328.jpg 290w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-88x100.jpg 88w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-430x487.jpg 430w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-200x226.jpg 200w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-700x792.jpg 700w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/12/market-watch-1-860x974.jpg 860w"
                sizes="(max-width: 430px) 100vw, 430px"
              />
            </a>
            
            <div className="woodmart-add-btn">
              <a
                href="/blog/woodmart_element/products-6-columns-with-ajax-arrows/?add-to-cart=15018" 
                className="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-loop"
                rel="nofollow"
              >
                <span>Add to cart</span>
              </a>
            </div>
            
          </div>
          <span className="price">
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>269.00
            </span>
          </span>
          <h3 className="product-title">
            <a href="https://woodmart.xtemos.com/shop/other/marketplace/tincidunt-nulla-quis/">
              Tieu de san pham 
            </a>
          </h3>
          <div className="woodmart-product-cats">
            <a
              href="https://woodmart.xtemos.com/product-category/other/marketplace/"
              rel="tag"
            >
              Danh muc
            </a>
          </div>
          </Skeleton>
        </div>
      </>
    );
  }
}
