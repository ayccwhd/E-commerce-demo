import React,{Component} from 'react'  
import {Routes, Route,Navigate} from 'react-router-dom'
import Cart from './views/Cart/Cart'
import Home from './views/Home/Home'
import Me from './views/Me/Me'
import Product from './views/Product/Product.jsx'
import Shop from './views/Shop/Shop'
import Pay from './views/Pay/Pay'
import './App.less'
// import Layout from './components/Layout/Layout'

// 创建并暴露组件
export default class App extends Component{

    render(){
        return (
            <div>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/me" element={<Me/>}/>
                    <Route path="/productinfo/:id" element={<Product/>}/>
                    <Route path="/shopinfo/:shopname" element={<Shop/>}/>
                    <Route path="/pay" element={<Pay/>}/>
                    <Route path="*" element={<Navigate to="/cart" />} />
                </Routes>
                {/* 底部导航 */}
                {/* <Layout /> */}
            </div>
         
        )
    }
}
