function User1(name) {
    this.name = name;
    let _age;
    this.getAge = function () {
        return _age;
    };
    this.setAge = function (age) {
        _age = age;
    }
}

// OR

class User2 {
    constructor(name) {
        this.name = name;
        this.age;
    }
}

class SuperUser extends User2 {
    constructor(name) {
        super(name)
    }

    get userAge() {
        return this.age;
    };

    set userAge(userAge) {
        this.age = userAge;
    }
}


const tom = new User1('Том');
const mark = new User2('Mark');

console.log(tom, tom._age, tom.getAge()); // => User1 { name: 'Том', getAge: [Function], setAge: [Function] } undefined undefined
tom.setAge(32);
console.log(tom.getAge()); // => 32

console.log(mark, mark.age, mark.userAge); // => User2 { name: 'Mark' } undefined undefined
mark.userAge = 32;
console.log(mark.userAge); // => 32