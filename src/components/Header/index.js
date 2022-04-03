import { Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
// import './index.scss'

const { SubMenu } = Menu;

export default class Header extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
        <div className='floatright'>
              <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <SubMenu key="home"  title="傲风">
                    <Menu.Item key="setting:1">我的主页</Menu.Item>
                    <Menu.Item key="setting:2">优惠券</Menu.Item>
                    <Menu.Item key="setting:3">我的收藏</Menu.Item>
                    <Menu.Item key="setting:4">退出登录</Menu.Item>
                  </SubMenu>
                <Menu.Item key="order">
                  我的订单
                </Menu.Item>
                <Menu.Item key="track">
                  我的足迹
                </Menu.Item>
                <Menu.Item key="message">
                  我的消息
                </Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    购物车
                  </a>
                </Menu.Item>
              </Menu>
              </div>
    );
  }
}
