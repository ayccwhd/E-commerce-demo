import React,{Component} from 'react'  
// import {Routes, Route } from 'react-router-dom'
import Cart from './views/Cart/Cart'
import './App.less'
// import Button from './components/Button/Button'
// import Carousel from './components/Carousel/Carousel'


// 创建并暴露组件
export default class App extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         imgs:[
    //             "./assets/imgs/banner1.png",
    //             "./assets/imgs/banner2.png",
    //             "./assets/imgs/banner3.png",
    //             ]
    //     };
    //   }
    render(){
        return (
            <div>
                <Cart/>
                {/* <Carousel imgs={this.state.imgs}/> */}
                {/* <Button type="danger" size="small" onClick={() => { console.log("1111") }}>按钮</Button>
                <Button type="normal" size="small" onClick={() => { console.log("1111") }}>按钮</Button>
                <Button size="small"/> */}
            </div>
         
        )
    }
}
