import { Component } from "react";
import { inject, observer } from "mobx-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
        {({ data: { viewer } }) => {
          console.log("allPosts", viewer);
          return (
            <div>
              Hello Next.js
              {viewer &&
                viewer.employeeList.map(post => {
                  return <p key={post._id}>{post.firstName} {post.lastName}</p>;
                })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Index