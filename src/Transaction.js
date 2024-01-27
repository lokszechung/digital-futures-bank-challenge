class Transaction {
  static #nextId = 10000;
  #id
  #amount
  #type
  #date
  #balance

  constructor(amount, type, date, balance){
    this.#id = Transaction.#nextId++
    this.#amount = amount
    this.#type = type
    this.#date = date
    this.#balance = balance
  }

  getAmount(){
    return this.#amount
  }

  getType(){
    return this.#type
  }

  getDate(){
    return this.#date
  }

  getBalance(){
    return this.#balance
  }
}

export default Transaction