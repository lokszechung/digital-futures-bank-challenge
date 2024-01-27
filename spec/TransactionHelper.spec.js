import TransactionHelper from "../src/TransactionHelper.js";

describe("TransactionHelper tests", () => {

  describe("Create transaction tests", () => {

    it("Should create a new instance of the transaction class when given amount, type and date", () => {
      
      const amount = 200
      const type = "credit"
      const date = new Date()
      const testTransaction = TransactionHelper.createTransaction(amount, type, date)

      expect(testTransaction.getAmount()).toBe(amount);
      expect(testTransaction.getType()).toBe(type);
      expect(testTransaction.getDate()).toBe(date);
    });

  })

})