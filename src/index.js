import Account from "./Account.js";
import Transaction from "./Transaction.js";

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function formatDate(date){
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

const account = new Account()

console.log("Welcome to your bank account.")

function mainMenu() {
  rl.question("\n\nWhat would you like to do:\n\n1. Deposit funds\n2. Withdraw funds\n3. Print transactions\n4. Exit app\n\nPlease enter a number: ", (input) => {
    menuSelector(input)
  })
}

function depositFunds() {
  rl.question("How much would you like to deposit?\n£", (input) => {
    account.deposit(parseFloat(input))
    const transaction = new Transaction(parseFloat(input), "credit", formatDate(new Date()), account.getBalance())
    account.logTransaction(transaction)
    mainMenu()
  })
}

function withdrawFunds() {
  rl.question("How much would you like to withdraw?\n£", (input) => {
    account.withdraw(parseFloat(input))
    const transaction = new Transaction(parseFloat(input), "debit", formatDate(new Date()), account.getBalance())
    account.logTransaction(transaction)
    mainMenu()
  })
}

function printTransactions() {
  account.printTransactions()
  mainMenu()
}

function menuSelector(input) {
  switch (input) {
      case "1":
          console.log("\n\nDeposit funds\n")
          depositFunds()
          break
      case "2":
          console.log("\n\nWithdraw funds")
          withdrawFunds()
          break
      case "3":
          console.log("\n\nPrint transaction")
          printTransactions()
          break
      case "4":
        console.log("\n\nExiting app")
        rl.close()
        process.exit(0)
      default:
        console.log("Please select a valid option: 1, 2, 3, or 4")
        mainMenu()
        break
  }
}


mainMenu()