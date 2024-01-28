class TransactionPrinter {

  static printTransaction(transaction) {

      transaction.getType() === "credit" ?

      console.log(`
        ${transaction.getDate()} || 
        ${transaction.getAmount()} || 
        ${""} || 
        ${transaction.getBalance()}
      `)

      :

      console.log(`
        ${transaction.getDate()} || 
        ${""} || 
        ${transaction.getAmount()} || 
        ${transaction.getBalance()}
      `)
      
  }
}

export default TransactionPrinter;