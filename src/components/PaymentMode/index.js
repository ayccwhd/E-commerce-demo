import React, { Component } from 'react'
import Radio from '../RadioPage'
export default class PaymentMode extends Component {

  // <PaymentMode tatalPrice={tatalPrice} balance={balance} setBalance={this.setBalance}/>


    // state = {
    //     support:['ALIPAY','WECHAT','WALLET'],
    //     walletValue:12,
    //     payDetail:{price:7}
    // }
    unitPrice = (price,ch="")=>{
        return ch+price.toString()+'.00'
    }
    handlePay(way) {
        return ()=>{
            if (way === 'WALLET') {
                if (this.walletValue < this.payDetail.price) {
                    alert('余额不足')
                }
            }
        }
    }
  render() {
      // const {walletValue,support} = this.state;
      const {tatalPrice,balance} = this.props;
      const inner = [
        <div className="-box-item">
        <img
          src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/a9936a369e82e0c6c42112674a5220e8_fullsize.jpg"
          alt="" />
        <span>支付宝</span>
      </div>,
            <div className="-box-item">
            <img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3774939867,2826752539&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=796e842a5ef2d16d9edc872d6f1147ef" alt="" />
            <span>微信</span>
          </div>,
              <div  className="-box-item" >
              {/* <Icon custom="icomoon icon-wallet" size="60"/> */}
              <span onClick={()=>console.log('click')}>余额支付</span>
              <span>当前剩余({this.unitPrice(balance)})</span>
            </div>
      ]
    return ( 
    <div className='wrapper-box'>
      <Radio inner={inner}/>
      {/* <div style={{display:support.includes('ALIPAY')?'block':'none'}} className="-box-item" onClick={this.handlePay('ALIPAY')}>
        <img
          src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/a9936a369e82e0c6c42112674a5220e8_fullsize.jpg"
          alt="" />
        <span>支付宝</span>
      </div>
      <div style={{display:support.includes('WECHAT')?'block':'none'}} className="-box-item" onClick={this.handlePay('WECHAT')}>
        <img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3774939867,2826752539&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=796e842a5ef2d16d9edc872d6f1147ef" alt="" />
        <span>微信</span>
      </div> */}
      {/* <div style={{display:support.includes('WALLET')?'block':'none'}} className="-box-item" onClick={this.handlePay('WALLET')}> */}
      {/* <div  className="-box-item" >
        <span onClick={()=>console.log('click')}>余额支付</span>
        <span>当前剩余({this.unitPrice(balance)})</span>
      </div> */}
    </div>
    )
  }
}
