class CheckingsAccount {
  // Attributes
  private ownerName:string;
  private initialBalance:number; //JS doesn't use ints or booleans

  constructor(balance:number = 0, owner:string) {//default) //typecript shortcut to save typing on private variables
 //refers to the object we're currently building
      this.initialBalance = balance;
      this.ownerName = owner;

  }

  deposit(amount:number) { //automatically knows it's a function
    this.initialBalance = this.initialBalance + amount;
  }

  withdraw(amount:number) {
    this.initialBalance = this.initialBalance - amount;
  }

  checkBalance() {
    console.log(`${this.ownerName} balance $${this.initialBalance}`);

  }

}

let checkingsAccount = new CheckingsAccount(10000, "Johnny");
checkingsAccount.checkBalance();
checkingsAccount.deposit(20);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(5);
checkingsAccount.checkBalance();
