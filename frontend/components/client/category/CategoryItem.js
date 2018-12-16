import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Skeleton } from 'antd';

const getInfoProduct = gql`
query getInfoProduct($id : MongoID!){
  viewer {
    productById(_id: $id) {
      name
      product_id
      slug
      sale_price
      regular_price
      images {
        url
      } 
    }
  }
}
`;
export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    const { id } = this.props;
    return (
      <>
        <Query query={getInfoProduct} variables={{ id }}>
          {({ data, loading, error }) => {
            const { viewer } = data;
            if (loading) return <div
            className="product-grid-item product without-stars product-with-swatches quick-shop-on quick-view-on woodmart-hover-alt  col-6 col-sm-4 col-md-3 col-lg-3 product-in-grid post-1087 type-product status-publish has-post-thumbnail product_cat-furniture instock sale featured shipping-taxable purchasable product-type-variable has-default-attributes hover-width-small"
          ><Skeleton active /></div>
            if (error) return <div>Error</div>
            return (
              <>
                <div
                  className="product-grid-item product without-stars product-with-swatches quick-shop-on quick-view-on woodmart-hover-alt  col-6 col-sm-4 col-md-3 col-lg-3 product-in-grid post-1087 type-product status-publish has-post-thumbnail product_cat-furniture instock sale featured shipping-taxable purchasable product-type-variable has-default-attributes hover-width-small"
                >
                  <div className="product-element-top">
                    <a
                      href="https://woodmart.xtemos.com/shop/furniture/eames-lounge-chair/demo/digitals/"
                      className="product-image-link"
                    >
                      <div className="product-labels labels-rectangular">
                        <span className="onsale product-label">-50%</span>
                        <span className="featured product-label">Hot</span>
                      </div>
                      <img
                        width={430}
                        height={491}
                        src={viewer.productById.images[0].url}
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="https://woodmart.xtemos.com/shop/furniture/eames-lounge-chair/demo/digitals/">
                      {viewer.productById.name}
                    </a>
                  </h3>
                  <div className="wrap-price">
                    <div className="swap-wrapp">
                      <div className="swap-elements">
                        <span className="price">
                          <del>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {viewer.productById.regular_price}
                            </span>
                          </del>{" "}
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {viewer.productById.sale_price}
                            </span>
                          </ins>
                        </span>
                        <div className="btn-add-swap">
                          <a
                            href="https://woodmart.xtemos.com/shop/furniture/eames-lounge-chair/demo/digitals/"
                            data-quantity={1}
                            className="button product_type_variable add_to_cart_button add-to-cart-loop"
                            data-product_id={1087}
                            data-product_sku
                            aria-label="Select options for “Eames lounge chair”"
                            rel="nofollow"
                          >
                            <span>Add to cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}
