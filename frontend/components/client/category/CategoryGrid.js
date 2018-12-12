import React, { Component } from 'react'
import CategoryItem from './CategoryItem';

export default class CategoryGrid extends Component {
  render() {
    return (
        <div className="products elements-grid align-items-start woodmart-products-holder  woodmart-spacing-20 pagination-pagination row grid-columns-4" data-source="main_loop" data-min_price data-max_price>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        </div>
    )
  }
}
