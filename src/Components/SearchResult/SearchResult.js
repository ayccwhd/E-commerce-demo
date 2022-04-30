import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Flex } from 'antd-mobile-v2';
import { Link, Route, BrowserRouter, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile-v2';
import Layout from '../Layout/Layout'
import ProductList from '../ProductList/ProductList'
import axios from 'axios'
import 'antd-mobile-v2/dist/antd-mobile.css';  // or 'antd-mobile-v2/dist/antd-mobile.css'
import './SeachResult.css'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'

const pages = [1, 2, 3, 4, 5];

//高阶组件封装类组件使用router v6
export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}

class SearchResult extends Component {
    // constructor(props) { }
    state = {
        //搜索结果数组
        goodsList: []
    };
    UNSAFE_componentWillMount() {
        //render前获取搜索结果数据
        this.loadProductdata();
    }
    UNSAFE_componentDidMount() {
        this.autoFocusInst.focus();
    }
    loadProductdata() {
        //获取到searchfield页面传递来的参数
        console.log("获取到的关键词" + this.props.location.state);
        //提交查找请求
        axios.post('/searchresult', {
            data: {
                keyword: this.props.location.state
            }
        }).then(res => {
            console.log(res.data.data.goodsList);
            this.setState({ goodsList: res.data.data.goodsList });
        })
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <NavBar
                    className="searchtitle"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >搜索结果</NavBar>
                <WhiteSpace />
                {/* 搜索结果列表 */}
                <div className="goodsList">
                    {this.state.goodsList.map(item => (
                        <div key={item.group_img} className="goods">
                            {/* WhiteSpace：上下留白 size表示留白的程度 */}
                            <WhiteSpace size="sm" />
                            {/* <img src={item.group_img} alt="" /> */}
                            {/* WingBlank：左右留白 size表示留白的程度 */}
                            <WingBlank size="md">
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
                <WhiteSpace size="lg" />
                {/* 底部导航 */}
                <Layout />
            </div>
        )
    }
}

export default withRouter(SearchResult);