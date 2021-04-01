import SportsService from "../Services/SportsService.js"
import { ProxyState } from "../AppState.js"

//PRIVATE




//PUBLIC
export default class SportsController {

  constructor() {
    ProxyState.on("stuff", _addToCart)
    _addToCart()
  }

  increaseMoney() {
    SportsService.increaseMoney()
  }

}