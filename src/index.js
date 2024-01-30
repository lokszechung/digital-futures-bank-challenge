import Account from "./Account.js";
import UserInterface from "./UserInterface.js";

const account = new Account()
const userInterface = new UserInterface(account)

userInterface.startInterface()