// 该文件专门用于暴露store对象
import { createStore, applyMiddleware } from 'redux'
import allReducer from './reducers/index.js'
//用于支持异步Action
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


//不能连起来写会报错 applyMiddleware(thunk)
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

