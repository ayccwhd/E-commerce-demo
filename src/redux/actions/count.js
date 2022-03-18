import { INCREMENT, DECREMENT } from '../constant'
import store from '../store'
// 该文件专门为Count组件生成action对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createAsyncIncrementAction = (data, time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data));
        }, time)
    }
}