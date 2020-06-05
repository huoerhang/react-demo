import React, { Component } from 'react'

//1.先创建一个数据源
const store = {
    name: '霍',
    from: '陕西'
}

//2.创建上下文
const Context = React.createContext();
// const { Provider, Consumer } = Context;

class Info extends Component {
    render() {
        return (

            <Context.Consumer>
                {
                    store => {
                        return (
                            <div>
                                <p>姓名：{store.name}</p>
                                <p>来自：{store.from}</p>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

function ToolBar() {
    return (
        <Info></Info>
    )
}

//演示使用上下文
export default class Context2 extends Component {
    render() {
        return (
            <div>
                <Context.Provider value={store}>
                    <ToolBar></ToolBar>
                </Context.Provider>
            </div>
        )
    }
}
