//Write a JavaScript program that creates a class called Bank with properties for 
//bank names and branches. Include methods to add a branch, remove a branch, and 
//display all branches. Create an instance of the Bank class and perform operations 
//to add and remove branches.

class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.branches = [];
    }
  
    addBranch(branch) {
      this.branches.push(branch);
      console.log(`Branch '${branch}' added to ${this.bankName}`);
    }
  
    removeBranch(branch) {
      const index = this.branches.indexOf(branch);
      if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Branch '${branch}' removed from ${this.bankName}`);
      } else {
        console.log(`Branch '${branch}' does not exist in ${this.bankName}`);
      }
    }
  
    displayBranches() {
      console.log(`Branches of ${this.bankName}:`);
      this.branches.forEach(branch => {
        console.log(branch);
      });
    }
  }
  
  const bank = new Bank("Khan Bank");
  
 
  bank.addBranch("Tuv");
  bank.addBranch("Baruun");
  bank.addBranch("Zuun");
  
  bank.displayBranches();

  bank.removeBranch("Tuv");

  bank.displayBranches();
  