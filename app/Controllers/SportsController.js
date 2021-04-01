import { sportsService } from "../Services/SportsService.js"
import { ProxyState } from "../AppState.js"

//PRIVATE

function _draw() {
  document.getElementById("moneyAvailable").innerHTML = ProxyState.ourMoney

  let cart = ProxyState.cart;
  let template = ''
  cart.forEach(c => template += c.Template)
  document.getElementById("cartItems").innerHTML = template
}



//PUBLIC
export default class SportsController {

  constructor() {
    ProxyState.on("cart", _draw)
    addToCart()
    _draw()
  }

  increaseMoney() {

    sportsService.increaseMoney()
    _draw()
  }

  addToCart(itemIndex) {
    sportsService.addToCart(itemIndex)
    _draw()
  }

}