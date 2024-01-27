import Transaction from "./Transaction.js";

class TransactionHelper {

  static createTransaction(amount, type, date){
    
    const transaction = new Transaction(amount, type, date)
    return transaction

  }

}

export default TransactionHelper