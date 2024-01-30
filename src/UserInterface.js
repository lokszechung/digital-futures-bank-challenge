import Transaction from "./Transaction.js";

import readline from 'readline';

class UserInterface {

  #account
  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  constructor(account) {
    this.#account = account
  }

  startInterface() {
    console.log("Welcome to your bank account!")

    this.mainMenu()
  }

  mainMenu() {
    this.#rl.question("\n\nWhat would you like to do:\n\n1. Deposit funds\n2. Withdraw funds\n3. Print transactions\n4. Exit app\n\nPlease enter a number: ", (input) => {
      this.processInput(input)
    })
  }

  processInput(input) {
    
    switch (input) {
      case "1":
        console.log("\n\nDeposit funds\n")
        this.depositFunds()
        break
      case "2":
        console.log("\n\nWithdraw funds")
        this.withdrawFunds()
        break
      case "3":
        console.log("\n\nPrint transactions")
        this.printTransactions()
        break
      case "4":
        console.log("\n\nExiting account. Goodbye!")
        process.exit(0)
        break
      default:
        console.log("Invalid command. Enter 1, 2, 3 or 4")
        this.mainMenu()
    }
  }

  depositFunds() {
    this.#rl.question("How much would you like to deposit?\n£", (input) => {
      if (this.checkInputIsValid(input)) {
        const amount = parseFloat(input);
  
        this.#rl.question("Please enter the date in dd/mm/yyyy format:\n", (dateInput) => {
          this.#account.deposit(amount)
          this.#account.logTransaction(new Transaction(amount, "credit", dateInput, this.#account.getBalance()))
          this.mainMenu()
        });
      } 
      if(!this.checkInputIsValid(input)) {
        console.log("Please enter a valid number")
        this.mainMenu()
      }
    })
  }

  withdrawFunds() {
    this.#rl.question("How much would you like to withdraw?\n£", (input) => {
      if (this.checkInputIsValid(input)) {
        const amount = parseFloat(input)
        const prevBalance = this.#account.getBalance()
    
        this.#account.withdraw(amount)
        const newBalance = this.#account.getBalance()

        this.checkWithdrawSuccess(prevBalance, newBalance)
    
        this.#rl.question("Please enter the date in dd/mm/yyyy format:\n", (input) => {
          this.#account.logTransaction(new Transaction(amount, "debit", input, this.#account.getBalance()))
          this.mainMenu()
        })
      }
      if(!this.checkInputIsValid(input)) {
        console.log("Please enter a valid number")
        this.mainMenu()
      }
      
    })
  }

  checkWithdrawSuccess(prevBalance, newBalance) {
    if(prevBalance === newBalance) {
      console.log("\nNot enough funds. Please withdraw less.")
      return this.mainMenu()
    }
  }

  checkInputIsValid(input){
    if (isNaN(parseFloat(input))) {
      return false
    }
    return true
  }

  printTransactions() {
    this.#account.printTransactions()
    this.mainMenu()
  }

}

export default UserInterface