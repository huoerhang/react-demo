import React, { Component } from 'react'
// import Store from "./store";
import { connect } from 'react-redux'
import { add, reduce, asyncAdd } from './count-redux'

// //普通写法
// //返回数据的方法，供connect使用，它将数据转换成props
// const mapStateToProps = (state) => {
//     return {
//         count: state
//     }
// }

// //返回dispatch方法的方法，供connect使用，它将dispatch转换为props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => dispatch({ type: 'add' }),
//         reduce: () => dispatch({ type: 'reduce' })
//     }
// }

//使用connect装饰器的写法
@connect(
    // state => {
    //     return {
    //         count: state
    //     }
    // }
    //上面的简写形式
    state => ({ count: state }),
    // dispatch => ({
    //     add: () => dispatch({ type: 'add' }),
    //     reduce: () => dispatch({ type: 'reduce' })
    // })
    // 因为redux默认只支持同步写法，所以上面返回的dispatch的方法可以简写为下面的代码
    // 放到了count-redux.js文件，统一管理
    // {
    //     add: () => ({ type: 'add' }),
    //     reduce: () => ({ type: 'reduce' }),
    //     //模拟异步
    //     asyncAdd: () => dispatch => {
    //         setTimeout(() => {
    //             dispatch({ type: 'add' })
    //         }, 2000);
    //     }

    // }

    { add, reduce, asyncAdd }
)
class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h1>学习redux，编写第一个redux累加器</h1>
                {/*redux的写法 */}
                {/* 通过Store的getState方法获取状态数据 */}
                {/* {Store.getState()} */}
                {/* <div>
                    <button onClick={() => Store.dispatch({ type: 'add' })}>加一</button>
                    <button onClick={() => Store.dispatch({ type: 'reduce' })}>j减一</button>
                </div> */}
                {/* *********************************** */}
                {/* react-redux的写法 */}
                {this.props.count}
                <div>
                    <button onClick={() => this.props.add()}>加一</button>
                    <button onClick={() => this.props.reduce()}>j减一</button>
                    <button onClick={() => this.props.asyncAdd()}>延时加一</button>
                </div>
            </div>
        )
    }
}

//不使用装饰器的写法
//export default connect(mapStateToProps, mapDispatchToProps)(FirstRedux)

//使用装饰器直接返回组件
export default FirstRedux