import React, { Component } from 'react'

class HOC extends Component {
    render() {
        return (
            <div>
                <h1>
                    体验高阶组件的写法
                </h1>
                {this.props.title}
                <p>姓名：{this.props.name}</p>
            </div>
        )
    }
}

//第一个高阶组件，参数传递一个组件，返回一个新的组件
const WithLearnReact = (Comp) => {
    const newComponent = (props) => {
        return <Comp {...props} name="我的第一个高阶组件"></Comp>
    }

    return newComponent
}

//第二个高阶组件，重写生命周期。注意：重写声明周期需要class组件(返回的是class组件)
const WithLifyCycle = Comp => {
    class NewComponent extends Component {

        //重写组件的生命周期
        componentDidMount(){
            console.log("重写componentDidMount生命周期")
        }

        render() {
            return <Comp {...this.props}></Comp>
        }
    }

    return NewComponent
}

//第一个高阶组件
//export default WithLearnReact(HOC)

//链式调用高阶组件
export default WithLifyCycle(WithLearnReact(HOC))