import React from 'react';
import Category from '../components/client/category/Category';
import { connect } from '../store'
class CategoryPage extends React.Component {
  static async getInitialProps({ query }) {
    const id = query.id;
    const slug = query.slug;
    return {id, slug}
  }
  render() {
    const { id, slug } = this.props;
    return (
      <>
      <Category title={id} id={id}/>
      </>
    );
  }
}

export default CategoryPage