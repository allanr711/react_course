class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age  = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
};


class Traveler extends Person {
  constructor(name, age, major, location) {
    super(name, location);
    this.location = location;
  }
  hasLocation() {
    return !!this.location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation) {
      greeting += ` I'm visiting from ${this.location}`;
    }
    return greeting;
  }
};

const me = new Student('Bruce Wayne', 33, 'Art');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());


const me = new Traveler('Bruce Wayne', 33, 'Art', 'Gotham');
console.log(me.getGreeting());