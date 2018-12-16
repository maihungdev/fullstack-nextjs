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
    const slug = query.slug;
    const page = query.page;
    return {id, slug, page}
  }    
  render() {    
    this.props.page ? this.props.store.setPageCategory(this.props.page) : this.props.store.setPageCategory("1")
    this.props.id ? this.props.store.setCategory(this.props.id, this.props.slug) : null
    return (
      <>
      <Category/>
      </>
    );
  }
}

export default CategoryPage