import React from 'react';
import '../assets/css/order/tags.css';
import { localParam } from "../assets/js/utils/util.js"

export default class TagsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:localParam(window.location.search).search.status?localParam(window.location.search).search.status:""
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){

    }
    handleClick(id){
        window.location.href="http://localhost:3000/myorder/orderpage?status="+id
        
    }
    render(){
        return (
            <div className='my_nav'>
                <div className={this.state.status=="0"?"my_nav_list_item cur":"my_nav_list_item"}><div className="nav_item_link" onClick={()=>this.handleClick(0)}><div className='before'></div>全部订单</div></div>
                <div className={this.state.status=="1"?"my_nav_list_item cur":"my_nav_list_item"}><div className="nav_item_link" onClick={()=>this.handleClick(1)}><div className='before'></div>待付款</div></div>
                <div className={this.state.status=="2"?"my_nav_list_item cur":"my_nav_list_item"}><div className="nav_item_link" onClick={()=>this.handleClick(2)}><div className='before'></div>待收货</div></div>
                <div className={this.state.status=="3"?"my_nav_list_item cur":"my_nav_list_item"}><div className="nav_item_link" onClick={()=>this.handleClick(3)}><div className='before'></div>待评价</div></div>
            </div>
        )
    }
}
