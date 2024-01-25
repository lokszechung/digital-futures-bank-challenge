import Account from "../src/Account.js"

describe("Accounts tests", () => {

  describe("Create account tests", () => {
    it("Should create a new instance of the account class", () => {
      
      const testAccount = new Account();

      expect(testAccount).toBeInstanceOf(Account);
    });

    it("getBalance() should return 0 when balance is 0", () => {
      
      const testAccount = new Account();

      expect(testAccount.getBalance()).toEqual(0);
    });
  })

  describe("Deposit funds tests", () => {
    it("Depositing 100 into Account should increase balance by 100", () => {
      
      const testAccount = new Account();
      testAccount.deposit(100)

      expect(testAccount.getBalance()).toEqual(100);
    });
  })

  describe("Withdraw funds tests", () => {
    it("Withdrawing funds should decrease the balance by the withdrawn amount", () => {
      
      const testAccount = new Account();
      testAccount.deposit(100)
      testAccount.withdraw(10)

      expect(testAccount.getBalance()).toEqual(90);
    });
  })

})