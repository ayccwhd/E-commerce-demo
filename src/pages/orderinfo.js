import React from "react";
import Subheader from "../component/subheader";
import '../assets/css/order/orderinfo.css';
import shop from "../assets/images/order/shop.png"
import crispy from "../assets/images/order/crispy.webp"

export default class OrderInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            order_info: 
                {
                    order_id: 27520,
                    order_status: 1,
                    shop_name: "乐事薯片",
                    goods: [
                        {
                            good_name: "乐事大礼包",
                            good_img: "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                            good_num: 2
                        },
                        {
                            good_name: "乐事大礼包",
                            good_img: "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                            good_num: 2
                        }
                    ],
                    order_time: "2022-4-20 17:04:22",
                    payment: "微信支付",
                    pay_time: "2022-4-20 17:04:28",
                    total: "13",
                    shipping_price: "0",
                    pay:"13"
                }
            }
        
    }
    render(){
        return(
            <div className="orderinfo">
                <div><Subheader title='订单详情'></Subheader></div>
                
                <div className="top_info">
                    <div className="order_state">
                        <div className="state_txt">
                            {this.state.order_info.order_status==1?"待付款":
                            this.state.order_info.order_status==2?"待收货":
                            "已完成"}
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
                                <span className="title">{this.state.order_info.shop_name}</span>
                            </div>
                        </div>

                        <div className="order_item">
                            {this.state.order_info.goods.map(
                                (item2,index2)=>{
                                    return(
                                    <div className="oi_content" key={index2}>
                                        <div className="cover">
                                            <div className="wqvue-image img">
                                                <img src={crispy}/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="desc">{item2.good_name}</div>
                                        </div>
                                        <div className="oi_num">x{item2.good_num}</div>
                                    </div>
                            )
                                }
                            )}
                        </div>
                    </div>    
                </div>

                <div className="order_summary_block">
                    <div className="order_summary">
                        <div className="inner_line">
                            <span className="title">订单编号：</span> 
                            <div className="content">{this.state.order_info.order_id}</div>
                        </div>
                        <div className="inner_line">
                            <span className="title">下单时间：</span> 
                            <div className="content">{this.state.order_info.order_time}</div>
                            </div>
                        {this.state.order_info.order_status==(2||3)?
                            <React.Fragment>
                                <div className="inner_line">
                                    <span className="title">支付方式：</span> 
                                    <div className="content">{this.state.order_info.payment}</div>
                                </div>
                                <div className="inner_line">
                                    <span className="title">支付时间：</span> 
                                    <div className="content">{this.state.order_info.pay_time}</div>
                                </div>
                            </React.Fragment>
                            :""
                        }
                    </div>

                    <div className="order_total">
                        <div className="before"></div>
                        <div>
                            <div className="total_item">商品总额<span className="price">¥ {this.state.order_info.total}</span></div>
                            <div className="total_item">运费<span className="price">+ ¥ {this.state.order_info.shipping_price}</span></div>
                        </div> 
                        <div className="total">{this.state.order_info.order_status==1?"待付款金额：":"实付金额："}<span className="price">¥{this.state.order_info.pay}</span></div> 
                    </div>    

                    <div className="order_btn fixed_btn">
                        <div className="order_btn_com">
                        {this.state.order_info.order_status==3?
                            <React.Fragment>
                            <div className='order_btn'>
                                <div className="before"></div>
                                <div className="oh_btn bg_border_red">再次购买</div>
                            </div>
                            </React.Fragment>:
                            this.state.order_info.order_status==2?
                            <React.Fragment>
                            <div className='order_btn'>
                                <div className="before"></div>
                                <div className="oh_btn bg_white">确认收货</div>
                                <div className="oh_btn bg_border_red">再次购买</div>
                                
                            </div>
                            </React.Fragment>:
                            this.state.order_info.order_status==1?
                            <React.Fragment>
                            <div className='order_btn'>
                                <div className="before"></div>
                                <div className="oh_btn bg_red">去付款</div>
                            </div>
                            </React.Fragment>:""
                        }
                        </div>
                    </div>
                </div>    

            </div>
        )
    }
}