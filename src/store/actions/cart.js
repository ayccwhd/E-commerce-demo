//该文件专门为Cart组件生成action对象

import {SYNC_CART_GOODS} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
export const snycCartGoods=(data)=>({type: SYNC_CART_GOODS,data})

// export const decrement=(data)=>({type: DECREMENT,data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
// export const incrementAsync=(data,time)=>{
//     return (dispatch)=>{
//        setTimeout(()=>{
//             dispatch(increment(data))
//        },time)
//     }
// }
