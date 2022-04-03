import React from "react";
import '../assets/css/order/order_id.css';
import shop from "../assets/images/order/shop.png"
import crispy from "../assets/images/order/crispy.webp"

export default class OrderId extends React.Component{
    constructor(props){
        super(props);
        this.state={
            order_status:2,
            orderid:this.props.orderid,
        }
    this.handleClickto_orderinfo=this.handleClickto_orderinfo.bind(this)
    }
    
    handleClickto_orderinfo(){
        window.location.href="http://localhost:3000/orderinfo"
    }
    render(){
        return(
                <div>
                    <div className="order_box">
                        <div className="order_head">
                            <div className="wqvue-image shop_icon">
                                <img src={shop}/>
                            </div>
                            <div className="shop_title">
                                <span className="title">乐事薯片</span>
                            </div>

                            {this.state.order_status==4?
                                <React.Fragment>
                                    <div className="order_state">已完成</div>
                                    <div className="order_box_hd_del">
                                        <div className="before"></div>
                                        <div className="after"></div>
                                    </div>
                                </React.Fragment>:""
                            }

                            {this.state.order_status==3?
                                <React.Fragment>
                                    <div className="order_state bg_red">待收货</div>
                                </React.Fragment>:""
                            }

                            {this.state.order_status==2?
                                <React.Fragment>
                                    <div className="order_state bg_red">待付款</div>
                                </React.Fragment>:""
                            }
                            
                            
                            
                        </div>

                        <div className="order_item" onClick={()=>this.handleClickto_orderinfo()}>
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

                        <div className="order_total_bar">
                            <div className="payment">实付：
                                <span className="price">￥:1234</span>
                            </div>
                        </div>
                        
                        {this.state.order_status==(3||4)?
                            <React.Fragment>
                            <div className='order_btn'>
                                <div className="before"></div>
                                <div className="oh_btn bg_border_red">再次购买</div>
                            </div>
                            </React.Fragment>:""
                        }

                        {this.state.order_status==2?
                            <React.Fragment>
                            <div className='order_btn'>
                                <div className="before"></div>
                                <div className="oh_btn bg_red">去付款</div>
                            </div>
                            </React.Fragment>:""
                        }
                    </div>    
                </div>
        )
    }
    
}