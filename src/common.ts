let greeter = function(name: string): string {
    return `Common MJS says Hello to ${name}!`;
};

let q = console.log;

export { greeter, q }