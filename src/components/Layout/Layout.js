import React from 'react'
import { TabBar } from 'antd-mobile'
import { AppOutline,ShopbagOutline,UserOutline} from 'antd-mobile-icons'
import {useNavigate ,useLocation} from 'react-router-dom' 
import './Layout.css'

export default function Layout(props){
    const Navigate = useNavigate ()
    const location = useLocation()
    const { pathname } = location
    const setRouteActive = (value) => {
        Navigate(`${value}`)
    }
    const tabs=[
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/cart',
            title: '购物车',
            icon: <ShopbagOutline />,
            badge: props.num,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]
    return (
        <div className="footer">
            <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
                ))}
            </TabBar>
        </div>

    )
}