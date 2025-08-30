class BankAccount{
     
    constructor(accountHolderName, balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
     }


     setName(name){
          this.accountHolderName = name;
     }

     getName(){
        return this.accountHolderName;
    }

    getBalance(){
        return this.balance;
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withDraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew ${amount}. `);
            return true ;
        } else if (amount > this.balance) {
            console.log("Insufficient balance for withdrawal.");
            return false;
        } else {
            console.log("Withdrawal amount must be positive.");
            return false ;
        }
    }
}


// Example usage
const account1 = new BankAccount("Alice", 5000);
account1.deposit(1500); // Deposited 1500. New balance is 6500
account1.withDraw(200); // Withdrew 2000. New balance is 4500
const account2 = new BankAccount("Bob", 3000);
account2.deposit(1000); // Deposited 1000. New balance is 4000
if(account2.withDraw(500)){
    console.log(`Withdrew 500. New balance is ${account2.getBalance()}`);
} // Withdrew 500. New balance is 3500
console.log(`${account1.getName()}'s balance: ${account1.getBalance()}`); // Alice's balance: 4500
console.log(`${account2.getName()}'s balance: ${account2.getBalance()}`); // Bob's balance: 3500