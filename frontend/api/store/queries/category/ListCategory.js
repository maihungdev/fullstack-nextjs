import gql from "graphql-tag";

export default gql`
  {
    viewer {
      categoryList {
        name
        slug
        category_id
      }
    }
  }
`;
