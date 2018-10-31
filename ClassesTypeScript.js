var Cat = /** @class */ (function () {
    function Cat(theName) {
        this.name = theName;
    }
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(theName) {
        this.name = theName;
    }
    return Dog;
}());
console.log(new Cat("Cat").name); // => Cat
console.log(new Dog("Dog")); // => Dog { name: 'Dog' }
