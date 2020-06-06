import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//创建reducer
const firstReducer = (state = 10, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'reduce':
            return state - 1;
        default:
            return state;
    }
}

//创建数据仓库
//不使用中间件创建数据仓库
//const store = createStore(firstReducer)

//使用中间件创建数据仓库
const store =createStore(firstReducer,applyMiddleware(thunk,logger))
export default store