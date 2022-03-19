import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
//UI组件
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],//整体的数据
            leftData: [],//左边的数据
            rightData: [],//右边的数据
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
        }
    }
    // 双列瀑布流(存在问题，准备用插件)
    getData(data) {
        let heightData = [0, 0];//接收累计高度的容器数组
        let rightData = []//渲染右侧盒子的数组
        let leftData = []//渲染左侧盒子的数组
        data.forEach(item => {
            let height = item.goods_name.length;
            let minNum = Math.min.apply(null, heightData)// 从heighetData筛选最小项
            let minIndex = heightData.indexOf(minNum);// 获取 最小项的小标 准备开始进行累加
            heightData[minIndex] = heightData[minIndex] + height;//从 heightData 中找到最小的项后进行累加， 
            if (minIndex === 0) {//[0]加到left [1]加到 right
                leftData.push(item)
            } else {
                rightData.push(item)
            }
        })
        this.setState({ leftData, rightData });//重新set state
    }
    componentDidMount() {
        axios.get('http://localhost:3000/productlist').then(res => {
            console.log(res.data);
        })
    }
    render() {
        return (
            <Fragment>
                <div className='left'>
                    {
                        leftData && leftData.map((item, index) => {
                            return <img src={item.src} alt={index} key={index} />
                        })
                    }
                </div>
                <div className='right'>
                    {
                        rightData && rightData.map((item, index) => {
                            return <img src={item.src} alt={index} key={index} />
                        })
                    }
                </div>
            </Fragment>
        );

    }
}
export default ProductList;
