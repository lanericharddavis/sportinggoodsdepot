import { sportsService } from "../Services/SportsService.js"
import { ProxyState } from "../AppState.js"

//PRIVATE

function _draw() {
  document.getElementById("moneyAvailable").innerHTML = ProxyState.ourMoney
}


//PUBLIC
export default class SportsController {

  constructor() {
    // ProxyState.on("stuff", _addToCart)
    // _addToCart()
    _draw()
  }

  increaseMoney() {

    sportsService.increaseMoney()
    _draw()
  }

  addToCart(item) {
    sportsService.addToCart(itemIndex)
    _draw()
  }

}