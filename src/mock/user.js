const Mock = require('mockjs')
//mock服务模拟数据
//get请求
module.exports = Mock.mock('/', 'get', (options) => {
    const ret = Mock.mock({
        'user': { username: 'Tom' },
        'goodsList': [
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
                    },
                    {
                        "goods_id": 27535,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    }
                ]
            }
        ]
    })
    return {
        status: 200,
        data: ret
    }
})
module.exports = Mock.mock('/shop', 'get', (options) => {
    const ret = Mock.mock({
        'user': { username: 'Tom' },
        'goodsList': [
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
                    },
                    {
                        "goods_id": 27535,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    }
                ]
            }
        ]
    })
    return {
        status: 200,
        data: ret
    }
})
module.exports = Mock.mock('/searchresult', 'get', (options) => {
    const ret = Mock.mock({
        'user': { username: 'Tom' },
        'goodsList': [
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
                    },
                    {
                        "goods_id": 27535,
                        "goods_name": "哈曼卡顿（Harman/Kardon） SABRE35CN 条形回音壁套装 黑色",
                        "goods_price": 7999,
                        "goods_img": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_800x800.jpg",
                        "goods_img_replace": "http://image5.suning.cn/uimg/b2c/newcatentries/0070072458-000000000134974159_1_400x400.jpg",
                        "cat_id": 20
                    }
                ]
            }
        ]
    })
    return {
        status: 200,
        data: ret
    }
})
//get请求：模拟分页数据
module.exports = Mock.mock('/list', 'get', (options) => {
    //接受参数：是JSON格式，需要转换成对象
    const page = JSON.parse(options.body).page
    const ret = Mock.mock({
        'list|20': [{ 'id|+1': 1, name: '@cname' }]
    })

    if (page > 3) {
        return {
            status: 200,
            data: []
        }
    }
    return {
        status: 200,
        data: ret
    }
})

//post请求，模拟注册
module.exports = Mock.mock('/add', 'post', (options) => {
    return {
        status: 200,
        data: JSON.parse(options.body).data
    }
})
