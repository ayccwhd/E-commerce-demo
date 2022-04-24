import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Flex } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Layout from '../Layout/Layout'
import ProductList from '../ProductList/ProductList'
import axios from 'axios'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import './Shop.css'
import '../../mock/user.js'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'

const pages = [1, 2, 3, 4, 5];

export default class Home extends Component {
    // constructor(props) { }
    state = {
        data: [banner1, banner2, banner3],
        imgHeight: 176,
        goodsList: []
    };
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
    loadProductdata() {
        axios.get('/shop').then(res => {
            //输出商品信息
            console.log(res.data);
            console.log(res.data.data.goodsList);
            this.setState({ goodsList: res.data.data.goodsList });
        })
    }
    render() {
        return (
            <div>
                {/* 店铺名 */}
                <NavBar
                    className="shopname"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >小熊的店铺</NavBar>
                {/* <WhiteSpace /> */}
                {/* 轮播图 */}
                <div className="carousel-shop">
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
                {/* 商品列表 */}
                <div className="goodsList">
                    {this.state.goodsList.map(item => (
                        <div key={item.group_img} className="goods">
                            {/* WhiteSpace：上下留白 size表示留白的程度 */}
                            <WhiteSpace size="sm" />
                            {/* <img src={item.group_img} alt="" /> */}
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
                                        </div>
                                    ))}
                                </Flex>
                            </WingBlank>
                        </div>
                    ))
                    }

                </div>
                {/* 底部导航 */}
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <Layout />
            </div>
        )
    }
}
