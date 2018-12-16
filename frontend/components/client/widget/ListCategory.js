import React, { Component } from "react";
import { Link } from "../../../routes";
import { Query } from "react-apollo";
import ListCategory_gql from "../../../api/store/queries/category/ListCategory";
export default class ListCategory extends Component {
  render() {
    return (
      <>
        <div
          id="woocommerce_product_categories-4"
          className="woodmart-widget widget sidebar-widget woocommerce widget_product_categories"
        >
          <h5 className="widget-title">Product Categories</h5>
          <ul className="product-categories">
            <Query query={ListCategory_gql}>
              {({ data }) => {
                const { viewer } = data;
                return (
                  <>
                    {viewer &&
                      viewer.categoryList.map(item => {
                        return (
                          <li className="cat-item cat-item-13" key={item._id}>
                          <Link route="category" id={item.category_id} slug={item.slug}>
                            <a href="#">
                              {item.name}
                            </a>
                            </Link>
                            <span className="count">12</span>
                          </li>
                        );
                      })}
                  </>
                );
              }}
            </Query>
          </ul>
        </div>
      </>
    );
  }
}
