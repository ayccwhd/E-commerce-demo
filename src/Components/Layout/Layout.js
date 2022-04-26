import React, { Component } from 'react'
import { NavBar, TabBar } from 'antd-mobile-v2'
import {
    AppOutline,
    MessageOutline,
    ShopbagOutline,
    UserOutline,
} from 'antd-mobile-icons'
import '../Layout/Layout.css'
export default class Layout extends Component {
    state = {
        tabs: [
            {
                key: '/home',
                title: '首页',
                icon: <AppOutline />,
            },
            {
                key: '/todo',
                title: '购物车',
                icon: <ShopbagOutline />,
            },
            {
                key: '/me',
                title: '个人中心',
                icon: <UserOutline />,
            },
        ]
    }


    render() {
        return (
            <div className="footer">
                <TabBar>
                    {this.state.tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>

        )
    }
}
