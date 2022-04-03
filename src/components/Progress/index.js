import React, { Component } from 'react';
import { Button, Steps } from 'antd';
const { Step } = Steps;

 class Progress extends Component {
    // state = {
    //     current:1,
    // };
    // add = ()=>{
    //     const {current} = this.state;
    //     this.setState({current:current+1});
    // }
    render() {
        // const {current} = this.state;
        return (
            <div className='right'>
                <Steps size="small" current={1} responsive="false">
                    <Step title="我的购物车" />
                    <Step title="填写订单信息" />
                    <Step title="成功提交订单" />
                </Steps>
                {/* <Button onClick={this.add}>点击current+1</Button> */}
            </div>
        );
    }
}

export default Progress;



