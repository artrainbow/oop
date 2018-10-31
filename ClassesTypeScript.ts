class Cat {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }
}

class Dog {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}


console.log(new Cat("Cat").name); // => Cat
console.log(new Dog("Dog")); // => Dog { name: 'Dog' }

