import React, { Component } from 'react'
import './Price.css'

export default class Price extends Component {
    state={
        transferToMoney:function(money) {
            if(money && money != null) {
                money = String(money);
                var left = money.split('.')[0], right = money.split('.')[1];
                right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
                var tmp = left.split('').reverse().join('').match(/\d{1,3}/g);
                left = tmp.join(',').split('').reverse().join('');
                return (Number(money) < 0 ? '-' : '') + left + right;
            }
            else if(money === 0) {
                return '0.00';
            }
            else {
                return '';
            }
        }
    }

    render() {
        const { transferToMoney } = this.state
        const { children } = this.props
        let left=transferToMoney(children).slice(0,-2)
        let right=transferToMoney(children).slice(-2)
        return (
        <div className="setprice">
            <div className="icon">&yen;</div>
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
        )
    }
}
