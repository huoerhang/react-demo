import React, { Component } from 'react'

//没使用上下文时的写法

//1.先创建一个数据源

const store = {
    name: '霍',
    from: '陕西'
}

// function Info(props) {
//     return (
//         <div>
//             <p>姓名：{props.name}</p>
//             <p>来自：{props.from}</p>
//         </div>
//     )
// }

class Info extends Component {
    render() {
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>来自：{this.props.from}</p>
            </div>
        )
    }
}

function ToolBar(props) {
    return (
        <Info {...props}></Info>
    )
}

export default class Context1 extends Component {
    render() {
        return (
            <div>
                <ToolBar name={store.name} from={store.from}></ToolBar>
            </div>
        )
    }
}
