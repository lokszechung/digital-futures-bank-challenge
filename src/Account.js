// import TransactionHelper from "./TransactionHelper.js";


class Account {
  static #nextId = 1234;
  #id
  #balance
  #transactions = []

  constructor(){
    this.#id = Account.#nextId++
    this.#balance = 0
  }

  getBalance() {
    return this.#balance;
  }

  getTransactions() {
    return this.#transactions
  }

  deposit(amount){
    return this.#balance += amount 
  }

  withdraw(amount){
    if(amount <= this.#balance){
      return this.#balance -= amount 
    }
  }

  logTransaction(transaction){
    this.#transactions.push(transaction)
  }
}

export default Account