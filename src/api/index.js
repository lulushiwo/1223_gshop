import ajax from "./ajax";
const BASE_URL = '/api'
// 包含n个接口请求函数的模块
//     [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情) < br />

// export function reqAddress(latitude,longitude) {  //这里不用default暴露，因为有要有多个组件,每个组件要取一个名字
//     // 传入经度和纬度

// }
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

//     [2、获取食品分类列表](#2 获取食品分类列表) < br />
export const reqFoodTypes = () => ajax(`${BASE_URL}/index_category`)

//     [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表) < br />
export const reqShops = (latitude, longitude) => ajax(`${BASE_URL}/shops`,{latitude,longitude})

//     [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表) < br />
export const reqSearchShop = ({ geohash, keyword }) => ajax(`${BASE_URL}/search_shops`,{geohash,keyword})

//     [6、用户名密码登陆](#6 用户名密码登陆) < br />
export const reqLoginPwd = (name, pwd, captcha) => ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST')

//     [7、发送短信验证码](#7 发送短信验证码) < br />
export const reqSendCode = (phone) => ajax(`${BASE_URL}/sendcode`,{phone})

//     [8、手机号验证码登陆](#8 手机号验证码登陆) < br />
export const reqLoginSms = (phone, code) => ajax(`${BASE_URL}/login_sms`,{phone,code},'POST')

//     [9、根据会话获取用户信息](#9 根据会话获取用户信息) < br />
export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`)

//     [10、用户登出](#10 用户登出) < br />
export const reqLogOut = () => ajax(`${BASE_URL}/logout`)

