import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const allProductCategory = gql`
query allProductCategory($category_id: String!){
  viewer{
    productList(filter: {category_id: $category_id}){
      _id
    }
  }
}
`;

export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const category_id = this.props.id;
    return (
      <>
        <div className="products elements-grid align-items-start woodmart-products-holder  woodmart-spacing-20 pagination-pagination row grid-columns-4" data-source="main_loop" data-min_price data-max_price>
        <Query query={allProductCategory} variables={{ category_id }}>
        {
            ({data}) => {
                const { viewer } = data;
                return( <>
                  {viewer &&
                    viewer.productList.map(item => {
                      return <CategoryItem id={item._id} />;
                    })}
                    </>
                )
            }
        }
        </Query>
        </div>
        </>
    )
  }
}
