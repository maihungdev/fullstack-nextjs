import { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Skeleton, Pagination, Select, Button } from "antd";

const Option = Select.Option;

const getAllCategory = gql`
  {
    viewer {
      categoryList {
        _id
        name
      }
    }
  }
`;

const allPostsQuery = gql`
  {
    viewer {
      productsPagination {
        count
        items {
          _id
          name
          slug
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

const PRODUCT_MUTATION = gql`
  mutation($idCategory: MongoID!) {
    productUpdateById(
      input: {
        record: { _id: "5c022fd2f8c597099478c3c9", category_id: $idCategory }
      }
    ) {
      record {
        category_id
        name
      }
    }
  }
`;

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    };
  }
  handleChange = e => this.setState({ idCategory: e });
  render() {
    const { idCategory } = this.state;
    return (
      <div>
        <Query query={getAllCategory}>
          {({ data }) => {
            const { viewer } = data;
            return (
              <div>
                <Select
                  defaultValue="Chon danh muc"
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  {viewer &&
                    viewer.categoryList.map(item => {
                      return <Option value={item._id}> {item.name}</Option>;
                    })}
                </Select>
              </div>
            );
          }}
        </Query>
        <Query query={allPostsQuery}>
          {({ data, loading }) => {
            const { viewer } = data;
            if (loading || !viewer) {
              return (
                <div>
                  <Skeleton active />
                </div>
              );
            }
            return (
              <div>
                {viewer &&
                  viewer.productsPagination.items.map(post => {
                    return (
                      <p key={post._id}>
                        {post.name} {post.slug}
                      </p>
                    );
                  })}
                <br />
                <Pagination
                  total={viewer.productsPagination.count}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                  pageSize={10}
                  defaultCurrent={1}
                />
              </div>
            );
          }}
        </Query>
        <hr />
        <Mutation mutation={PRODUCT_MUTATION} variables={{ idCategory }}>
          {postMutation => (
            <Button type="primary" onClick={postMutation}>
              Chang Category
            </Button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Index;
