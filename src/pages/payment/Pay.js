import React, { Component } from 'react';
import Header from '../../components/Header';
import LogoProgress from '../../components/LogoProgress';
import Cnee from '../../components/Cnee';
import Commodity from '../../components/Commodity';
import Discount from '../../components/Discount';
import Price from '../../components/Price';
import Commit from '../../components/Commit';

import { Divider } from 'antd';


export default class Pay extends Component {
    state = {
        consignee:{
            name:'张三',
            phone:13438307632,
            address:'江苏省 苏州市 姑苏区 沧浪街道 地方弄8号小区东采莲巷-12号院',
        },
        goodsMessage:[
            {
                shopName:'乐事旗舰店',
                goodsList:[
                    {
                        productId:'001',
                        productName:'乐事 无限 原味',
                        productPrice:7,
                        productType:'零食',
                        productNum:2,
                        productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
                        productInventory:10000,
                    },
                    {
                        productId:'002',
                        productName:'乐事 可乐',
                        productPrice:3,
                        productType:'饮料',
                        productNum:2,
                        productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
                        productInventory:10000,
                    }

                ],
                note:'当天发货'
            },
            {
                shopName:'南极人旗舰店',
                goodsList:[
                    {
                        productId:'003',
                        productName:'羽绒服 保暖 冬季',
                        productPrice:398,
                        productType:'衣服',
                        productNum:1,
                        productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
                        productInventory:10000,
                    },
                    {
                        productId:'004',
                        productName:'短裤 时尚 夏季',
                        productPrice:40,
                        productType:'衣服',
                        productNum:1,
                        productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
                        productInventory:10000,
                    }

                ],
                note:'两件衣服一起打包'
            },
        ],
        carriage:2,
        payDiscount:4,
        invoiceornot:false,
    }

    setgoodsMessage = (goodsMessage) => {
        this.setState({goodsMessage:goodsMessage});
    }


    setConsignee = (consignee) => {
        this.setState({consignee:consignee});
    }

    // setNote = (goodsMessage) => {
    //     console.log(goodsMessage);
    //     // const {note} = this.state;
    //     // console.log('before:'+this.state.note);
    //     this.setState({goodsMessage:goodsMessage});
    //     // console.log('after:'+this.state.note);
    //     }

    render() {
        const {consignee,goodsMessage,carriage,payDiscount,invoiceornot} = this.state;
        return (
            <div>
                <Header/>
                <LogoProgress/>
                <Divider style={{backgroundColor:'red'}}/>
                <div className='content'>
                    <Cnee consignee={consignee} setConsignee={this.setConsignee}/>
                    <Commodity goodsMessage={goodsMessage} setgoodsMessage={this.setgoodsMessage} />
                    <Discount payDiscount={payDiscount}/>
                    {/* 以后可以添加发票组件 */}
                    <Price payDiscount={payDiscount} carriage={carriage} goodsMessage={goodsMessage}/>
                </div>
                <Commit payState={this.state}/>
            </div>
        );
    }
}