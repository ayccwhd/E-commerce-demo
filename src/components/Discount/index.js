import React, { Component } from 'react'

export default class Discount extends Component {
  render() {
    // 以后可以使用couponList组件表示优惠券
      const {payDiscount} = this.props;
    return (
      <div className='invoice'>
          <div className='card-head mt_20 mb_20'>
            <span>优惠券</span>
          </div>
          <div>
          {/* <div style={{display:payDiscount==0?'block':'none'}}>无可用优惠</div>
          <div style={{display:payDiscount!=0?'block':'none'}}>优惠金额：{payDiscount}</div> */}
          <div style={{fontSize:'14px'}}>{payDiscount==0?'无可用优惠':'满减优惠    '+payDiscount+'元'}</div>
            {/* <ul style={{display:couponList.length!=0?'block':'none'}}>
                <li></li>
            </ul> */}
          </div>
      </div>
    )
  }
}
