import Stuff from "./Models/Stuff.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /**@type {Stuff[]} */
  stuff = [
    new Stuff('Baseball Bat', 10.00, "Wooden Bat", "", 100),
    new Stuff('Soccer Ball', 5.00, "It is Round", "", 100),
    new Stuff('Ice Skate', 50.00, "For the Ice", "", 100),
    new Stuff('Cat Cheerleader', 100.00, "Your Number One Fan", "", 100)
  ]

  cart = []

  ourMoney = 100
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
