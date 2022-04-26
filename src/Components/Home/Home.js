import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Flex } from 'antd-mobile-v2';
import { Link, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile-v2';
import Layout from '../Layout/Layout'
import ProductList from '../ProductList/ProductList'
import 'antd-mobile-v2/dist/antd-mobile.css';  // or 'antd-mobile-v2/dist/antd-mobile.css'
import './Home.css'
import '../../mock/user.js'
import axios from 'axios'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'

const pages = [1, 2, 3, 4, 5];

export default class Home extends Component {
    state = {
        data: [banner1, banner2, banner3],
        imgHeight: 176,
        goodsList: []

    };
    constructor(props) {
        super(props);
        console.log("constructor");
        this.searchtext = React.createRef();
    }
    UNSAFE_componentWillMount() {
        //render前获取商品数据
        this.loadProductdata();
    }

    UNSAFE_componentDidMount() {
        this.autoFocusInst.focus();
        setTimeout(() => {
            this.setState({
                data: [banner1, banner2, banner3],
            });
        }, 100);
    }
    //获取商品数据
    loadProductdata() {
        axios.get('/').then(res => {
            //输出商品信息
            console.log("loadProductdata");
            console.log(res.data);
            console.log(res.data.data.goodsList);
            this.setState({ goodsList: res.data.data.goodsList });
        })
    }
    //搜索事件处理
    onKeyup(e) {
        console.log("onKeyup");
        if (e.keyCode === 13) {
            this.handleBtnClick()
        }
    }
    searchBarhandle = () => {
        this.props.history.push('/searchfield');
    }
    beforeChange = (from, to) => {
        console.log(`slide from ${from} to ${to}`)
    }
    afterChange = (index) => {
        console.log('slide to', index)
    }
    render() {
        return (
            <div>
                <SearchBar placeholder="请输入您想要查找的商品"
                    onFocus={this.searchBarhandle}
                    className="searchbar"
                />

                {/* <WhiteSpace /> */}
                {/* 轮播图 */}
                <div className="carousel">
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href=" "
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    //src={`../../assets/${val}.png`}
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                {/* 分类 */}
                <div className="catitems">
                    {/* <div onClick={() => this.props.history.push('/searchgoods/query=秒杀')}><img src={`${baseUrl}/pyg/icon_index_nav_4@2x.png`} alt="" /></div> */}
                    <div>
                        <img src={category1} alt="" />
                        <span style={{ fontSize: 2, display: 'block' }}>服饰鞋帽</span>
                    </div>
                    <div>
                        <img src={category2} alt="" />
                        <span style={{ fontSize: 2, display: 'block' }}>数码电器</span>
                    </div>
                    <div>
                        <img src={category3} alt="" />
                        <span style={{ fontSize: 2, display: 'block' }}>生鲜食品</span>
                    </div>
                    <div>
                        <img src={category4} alt="" />
                        <span style={{ fontSize: 2, display: 'block' }}>优惠领劵</span>
                    </div>
                </div>
                {/* 商品列表 */}
                <div className="goodsList">
                    {this.state.goodsList.map(item => (
                        <div key={item.group_img} className="goods">
                            {/* WhiteSpace：上下留白 size表示留白的程度 */}
                            <WhiteSpace size="sm" />
                            <img src={item.group_img} alt="" />
                            {/* WingBlank：左右留白 size表示留白的程度 */}
                            <WingBlank size="sm">
                                {/* 采用flex布局 */}
                                <Flex
                                    justify="between"
                                    wrap="wrap"
                                >
                                    {item.goods.map(v => (
                                        <div key={v.goods_id} className="good">
                                            <div className="good_content"
                                                onClick={() => this.props.history.push(`/goodsdetail/${v.goods_id}`)}
                                            >
                                                <img src={v.goods_img_replace} alt="" />
                                                <div className="describe ellipsis-1">{v.goods_name}</div>
                                                <div className="price">&yen;{v.goods_price}</div>
                                            </div>
                                            <button
                                                className='search-similar'
                                            //onClick={() => this.handleSearchSimilar(v.cat_id)}
                                            >
                                                找相似
                                            </button>
                                        </div>
                                    ))}
                                </Flex>
                            </WingBlank>
                        </div>
                    ))
                    }

                </div>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                {/* <WhiteSpace size="lg" /> */}
                {/* 底部导航 */}
                <Layout />
            </div>
        )
    }
}
