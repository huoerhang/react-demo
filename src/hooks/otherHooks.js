import React, { useMemo, useRef } from 'react'

const UseRefComponent = () => {
    const inputRef = useRef()
    const getValue = () => {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input ref={inputRef} type="text"></input>
            <button onClick={getValue}>获取input的值</button>
        </div>
    )
}

export default function OtherHooks() {
    const obj1 = { taller: 180, name: '霍', age: 20 }
    const obj2 = { taller: 165, name: '尚', age: 18, gender: '女' }
    const memoValue = useMemo(() => Object.assign(obj1, obj2), [obj1, obj2])
    console.log(memoValue)

    return (
        <div>
            {/*使用useMome */}
            {/* 姓名：{memoValue.name} */}
            {/* 使用useRef */}
            <UseRefComponent></UseRefComponent>
        </div>
    )
}
