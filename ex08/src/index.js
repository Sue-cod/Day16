class Person {
    constructor(name, email, age) {
        this._name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        return personInfo;
       console.log('Name: ${name}, email: ${email}, age: ${email}');
      
    }
}
let personInfo = Person('Name: ${name}', 'email: ${email}', 'age: ${email}');
getPerson();
console.log(getPerson('Name: ${name}'));
console.log(getPerson('email: ${email}'));
console.log(getPerson('age: ${email}'));
module.exports = Person;