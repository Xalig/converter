export default class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  
    init() {
      this.render()
      this.getAPI()
    }
  
    render() {
      this.view.inputFrom.value = 1
      this.view.fromLeft.forEach((el) => {
        el.addEventListener("click", (event) => {
          this.model.firstValue = event.target.value
          this.getAPI()
        })
      })
  
      this.view.toRight.forEach((el) => {
        el.addEventListener("click", (event) => {
          this.model.endValue = event.target.value
          this.getAPI()
        })
      })
  
      this.view.inputFrom.addEventListener("keyup", () => {
        this.view.inputFrom.value = this.view.inputFrom.value
        this.view.inputIn.value = this.data * this.view.inputFrom.value
      })
  
      this.view.inputIn.addEventListener("keyup", () => {
        this.view.inputIn.value = this.view.inputIn.value
        this.view.inputFrom.value = this.view.inputIn.value * (1 / this.data)
      })
    }
  
    getAPI() {
      fetch(
        `https://api.exchangerate.host/convert?from=${this.model.firstValue}&to=${this.model.endValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.data = data.result
          this.view.rateFrom.innerText = `1 ${this.model.firstValue} = ${this.data} ${this.model.endValue} `
          this.view.rateIn.innerText = `1 ${this.model.endValue} = ${
            Math.floor((1 / this.data) * 10 ** 6) / 10 ** 6
          } ${this.model.firstValue}`
          this.view.inputIn.value = this.data * this.view.inputFrom.value
        })
    }
  }
  