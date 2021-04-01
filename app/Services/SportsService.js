import Stuff from "../Models/Stuff.js"
import { ProxyState } from "../AppState.js"


class SportsService {

  addToCart() {

  }

  ourMoney = 100
  increaseMoney() {
    ourMoney += 100
  }
}

export const sportsService = new SportsService();