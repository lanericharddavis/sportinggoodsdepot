import { generateId } from '../Utils/GenerateId.js'


export default class Stuff {
  constructor(title, price, description, imgUrl, quantity, id = generateId()) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
    this.quantity = quantity
  }



  // get Template() {
  //   return `
  //   <p id="quantity" class="card-text">Quantity: ${this.quantity}</p>
  //   `
  // }
  // document.getElementById('quantity').innerText


  // get Ingredients() {
  //   let ings = ProxyState.ingredients.filter(i => i.pizzaId === this.id)
  //   let template = ''
  //   ings.forEach(i => template += i.Template)
  //   return template
  // }
  // Create Different Quantities for different items??
}