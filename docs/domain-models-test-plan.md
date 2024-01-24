# Domain Models and Test Plan

The Business Analyst team working with the client has identified the following features that should be implemented:

A user should be able to interact with the application via a REPL interface to:
Access an account (assuming each user will automatically have their details loaded into the program on startup)
Deposit funds
Withdraw funds - if they have sufficient balance to do so
Print an account statement (date, amount, balance)
Acceptance Criteria
The following acceptance criteria must be met by producing the exact output on the console as shown below (assuming that none of the additional formatting from the extended tasks has been applied):

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

1. Explain the benefits of the software to the client - why they need it and how it will help them:
   - What are the benefits of the software to the client?
   - What are the benefits of the software to the end user?
   - What are the benefits of the software to the business?
2. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
3. From these user stories, create a domain model to describe how the objects will use messages to communicate with one another
4. Using a test-driven approach, implement the code necessary to implement the functionality described in the user stories
5. Create a program that will run in the terminal (including any user input) that demonstrates the functionality of the code based on the user stories and persists data to a file

---

---

---

---

---

---

---

---

---

---

Benefits to the client:

Benefit to the user:

Benefit to the business:

Requirements:

1. User must be able to access an account
2. User must be able to deposit money into the account
3. User must be able to withdraw money from the account
4. User must not be able to withdraw more money than in their account
5. User must be able to print a statement

User Stories:

1. As a user, I want to be able to access my account, so that I can manage my finances.
2. As a user, I want to be able to deposit money into my account, so that I can save money.
3. As a user, I want to be able to withdraw money from my account, so that I can use my money.
4. As a user, I want to not be able to withdraw more money than in my account, because I don't want to use money that is not mine.
5. As a bank, I want to be able to record the amount of a transaction, so that I have a record of all transactions.
6. As a bank, I want to be able to record the type of a transaction, so that I have a record of all transactions.
7. As a bank, I want to be able to record the date of a transaction, so that I have a record of all transactions.
8. As a user, I want to be able to print a statement, so that I can check my transactions.

Domain Models:

1.  | Objects | Properties        | Messages | Output |
    | ------- | ----------------- | -------- | ------ |
    | Account | accountId @String |          |        |

    //// dont need an 'access' function, can assume that the account is already the correct user upon loading

2.  | Objects | Properties      | Messages         | Output     |
    | ------- | --------------- | ---------------- | ---------- |
    | Account | balance @Number | deposit(@Number) | @undefined |

3.  | Objects | Properties      | Messages          | Output     |
    | ------- | --------------- | ----------------- | ---------- |
    | Account | balance @Number | withdraw(@Number) | @undefined |

4.  | Objects | Properties      | Messages          | Output     |
    | ------- | --------------- | ----------------- | ---------- |
    | Account | balance @Number | withdraw(@Number) | @undefined |

5.  | Objects     | Properties                        | Messages             | Output     |
    | ----------- | --------------------------------- | -------------------- | ---------- |
    | Transaction | amount @Number                    |                      |            |
    | Account     | transactions @Array[@Transaction] | record(@Transaction) | @undefined |

6.  | Objects     | Properties                        | Messages             | Output     |
    | ----------- | --------------------------------- | -------------------- | ---------- |
    | Transaction | amount @Number                    |                      |            |
    |             | type @String                      |                      |            |
    | Account     | transactions @Array[@Transaction] | record(@Transaction) | @undefined |

7.  | Objects     | Properties                        | Messages             | Output     |
    | ----------- | --------------------------------- | -------------------- | ---------- |
    | Transaction | amount @Number                    |                      |            |
    |             | type @String                      |                      |            |
    |             | date @Date                        |                      |            |
    | Account     | transactions @Array[@Transaction] | record(@Transaction) | @undefined |

8.  | Objects | Properties                        | Messages            | Output     |
    | ------- | --------------------------------- | ------------------- | ---------- |
    | Account | transactions @Array[@Transaction] | printTransactions() | @undefined |

Tests:

1. a. Should create a new instance of Account from txt file.
   b. Account id should be 1234
