import React, { Component } from 'react'
import {Drawer} from 'antd'
import './Drawer.css'
import goodsimg from '../../assets/imgs/goods-img.png'
import Price from '../Price/Price'
import Button from '../Button/Button'

export default class DrawerPage extends Component {

    state={   
            skus:{
                颜色:["红色","黑色","白色","绿色"],
                内存:["64g","128g","256g"]
            },
            //组件即将挂载时，此时父组件传递过来的visibl应该是false
            visible:false,
            //标记是否执行onClose
            flag:0,
            //当前选中的样式
            currentSelectFirst:0,
            currentSelectSecond:0
        }

    //用于获取商品属性的方法
    searchGoodsType =()=>{
        // const id=this.props.goods_id;
    }
    handleSelectType=(firstindex,secondindex)=>{
        this.setState({
            currentSelectFirst:firstindex,
            currentSelectSecond:secondindex
        })
        // e.stopPropagation()
        // if ( e && e.stopPropagation ) 
        //     //因此它支持W3C的stopPropagation()方法 
        //     e.stopPropagation(); 
        // else 
        //     //否则，我们需要使用IE的方式来取消事件冒泡 
        //     window.event.cancelBubble = true; 
    }
    //点击遮罩层或左上角关闭按钮的回调
    onClose = () => {
        this.setState({
          visible: false,
          flag:1
        });
    }

    //onclose执行state变化
    //当state发生变化时调用
    componentDidUpdate(prevProps, prevState) {
        // if(this.state.visible !==prevState.visible){  //不这么写是避免第一次state变化时就执行，而是当onclose执行过再执行
        if (this.state.visible===false && prevState.visible ===true) {
            //通过props属性获取父组件的getVisible方法，并将this.state值传递过去
            this.props.getVisible(false);
            this.setState({
                flag:0
            })
        }
    }


    //父组件点击事件产生，传来新的visible，此时的visible为true
    //当从父组件接收到的值与当前state不同时
    static getDerivedStateFromProps(props,state) {

        //flag===0表示不是由于执行onClose而导致的visible为false
        if (props.visible !== state.visible && state.flag===0) {
          return {
            visible: props.visible,
          };
        }
        return null;
    }
    render() {
        const{price} = this.props
        return (
            <div style={{ overflow: 'hidden' }}>
                <Drawer
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div >
                        <div className="header">
                            <img className="drawer-img" src={goodsimg} alt=""></img>
                            <div className="header-content">
                                <div className="price">
                                    <Price>{price}</Price>
                                </div>
                            </div>
                        </div>
                        <div className="body" style={{ height: '40vh', overflowY: 'scroll' }}>
                            {Object.entries(this.state.skus).map((item,firstindex)=>(
                                <div className="type" key={firstindex}>
                                    {item[0]}
                                    {item[1].map((v,secondindex)=> (
                                        <div  
                                            onClick={()=>this.handleSelectType(firstindex,secondindex)} 
                                            key={secondindex}
                                            className={"type-values"+((this.state.currentSelectFirst===firstindex && this.state.currentSelectSecond===secondindex)?" active": "")}                                             
                                        >
                                            {v}
                                        </div>
                                    ))}
                                </div>
                            ))}  
                        </div>
                        <div className="check-btn">
                            <Button type="danger" size="large">确认</Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
}
