import { Drawer, Button } from 'antd';
import Category from '../components/client/category/Category';
class Test extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  increment = () => {
    this.store.increment(this.store.state.item+1);
  }
  addCart = (id, name, price) => {
    this.store.addCart(id, name, price);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addCart("id6","sp6", 400)}>Add</button>
        <Drawer
          title=""
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          width="340"
        >
           <div className="cart-widget-side woodmart-cart-opened">
        <div className="widget-heading">
          <h3 className="widget-title">Shopping cart</h3>
          
          <a href="" className="close-side-widget">close</a>
        </div>
        <div className="widget woocommerce widget_shopping_cart">
          <div className="widget_shopping_cart_content" style={{opacity: 1}}>
            <div className="shopping-cart-widget-body woodmart-scroll">
              <div className="woodmart-scroll-content">
                <ul className="cart_list product_list_widget woocommerce-mini-cart ">
                {this.store.state.info.map((item,i) => 
                  <li className="woocommerce-mini-cart-item mini_cart_item" key={i}>
                    <a href="https://woodmart.xtemos.com/shop/other/retail/gray-chair-2/demo/retail/" className="cart-item-link">Show</a>
                    <a href="https://woodmart.xtemos.com/cart/demo/retail/?remove_item=b83972e1aa62776ab9d15abf7ef6f387&_wpnonce=07d01cbe18" className="remove remove_from_cart_button" aria-label="Remove this item" data-product_id={21669} data-cart_item_key="b83972e1aa62776ab9d15abf7ef6f387" data-product_sku>×</a>																	<a href="https://woodmart.xtemos.com/shop/other/retail/gray-chair-2/demo/retail/" className="cart-item-image">
                      <img width={430} height={444} src="http://woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-430x444.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt srcSet="http://woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-430x444.jpg 430w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-145x150.jpg 145w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-291x300.jpg 291w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-768x792.jpg 768w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-776x800.jpg 776w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-290x299.jpg 290w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-97x100.jpg 97w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-45x45.jpg 45w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt-700x722.jpg 700w, //woodmart.xtemos.com/wp-content/uploads/2018/10/retail-product-19-opt.jpg 795w" sizes="(max-width: 430px) 100vw, 430px" />									</a>
                    <div className="cart-info">
                      <span className="product-title">{item.name}</span>
                      <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{item.price}</span></span>								
                    </div>
                  </li>
                  )}
                </ul>
                {/* end product list */}
              </div>
            </div>
            <div className="shopping-cart-widget-footer">
              <p className="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>455.00</span></p>
              <p className="woocommerce-mini-cart__buttons buttons"><a href="https://woodmart.xtemos.com/cart/demo/retail/" className="button btn-cart wc-forward">View cart</a><a href="https://woodmart.xtemos.com/checkout/demo/retail/" className="button checkout wc-forward">Checkout</a></p>
            </div>
          </div>
        </div>
      </div>      
        </Drawer>
      </div>
    );
  }
}

export default connect(Test)