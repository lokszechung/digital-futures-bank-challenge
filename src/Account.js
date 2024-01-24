class Account {
  static #nextId = 1234;
  #id

  constructor(){
    this.#id = Account.#nextId++
  }
}

export default Account