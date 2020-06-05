import React from 'react'
import ReactDom from 'react-dom'

//第一个React程序
// import App from './app'
// ReactDom.render(<App></App>,document.getElementById("root"))

/************************************************** */

//高阶组件
import HOC from './hoc/hoc'
ReactDom.render(<HOC title="我是高阶组件体验人员"></HOC>,document.getElementById("root"))