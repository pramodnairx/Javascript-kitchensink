"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
console.log((0, common_1.greeter)(`Andy`));
/*
interface User {
    name: string | string[];
    age?: number | number[];
}

interface ResidentialUser extends User {
    address?: string;
}
*/
function printDetails(user) {
    if (typeof user.name === "string") {
        (0, common_1.q)(user.name.toLowerCase());
    }
    else {
        (0, common_1.q)(user.name.map(name => name.toLowerCase()));
    }
    if (user.age)
        (0, common_1.q)(user.age);
    if (user.address)
        (0, common_1.q)(user.address);
}
const salmon = { swim: (speed) => `Fish is swimming at ${speed} km/hr` };
(0, common_1.q)(salmon.swim(120));
function createUser(name, age, role) {
    return { name: name, age: age, role: role };
}
printDetails(createUser('Gullu', 22, 'admin'));
let sayHello;
sayHello = (name) => { (0, common_1.q)(`Hello ${name}`); };
sayHello(`Pinky!`);
function makeUpper(input) {
    return input.toUpperCase();
}
(0, common_1.q)(makeUpper(`this is what we have`));
const cat = {
    name: 'Tabby',
    isMammal: true,
    ability: ['eats', 'scratches', 'purrs'],
};
(0, common_1.q)(cat.ability);
function isDolphin(animal) {
    return animal.averagePodSize !== undefined;
}
const oceanCreature = { swimSpeed: 8 };
(0, common_1.q)(isDolphin(oceanCreature));
function processCatch(cotd) {
    if (cotd.type === "Shark") {
        (0, common_1.q)(`Processing a Great White with ${cotd.kills} kills`);
    }
    else {
        (0, common_1.q)(`Processing a Sea Dolhin with ${cotd.maxPitch} DB pitch`);
    }
}
const todaysCatch1 = { type: "Dolphin", averagePodSize: 12, maxPitch: 2500 };
const todaysCatch2 = { type: 'Shark', kills: 23, swimSpeed: 85 };
processCatch(todaysCatch1);
processCatch(todaysCatch2);
//Functions
function manipulateString(input, num) {
    return input.padEnd(num, `.`);
}
const manipulator = (input, num) => {
    return input.padEnd(num, `-`);
};
(0, common_1.q)(manipulateString(`Penne-Pasta`, 30));
(0, common_1.q)(manipulator(`Penne-Pasta`, 30));
const mani1 = manipulator;
(0, common_1.q)(mani1(`BoooHaaa`, 20));
class StringBuilder {
    constructor() {
        this.built = "";
    }
    add(data) {
        this.built += String(data);
        return this;
    }
    toString() {
        return this.built;
    }
}
const sb = new StringBuilder();
(0, common_1.q)(sb.add(`Mary `).add(`had `).add(3).add(` lambs. Yummy.`).toString());
//Generics
function firstElement(arr) {
    return arr[0];
}
(0, common_1.q)(firstElement([]));
function map(arr, func) {
    return arr.map(func);
}
/*
function filterObjectKeys<T extends Object>(obj: T, keys: string[]) {
    let result = {} as {};
    for (const key of Object.keys(obj)) {
        if(keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}*/
function filterObjectKeys(obj, arr) {
    let result = {};
    for (const key of arr) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
(0, common_1.q)(filterObjectKeys({ id: 1, name: `Pramod`, qty: 10 }, ['id', 'name']));
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
(0, common_1.q)(combine([1, 2, 3], [4, 5, 6]));
(0, common_1.q)(combine([1, 2, 3], [`Zippy`]));
