"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
console.log((0, common_1.greeter)(`Andy`));
const names = [`Andy`, `Paco`, `Shikimikki`];
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
printDetails({ name: `Gollum` /*, age: 356*/, address: `Melbourne` });
printDetails({ name: names, age: [23, 44, 101], address: `Sydney` });
