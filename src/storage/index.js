/**
 * @Description: 本地存储
 * @Author: csd
 * @LastEditors: csd
 * @LastEditTime: 2020年3月8日
 */
const STORAGE_KEY = 'mall'

export default {

  /** 存值
   * @param { key, value, module_name } 关键字
   * @type { 类型 } 关键字
   * @description key: Storage存的键 value: Storage存的值 module_name：模块Storage键
   */
  setItem (key, value, module_name) {
    const val = this.getStorage()
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  /** 取值
   * @param { key, module_name } 关键字
   * @type { 类型 } 关键字
   * @description key: Storage存的键 value: Storage存的值 module_name：模块Storage键
   */
  getItem (key, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },

  // 获取本地存
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },

  /** 清除缓存
   * @param { key, module_name } 关键字
   * @type { 类型 } 关键字
   * @description key: Storage存的键  module_name：模块Storage键
   */
  clear (key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
