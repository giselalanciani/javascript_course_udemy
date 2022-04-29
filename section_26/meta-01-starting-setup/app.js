//Library land

const uid = Symbol();
console.log(uid);

const user = {
    //id: "p1",
    [uid]: 1,
    name: "Max",
    age: 30,
    [Symbol.toStringTag]: "User"
};

user[uid] = "p3";

//app land ===> Uing the library

user.id = "p2"; //This shoudl not be possible

console.log(user[Symbol("uid")]);


console.log(Symbol("uid") === Symbol("uid"));

console.log(user);
console.log(user.toString());

const company = {
    curEmployee: 0,
    employees: ["Max", "Manu", "Anna"],
    next() {
        if(this.curEmployee >= this.employees.length){
            return {value:this.curEmployee, done: true };
        }
        const returnValue = {
            value:this.employees[this.curEmployee],
            done: false
        };
        this.curEmployee++;
        return returnValue;
    }
};

//Iterator example

let employee = company.next();

while(!employee.done) {
    console.log(employee.value);
    employee = company.next();
}

