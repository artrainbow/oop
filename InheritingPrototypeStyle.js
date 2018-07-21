/**
 * Created by deod on 7/20/18.
 */

function Animal() {
    this.name = 'animal'; //  *без магии не наследуется
    this.say = (voice) => { // * без магии не наследуется
        return voice;
    };
}

Animal.move = function () { // наследуется
    return 'move'
};

function Cat() {
    this.name = 'cat'
}

function Dog() {
    this.name = 'dog'
}

Cat.prototype = new Animal(); // Неправильный способ наследования т.к. возможны побочные эффекты от запуска инстанса Animal

// OR

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Если эту строчку не добавить, то new Dog() вернет // => Animal { name: 'dog' } см. catсды

// OR

function Fish() {
    Animal.apply(this, arguments); // *та самая магия
}

const cat = new Cat();
const dog = new Dog();
const fish = new Fish();
fish.name = 'fish';


console.log(new Animal()); // => Animal { name: 'animal', say: [Function] }
console.log(cat, cat.say('meah')); // => Animal { name: 'cat' } 'meah'
console.log(dog, Animal.move()); // => Dog { name: 'dog' } 'move'
console.log(fish, fish.say('shshshsh')); // => Dog { name: 'dog' } 'move'
