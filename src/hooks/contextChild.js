import React, { useContext } from 'react'
import {huo} from './store/'

export default function ContextChild() {
    const ctx = useContext(huo)
    return (
        <div>我是{ctx.name}——今年{ctx.age}岁</div>
    )
}