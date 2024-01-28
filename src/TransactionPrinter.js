class TransactionPrinter {

  static printTransaction(transaction) {

      transaction.getType() === "credit" ?

      console.log(`${transaction.getDate()} || ${transaction.getAmount().toFixed(2).padEnd(10)} || ${"".padEnd(10)} || ${transaction.getBalance().toFixed(2)}`)

      :

      console.log(`${transaction.getDate()} || ${"".padEnd(10)} || ${transaction.getAmount().toFixed(2).padEnd(10)} || ${transaction.getBalance().toFixed(2)}`)
      
  }
}

export default TransactionPrinter;