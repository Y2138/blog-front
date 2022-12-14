/*
 * @Author: Y2138 y1967581564@163.com
 * @Date: 2022-08-19 15:33:54
 * @LastEditors: Y2138 y1967581564@163.com
 * @LastEditTime: 2022-12-28 15:15:12
 * @FilePath: \front\src\utils\eventEmitter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Events = {
  [propName: string]: Function[]
}
export interface EventEmitterItf {
  events: Events
  on: (eventName: string, fn: Function) => any
  emit: (eventName: string) => any
  remove: (eventName: string, fn: Function) => any
  once: (eventName: string, fn: Function) => any
}

/**
 * @desc 事件触发器
 */
class EventEmitter implements EventEmitterItf {
  events: Events
  constructor() {
    this.events = {}
  }
  // 事件监听
  on(eventName: string, fn: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)
    return this
  }
  // 事件触发
  emit(eventName: string, ...args: any[]) {
    if (!this.events[eventName]) {
      return
    }
    const fns = this.events[eventName]
    fns.forEach(fn => fn.apply(this, args))
    return this
  }
  // 事件解绑
  remove(eventName: string, fn: Function) {
    if (!this.events[eventName]) {
      return this
    }
    if (!fn) {
      delete this.events[eventName]
      return this
    }
    const index = this.events[eventName].indexOf(fn)
    this.events[eventName].splice(index, 1)
    return this
  }
  // 单次绑定事件
  once(eventName: string, fn: Function) {
    const only = () => {
      fn.apply(this, arguments)
      this.remove(eventName, only)
    }
    this.on(eventName, only)
    return this
  }
}

export default new EventEmitter()