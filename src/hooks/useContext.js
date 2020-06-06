import React, { useContext } from 'react'
import ContextChild from './contextChild'
import {shang} from './store/'

export default function UseContext() {
    const ctx = useContext(shang)
    console.log(ctx)

    return (
        <div>
            <h1>UseContext示例</h1>
            <div>我是{ctx.name}——今年{ctx.age}岁</div>
            <p>使用子组件</p>
            <ContextChild></ContextChild>
        </div>
    )
}
