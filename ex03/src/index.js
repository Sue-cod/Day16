// Only change code below this line
class Person {
  constructor(display) {
      this.display = display;
}

static display() {
    let message = "Static method is invoked from Person class";
    return message;
}

static show() {
    Person.display();
    console.log("Static method is invoked from Person class");   
}
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;
