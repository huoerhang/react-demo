import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import user from './user.redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

//第一步：使用createSagaMiddleware创建中间件
const mid = createSagaMiddleware()

//第二步：应用中间件
const store = createStore(
    combineReducers({ user }),
    applyMiddleware(mid, logger)
)

//第三步：执行saga，运行事件监听
mid.run(saga)

export default store