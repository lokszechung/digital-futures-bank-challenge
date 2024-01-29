# Domain Models and Test Plan

### Core Requirements:

1. User must be able to access an account
2. User must be able to deposit money into the account
3. User must be able to withdraw money from the account
4. User must not be able to withdraw more money than in their account
5. User must be able to print a statement

### User Stories:

1. As a user, I want to be able to access my account, so that I can manage my finances.
2. As a user, I want to be able to see my balance, so I can know my financial position.
3. As a user, I want to be able to deposit money into my account, so that I can save money.
4. As a user, I want to be able to withdraw money from my account, so that I can use my money.
5. As a user, I want to not be able to withdraw more money than in my account, because I don't want to use money that is not mine.
6. As a bank, I want to be able to create a transaction, so I can record customers' transactions.
7. As a bank, I want to be able to record the amount, type and date of a transaction, so that I have a record of all transaction details.
8. As a user, I want to be able to print a statement, so that I can check my transactions.

### Domain Models:

1.  | Objects            | Properties                        | Messages                                    | Output     |
    | ------------------ | --------------------------------- | ------------------------------------------- | ---------- |
    | Account            | accountId @String                 |                                             |            |
    |                    | balance @Number                   | getBalance()                                | @undefined |
    |                    |                                   | deposit(@Number)                            | @undefined |
    |                    |                                   | withdraw(@Number)                           | @undefined |
    |                    |                                   | record(@Transaction)                        | @undefined |
    |                    |                                   | logTransaction(amount, type, date, balance) | @undefined |
    |                    | transactions @Array[@Transaction] | printTransactions()                         | @undefined |
    |                    |                                   |                                             |            |
    | Transaction        | amount @Number                    |                                             |            |
    |                    | type @String                      |                                             |            |
    |                    | date @Date                        |                                             |            |
    |                    | balance @Number                   |                                             |            |
    |                    |                                   |                                             |            |
    | TransactionPrinter |                                   | printTransaction(@Transaction)              | @undefined |

### Tests:

#### Account class - deposit and withdrawal

1. Should create a new instance of Account.

2. getBalance() should return 0 when balance is 0

3. Depositing funds should increase the balance by the deposited amount

4. Withdrawing funds should decrease the balance by the withdrawn amount

5. Funds should not be removed if withdrawal amount is greater than the balance

#### Transaction class

6. Should create a new instance of Transaction.

7. Given transaction details, transaction should be created with details recorded

#### Logging from Account class

8. Logging transaction should add new transaction to transactions array

#### TransactionPrinter class

9. TransactionPrinter: Should call console.log 1 time when printTransaction is called

10. Account: Should call console.log 2 times when printTransaction is called

11. Should print transactions in reverse order
