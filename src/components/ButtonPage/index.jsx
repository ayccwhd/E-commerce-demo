import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default class PayButtonPage extends Component {

  render() {
    const {content,to} = this.props;
    return (
      <div className='order-footer width_1200'>
            {/* <div className='pay ml_20'  >提交订单</div> */}
            {/* {{pathname:'payment',state:this.props.payState}} */}
            <Link className='pay ml_20' onClick={this.pay} to={to}>
            <span>
                {/* 提交订单 */}
                {content}
              </span>
              </Link>
            {/* <Link className='pay ml_20' onClick={this.pay} to='payment'>
              <span>
                提交订单
              </span>
              </Link> */}
              </div>
    )
  }
}
