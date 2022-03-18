import { INCREMENT, DECREMENT } from '../constant'
// 该文件创建一个为Count组件服务的reducer，本质就是一个函数
const initState = 0//初始化状态
export default function countReducer(preState = initState, action) {
    // 初始化时
    console.log(preState);
    //console.log(action);
    if (preState === undefined) preState = 0
    //获取action对象的值
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }

}