import gql from 'graphql-tag';

export default gql`
query getInfoProduct($id : MongoID!){
  viewer {
    productById(_id: $id) {
      name
      product_id
      slug
      sale_price
      regular_price
      images {
        url
      } 
    }
  }
}
`;