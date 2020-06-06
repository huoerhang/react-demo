import React from 'react'
import ReactDom from 'react-dom'

//第一个React程序
// import App from './app'
// ReactDom.render(<App></App>,document.getElementById("root"))

/************************************************** */

//演示高阶组件
// import HOC from './hoc/hoc'
// ReactDom.render(<HOC title="我是高阶组件体验人员"></HOC>, document.getElementById("root"))

//演示上下文
//import Context1 from "./hoc/context1";
//import Context2 from "./hoc/context2";
//ReactDom.render(<Context2></Context2>, document.getElementById("root"))

/************************************************** */

//演示Hooks
// import App from './hooks/app'
// ReactDom.render(<App></App>, document.getElementById("root"))


//演示UseContext
// import  UseContext from './hooks/useContext'
// ReactDom.render(<UseContext></UseContext>,document.getElementById("root"));

//演示useReducer
// import UseReducerComponent from './hooks/useReducerComponent'
// ReactDom.render(<UseReducerComponent></UseReducerComponent>,document.getElementById("root"))

//演示其他官网定义Hooks
// import OtherHooks from './hooks/otherHooks'
// ReactDom.render(<OtherHooks></OtherHooks>,document.getElementById("root"))

//演示自定义Hooks
// import CustomHooks from "./hooks/useChangeTitle";
// ReactDom.render(<CustomHooks></CustomHooks>,document.getElementById("root"))
/************************************************************************** */

//演示redux
//编写第一个redux累加器
// import FirstRedux from "./reduxFolder/firstRedux";
// import Store from './reduxFolder/store';
// const render=()=>{
//     ReactDom.render(<FirstRedux></FirstRedux>, document.getElementById("root"))
// }
// render()
// Store.subscribe(render)

//使用react-redux
// import FirstRedux from "./reduxFolder/firstRedux";
// import Store from './reduxFolder/store';
// import { Provider } from 'react-redux'
// ReactDom.render(
//     <Provider store={Store}>
//         <FirstRedux></FirstRedux>
//     </Provider>
//     , document.getElementById("root"))

//放到count-redux统一管理
// import { createStore,applyMiddleware } from "redux";
// import { Provider } from 'react-redux'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import FirstRedux from './reduxFolder/firstRedux'
// import {firstReducer} from './reduxFolder/count-redux'

// const store =createStore(firstReducer,applyMiddleware(thunk,logger))
// ReactDom.render(
//     <Provider store={store}>
//         <FirstRedux></FirstRedux>
//     </Provider>
//     , document.getElementById("root"))

/******************************************************************** */


//演示路由
import RouterSample from './reactRouter/routerSample'
ReactDom.render(<RouterSample></RouterSample>,document.getElementById("root"))