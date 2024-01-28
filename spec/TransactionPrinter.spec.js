import TransactionPrinter from "../src/TransactionPrinter.js";

describe("TransactionPrinter tests", () => {
  
  it("Should call console.log 1 times when printTransaction is called", () => {
    const logSpy = spyOn(console, 'log')
    const testTransaction = jasmine.createSpyObj("testTransaction", {
      getDate: "27/01/2024",
      getType: "debit",
      getAmount: 1000,
      getBalance: 4000
    })

    TransactionPrinter.printTransaction(testTransaction)

    expect(logSpy).toHaveBeenCalledTimes(1)
  })

})