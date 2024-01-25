class Account {
  static #nextId = 1234;
  #id
  #balance

  constructor(){
    this.#id = Account.#nextId++
    this.#balance = 0
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount){
    return this.#balance += amount 
  }

  withdraw(amount){
    if(amount <= this.#balance){
      return this.#balance -= amount 
    }
  }
}

export default Account