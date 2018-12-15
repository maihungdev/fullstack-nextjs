import React, { Component } from 'react'
import CategoryContent from './CategoryContent';
import CategorySidebar from './CategorySidebar';

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
