class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major,homeLocation) {
        super(name, age);
        this.major = major;
        this.homeLocation = homeLocation;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}
const me = new Student('Andrew Mead', 27, 'Computer Science', 'Los Angeles');
console.log(me.getGreeting());


const other = new Student();
console.log(other.getGreeting());

