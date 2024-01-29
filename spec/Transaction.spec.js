import Transaction from "../src/Transaction.js";

describe("Transaction tests", () => {

  describe("Create account tests", () => {

    it("Should create a new instance of the transaction class", () => {
      
      const testTransaction = new Transaction();

      expect(testTransaction).toBeInstanceOf(Transaction);
    });

  })

  describe("Deposit record transaction", () => {

    it("Given transaction details, transaction should be created with details recorded", () => {
      
      const amount = 100
      const type = "debit"
      const date = "29/01/2024" 
      const balance = 200
      const testTransaction = new Transaction(amount, type, date, balance);

      expect(testTransaction.getAmount()).toBe(amount);
      expect(testTransaction.getType()).toBe(type);
      expect(testTransaction.getDate()).toBe(date);
      expect(testTransaction.getBalance()).toBe(balance);
    });

  })
})