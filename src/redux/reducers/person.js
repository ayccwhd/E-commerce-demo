import { ADD_PERSON } from '../constant'

//reducer负责初始化状态和加工状态
const initState = [{ id: '001', name: 'tom', age: 18 }]

export default function personReducer(perState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...perState] //一般不使用push.unshift进行修改 
        default:
            return perState
    }
}