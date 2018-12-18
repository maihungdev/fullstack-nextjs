import React, { Component } from "react";
import { Tabs } from "antd";
import dynamic from "next/dynamic";

import { Spin } from "antd";
import SellerInfo from "./SellerInfo";

const CategoryGrid = dynamic(
  () => import("../../desktop/category/CategoryGrid"),
  {
    loading: () => (
      <div id="loading">
        <Spin size="large" />
      </div>
    )
  }
);

const TabPane = Tabs.TabPane;

export default class SellLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
      activeKey: "1"
    };
  }
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  render() {
    const { mode, activeKey } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          onChange={this.onChange}
          tabBarGutter={20}
        >
          <TabPane tab="Quan ly danh muc" key="1">
            {activeKey === "1" ? <p>Content 1</p> : null}
          </TabPane>
          <TabPane tab="Quan ly san pham" key="2">
            {activeKey === "2" ? <CategoryGrid /> : null}
          </TabPane>
          <TabPane tab="Quan ly 3" key="3">
          {activeKey === "3" ? <SellerInfo/> : null}
          </TabPane>
          <TabPane tab="Quan ly 4" key="4">
            Content of tab 4
          </TabPane>
          <TabPane tab="Quan ly 5" key="5">
            Content of tab 5
          </TabPane>
          <TabPane tab="Quan ly 6" key="6">
            Content of tab 6
          </TabPane>
          <TabPane tab="Quan ly 7" key="7">
            Content of tab 7
          </TabPane>
          <TabPane tab="Quan ly 8" key="8">
            Content of tab 8
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
