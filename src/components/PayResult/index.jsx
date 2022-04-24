import React, { Component } from 'react';

import unitPrice from '../../utils/price'

export default class PayResult extends Component {
    render() {
    const {state} = this.props;
    const {tradeId,payMethod,tatalPrice} = state;
    return (
            <div className='pay-result-infor-box'>
                <div className='result-infor-con'>
                    <p className='success-text'>购买成功</p>
                    <p className='success-text'>我们尽快为您处理</p>
                    <div className='infor-kv-box'>
                        <ul>
                            <li>订单编号：{tradeId}</li>
                            <li>微信支付：{unitPrice(tatalPrice,'','元')}</li>
                        </ul>
                    </div>
                    <div className='other-operation'>
                        <a onClick={console.log('check')}>查看订单详情</a>
                        <i className='line'></i>
                        <a onClick={console.log('gogo')}>继续逛逛</a>
                    </div>
                    <div className='main-tips-text'>
                        <p>重要提示：平台及销售商不会以订单异常、系统升级为由，要求您点击任何链接进行退款。</p>
                    </div>
                </div>
            </div>
        );
    }
}