import { call, put, takeEvery } from 'redux-saga/effects'

//编写模拟登录接口

const api = {
    login() {
        //返回promise对象
        return new Promise((resolve, reject) => {
            //模拟异步登录
            setTimeout(() => {
                //通过随机数生去判断登录成功与失败概率各占一半
                if (Math.random() > 0.5) {
                    //登录成功
                    resolve({ id: 1, name: "霍" })
                } else {
                    reject({ mesasge: "用户名或密码错误！" })
                }
            }, 1000);
        })
    }
}

//编写真正工作的Generator生成器
function* login(action) {
    try {
        //call调用异步方法
        const res = yield call(api.login)
        //put派发action，出发reducer
        yield put({ type: 'login', res })
    }
    catch (error) {
        yield put({ type: 'login_failed', message: error.mesasge })
    }
}

function* mySaga() {
    //事件监听，监听action，然后出发login Generator生成器函数
    yield takeEvery('login_request', login)
}

export default mySaga