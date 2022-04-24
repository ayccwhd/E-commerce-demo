import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom' 
import {snycCartGoods} from '../../store/actions/cart';
import { RightOutline,LeftOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'
import { Checkbox, SwipeAction, Toast } from 'antd-mobile-v2'
import { Stepper } from 'antd-mobile'
import goods_img from '../../assets/imgs/goods-img.png'
import emptyCart from '../../assets/imgs/cart_empty.png'
import { syncCart } from '../../api/index'
import Drawer from '../../components/Drawer/Drawer'
import Price from '../../components/Price/Price'
import '../../style/cart.css'
import classnames from 'classnames'
import alert from '../../components/Alert/Alert'
import Layout from '../../components/Layout/Layout'
const CheckboxItem = Checkbox.CheckboxItem;

// v6使用class组件。需要封装一下。利用hoc组件来获取参数，然后传递给class组件
function myWithRouter(Cart) {
    return (props) => {
      let navigate = useNavigate();
      return <Cart {...props} navigate={navigate}></Cart>
    }
  }
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart_infos: [
                {
                    shopName:'华为官方旗舰店',
                    goodsList:[
                        {
                            goods_id:'01',goods_name:'华为手机荣耀之上6400万高清自摄66w超级快冲 4g全网通6400万高清自摄66w超级快冲 4g全网通',
                            goods_type:[
                                {
                                    "code":100,
                                    "key": "颜色",
                                    "value": "红色红色红色红色红色红色"
                                },
                                {
                                    "code":101,
                                    "key": "容量",
                                    "value": "128g"
                                }
                            ],
                            goods_price:6999,
                            amount:1,
                            // goods_img:
                        }
                    ]
                },
                {
                    shopName:'苹果官方旗舰店',
                    goodsList:[ 
                        {
                            goods_id:'02',goods_name:'苹果手机6400万高清自摄66w超级快冲 4g全网通',
                            goods_type:[
                                {
                                    "code":105,
                                    "key": "颜色",
                                    "value": "白色"
                                },
                                {
                                    "code":108,
                                    "key": "容量",
                                    "value": "64g"
                                }
                            ],
                            goods_price:8999.58,amount:1
                        },
                        {
                            goods_id:'03',goods_name:'苹果手机6400万高清自摄66w超级快冲 4g全网通',
                            goods_type:[
                                {
                                    "code":106,
                                    "key": "颜色",
                                    "value": "红色"
                                },
                                {
                                    "code":110,
                                    "key": "容量",
                                    "value": "64g"
                                }
                            ],goods_price:7999.85,amount:1
                        }
                    ],
                },
                {
                    shopName:'小米官方旗舰店',
                    goodsList:[
                        {
                            goods_id:'04',goods_name:'红米手机6400万高清自摄66w超级快冲 4g全网通',
                            goods_type:[
                                {
                                    "code":120,
                                    "key": "颜色",
                                    "value": "黑色"
                                },
                                {
                                    "code":107,
                                    "key": "容量",
                                    "value": "256g"
                                }
                            ],goods_price:8999,amount:1
                        },
                        {
                            goods_id:'05',goods_name:'小米手机6400万高清自摄66w超级快冲 4g全网通',
                            goods_type:[
                                {
                                    "code":104,
                                    "key": "颜色",
                                    "value": "绿色"
                                },
                                {
                                    "code":112,
                                    "key": "容量",
                                    "value": "512g"
                                }
                            ],goods_price:4999,amount:1
                        }
                    ]
                }
            ],
            // 购物车是否为空，否的话为空
            cart_infos_Status: true,
            // stepper改变数量的值
            // num: '',
            // totalPrice是底部的总价
            totalPrice: 0,
            // allStatus即全选按钮是否选择，默认不选中
            allStatus: false,
            // 右下角选择去结算的商品种类数量
            allSelectedNum: 0,
            // 选择的商品总个数 商品种类*单个商品的amount
            // selectedGoodsTotalNum: 0,
            // totalNum为购物车商品种类的数量
            totalNum: 0,
            // manage是为了点击右上角的管理时是否显示底部的删除按钮
            manage: true,
            //是否显示抽屉
            visible:false,
            //当前需要显示抽屉的商品id,和价格
            showDrawerid:"",
            showDrawerprice:0,
            showDrawertype:[]
        }
        // this.init()
        
    }
    componentDidMount() {
        let totalNum=this.calTotalNum()
        console.log(totalNum)
        this.setState({
            totalNum
        }) 
    }

    // 同步购物车数据
    syncCartGoodsData = () => {
        syncCart({ infos: JSON.stringify(this.state.cart_infos) })
        // 计算CartReducer中的totalNum
        // this.props.snycCartGoods(this.state.cart_infos, this.state.totalPrice, this.state.selectedGoodsTotalNum)
        this.props.snycCartGoods(this.state.cart_infos)
    }

    // 改变商品数量（stepper)
    handleUpdateNum = (num, goods_id,shopindex) => {
        // 更新被点击的商品的数量
        const cart_infos = this.state.cart_infos
        const goodsList = cart_infos[shopindex].goodsList
        let key=goodsList.findIndex(x => x.goods_id === goods_id);
        goodsList[key].amount = num
        this.setState({
            // num,
            cart_infos,
        }, () => {
            // 计算总价
            this.calTotalPrice()
            // 同步购物车
            // this.syncCartGoodsData()
        })
    }
    // 改变商品是否选择的状态
    changeSingleSelectedStatus = (e, goods_id,shopname) => {
        // 同步状态
        console.log(Object.values(this.state.cart_infos))
        let cart_infos = this.state.cart_infos;
        let key=cart_infos.findIndex(x =>x.shopName === shopname);
        let good=cart_infos[key].goodsList.findIndex(x =>x.goods_id === goods_id);
        cart_infos[key].goodsList[good].selectedStatus = e.target.checked
        //判断该商品所属店铺的商品是否全选中
        this.isShopAllSelected(key)
        // 判断所有商品是否都选中
        this.isAllSelected()
        // 计算总价
        this.calTotalPrice()
        this.setState({
            // 更新购物车商品信息
            cart_infos: cart_infos,
            // 判断是增函数减选择的商品数量
            allSelectedNum: e.target.checked ? this.state.allSelectedNum + 1 : this.state.allSelectedNum - 1
        })
    }
    // 改变店铺商品是否全部选择的状态
    changeShopSelectedStatus = (e, shopindex) => {
        // 获取商品信息
        let cart_infos = this.state.cart_infos
        let shop_infos=cart_infos[shopindex]
        shop_infos.selectedStatus=e.target.checked 
        let count=0
        // 循环遍历每个商品，设置是否选中
        for (let good in shop_infos.goodsList) {
            //判断已选或未选商品，便于计算选择的商品的总数量
            if(shop_infos.goodsList[good].selectedStatus!==e.target.checked){
                count++
            }
            shop_infos.goodsList[good].selectedStatus = e.target.checked 
        }
        this.setState({
            cart_infos,
            allSelectedNum: e.target.checked ? this.state.allSelectedNum + count : this.state.allSelectedNum - count
        })
        // 判断所有商品是否都选中
        this.isAllSelected()
        // 计算总价
        this.calTotalPrice()
    }
    //判断某店铺的商品是否全选中
    isShopAllSelected=(key)=>{
        // 先预设全选状态为true
        const cart_infos=this.state.cart_infos
        const shop_info=cart_infos[key]
        shop_info.selectedStatus=true
        const good_infos=shop_info.goodsList
        // 循环判断每个商品是否都选中
        for (let good in good_infos) {
            if (!good_infos[good].selectedStatus) {
                // 如果有一个没选中，则设置全选状态为false，并跳出循环
                shop_info.selectedStatus = false
                break
            }
        }
        this.setState({
            cart_infos: cart_infos
        })
    }
    // 判断所有商品是否都选中
    isAllSelected = () => {
        // 先预设全选状态为true
        let allSelected = true

        // 循环判断每个商品是否都选中
        for (let good in this.state.cart_infos) {
            if (!this.state.cart_infos[good].selectedStatus) {
                // 如果有一个没选中，则设置全选状态为false，并跳出循环
                allSelected = false
                break
            }
        }
        this.setState({
            allStatus: allSelected
        })
    }
    // 点击全选框
    handleAllChecked = () => {
        // 获取商品信息
        let cart_infos = this.state.cart_infos
        // 循环遍历每个商品，设置是否选中,与allStatus同步
        for (let key in cart_infos) {
            cart_infos[key].selectedStatus = this.state.allStatus
            for (let good in cart_infos[key].goodsList) {
                cart_infos[key].goodsList[good].selectedStatus = this.state.allStatus
            }
        }
        //计算总商品数
        let totalnum=this.calTotalNum()
        this.setState({
            cart_infos,
            allSelectedNum: this.state.allStatus ? totalnum : 0
        })
        // 计算总价
        this.calTotalPrice()
    }
    //计算总商品数
    calTotalNum = () => {
        let totalNum=0
        let cart_infos = this.state.cart_infos
        Object.values(cart_infos).map(v=>
            totalNum+=v.goodsList.length
        )
        return totalNum
    }

    // 计算总价
    calTotalPrice = () => {
        let totalPrice = 0
        // let selectedGoodsTotalNum = 0
        const cart_infos=this.state.cart_infos
        for (let shop in cart_infos) {
            const goodlist=cart_infos[shop].goodsList
            for(let good in goodlist){
                if (goodlist[good].selectedStatus) {
                    totalPrice += goodlist[good].amount * goodlist[good].goods_price
                    // selectedGoodsTotalNum += this.state.cart_infos[good].amount
                }
            }
        }
        this.setState({
            totalPrice,
            // selectedGoodsTotalNum
        })
    }
    // 删除单个商品
    handleDeleteSingleGoods = (goods_id,shopindex) => {
        let cart_infos = this.state.cart_infos
        let shop_infos = cart_infos[shopindex]
        // 删除对应id的商品
        delete shop_infos.goodsList[goods_id]
        //计算总商品数
        let totalNum=this.calTotalNum()
        // 再更新state中的cart_infos
        this.setState({
            cart_infos,
            totalNum,
            allSelectedNum: this.state.allSelectedNum ? this.state.allSelectedNum - 1 : 0,
            // 如果购物车为空，则设置购物车信息状态为false，表示购物车清空了
            cart_infos_Status: !Object.values(cart_infos).length? false: true
        }, () => {
            // 同步购物车
            this.syncCartGoodsData()
            // 计算总价
            this.calTotalPrice()
        })

    }
    // 批量删除商品
    handleDeleteBatchGoods = () => {
        let cart_infos = this.state.cart_infos
        // 循环判断哪些商品被选中，选中的直接删除
        for (let good in cart_infos) {
            // 如果selectedStatus，即被选中，删除掉
            if (cart_infos[good].selectedStatus) {
                delete cart_infos[good]
            }
        }
        //计算总商品数
        let totalNum=this.calTotalNum()
        // 这里因为选中了商品，所以计算了所选中商品的总价和总商品数，故点击删除的时候要清零，否则删除后数字还在
        this.setState({
            cart_infos,
            totalPrice: 0,
            allSelectedNum: 0,
            // selectedGoodsTotalNum: 0,
            totalNum,
            // 如果购物车为空，则设置购物车信息状态为false，表示购物车清空了
            cart_infos_Status: !totalNum? false: true
        }, () => {
            this.syncCartGoodsData()
            // 计算总价
            this.calTotalPrice()
        })
    }
    gotoPay = () => {
        // 提交订单之前判断是否选择了商品
        if (!this.state.allSelectedNum) {
            Toast.fail('您还没有选择宝贝呢', 2)
            return
        }
        // 将CartReducer中保存的数据更新,此处的参数传给action的data
        // this.props.snycCartGoods(this.state.cart_infos, this.state.totalPrice, this.state.selectedGoodsTotalNum)
        this.props.snycCartGoods(this.state.cart_infos)
        this.props.navigate('/pay')
    }
    //打开抽屉
    showGoodsType = (id,price,type) => {
        // const goods_type=[goods_id]
        // 调用获取商品信息接口，传递给组件Drawer
        let curvisible=!this.state.visible
        this.setState({
            showDrawerid:id,
            showDrawerprice:price,
            showDrawertype:type,
            visible:curvisible
        })
    }
    //抽屉关闭的回调函数
    getVisible(msg){
        //把子组件传递过来的值赋给this.state中的属性
        this.setState({
            visible: msg
        });
    }
    //抽屉修改商品属性后的回调
    changeType(id,type){
        //把子组件传递过来的值赋给this.state中的属性
        const cart_infos = this.state.cart_infos
        for(let shop in cart_infos){
            let key=cart_infos[shop].goodsList.findIndex(x => x.goods_id === id)
            if(key!==-1){
                type.forEach((v,index)=>{
                    cart_infos[shop].goodsList[key].goods_type[index].value=v
                })
                break
            }
        }        
        
        //此处需要调用修改商品属性的接口
        this.setState({
            cart_infos:cart_infos
        });
    }
    changeManage=()=>{
        this.setState({ manage: this.state.manage ? false : true })
    }

    render() {
        console.log(this.state.totalNum)
        return (
            <div>
                {/* 顶部导航条 */}
                <nav className="nav-header">
                    <LeftOutline/>
                    <div className="nav-header-center">
                        购物车({this.state.totalNum ? this.state.totalNum : ''})
                    </div>
                    <div className="nav-header-right">
                        <span onClick={this.changeManage} className="manage">
                            {this.state.manage ? '编辑' : '完成'}
                        </span>
                    </div>
                </nav>
                {this.state.cart_infos_Status ?
                    <div className="order">
                        <div className="order-list">
                            {Object.values(this.state.cart_infos).map((item,shopindex)=> (
                                <div className={classnames({
                                    "section":true,
                                    "lastsection":shopindex===this.state.cart_infos.length-1
                                    })} 
                                    key={item.shopName}
                                >
                                    <CheckboxItem
                                        checked={item.selectedStatus}
                                        onChange={e => this.changeShopSelectedStatus(e, shopindex)}
                                    >
                                        <div className="head">
                                            <div className="title"
                                                onClick={() => this.props.navigate(`/shopinfo/${item.shopName}`)}
                                            >
                                                {item.shopName} 
                                            </div>
                                            <RightOutline fontSize={12}/>
                                        </div>
                                    </CheckboxItem>
                                    {item.goodsList.map((v)=> (
                                        <div key={v.goods_id}>
                                            <SwipeAction                                
                                                autoClose
                                                right={[
                                                    {
                                                        text: '移入关注',
                                                        style: { backgroundColor: '#ddd', color: 'white' },
                                                        onPress:()=>alert(1,'移入关注',this.handleDeleteSingleGoods.bind(this,v.goods_id,shopindex))
                                                    },
                                                    {
                                                        text: '删除',
                                                        style: { backgroundColor: '#F4333C', color: 'white' },
                                                        onPress:()=>alert(1,'删除',this.handleDeleteSingleGoods.bind(this,v.goods_id,shopindex))
                                                    },
                                                ]}
                                            >                              
                                                <CheckboxItem
                                                    checked={v.selectedStatus}
                                                    onChange={e => this.changeSingleSelectedStatus(e, v.goods_id,item.shopName)}
                                                >
                                                    <div className="single-order">
                                                        <img src={goods_img} 
                                                            onClick={() => this.props.navigate(`/productinfo/${v.goods_id}`)}
                                                            alt="" />
                                                        <div className="order-content">
                                                            <div className="order-title ellipsis-2"
                                                                onClick={() => this.props.navigate(`/productinfo/${v.goods_id}`)}
                                                            >
                                                                {v.goods_name}
                                                            </div>
                                                            <div className="sku"
                                                                onClick={()=>this.showGoodsType(v.goods_id,v.goods_price,v.goods_type)}
                                                            >
                                                                {v.goods_type.map((v)=>(
                                                                    <span className="sku_attr" key={v.code}>
                                                                        {v.value}
                                                                    </span>
                                                                ))}

                                                            </div>
                                                            <Stepper
                                                                showNumber
                                                                max={v.goods_number}
                                                                min={1}
                                                                defaultValue={v.amount}
                                                                onChange={(num) => this.handleUpdateNum(num, v.goods_id,shopindex)}
                                                            />
                                                            <div className="order-price">
                                                                <Price>{v.goods_price}</Price>
                                                            </div>                                    
                                                        </div>
                                                    </div>
                                                </CheckboxItem>
                                            </SwipeAction>
                                        </div>
                                    ))}
                                </div>                               
                            ))}
                        </div>
                       
                    </div>
                    : <div className="empty-cart">
                        {/* 此处的图片不能直接写路径，只能通过import的方式将它引入进来 */}
                        <img src={emptyCart} alt="" className="empty-cart-img" />
                        <div className="empty-cart-text1">购物车竟然是空的！</div>
                        <div className="empty-cart-text2">再忙，也要记得买点什么犒劳自己~</div>
                        <div className="btn" onClick={() => this.props.navigate('/home')}>去逛逛</div>
                    </div>
                    
                }
                {/* 此处一定要bind(this),否则getVisible中的this为子组件的 */}
                <Drawer visible={this.state.visible}  getVisible={this.getVisible.bind(this)} changeType={this.changeType.bind(this)} goods_id={this.state.showDrawerid} price={this.state.showDrawerprice} type={this.state.showDrawertype}/>
                <div className="cart-footer">
                    <div className="cart-footer-left" >
                        <CheckboxItem
                            checked={this.state.allStatus}
                            onChange={() => {
                                this.setState({
                                    allStatus: !this.state.allStatus
                                },
                                    // 这里由于异步，所以等全选状态改变后再执行handleAllChecked
                                    () => this.handleAllChecked())
                            }}
                        >
                            全选
                        </CheckboxItem>
                    </div>
                    {this.state.manage ?
                        <div className="cart-footer-center">
                            <div>合计：</div>
                            <div className="total-price">
                                <Price>{this.state.totalPrice}</Price>
                            </div>
                        </div> : ''
                    }
                    {this.state.manage ?
                        <div className="cart-footer-right" onClick={this.gotoPay}>
                            <span className="goto-pay">结算{this.state.allSelectedNum ? `(${this.state.allSelectedNum}）` : ''}</span>
                        </div>
                        :
                        <div>
                            <button className="delete-batch"
                                onClick={()=>alert(this.state.allSelectedNum,'移入关注',this.handleDeleteBatchGoods.bind(this))}
                            >移入关注</button>  
                            <button className="delete-batch"
                                onClick={()=>alert(this.state.allSelectedNum,'删除',this.handleDeleteBatchGoods.bind(this))}
                            >删除</button>
                        </div>
                    }
                </div>
                {/* 底部导航栏部 */}
                <Layout num={this.state.totalNum}/>
            </div >
        )
    }
}

export default connect(
    state=>({totalNum:state.totalNum}),
    {
        snycCartGoods
    }
)(myWithRouter(Cart))   //固定的写法
