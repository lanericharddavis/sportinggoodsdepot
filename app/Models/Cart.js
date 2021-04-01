

export default class Cart {
  constructor(quantity) {

    this.quantity = quantity

  }

  get Template() {
    return `
                <div class="col-4">
                    <p>${Stuff.title}</p>
                </div>
                <div class="col-4">
                    <p>${this.quantity}</p>
                </div>
                <div class="col-4">
                    <p>${Stuff.price}</p>
                </div>
    
    `
  }


}