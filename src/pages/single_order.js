import React from "react";
import '../assets/css/order/single_order.css';
import shop from "../assets/images/order/shop.png"
import crispy from "../assets/images/order/crispy.webp"

export default class SingleOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            order_info: this.props.order_info,
        }
    this.handleClickto_orderinfo=this.handleClickto_orderinfo.bind(this)
    }
   
    componentDidMount(){
        console.log(this.state.order_info2)
    }

    handleClickto_orderinfo(order_id){
        window.location.href="http://localhost:3000/orderinfo?order_id="+order_id
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
                                <span className="title">{this.state.order_info.shop_name}</span>
                            </div>

                            {this.state.order_info.order_status==3?
                                <React.Fragment>
                                    <div className="order_state">已完成</div>
                                    <div className="order_box_hd_del">
                                        <div className="before"></div>
                                        <div className="after"></div>
                                    </div>
                                </React.Fragment>:
                                this.state.order_info.order_status==2?
                                <React.Fragment>
                                    <div className="order_state bg_red">待收货</div>
                                </React.Fragment>:
                                this.state.order_info.order_status==1?
                                <React.Fragment>
                                    <div className="order_state bg_red">待付款</div>
                                </React.Fragment>:""
                            }
                        </div>

                        <div className="order_item" onClick={()=>this.handleClickto_orderinfo(this.state.order_info.order_id)}>
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

                        <div className="order_total_bar">
                            <div className="payment">实付：
                                <span className="price">￥:{this.state.order_info.pay}</span>
                            </div>
                        </div>
                        
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
        )
    }
    
}