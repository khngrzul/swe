//Write a JavaScript program that creates a class called "BankAccount" with properties
//for account number and balance. Include methods to deposit and withdraw money from 
//the account. Create some instances of the "BankAccount" class, deposit some money, 
//and withdraw a portion of it.

class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }

    deposit(currency){
        this.balance+=currency;
        console.log(`Deposited: ${currency}, current: ${this.balance}`);

    }
    withdraw(currency){
        if(currency<=this.balance){
            this.balance-=currency;
            console.log(`Withdrawan: ${currency}, current: ${this.balance}`);
        } else{
            console.log("Uldegdel hureltssengui");
        }

    }
}

const portion1=new BankAccount("111111", 2000);
const portion2=new BankAccount("222222", 5000);

portion1.deposit(1000);
portion1.withdraw(2000);

portion2.deposit(3000);
portion2.withdraw(5000);