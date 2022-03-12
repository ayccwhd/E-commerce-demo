import React, { Component } from 'react'
import './Price.css'

export default class Price extends Component {
    state={
        left:function(money){
            if(money && money != null) {
                money = String(money);
                var left = money.split('.')[0];
                var tmp = left.split('').reverse().join('').match(/\d{1,3}/g);
                left = tmp.join(',').split('').reverse().join('');
                return (Number(money) < 0 ? '-' : '') + left ;
            }
            else if(money === 0) {
                return '0';
            }
            else {
                return '';
            }
        },
        right:function(money){
            if(money && money != null) {
                money = String(money);
                var right = money.split('.')[1];
                right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
                return (Number(money) < 0 ? '-' : '') + right;
            }
            else if(money === 0) {
                return '.00';
            }
            else {
                return '';
            }
        }
    }

    render() {
        return (
        <div className="setprice">
            <div className="icon">&yen;</div>
            <div className="left">{this.state.left(this.props.children)}</div>
            <div className="right">{this.state.right(this.props.children)}</div>
        </div>
        )
    }
}
