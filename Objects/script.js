// objects => a collection of related properties and/or method 
            //   can represent real world objects (people,products,places)
            //   objects={key:value,
            //             function()}
const person={
    firstName:"Ankush",
    lastName:"Chudiwal",
    age:30,
    isEmployed:true,

    sayhell:function(){
        console.log("hello");
    },
    eat:()=>console.log("Eats Apple")
};
// console.log(person.age)
// console.log(person.firstName)
// person.sayhell()
// person.eat();

// this=>refrences to te objects where THIS is used

const paerson1={
    name:"Ankush",
    faveFood:"PIZZA",
    sayHello:function(){console.log(`hi there I am ${this.name}`)},
    eat:function(){console.log(`I love to eat ${this.faveFood}`)}

};

paerson1.eat()
paerson1.sayHello()
// this keyword doessnot work with arrow function

// constuctor=special method for defining the 
            //   properties and method of objects

function Car(make,model,year,color){
    this.color=color,
    this.model=model,
    this.make=make,
    this.year=year
}
const car1=new Car("Ford","Mustang",2024,"black")
console.log(car1.color,car1.model,car1.make)