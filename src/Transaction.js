class Transaction {
  static #nextId = 10000;
  #id
  #amount
  #type
  #date

  constructor(amount, type, date){
    this.#id = Transaction.#nextId++
    this.#amount = amount
    this.#type = type
    this.#date = date
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
}

export default Transaction