import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { inject, observer } from 'mobx-react'
import { Query } from "react-apollo";
import LazyLoad from 'react-lazyload';
import { Skeleton } from 'antd';
import CategoryGrid_gql from '../../../api/store/queries/category/CategoryGrid';


const CategoryItem = dynamic(() => import('./CategoryItem'), {
  loading: () => <Skeleton active />
})

@inject('store')
@observer
export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
  }  
  
  render() {
    const {category_id, category_page} = this.props.store;             
    const page = parseInt(category_page)
    return (
      <>
        <div className="products elements-grid align-items-start woodmart-products-holder  woodmart-spacing-20 pagination-pagination row grid-columns-4" data-source="main_loop" data-min_price data-max_price>
        <Query query={CategoryGrid_gql} variables={{ category_id, page}}>
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
