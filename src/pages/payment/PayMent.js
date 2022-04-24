import React, { Component } from 'react'
import Header from '../../components/Header';
import OrderTip from '../../components/OrderTip';
import PaymentMode from '../../components/PaymentMode'
import PayButton from '../../components/ButtonPage';

export default class PayMent extends Component {
  state = {
    balance:1000,
    tradeId:'0x214124135351'
  }
  setBalance = (value) => {
    const {balance} = this.state;
    this.setState({balance:value})
  }
  render() {
    const {balance} = this.state;
  const {state} = this.props.location;
  const {payDiscount,carriage,goodsMessage} = state;
  const goodsList = [];
  for (let i = 0;i < goodsMessage.length;++i) {
    goodsList.push.apply(goodsList,goodsMessage[i].goodsList);
  }
  let goodsPrice = 0;
  for (let i = 0;i < goodsList.length;++i) {
    goodsPrice += goodsList[i].productPrice*goodsList[i].productNum;
  }
  let tatalPrice = goodsPrice+carriage-payDiscount;
  state.tradeId = this.state.tradeId;
  state.tatalPrice = tatalPrice;
  const to = {pathname:'paydown',state:state};
  return (
      <div className='wrapper'>
          <Header/>
          <OrderTip tatalPrice={tatalPrice}/>
          <PaymentMode tatalPrice={tatalPrice} balance={balance} setBalance={this.setBalance}/>
          <PayButton content='立即支付' to={to} />
      </div>
    )
  }
}
