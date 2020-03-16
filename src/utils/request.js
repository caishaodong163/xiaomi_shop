/**
 * @Description: 封装Axios
 * @Author: csd
 * @LastEditors: csd
 * @LastEditTime: 2020年3月8日
 */
import { Message } from 'element-ui'
import env from '../env.js'
import axios from 'axios'

/**
 * 初始axios
 */
const service = axios.create({
  baseURL: env.baseURL,
  timeout: 5000
})

/**
 * 发送接口参数
 */
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken()
  // }
  return config
}, error => {
  return Promise.reject(error)
}
)

/** 接收接口错误拦截
 * @description 0: 成功 10: 没有登入 module_name：模块Storage键
 */
service.interceptors.response.use(function (response) {
  console.log(env.baseURL, '接口')
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

export default service
