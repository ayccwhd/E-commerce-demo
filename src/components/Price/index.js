import React, { Component } from 'react'
import unitPrice from '../../utils/price'

export default class Price extends Component {
  render() {
      const {payDiscount,carriage,goodsMessage} = this.props;
      const goodsList = [];
      for (let i = 0;i < goodsMessage.length;++i) {
        goodsList.push.apply(goodsList,goodsMessage[i].goodsList);
      }
      // console.log(goodsMessage[0].goodsList.length);
      const totalNum = goodsList.length;
      let goodsPrice = 0;
      for (let i = 0;i < goodsList.length;++i) {
        goodsPrice += goodsList[i].productPrice*goodsList[i].productNum;
      }
      

    return (
      <div className='order-price'>
          {/* 总金额 */}
          <div>
              <span>{totalNum}件商品，总金额为：</span>
              <span>{unitPrice(goodsPrice,'￥')}</span>
          </div>
          {/* 运费 */}
          <div style={{display:carriage?'block':'none'}}>
          <span>运费：</span>
          <span>{unitPrice(carriage,'￥')}</span>
        </div>
        {/* 优惠 */}
        <div style={{display:payDiscount?'block':'none'}}>
           <span>优惠金额：</span>
            <span>{unitPrice(payDiscount,'￥')}</span>
         </div>
         {/* 应付金额 */}
         <div>
                <span>应付金额：</span>
            <span>{unitPrice(goodsPrice+carriage-payDiscount,'￥')}</span>
         </div>
      </div>
    )
  }
}
