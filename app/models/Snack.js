
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackTemplate() {
    return /*html*/`
      <div class="col-4">
        <div>
          <p>${this.name}</p>
          <p>${this.price}</p>
        </div>
        <div>
          <img class="img-fluid" src="${this.imgUrl}" alt="${this.name}">
        </div>
      </div>`
  }
}