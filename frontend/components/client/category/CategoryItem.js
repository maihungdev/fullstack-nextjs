import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getInfoProduct = gql`
  query getInfoProduct($id: MongoID!) {
    viewer {
      productById(_id: $id) {
        name
        product_id
        slug
        sale_price
        regular_price
      }
    }
  }
`;

export default class CategoryItem extends Component {
  render() {
    const { id } = this.props;
    console.log(id);
    return (
      <>
        <Query query={getInfoProduct} variables={{ id }}>
          {({ data }) => {
            const { viewer } = data;
            console.log(viewer);
            return (
              <>
                <div
                  className="product-grid-item product without-stars product-with-swatches quick-shop-on quick-view-on woodmart-hover-alt  col-6 col-sm-4 col-md-3 col-lg-3 product-in-grid post-1087 type-product status-publish has-post-thumbnail product_cat-furniture instock sale featured shipping-taxable purchasable product-type-variable has-default-attributes hover-width-small"
                  data-loop={11}
                  data-id={1087}
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
                        src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt
                        srcSet="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8.jpg 700w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-131x150.jpg 131w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-263x300.jpg 263w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-88x100.jpg 88w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-430x490.jpg 430w"
                        sizes="(max-width: 430px) 100vw, 430px"
                      />
                    </a>
                    <div className="hover-img">
                      {" "}
                      <a href="https://woodmart.xtemos.com/shop/furniture/eames-lounge-chair/demo/digitals/">
                        {" "}
                        <img
                          width={430}
                          height={491}
                          src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2.jpg"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt
                          srcSet="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2.jpg 700w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2-131x150.jpg 131w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2-263x300.jpg 263w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2-88x100.jpg 88w, https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/09/product-furniture-8-2-430x490.jpg 430w"
                          sizes="(max-width: 430px) 100vw, 430px"
                        />{" "}
                      </a>
                    </div>
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
                          {" "}
                          <a
                            href="https://woodmart.xtemos.com/shop/furniture/eames-lounge-chair/demo/digitals/"
                            data-quantity={1}
                            className="button product_type_variable add_to_cart_button add-to-cart-loop"
                            data-product_id={1087}
                            data-product_sku
                            aria-label="Select options for “Eames lounge chair”"
                            rel="nofollow"
                          >
                            <span>Select options</span>
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
