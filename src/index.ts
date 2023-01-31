import { greeter, q } from './common';
console.log(greeter(`Andy`));

const names = [`Andy`, `Paco`, `Shikimikki`];
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




