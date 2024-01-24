import Account from "../src/Account.js"

describe("Accounts tests", ()=>{

  describe("Create account tests", ()=>{
    it("Should create a new instance of the account class", () => {
      
      const testAccount = new Account();

      expect(testAccount).toBeInstanceOf(Account);
  });
  })

})