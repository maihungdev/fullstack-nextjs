import React from 'react';
import Category from '../components/client/category/Category';

export default class CategoryPage extends React.Component {
  static async getInitialProps({ query }) {
    const slug = query.slug;
    return {slug}
  }
  render() {
    const { slug } = this.props;
    {
      console.log(this.props.slug);
    }
    return (
      <>
      <Category title = {slug} />
        </>
    );
  }
}
