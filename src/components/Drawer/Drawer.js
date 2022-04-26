import React, { Component } from 'react'
import {Drawer} from 'antd'
import './Drawer.css'
import goodsimg from '../../assets/imgs/goods-img.png'
import Price from '../Price/Price'
import Button from '../Button/Button'
import classnames from 'classnames'

export default class DrawerPage extends Component {

    state={   
            skus:{
                颜色:["红色","黑色","白色","绿色"],
                内存:["64g","128g","256g","512g"]
            },
            //组件即将挂载时，此时父组件传递过来的visibl应该是false
            visible:false,
            //标记是否执行onClose
            flag:0,
            //当前选中的样式
            currentSelect:[],
        }

    //用于获取商品属性的方法
    searchGoodsType =()=>{
        // const id=this.props.goods_id;
    }
    handleSelectType=(firstindex,secondindex)=>{
        let select=this.state.currentSelect
        select[firstindex]=secondindex
        this.setState({
            currentSelect:select
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
            //componentDidUpdate()中直接调用setState()，但注意它必须被包裹在一个条件语句中
            this.setState({
                flag:0
            })
        }
    }

    //改变商品属性后，需把修改后的属性回传给父组件
    changeType=()=>{
        //currentSelect为属性的下标，需转换为文字，再传给父组件
        let curSelect=this.state.currentSelect
        //获取所有属性
        let alltype=Object.entries(this.state.skus)
        let type=[]
        //获取当前选取的商品属性的文字类型，放入type
        curSelect.forEach((v,index)=>{
            type.push(alltype[index][1][v])
        })
        //传值给父组件
        this.props.changeType(this.props.goods_id,type)
        //点击确认修改，关闭抽屉
        this.onClose()
    }

    //父组件点击事件产生，传来新的visible，此时的visible为true
    //当从父组件接收到的值与当前state不同时
    static getDerivedStateFromProps(props,state) {
        //从父组件获取商品的属性，并设置为默认高亮
        if(props.visible !== state.visible){
            props.type.forEach(v=>{
                Object.entries(state.skus).forEach((item,firstindex)=>{
                    item[1].forEach((e,secondindex) => {
                        if(v.value===e){
                            let select=state.currentSelect
                            select[firstindex]=secondindex
                            return {
                                currentSelect: select,
                            };
                        }                   
                    });
                })
            })
        }
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
            <div>
                <Drawer
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div>
                        <div className="header">
                            <img className="drawer-img" src={goodsimg} alt=""></img>
                            <div className="header-content">
                                <div className="price">
                                    <Price>{price}</Price>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            {Object.entries(this.state.skus).map((item,firstindex)=>(
                                <div className="type" key={firstindex}>
                                    {item[0]}
                                    {item[1].map((v,secondindex)=> (
                                        <div  
                                            onClick={(e)=>this.handleSelectType(firstindex,secondindex)} 
                                            key={secondindex}
                                            className={classnames({
                                                "active":(this.state.currentSelect[firstindex]===secondindex),
                                                "type-values":!(this.state.currentSelect[firstindex]===secondindex)
                                            })}                                             
                                        >
                                            {v}
                                        </div>
                                    ))}
                                </div>
                            ))}  
                        </div>
                        <div className="check-btn">
                            {/* 若要使用防抖，需使用箭头函数形式 ，会有1秒延迟*/}
                            <Button type="danger" size="large" onClick={this.changeType}>确认</Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
}
