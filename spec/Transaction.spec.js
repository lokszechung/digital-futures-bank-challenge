import Transaction from "../src/Transaction.js";

describe("Transaction tests", () => {

  describe("Create account tests", () => {

    it("Should create a new instance of the transaction class", () => {
      
      const testTransaction = new Transaction();
      console.log(testTransaction)

      expect(testTransaction).toBeInstanceOf(Transaction);
    });

  })

})