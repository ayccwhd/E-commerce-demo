import React, { Component } from 'react'
import { Divider } from 'antd';

import Header from '../../components/Header'
import PayResult from '../../components/PayResult';


export default class PayDown extends Component {
  render() {
      const {state} = this.props.location;
      const {consignee,goodsMessage} = state;
      console.log(goodsMessage);
      let goods = [];
      for (let i = 0;i < goodsMessage.length;++i) {
        goods.push.apply(goods, goodsMessage[i].goodsList);
      }
      const goodsDisplay = goods.map((item,key) => {
          return (
            <div>
                <span>商品名：{item.productName}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>商品总额：{item.productPrice*item.productNum}</span>
            </div>
          )
      })
    return (
      <div>
          <Header/>
          <PayResult state={state}/>
          <Divider />
          <h1>支付成功</h1>
          <div className='address'>收货人信息：
              <div>
                  <span>姓名：{consignee.name}</span>
              </div>
              <div>
                  <span>电话：{consignee.phone}</span>
              </div>
              <div>
                  <span>地址：{consignee.address}</span>
              </div>
            {/* {goodsMessage} */}
          </div>
          <Divider />
          <div className='goods'>商品信息：
           {goodsDisplay}
            </div>
      </div>
    )
  }
}
