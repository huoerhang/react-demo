import React from 'react'

const initState = { count: 0 }
const reducer = (state, action) => {
    //根据dispatch的action，去更新state
    switch (action.type) {
        case 'reset':
            return initState;
        case 'add':
            return { count: state.count + 1 };
        case 'reduce':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function useReducerComponent() {
    const [ state, dispatch ] = React.useReducer(reducer,initState)
    return (
        <div>
            <p>当前数量为：{state.count}</p>
            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
                <button onClick={() => dispatch({ type: 'add' })}>加一</button>
                <button onClick={() => dispatch({ type: 'reduce' })}>减一</button>
            </div>
        </div>
    )
}
