import React, { Component } from 'react'
import unitPrice from '../../utils/price'

export default class OrderTip extends Component {
  render() {
      const {tatalPrice} = this.props;
    return (
        <div className='wrapper-head'>
            <div className='head-left'>
                <div className="left-tips">订单提交成功，请尽快付款！</div>
                <div className="left-tips-time">请您尽快完成支付，否则订单会被自动取消</div>
                {/* <div className="left-tips-count-down">
                    倒计时
                </div> */}
            </div>
            <div className='head-right'>
                <div>应付金额 <span className="price">{unitPrice(tatalPrice)}</span>元</div>
            </div>
        </div>
    )
  }
}
