import UserAccount from "./UserAccount";
import Transaction from "./Transaction";

export default class Bank {
    private userAccount: UserAccount;
    private transaction: Transaction[] = [];
    
    constructor(userAccount: UserAccount) {
        this.userAccount = userAccount;
    }
    
    getUserAccount(): UserAccount {
        return this.userAccount;
    }
    
    getTransaction(): Transaction[] {
        return this.transaction;
    }
    
    addTransaction(transaction: Transaction
    ): void {
        this.transaction.push(transaction);
    }
}