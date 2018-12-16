import gql from 'graphql-tag';

export default gql`
query allProductCategory($category_id: String!, $page: Int)
{
  viewer{
    productPagination(filter:{category_id: $category_id}, perPage: 2, page: $page){
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