import React, { Component } from "react";
import { Spin } from 'antd';

export default class loading extends Component {
  render() {
    return (
        <div id="loading"><Spin size="large" /></div>
    );
  }
}
