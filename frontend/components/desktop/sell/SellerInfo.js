import React, { Component } from "react";
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class SellerInfo extends Component {
  render() {
    this.props.store.user_email
      ? console.log("da co" + this.props.store.user_email)
      : console.log('chua co');

    return <>{this.props.store.user_email}</>;
  }
}
