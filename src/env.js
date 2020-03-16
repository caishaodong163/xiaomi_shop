/**
 * @Description: 运行环境的配置
 * @Author: csd
 * @LastEditors: csd
 * @LastEditTime: 2020年3月8日
 */
let baseURL
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://mall-pre.springboot.cn'
    break
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn'
    break
}

export default {
  baseURL
}
