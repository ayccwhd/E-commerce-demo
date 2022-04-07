import React from "react";
import '../assets/css/order/orderpage.css';
import { localParam } from "../assets/js/utils/util.js"
import SingleOrder from "./single_order"
export default class Orderpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page_status: localParam(window.location.search).search.status?localParam(window.location.search).search.status:"",
            order_list: [
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
                },
                {
                    order_id: 27520,
                    order_status: 2,
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
            ]      
        }
    }
    get_status(){
        return this.state.page_status
    }
    componentDidMount(){
        console.log(this.state.page_status)
        
    }
    
    render(){
        return(
                <div className="my_order">
                    {this.state.page_status==0?
                        this.state.order_list.map(
                            (item,index)=>
                                {return <SingleOrder key={index} order_info={item}/>}
                        )
                    :this.state.page_status==1?
                        this.state.order_list.filter(
                            (item,index,arr)=>{return item.order_status==1?true:false}
                        ).map(
                            (item,index)=>
                                {return <SingleOrder key={index} order_info={item}/>}
                        )
                    :this.state.page_status==2?
                    this.state.order_list.filter(
                            (item,index,arr)=>{return item.order_status==2?true:false}
                    ).map(
                        (item,index)=>
                            {return <SingleOrder key={index} order_info={item}/>}
                    ):
                    this.state.page_status==3?
                        this.state.order_list.filter(
                            (item,index,arr)=>{return item.order_status==3?true:false}
                        ).map(
                            (item,index)=>
                                {return <SingleOrder key={index} order_info={item}/>}
                        ):""
                    }
                </div>
        )
    }
    
}