class Transaction {
  static #nextId = 10000;
  #id

  constructor(){
    this.#id = Transaction.#nextId++
  }
}

export default Transaction