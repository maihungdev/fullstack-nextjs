import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { inject, observer } from 'mobx-react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LazyLoad from 'react-lazyload';
import { Skeleton } from 'antd';
const CategoryItem = dynamic(() => import('./CategoryItem'), {
  loading: () => <Skeleton active />
})
const allProductCategory = gql`
query allProductCategory($category_id: String!)
{
  viewer{
    productPagination(filter:{category_id: $category_id}){
      count
      items {
        _id
        options {
          name
        }
      }
      pageInfo {
        pageCount
        itemCount
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
`;
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}
@inject('store')
@observer
export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    const {category_id} = this.props.store;        
    return (
      <>
        <div className="products elements-grid align-items-start woodmart-products-holder  woodmart-spacing-20 pagination-pagination row grid-columns-4" data-source="main_loop" data-min_price data-max_price>
        <Query query={allProductCategory} variables={{ category_id }}>
        {
            ({data, loading, error}) => {
                const { viewer } = data;
                if (loading) return <Skeleton active />
                if (error) return <div>Error</div>
                return( <>
                  {viewer &&
                    viewer.productPagination.items.map(item => {
                      return <LazyLoad><CategoryItem id={item._id}/></LazyLoad>;
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
