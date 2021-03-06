import {SYNC_CART_GOODS} from '../constant'
let initState = {
    totalNum: 0
}

export const CartReducer = (state = initState, action) => {
    switch (action.type) {
        // 同步购物车数据
        case SYNC_CART_GOODS:
            let {cart_Infos} = action.data
            let totalNum = state.totalNum;
            // 通过循环遍历获取购物车商品总量
            for (let goods_id in cart_Infos) {
                totalNum += cart_Infos[goods_id].amount
            }
            state.totalNum=totalNum
            // 返回新的数据
            return {...state}
        case 'ADD_CART':
            state.totalNum += 1
            return {...state}
        // 点击结算时保存购物车数据
        case 'BUY_NOW':
            return {...state, ...action.data}
        case 'CLEAR': 
            return {}
        default:
        // 返回默认数据
        return state
    }
    
}