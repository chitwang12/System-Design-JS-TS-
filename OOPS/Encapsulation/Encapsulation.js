class BankAccount{
    #accountHolderName;
    #balance;

    constructor(accountHolderName, balance){
       this.#accountHolderName = accountHolderName;
       this.#balance = balance;
    }


    //Public getter for account holder name
    getName(){
        return this.#accountHolderName;
    }

    //public setter for account holder name
    setName(name){
       this.#accountHolderName = name;
    }


    //public getter for balance
    getBalance(){
        return this.#balance;
    }

    //public setter for balance (only allows positive balance)
    deposit(amount){
        if(amount > 0){
           this.#balance += amount;
        }else{
            console.log("Deposit amount must be positive.");
        }
    }

    withDraw(amount){
        if(amount > 0 && amount <=this.#balance){
           this.#balance -= amount;
            return true;
        }else{
            console.log("Withdrawal amount must be positive and less than or equal to current balance.");
            return false;
        }
    }

}

class Main{
    constructor() {
        this.bnk1 = new BankAccount("Raj", 5000);
        this.bnk2 = new BankAccount("Rahul", 3000);


        //Using getter to access private data
        console.log("Account holder name: " + this.bnk1.getName());
        console.log("Initial balance: " + this.bnk1.getBalance());
        
        
        //Modifying balance using setter method
        this.bnk1.deposit(1500); // Deposited 1500. New balance is 6500
        console.log("New balance after deposit: " + this.bnk1.getBalance());


        //Withdrawing money
        if(this.bnk1.withDraw(2000)){
            console.log("Withdrawal successful. New balance: " + this.bnk1.getBalance());
        } else {
            console.log("Withdrawal failed.");
        }
    }

}

new Main();