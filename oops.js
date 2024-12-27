let car = {
    make : "toyota",
    model : "camry",
    year : 2024,

    start : function(){
        return `${this.make} started in ${this.year}`
    }
}


// console.log(car.start());

// inheritance example

class vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        return `${this.make} started in ${this.year}`
    }
}

let mycar = new vehicle("toyota", "camry", 2024);

// console.log(mycar);


class cars extends vehicle {

    drive(){
        return `${this.make} is driving`
    }
}

let mynewcar = new cars("toyota", "camry", 2024);

// console.log(mynewcar.drive());



// encapsulation example


class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount){
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance(){
        return this.#balance;
    }
}

let myaccount = new BankAccount();

// console.log(myaccount.deposit(100));
// console.log(myaccount.withdraw(50));
// console.log(myaccount.getBalance());



// abstraction example

// static method example

class MathHelper {
    static add(a, b){
        return a + b;
    }
}

let math = new MathHelper();


// this is not allowed
// console.log(math.add(10, 20));

// this is allowed
// console.log(MathHelper.add(10, 20));



// getter and setter example

class employee{

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this._salary = salary;
    }

    get salary(){
        return this._salary;
    }

    set salary(value){
        this._salary = value;
    }
}

let emp = new employee("john", 25, 10000);

console.log(emp.salary);