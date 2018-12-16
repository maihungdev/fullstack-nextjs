import React from 'react';
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd';
const  Category = dynamic(() => import('../components/client/category/Category'), {
  loading: () => <Skeleton active />
})

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