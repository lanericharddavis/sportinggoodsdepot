import Stuff from "../Models/Stuff.js"
import { ProxyState } from "../AppState.js"


class SportsService {

  // addToCart() {

  // }

  increaseMoney() {
    ProxyState.ourMoney += 100
  }

  addToCart(itemIndex) {
    let item = ProxyState.stuff[itemIndex]
    debugger
    ProxyState.cart.push = (new Stuff(item.title, item.price))
    ProxyState.cart = ProxyState.cart
    console.log("added to cart")
  }
}

export const sportsService = new SportsService();