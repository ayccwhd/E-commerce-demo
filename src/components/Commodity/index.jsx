import React, { Component } from 'react';
import { Modal, Input } from 'antd';

import unitPrice from '../../utils/price'
import PlusMinus from '../PlusMinusPage';

const { TextArea } = Input;

class Commodity extends Component {
    // goodsMessage:[
    //     {
    //         shopName:'乐事旗舰店',
    //         goodsList:[
    //             {
    //                 productId:'001',
    //                 productName:'乐事 无限 原味',
    //                 productType:'零食',
    //                 productNum:2,
    //                 productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
    //                 productInventory:10000,
    //             },
    //             {
    //                 productId:'002',
    //                 productName:'乐事 可乐',
    //                 productType:'饮料',
    //                 productNum:2,
    //                 productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
    //                 productInventory:10000,
    //             }

    //         ],
    //         note:'当天发货'
    //     },
    //     {
    //         shopName:'南极人旗舰店',
    //         goodsList:[
    //             {
    //                 productId:'003',
    //                 productName:'羽绒服 保暖 冬季',
    //                 productType:'衣服',
    //                 productNum:1,
    //                 productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
    //                 productInventory:10000,
    //             },
    //             {
    //                 productId:'004',
    //                 productName:'短裤 时尚 夏季',
    //                 productType:'衣服',
    //                 productNum:1,
    //                 productImg:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400',
    //                 productInventory:10000,
    //             }

    //         ],
    //         note:'两件衣服一起打包'
    //     },
    // ],

    // goodPrice = (unitPrice,num) => {
    //     return unitPrice*num;
    // }

    warning = (overflow,threshold) => {
        // Modal.warning({
        //   title: 'This is a warning message',
        //   content: 'some messages...some messages...',
        // });
        const content = overflow===true?'商品数量不能超过'+threshold:'商品数量不能少于'+threshold;
        Modal.warning({
            content: content,
          });
      }


    mySetNote = (shopKey) => {
        return (event) => {
        let {goodsMessage,setgoodsMessage} = this.props;
        goodsMessage[shopKey].note = event.target.value;
        setgoodsMessage(goodsMessage);
        }
    }

    mySetPorductNum = (shopKey,goodKey) => {
        return (event) => {
            console.log('mySetPorductNum');
            console.log(event);
            let {goodsMessage,setgoodsMessage} = this.props;
            goodsMessage[shopKey].goodsList[goodKey].productNum = event;
            setgoodsMessage(goodsMessage);
        }
    }

    render() {
        const {goodsMessage} = this.props;
        const x = goodsMessage.map((shop,shopKey)=>{
            return (
                <>
                <div className='shop-name'>
                    <span className='hover-color'>
                        {shop.shopName}
                    </span>
                </div><div className='goods-list'>

                            {shop.goodsList.map((good,goodKey)=>{
                            return (
                        <div className='goods-item'>
                                <span className='hover-color'>
                                    <img src={good.productImg} alt='无法显示' />
                                    <span style={{ verticalAlign: 'top' }}>{good.productName}</span>
                                </span><span className='goods-price'>{unitPrice(good.productPrice,'￥')}</span>
                                {/* <span>x</span> */}
                                    <PlusMinus productNum={good.productNum} setPorductNum={this.mySetPorductNum(shopKey,goodKey)} warning={this.warning}/>
                                <span>有货</span><span className='goods-price'>{unitPrice(good.productPrice*good.productNum,'￥')}</span>
                                 {/* </span><span className='goods-price'>￥{good.productPrice}</span><span>x{good.productNum}</span><span>{good.productInventory>=1?'有货':'无货'}</span><span className='goods-price'>￥{good.productPrice*good.productNum}</span> */}
                            </div>
                            )
                        })}
                    </div><div className='order-mark'>
                        <TextArea rows={4} placeholder={shop.note} onChange={this.mySetNote(shopKey)} maxLength={100} />
                        <span style={{ fontSize: '12px', color: '#999' }}>提示：请勿填写有关支付、收货、发票方面的信息</span>
                    </div></>
            );
        });
        return (
            <div className='goods-content'>
                <div className='card-head mt_20 mb_20'>
                    <span>商品信息</span>
                    <span>返回购物车</span>
                </div>
                <div className='goods-msg'>
                    {x}
                    {/* <div className='shop-name'>
                        <span className='hover-color'>
                            店名
                        </span>
                        </div>
                    <div className='goods-list'>
                        <div className='goods-item'>
                            <span className='hover-color'>
                                <img src='https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400' alt='无法显示'/>
                                <span style={{verticalAlign:'top'}}>乐事 无限 原味</span>
                            </span>
                                <span className='goods-price'>￥7.00</span>
                                <span>x1</span>
                                <span>有货</span>
                                <span className='goods-price'>￥7.00</span>
                        </div>
                        <div className='goods-item'>
                            <span className='hover-color'>
                                <img src='https://lilishop-oss.oss-cn-beijing.aliyuncs.com/7184562bd2d94e0b8723fee36f56dd78.jpg?x-oss-process=style/400X400' alt='无法显示'/>
                                <span style={{verticalAlign:'top'}}>乐事 无限 原味</span>
                            </span>
                                <span className='goods-price'>￥7.00</span>
                                <span>x1</span>
                                <span>有货</span>
                                <span className='goods-price'>￥7.00</span>
                        </div>
                    </div>
                    <div className='order-mark'>
                        <TextArea rows={4} placeholder="订单备注（不超过100字）" maxLength={100} />
                        <span style={{fontSize: '12px',color: '#999'}}>提示：请勿填写有关支付、收货、发票方面的信息</span>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Commodity;