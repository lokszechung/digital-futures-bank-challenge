class Transaction {
  static #nextId = 10000;
  #id
  #amount

  constructor(amount){
    this.#id = Transaction.#nextId++
    this.#amount = amount
  }

  getAmount(){
    return this.#amount
  }
}

export default Transaction