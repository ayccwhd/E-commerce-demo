import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Flex } from 'antd-mobile';
import Layout from '../Layout/Layout'
import ProductList from '../ProductList/ProductList'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import './Home.css'
import banner1 from '../../pictures/banner1.png'
import banner2 from '../../pictures/banner2.png'
import banner3 from '../../pictures/banner3.png'
import category1 from '../../pictures/category1.png'
import category2 from '../../pictures/category2.png'
import category3 from '../../pictures/category3.png'
import category4 from '../../pictures/category4.png'

const pages = [1, 2, 3, 4, 5];

export default class Home extends Component {
    // constructor(props) { }
    state = {
        data: [banner1, banner2, banner3],
        imgHeight: 176,
        goodsList: [
            {
                "group_img": "http://image4.suning.cn/uimg/cms/img/149559219946350066.png",
                "goods": [
                    {
                        "goods_id": 27520,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    },
                    {
                        "goods_id": 27521,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    },
                    {
                        "goods_id": 27522,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    },
                    {
                        "goods_id": 27523,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    },
                    {
                        "goods_id": 27524,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    },
                    {
                        "goods_id": 27525,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    }
                ]
            }
        ]
    };
    // 在render之前获取数据
    // UNSAFE_componentWillMount() {
    //     // 获取商品列表数据
    //     getHomeGoodslist().then(res => {
    //         // 解构赋值
    //         const { message, meta: { status } } = res.data
    //         // 状态码为200的时候
    //         if (status === 200) {
    //             //  首页商品是16 => 4 * 4个，随机获取0~15索引值
    //             const index = Math.floor((Math.random() * 16))
    //             // 计算行和列
    //             const i = Math.floor(index / 4)
    //             const j = index % 4

    //             this.setState({
    //                 // 将获取到的商品列表数据赋值给goodsList
    //                 goodsList: message,
    //                 // 搜索框预设初值
    //                 placeholderPre: message[i].goods[j].goods_name.slice(0, 10) + '...',
    //                 // 获取商品列表后显示底部文字
    //                 bottom: true
    //             })
    //         }
    //     })
    // }
    UNSAFE_componentDidMount() {
        this.autoFocusInst.focus();
        setTimeout(() => {
            this.setState({
                data: [banner1, banner2, banner3],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                {/* 搜索栏 */}
                <SearchBar className="searchbar" placeholder="请输入您想要查找的商品" ref={ref => this.autoFocusInst = ref} />
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
                                    //src={`../../pictures/${val}.png`}
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
                {/* 底部导航 */}
                <Layout />
            </div>
        )
    }
}
