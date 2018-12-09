import { Component } from "react";
import { inject, observer } from "mobx-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Skeleton, Button } from "antd";
const allPostsQuery = gql`
  {
    viewer {
      employeeList {
        _id
        lastName
        firstName
      }
    }
  }
`;

@inject("store")
@observer
class Index extends Component {
  render() {
    console.log("index PROPS", this.props);
    return (
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
                viewer.employeeList.map(post => {
                  return (
                    <p key={post._id}>
                      {post.firstName} {post.lastName}
                    </p>
                  );
                })
                }
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Index;
