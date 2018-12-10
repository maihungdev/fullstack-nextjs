import { Layout, Menu } from "antd";
import Link from 'next/link'

const { Header } = Layout;

export default HeaderMain => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1"><Link href="/"><a>Home</a></Link></Menu.Item>
      <Menu.Item key="2"><Link href="/indexAuth"><a>Auth</a></Link></Menu.Item>
      <Menu.Item key="3"><Link href="/indexMobx"><a>Mobx</a></Link></Menu.Item>
      <Menu.Item key="4"><Link href="/antd"><a>Antd</a></Link></Menu.Item>
      <Menu.Item key="5"><Link href="/indexRoute"><a>Route</a></Link></Menu.Item>
      <Menu.Item key="6"><Link href="/indexApolloGraphql"><a>Apollo Graphql</a></Link></Menu.Item>
      <Menu.Item key="7"><Link href="/seo"><a>SEO</a></Link></Menu.Item>
      <Menu.Item key="7"><Link href="/grid"><a>Grid</a></Link></Menu.Item>
    </Menu>
  </Header>
);
