import React, { Component } from "react";
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';
import {Button} from 'antd'

// 数量加减按钮组件
/*
接收参数:
  普通参数:
    minNum:最小数字,默认为1
    maxNum:最大数字,默认为100
    productNum:当前数字
  函数参数:
    setPorductNum:更新父组件中的数字
*/
export default class PlusMinusPage extends Component {
    // minus = React.createRef();
    // plus = React.createRef();
  // 定义默认参数
  static defaultProps = {
    minNum:1,
    maxNum:100,
}
// 定义计算属性,当前数字不在最小数字和最大数字范围内时,禁用对应的加减按钮
// 减按钮禁用标志
get minusdisabled() {
  const {productNum,maxNum,minNum} = this.props;
  if (productNum <= minNum) {
    return true;
  }
  return false;
}
// 加按钮禁用标志
get plusdisabled() {
  const {productNum,maxNum,minNum} = this.props;
  if (productNum >= maxNum) {
    return true;
  }
  return false;
}

  // 点击减一方法
  countReduce = () => {
    const {productNum,setPorductNum} = this.props;
     if (this.minusdisabled) {
       return;
     }
     setPorductNum(productNum-1);
  };
// 点击加一方法
  countAdd = () => {
    const {productNum,setPorductNum} = this.props;
     if (this.plusdisabled) {
       return;
     }
     setPorductNum(productNum+1);
  };

  // 输入框输入数字溢出时的处理函数
  adjust = (overflow) => {
    const {setPorductNum,minNum,maxNum} = this.props;
    if (overflow) {
      setPorductNum(maxNum);
    }
    else {
      setPorductNum(minNum);
    }
  }
  // 输入框中输入数字时更新父组件state
  change = (event) => {
    const {productNum,setPorductNum,minNum,maxNum,warning} = this.props;
    const value = parseInt(event.target.value);
    setPorductNum(value);
    if (value > maxNum) {
      warning(true,maxNum);
      this.adjust(true);
    }
    else if (value < minNum) {
      warning(false,minNum);
      this.adjust(false);
    }
  }

  render() {
    const {productNum} = this.props;
    return (
      <div>
          <Button type='primary' icon={<MinusOutlined />} disabled={this.minusdisabled} onClick={this.countReduce}  className='minus' />
        <input type='text' onChange={this.change} οnInput="this.value=this.value.replace(/\D/g,'')" value={productNum} className='countinput'></input>
        <Button type='primary' icon={<PlusOutlined />} disabled={this.plusdisabled} onClick={this.countAdd}  className='plus' />
    </div>
    )
  }
}

