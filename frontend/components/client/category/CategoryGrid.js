import React, { Component } from "react";
import dynamic from "next/dynamic";
import { inject, observer } from "mobx-react";
import { Query } from "react-apollo";
import LazyLoad from "react-lazyload";
import { Skeleton } from "antd";
import CategoryGrid_gql from "../../../api/store/queries/category/CategoryGrid";
import { Pagination } from "antd";
import Router from "../../../routes";
const CategoryItem = dynamic(() => import("./CategoryItem"), {
  loading: () => <Skeleton active />
});

@inject("store")
@observer
export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    current: this.props.store.category_page ? parseInt(this.props.store.category_page) : 1
  };
  onChange = page => {
    Router.pushRoute("category", {
      id: this.props.store.category_id,
      slug: this.props.store.category_slug,
      queryParams: {
        page: page
      }
    });
    this.setState({
      current: page
    });
  };
  render() {
    const { category_id, category_page } = this.props.store;
    //const page = category_page ? parseInt(category_page) : 1;
    const page = parseInt(category_page);
    return (
      <>
        <div
          className="products elements-grid align-items-start woodmart-products-holder  woodmart-spacing-20 pagination-pagination row grid-columns-4"
          data-source="main_loop"
          data-min_price
          data-max_price
        >
          <Query query={CategoryGrid_gql} variables={{ category_id, page }}>
            {({ data, loading, error }) => {
              const { viewer } = data;
              if (loading) return <Skeleton active />;
              if (error) return <div>Error</div>;
              return (
                <>
                  {viewer &&
                    viewer.productPagination.items.map(item => {
                      return (
                        <LazyLoad>
                          <CategoryItem id={item._id} />
                        </LazyLoad>
                      );
                    })}
                    <div class="shop-loop-head">
                  <Pagination
                    total={viewer.productPagination.count}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} trong ${total} sản phẩm`
                    }
                    current={(this.state.current === page) ? page : page}
                    onChange={this.onChange}
                    pageSize={8}
                    defaultCurrent={page}
                  />
                  </div>
                </>
              );
            }}
          </Query>
        </div>
      </>
    );
  }
}
