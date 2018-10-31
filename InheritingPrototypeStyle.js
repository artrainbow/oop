/**
 * Created by deod on 7/20/18.
 */

function Animal() {
    this.name = ''; // наследуется только одним способом см. ниже
    this.say = (voice) => { // наследуется только одним способом см. ниже
        return voice;
    };
}

Animal.move = function () { // объявление статического метода, который наследуется любым способом
    return 'move'
};

function Cat() {} // Неправильный способ наследования т.к. возможны побочные эффекты от запуска инстанса Animal, см. лог + ни методы
Cat.prototype = new Animal();

// OR

function Dog() {} // Неправильный способ наследования т.к. ни методы, ни свойства записанные в конструкторе не наследуются таким способом
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Если эту строчку не добавить, то new Dog() вернет // => Animal {}

// OR

function Fish() { // Правильный способ наследования
    Animal.apply(this, arguments);
}

const animal = new Animal();
const cat = new Cat();
const dog = new Dog();
const fish = new Fish();

console.log(animal); // => Animal { name: '', say: [Function] }
console.log(cat, cat.say('meah'), cat.__proto__); // => Animal {} 'meah' Animal { name: '', say: [Function] }
console.log(dog, dog.__proto__); // => Dog {} 'move'
console.log(fish, fish.say('shshshsh')); // => Fish { name: '', say: [Function] } 'shshshsh'

