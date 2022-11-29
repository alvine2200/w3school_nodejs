class Division {
  constructor(num, ans) {
    this.ans = ans;
    this.num = num;
  }

  get div() {
    return this.calculateDiv();
  }

  calculateDiv() {
    return this.ans / this.num;
  }
}

const divide = new Division(7, 28);
console.log(divide.div);
