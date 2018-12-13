import React, { Component } from 'react'
import { Link } from '../../../routes'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getAllCategory = gql`
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

class ListCategory extends Component {
  render() {
    return (
      <>
       <div className="whb-navigation whb-secondary-menu site-navigation woodmart-navigation menu-right navigation-style-bordered" role="navigation">
  <div className="menu-top-bar-right-container">
    <ul id="menu-top-bar-right" className="menu">
      <li id="menu-item-2185" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2185 item-level-0 menu-item-design-default menu-simple-dropdown item-event-hover">
        <a href="http://#" className="woodmart-nav-link"><span className="nav-link-text">ENGLISH</span></a>
        <div className="sub-menu-dropdown color-scheme-dark">
          <div className="container">
            <ul className="sub-menu color-scheme-dark">
            <Query query={getAllCategory}>
        {
            ({data}) => {
                const { viewer } = data;
                return (
                    <>
                    {viewer && viewer.categoryList.map(
                        item => {
                            return <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2186 item-level-1" key={item._id}><Link route="category" id={item.category_id} slug={item.slug}><a href="#" className="woodmart-nav-link"><span className="nav-link-text">{item.name}</span></a></Link></li>
                        }
                    )}
                    </>
                )
            }
        }
        </Query>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
      </>
    )
  }
}

export default ListCategory;

