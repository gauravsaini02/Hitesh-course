function person(name, age) {
    this.name = name;
    this.age = age;
}

function car(make, model) {
    this.make = make;
    this.model = model;
}

let mycar = new car("toyota", "camry");

let mynewcar = new car("lambo", "gallardo");

// console.log(mycar);
// console.log(mynewcar)



function tea(type){
    this.type = type;
    this.description = function (){
        return "this is a " + this.type + " tea";
    };
}

let mytea = new tea("black");

// console.log(mytea.description());


function drink(type){
    if (! new.target){
        return "drink is not a constructor";
    }
    this.type = type;
}

let mydrink = drink("coffee");

console.log(mydrink);

