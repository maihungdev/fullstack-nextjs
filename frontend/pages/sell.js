import React, { Component } from 'react'
import SellLayout from '../components/desktop/sell/SellLayout';

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class sell extends Component {
  render() {
    return (
      <div>
        <SellLayout/>
        {this.props.store.user_email}
      </div>
    )
  }
}
