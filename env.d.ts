/*
 * @Date: 2023-03-06 11:04:51
 * @LastEditors: caotong tong.cao@heliang.cc
 * @LastEditTime: 2023-04-25 10:08:00
 * @Description:
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.js'
