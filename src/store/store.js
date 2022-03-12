//该文件用于暴露一个store对象，整个应用只有一个store对象

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
//引入汇总后的reducer
import RootReducer from './reducers/reducer'
//
import logger from 'redux-logger'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
let store = createStore(RootReducer, applyMiddleware(thunk,logger))
export default store