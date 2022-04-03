import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PayButton from '../ButtonPage'
export default class Commit extends Component {
    state = {
        addressList:['配送至：  收货人：mcc  13527272727'],
        selectedAddress:{
            consigneeAddressPath:'江苏省 苏州市 姑苏区 沧浪街道',
            detail:' 地方弄8号小区东采莲巷-12号院',
            name:'张三',
            mobile:'13438307632'
        }
    }
    pay = () =>{
        // alert('提交订单')
    }
  render() {
      const {selectedAddress, addressList} = this.state
      const to = {pathname:'payment',state:this.props.payState};
    return (
      <div className='order-footer width_1200'>
            {/* <div className='pay ml_20'  >提交订单</div> */}
            {/* <Link className='pay ml_20' onClick={this.pay} to={{pathname:'payment',state:this.props.payState}}>
            <span>
                提交订单
              </span>
              </Link> */}
      <PayButton content='提交订单' to={to} />
      <div className="pay-address" style={{display:addressList.length?'block':'none'}}>
        配送至：{ selectedAddress.consigneeAddressPath}
        {selectedAddress.detail}&nbsp;&nbsp;
        收货人：{selectedAddress.name}&nbsp;&nbsp;
        { selectedAddress.mobile }
        </div>
      </div>
    )
  }
}
