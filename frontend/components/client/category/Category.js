import React, { Component } from 'react'
import CategorySidebar from './CategorySidebar';
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd';
const  CategoryContent = dynamic(() => import('./CategoryContent'), {
  loading: () => <Skeleton active />
})
export default class Category extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="website-wrapper">
        <div className="main-page-wrapper">
          <div className="container">
            <div className="row content-layout-wrapper">
            <CategoryContent/>
            <CategorySidebar/>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
