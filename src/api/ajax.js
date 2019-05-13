// ajax请求函数,返回值是一个promise对象（异步返回的数据是：res.data）

import axios from 'axios'
export default function ajax(url,data={},type='GET') {
    return new Promise(function(resolve,reject) {  //高阶函数,因为里面有resolve和reject函数
        //执行ajax请求
        let promise
        if (type === 'GET') {
            // 准备url，query数据
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url.data)
        }
        promise.then(res => {
            //成功调用resolve
            resolve(res.data)
        }).catch(err => {
             //失败调用reject
             reject(err)
        })
    })
}
// const res = await ajax()
// const result = res.data
// const result = await ajax()