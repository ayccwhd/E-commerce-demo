import React from "react";
import Subheader from "../component/subheader";
import '../assets/css/order/orderinfo.css';
import shop from "../assets/images/order/shop.png"
import crispy from "../assets/images/order/crispy.webp"

export default class OrderInfo extends React.Component{
    render(){
        return(
            <div className="orderinfo">
                <div><Subheader title='订单详情'></Subheader></div>
                
                <div className="top_info">
                    <div className="order_state">
                        <div className="state_txt">
                            <div className="wqvue-image state_icon"><img src="./check.png"/></div>
                            已完成
                        </div> 
                        
                        <div data-id="buyAgain" className="state_btn">再次购买</div>
                    </div>
                </div>

                <div data_order_id="">
                        <div className="order_box">
                            <div className="order_head">
                                <div className="wqvue-image shop_icon">
                                   <img src={shop}/>
                                </div>
                                <div className="shop_title">
                                    <span className="title">乐事薯片</span>
                                </div>
                            </div>

                            <div className="order_item">
                                <div className="before"></div>
                                <div className="oi_content">
                                    <div className="cover">
                                        <div className="wqvue-image img">
                                            <img src={crispy}/>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="desc">乐事大礼包：青柠味黄瓜味烧烤味</div>
                                    </div>
                                    <div className="oi_num">x2</div>
                                </div>
                            </div>
                        </div>    
                </div>

                <div className="order_summary_block">
                    <div className="order_summary">
                        <div className="inner_line">
                            <span className="title">订单编号：</span> 
                            <div className="content">238702559213</div>
                        </div>
                        <div className="inner_line">
                            <span className="title">下单时间：</span> 
                            <div className="content">2022-02-11 17:04:22</div>
                            </div>
                        <div className="inner_line">
                            <span className="title">支付方式：</span> 
                            <div className="content">微信支付</div>
                        </div>
                        <div className="inner_line">
                            <span className="title">支付时间：</span> 
                            <div className="content">2022-02-11 17:04:37</div>
                        </div>
                    </div>

                    <div className="order_total">
                        <div className="before"></div>
                        <div>
                            <div className="total_item">商品总额<span className="price">¥ 6.80</span></div>
                            <div className="total_item">运费<span className="price">+ ¥ 0.00</span></div>
                        </div> 
                        <div className="total">实付金额：<span className="price">¥6.80</span></div> 
                    </div>    

                    <div className="order_btn fixed_btn">
                        <div className="order_btn_com">
                            <div data-id="buyAgain" className="oh_btn bg_border_red">再次购买</div>
                            <div data-id="removeOrder" className="oh_btn bg_white">删除订单</div> 
                        </div>
                    </div>
                </div>    

            </div>
        )
    }
}