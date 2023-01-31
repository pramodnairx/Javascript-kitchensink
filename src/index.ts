import { greeter, q } from './common';
console.log(greeter(`Andy`));

//names.forEach(name => console.log(name.toUpperCase()));


type User = {
    name: string | string[];
    age?: number | number[];
    role?: string;
}

type ResidentialUser = User & {
    address?: string;
}

/*
interface User {
    name: string | string[];
    age?: number | number[];
}

interface ResidentialUser extends User {
    address?: string;
}
*/

function printDetails(user: ResidentialUser){
    if (typeof user.name === "string") {
        q(user.name.toLowerCase());
    } else {
        q(user.name.map(name => name.toLowerCase()));
    }
    
    if (user.age) q(user.age);
    if (user.address) q(user.address);
}
//printDetails({name: `Gollum`/*, age: 356*/, address: `Melbourne`});
//printDetails({name: names, age: [23, 44, 101], address: `Sydney`});

type Fish = {swim: (speed: number) => string};
const salmon: Fish = {swim: (speed) => `Fish is swimming at ${speed} km/hr`};
q(salmon.swim(120));

function createUser(name: string, age: number, role: 'admin' | 'privileged' | 'standard'): User {
    return {name: name, age: age, role: role};
}

printDetails(createUser('Gullu', 22, 'admin'));

let sayHello: (name: string) => void;
sayHello = (name) => {q(`Hello ${name}`)};
sayHello(`Pinky!`);

interface UpperCaseable {
   toUpperCase: () => string;  
}

function makeUpper<T extends UpperCaseable>(input: T) : string {
    return input.toUpperCase();
}

q(makeUpper(`this is what we have`));

interface Animal<T> {
    name: string;
    isMammal: boolean;
    ability: T;
}

const cat: Animal<string[]> = {
    name: 'Tabby',
    isMammal: true,
    ability: ['eats', 'scratches', 'purrs'],
};
q(cat.ability);

//type predicates
interface Shark {
    swimSpeed: number
}

interface Dolphin {
    averagePodSize: number
}

function isDolphin(animal: Shark | Dolphin | Animal<string[]>): animal is Dolphin {
    return (animal as Dolphin).averagePodSize !== undefined; 
}

const oceanCreature: (Shark | Dolphin) = {swimSpeed: 8};
q(isDolphin(oceanCreature));

//discriminated union
interface GreatWhite extends Shark {
    type: "Shark";
    kills: number;
}

interface SeaDolphin extends Dolphin {
    type: "Dolphin";
    maxPitch: number;
}

type CatchOfTheDay = GreatWhite | SeaDolphin;

function processCatch(cotd: CatchOfTheDay) {
    if(cotd.type === "Shark") {
        q(`Processing a Great White with ${cotd.kills} kills`);
    } else {
        q(`Processing a Sea Dolhin with ${cotd.maxPitch} DB pitch`);
    }
}

const todaysCatch1: CatchOfTheDay = {type: "Dolphin", averagePodSize: 12, maxPitch: 2500};
const todaysCatch2: CatchOfTheDay = {type: 'Shark', kills: 23, swimSpeed: 85};

processCatch(todaysCatch1);
processCatch(todaysCatch2);


/*
function filterObjectKeys<T extends Object>(obj: T, keys: string[]) {
    let result = {} as {};
    for (const key of Object.keys(obj)) {
        if(keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
q(filterObjectKeys({id: 1, name: `Pramod`, qty: 10}, ['id', 'qty']));
*/



