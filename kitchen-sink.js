import { hello } from './my-module.mjs';

//import axios from 'axios';

//"use strict";
/*
function getSum(x, y) {
    console.log(`Summing ${x} and ${y}`);
    return x + y;
}

let user = {
    name: "admin",
    age: 28,
};
*/

//let prop = "age";
//console.log(user.age);
//console.log(user["name"]);
//console.log(user[prop]);

/*
function makeUser(name, age){
    return {
        name,
        age: 29,
    };
}
*/

//let newUser = makeUser("Lola", 32);
//console.log(newUser);
//console.log("age" in newUser);
//console.log("city" in newUser);

let fruit = {
    name: "Apple",
    color: "Red",
    qty: 12,
    /*
    getStock: function(){
        return this.qty;
    },
    getColor() {
        return this.color;
    }
    */
}

/*
let arrowed = (color)=>{
    //console.log(this);
    console.log(color);
}
*/

/*
let clonedFruit = {};
Object.assign(clonedFruit, fruit);
console.log(clonedFruit);

let deepClonedFruit = structuredClone(clonedFruit);
console.log(deepClonedFruit);

let anotherFruit = {...clonedFruit};

//arrowed("pink");
*/

/*
describe("sumTest", function() {

    it("2 plus 2 equals 4", function(){
        assert.equals(getSum(2,2), 4);
    });
});
*/

function User(name, age){
    this.name = name;
    this.age = age;
}

let customUser = new User("anonymous", 65);

let user = /* new function() */ {
    name: "anonymous",
    age: NaN,
};

let anotherUser = new function(){
    this.name = "anonymous";
    this.age = NaN;
}

//console.log(user.age);
//console.log(anotherUser.name);
//console.log(customUser.age);
let crazyUser = {};
//console.log(customUser?.age); //optional chaining
//console.log(crazyUser.city?.name);
// //console.log(crazyUser.city.name);















////// Organized examples /////////

//There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

//let, var and direct decl
// let = block scoped variable + non-hoisted; var = global scope + hoisted; direct = like var
function checkScope(){
    // console.log(l); // error
    console.log(v);    // undefined
    // console.log(d); // error; behaves like let here

    let l = 2;
    var v = 3;
    d = 10;

    {
        let l = 4; // is a completely new variable
        var v = 6; // overwrites previous decl
        d = 20; // behaves like var here
        console.log(l); //4
        console.log(v); //6
        console.log(d); //20
    }

    console.log(l); //2
    console.log(v); //6
    console.log(d); //20
}
checkScope();


//Functions
function doSomething() { //function declaration - hoisted
    console.log("Did something");
}
doSomething();

doSomething = function(){ //function expression - non-hoisted
    console.log("Did something again");
};
doSomething();

doSomething = () => console.log("Did something arrow-wise"); //simple arrow fn
doSomething();

doSomething = (a,b) => { //multiline arrow fn. MUST return!
    console.log(`Doing something with ${a} and ${b}`);
    return `Did something with ${a} and ${b}`;
}
console.log(doSomething("Jack", "Jill"));

//Creating objects
let myCar = {
    make: "Toyota",
    model: "Corolla",
    type: "Hatchback",
    location: "Home",

    drive(destination) {
        this.location = destination;
    },
    
    goHome: function(){
        this.location = "Home";
    },

    pimpMyRide: (newRide) => this.make = newRide, //will not work as arrow fns can't access 'this'
};
myCar.drive("Mall");
console.log(myCar.location);
myCar.goHome();
console.log(myCar.location);
myCar.pimpMyRide("Ferrari");
console.log(myCar.make); //still Toyota

//Shortening large numbers to base 36 for URLs for ex. 
let url = (25275261561516727261717).toString(36);
console.log(url);
console.log(parseInt(url, 36));

//tagged templates - using backticks to call a function concisely
doSomething`Jill`;

//Arrays
//https://javascript.info/array-methods
cars = new Array(); //or...
cars = [`Toyota`, `Hyundai`, `BMW`, `Nissan`,];
//console.log(cars.at(0));
//console.log(cars.at(-1));
console.log(cars);
cars.push(`Merc`, `Audi`); //array as a queue. push / shift. Appends to end
console.log(cars);
console.log(cars.shift());
console.log(cars);
cars.unshift(`Toyota`);
console.log(cars);

cars.push(`Maruti`); // array as a stack. push / pop
console.log(cars);
console.log(cars.pop());
console.log(cars);

for (let car of cars) { //traversing arrays; avoid using for..in (array as an object) 
    //console.log(car);
}
//for (let key in cars) { //traversing arrays; avoid using for..in (array as an object) 
    //console.log(cars[key]);
//}

console.log(`Removing ${cars.splice(4, 2)}`); //delete 2 after 5th
console.log(cars);
cars.splice(1, 0, `Audi`, `Merc`);
console.log(cars);

let newCars = cars.slice(-3, -1);
console.log(newCars);

upperCars = [];
cars.forEach(car => {
    upperCars.push(car.toUpperCase());
});
console.log(upperCars);

let foundCar = cars.find(car => {
    if(car.startsWith(`B`)) return true;
});
console.log(foundCar);

foundCar = cars.find(car => car.startsWith(`H`)); //similarly...findIndex findLastIndex
console.log(foundCar);

let filteredCars = cars.filter(car => car.indexOf(`a`) != -1);
console.log(filteredCars);

lowerCars = upperCars.map(car => car.toLowerCase()).sort((a,b) => a.length - b.length); //sort algorithm is optional
console.log(lowerCars);

let allCarNames = lowerCars.reduce((store, car) => store.concat(car), ``);
console.log(allCarNames);

//Iterables and array-likes

let phoneCatalog = { // Object with in-built iterator
    retailer: `Sunny stores`,
    phones: [`Samsung`, `Google`, `iPhone`, `Oppo`, `Sony`, `Nokia`],

    addPhone(phone) {
        console.log(`Trying to add a new phone ${phone}`);
        if (!this.phones.includes(phone)) this.phones.push(phone);
    },

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    },

    next() {
        if(this.current < this.phones.length) {
            return {done: false, value: this.phones[this.current++]};
        } else {
            return {done : true};
        }
    },
};

console.log(phoneCatalog.phones);
for (let phone of phoneCatalog) {
    console.log(phone);
}

let publicHolidays = {
    Jan : [`New Years Day`, `Country day`],
    Feb : [`School day`],
    Mar : [`Fun Day 1`, `Fun Day 2`],
    Apr : [`April fools day`],
    
    getHolidays(month) {
        return(this[month]);
    },
};

publicHolidays[Symbol.iterator] = function(){ //External iterator. Iterator object needs to be self sufficient for data
    return {
        monthsList: ["Jan", "Feb", "Mar", "Apr"], 
        holidaysList: [this.getHolidays("Jan"), this.getHolidays("Feb"), this.getHolidays("Mar"), this.getHolidays("Apr")],
        currentMonthIndex: 0,
        next(){
            if(this.currentMonthIndex < this.monthsList.length) {
                return {done: false, 
                        value: `Holidays in ${this.monthsList[this.currentMonthIndex]}: 
                                ${this.holidaysList[this.currentMonthIndex++]}`}
            } else {
                return {done: true};
            }
        }
    };
};

for (let month of publicHolidays) {
    console.log(month);
}

//let holsArray = Array.from(publicHolidays);
//console.log(holsArray.pop());

//Maps
capitalsMap = new Map();
capitalsMap.set(`India`, `New Delhi`)
            .set(`Australia`, `Canberra`)
            .set(`China`, `Beijing`);
console.log(capitalsMap.get('Australia'));

let holidaysMap = new Map(Object.entries(publicHolidays));
holidaysMap.delete(`getHolidays`);
console.log(holidaysMap);

//Object keys and entries
portfolio = {
    google: 25,
    microsoft: 12,
    amazon: 10,
    ebay: 30,
    cisco: 45,
    exchange: `nyse`,
    currency: `usd`,
    owner: `Arnold Schwarzenegger`,    
};

console.log(portfolio);
console.log(Object.keys(portfolio));
console.log(Object.values(portfolio));
console.log(Object.entries(portfolio));

portfolioCopy = Object.fromEntries((Object.entries(portfolio)));
console.log(portfolioCopy);

upperPortfolio = Object.fromEntries(
    Object.entries(portfolio)
        .map(entry => [entry[0].toUpperCase(), entry[1]]));
console.log(upperPortfolio);

//Destructuring
console.log(cars);
let [car1, car2, ...rest] = cars;
console.log(car1);
console.log(rest);
for (let [key, value] of Object.entries(portfolio)) {
    console.log(`${key} = ${value}`);
}

let pets = {
    mammalian : {
        cats: [`Darren`, `Muffin 1.0`, `Lord Eddington`],
        dogs: [`Muffin`],
    },
    aviary: [`canary`],
    insurance: `Woolworths`,
};

let {
    mammalian:{
        cats,
    }, 
} = pets;
console.log(cats);
cats = pets.mammalian.cats;
console.log(cats);

function calculatePortfolio({stockList, owner = `default`, currency = `USD`, valueDate}){
    console.log(`Calculating portfolio valuation for ${stockList} on date ${valueDate} 
                    belonging to user ${owner} with currency as ${currency}`);
}
calculatePortfolio(
    {stockList: Object.keys(portfolio).
        filter(key => [`exchange`, `currency`, `owner`].indexOf(key) == -1), 
        valueDate: `16-Jan-23`});

//Date and time
q = console.log;
let now = new Date(/*`16-Jan-23`*/);
q(now);

q(JSON.stringify(pets));

q(global);
q(globalThis);

//Function object
let calcSum = function(x, y){
    return calcSum.offset + x + y;
};
calcSum.offset = 10;
q(calcSum(2,3));

let greet = function greeter(name) {
    if(name) {
        q(`Hi ${name}`);
    } else {
        //greet(`stranger`); // will fail once "greet" fn name is destroyed 
        greeter(`stranger`);
    }
};
greet(`Bulle shah`);
greet();
f = greet;
greet = null;
f();

function factory() {
    let engine = `Rolls Royce`;

    function getEngine() {
        return engine;
    }

    return getEngine;
} 
let engineMaker = factory();
{
    f = engineMaker;
    q(f());
}
q(factory()());

//Intervals and Timeouts
/*
let counter = 0;
let id = setInterval(() => {
    if (counter < 5) {
        q(counter++);
    } else {
        clearInterval(id);
    }
}, 200);
*/

// Functions - decorators and forwarding
function getSum(x, y) {
    return x + y;
}
q(getSum(20, 30));

function prettyGetSum(func) { //decorator
    return (x, y) => {
        return `The sum of ${x} and ${y} is ${func(x, y)}`;
    }
}
getSum = prettyGetSum(getSum);
q(getSum(20, 30));

myFlight = {
    source: `Delhi`,
    destination: `Melbourne`,
    getBestAirline() {
        if(this.destination == `Melbourne`) {
            return `Qantas`;
        } else {
            return `Singapore Air`;
        }
    }
};

function qantasDowntime(getBestAirline) {
    return function() {
        let airline = getBestAirline.call(this);
        if(airline == `Qantas`) {
            return `No flights available`;
        } else {
            return airline;
        }
    }
}

q(myFlight.getBestAirline());
myFlight.getBestAirline = qantasDowntime(myFlight.getBestAirline);
q(myFlight.getBestAirline());

//Method borrowing
function concatAllMstarters(...strN) {
    q(arguments);
    //arguments.filter(arg => arg.indexOf('M') == 0); // Fails because arguments is Array-like but not an Array 
    mArgs = Array.prototype.filter.call(arguments, (arg) => arg.indexOf('M') == 0); //Borrowing filter from Array to process arguments
    q(mArgs);
    return mArgs.join(``);
}

q(concatAllMstarters(`Eenie`, `Meenie`, `Mynah`, `Mo`));

/*
setTimeout(function() { //Wrapper
    phoneCatalog.addPhone(`SecretModel`);
}, 2000);

setTimeout(() => phoneCatalog.addPhone(`AnotherSecretModel`), 2000); //Arow function instead of wrapper
*/

//Binding
let listPhones = function() {
    return this.phones.join();
};
q(listPhones.bind(phoneCatalog)());

//Partial functions
function sendMail(from, to, content) {
    console.log(`Sending email from ${from} to ${to} with message as ${content}`);
}

let admin = {
    role: `admin`,
    sendMail: {}/*sendMail.bind(null, this.role)*/,
}
admin.sendMail = sendMail.bind(admin, admin.role);
admin.sendMail(`all`, `Reboot in 15 mins`);

//getters and setters
let person = {
    firstName: `Daffy`, //data property
    lastName: `Duck`,
    get fullName(){     //accessor property
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(` `);
    },
};
q(person.fullName);
person.fullName = `Mickey Mouse`;
q(person.fullName);

//Inhertitance
let furniture = {
    name: 'Furniture',
    cost: 0,
    room: undefined,
    move(from, to) {
        q(`Moving furniture ${this.name} from ${from} to ${to}`);
        this.location = to; 
    },
};

let chair = {
    __proto__: furniture,
    hasArms: true,
};

chair.name = `Ikea chair`;
chair.cost = 100;
chair.room = `Living room`;
q(chair);
chair.move(`Living room`, `Kitchen`);

function Table(name, cost, room) {
    [this.name, this.cost, this.room] = [name, cost, room];
}
Table.prototype = furniture;

let table = new Table(`Ikea Table`, 250, `Dining`);
table.move(table.room, `Kitchen`);

let stool = new Object(furniture);
stool.name = `Tripod`;
stool.legs = 3;
stool.move(`Shop`, `Living`);

//Classes
class Animal {
    #scientificName = `Unknown`; //private member
    _name = `Unknown`; //protected member
    constructor(name) {
        if(name) this._name = name;
        this.#deriveScientificName(this._name);
    }
    move(){ //public member
        q(`${this._name} is moving`);
    }
    eat = () => { //will override any extension by subclasses!!
        q(`${this._name} is eating`);
    }
    #deriveScientificName(){
        if(this._name == `Unknown`) this.#scientificName = `Ghostus Idiotus`;
        else if (this._name == `Rabbit`) this.#scientificName = `Rabbitus Jumpitus`;
    }
    getScientificName(){
        return this.#scientificName;
    }
    static heartBeat(counter = 0) { //will be inherited
        if(counter <=5) {
            q(`Beep`);
            setTimeout(()=>Animal.heartBeat(++counter), 500);    
        }
    }
}

class Mammal extends Animal {
    move() { //override
        super.move();
        q(`${this._name} is tired with all that movement and will like to sleep now`);
    }
    static heartBeat(counter = 0) { //override static
        if(counter <=5) {
            q(`Mammalian Slower Beep`);
            setTimeout(()=>Mammal.heartBeat(++counter), 800);    
        }
    }

}

let rabbit = new Mammal(`Rabbit`);
rabbit.move();
rabbit.eat();
q(rabbit.getScientificName());
//Mammal.heartBeat();

q(rabbit instanceof Mammal);
q(rabbit instanceof Animal);
q(rabbit instanceof Object);
q(rabbit instanceof Array);
q(rabbit);

//Mixins
let migration = {
    migrate(moveFunc, ...args){
        moveFunc.apply(this, args);
    }
}

Object.assign(Mammal.prototype, migration); //mixin magic
let duck = new Mammal(`Duck`);
duck.migrate(duck.move);

//Promises, async/wait
/*
let p = new Promise(function(resolve, reject){ //promise
    let val = 101;                             //executor
    //Long drwan process here...
    setTimeout(() => {
        //resolve(val)
        reject(new Error(`Promise Failed Error`));
    }, 500);
});
p.then((result) => q(result), (error) => q(`Error!! ${error}`));                 //consumer
q(p);

new Promise((resolve, reject) => {
    if (new Date().getMilliseconds() % 2 == 0) {
        resolve(`Succesful value being returned`);
    }
    else {
        reject(new Error(`Failure being returned`));
    }
}).then(
    (result) => {
        q(result);
    }, 
    (error) => {
        q(error.message);
    });

new Promise((resolve) => {
    resolve(`Success again...`);
})
.finally(() => {
    q(`Finally the execution is complete. Lets look at results.`);
})
.then((result) => {
    q(result);
});

new Promise((resolve, reject) => {
    reject(new Error(`AlwaysFailError`));
}).catch((error) => {
    q(error.message);
});

//Promise chaining
new Promise((resolve, reject) => {
    let result = 0;
    resolve(result);
})
.then(result => ++result)
.then(result => ++result)
.then(result => ++result)
.then(result => {
    ++result;
    q(result);
});

fetch(`www.yahoo.com`)
.then(response => {
    q(`Received headers...`);
    return response.text();
})
.then(text => {
    q(text.match(/<script>/g) || []).length;
});

new Promise((resolve, reject) => {
    q(`^^^Begining the promise...`);
    setTimeout(() => {
        resolve(new Date().getTime());
    }, 200);
})
.then(result => q(`^^^Resolved succesfully with result timestamp as ${result}`));
*/

/*
(async (time) => {
    await new Promise((resolve) => {setTimeout(resolve, time)});
    q(`Waited ${time} ms`);
})(2000);
q(`After or before?`);
*/

/*
async function f1(){
    return `Went somewhere else and got this back`;
}

f1()
.then(result => {
    q(result);
    return result; // in order to pass it down the chain
})
.then(result => q(result.toString().toLowerCase()));

(async() => {
    q((await f1()).toString().toUpperCase());
})();
*/

/*
(async() => {
    q(`Step 1 running synchronously`);
    q(`Step 2 running synchronously`);
    q(await new Promise(resolve => {setTimeout(() => resolve(`Step 3 running async`), 2000);}));
    q(`Step 4 running synchronously`);
    q(`Step 5 running synchronously`);
    q(await new Promise(resolve => {setTimeout(() => resolve(`Step 6 running async`), 2000);}));
})();
*/

/*
(() => {
    new Promise(resolve => {`Step 1 running synchronously`})
    .then(q(result => q(result)))
    .then(q(`Step 2 running synchronously`))
    .then(new Promise(resolve => {setTimeout(() => resolve(`Step 3 running async`), 2000);}))
    .then(result => q(result))
    .then(q(`Step 4 running synchronously`))
    .then(q(`Step 5 running synchronously`))
    .then(new Promise(resolve => {setTimeout(() => resolve(`Step 6 running async`), 2000);}))
    .then(res => q(res));
})();
*/

/*
(() => {
    q(`Step 1 running synchronously`);
    q(`Step 2 running synchronously`);
    new Promise(resolve => {setTimeout(() => resolve(`Step 3 running async`), 2000);})
    .then(result => q(result));
    q(`Step 4 running synchronously`);
    q(`Step 5 running synchronously`);
    new Promise(resolve => {setTimeout(() => resolve(`Step 6 running async`), 2000);})
    .then(res => q(res));
})();
*/

//Generators
function* getTestNumbers(oddOrEven) {
    for(i = 0; i < 1+1; i++) {
        let done = false;
        let numStr = 0;
        while(!done) {
            numStr = Math.floor(Math.random()*1000);
            if(oddOrEven == `Even` && (numStr % 2 == 0)){
                done = true;
            } else if (oddOrEven == `Odd` && (numStr % 2 != 0)) {
                done = true;
            }
        }
        yield numStr;
    }
}

let genNames = getTestNumbers(`Odd`);
q(genNames.next().value);
q(genNames.next().value);

//async iterator
let phoneCatalog2 = { // Object with in-built iterator
    retailer: `Sunny stores`,
    phones: [`Samsung`, `Google`, `iPhone`, `Oppo`, `Sony`, `Nokia`],

    async *[Symbol.asyncIterator]() {
        for (let phone of this.phones) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            yield phone;
        }
    },
    /*
    [Symbol.asyncIterator]() {
        this.current = 0;
        return this;
    },

    async next() {
        await new Promise(resolve => setTimeout(resolve, 1000)); //mimic network delay
        if(this.current < this.phones.length) {
            return {done: false, value: this.phones[this.current++]};
        } else {
            return {done : true};
        }
    },
    */
};
/*
(async() => {
    for await (let phone2 of phoneCatalog2) {
        q(phone2);
    }
})(); */

let phoneCatalog3 = { // Object with in-built iterator
    retailer: `Sunny stores`,
    phones: [`Samsung`, `Google`, `iPhone`, `Oppo`, `Sony`, `Nokia`],

    *[Symbol.iterator]() {
        for(let phone of this.phones) {
            yield phone;
        }
    },
};
/*
for (let phone3 of phoneCatalog3) {
    q(phone3);
}*/
q(hello());