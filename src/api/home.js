/**
 * @Description: 封装axios的逻辑层
 * @Author: csd
 * @LastEditors: csd
 * @LastEditTime: 2020年3月9日
 */
import request from '@/utils/request'

/**
 * 获取导航图片
 */
export function products (data) {
  return request({
    url: '/products',
    method: 'get',
    params: data
  })
}
