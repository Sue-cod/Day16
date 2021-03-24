// Only change code below this line
class Microsoft {
constructor(name) {
    this._name = name;
}
get name() {
    
} 

set name(name) {
 this._name = name;
}

occupation() {
    return '${name} is a philanthropist!';
}

henry() {
    henry.occupation();
    console.log("William Henry Gates III");
}

}

class Facebook {
constructor(name, age) {
    this._name = name;
    this._age = age;
}

studentAge() {
    return '${name} is ${age}';
}
elliot() {
    console.log("Mark Elliot Zuckerberg", 23);
    elliot.occupation();
    elliot.studentAge();
}
}

class Microsoft extends Facebook {
    constructor(name, age) {
        super(name, age);

    }
}

// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}