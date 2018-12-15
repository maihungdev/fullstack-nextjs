import React from 'react';
import Category from '../components/client/category/Category';
import { inject, observer } from 'mobx-react'
@inject('store')
@observer
class CategoryPage extends React.Component {
  constructor(props) {
    super(props)
  }  
  static async getInitialProps({ query }) {
    const id = query.id;
    return {id}
  }    
  render() {
    this.props.store.setCategory(this.props.id)
    return (
      <>
      <Category/>
      </>
    );
  }
}

export default CategoryPage