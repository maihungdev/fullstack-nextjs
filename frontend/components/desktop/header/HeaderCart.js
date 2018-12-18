
import React, { Component } from 'react'

export default class HeaderCart extends Component {
  render() {
    return (
      <>
         <div id="header-cart">
          <a rel="nofollow" href="https://tiki.vn/checkout/cart" className="header-cart item">
            <i className="icon-style-1 tikicon icon-cart" /> Giỏ hàng
            <span className="cart-count hide">0</span>
          </a>
        </div>
      </>
    )
  }
}
