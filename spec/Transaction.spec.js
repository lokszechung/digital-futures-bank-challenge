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

    it("Given an amount, transaction should be created with amount recorded", () => {
      
      const amount = 100
      const testTransaction = new Transaction(amount);

      expect(testTransaction.getAmount()).toBe(amount);
    });

  })
})