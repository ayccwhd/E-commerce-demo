//该文件用于汇总所有reducer为一个总的reducer
import { combineReducers } from 'redux'
import { CartReducer } from './CartReducer'
import { UserReducer } from './UserReducer'
const RootReducer = combineReducers({
    CartModule: CartReducer,
    userModule: UserReducer
})
export default RootReducer