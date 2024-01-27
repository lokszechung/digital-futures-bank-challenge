import Transaction from "../src/Transaction.js";

describe("Transaction tests", () => {

  describe("Create account tests", () => {

    it("Should create a new instance of the transaction class", () => {
      
      const testTransaction = new Transaction();

      expect(testTransaction).toBeInstanceOf(Transaction);
    });

  })

  // As a bank, I want to be able to record the amount of a transaction, so that I have a record of all transaction amounts.

  //Depositing funds should create transaction with amount of funds

  describe("Deposit record transaction", () => {

    it("Given transaction details, transaction should be created with details recorded", () => {
      
      const amount = 100
      const type = "debit"
      const date = new Date()
      const testTransaction = new Transaction(amount, type, date);

      expect(testTransaction.getAmount()).toBe(amount);
      expect(testTransaction.getType()).toBe(type);
      expect(testTransaction.getDate()).toBe(date);
    });

  })
})