export default class View {
  constructor() {
    this.inputFrom = document.getElementById("input-from")
    this.inputIn = document.getElementById("input-in")
    this.fromLeft = document.querySelectorAll("input[name='from-left']")
    this.toRight = document.querySelectorAll("input[name='to-right']")
    this.rateFrom = document.getElementById("rate-from")
    this.rateIn = document.getElementById("rate-in")
  }
}