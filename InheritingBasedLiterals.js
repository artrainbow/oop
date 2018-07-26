/**
 * Created by deod on 7/20/18.
 */


// #Наследование на основе литералов

const Animal = {
    name: 'animal',
    say: (voice) => {
        return voice;
    }
};

const Fish = {};
Fish.__proto__ = Animal;

//OR

const Elefant = {
    __proto__: Animal
};

// OR

const Dog = Object.create(Animal); // => Dog.__proto__ = Animal; В тоже время Object.create(null) создаст объект без __proto__

// OR

const Cat = Object.assign({}, Animal); // Свойства из Animal копируются в Cat.

// OR

const Mouse = {
    ...Animal
};


Fish.name = 'fish';
Elefant.name = 'elefant';
Cat.name = 'cat';
Dog.name = 'dog';
Mouse.name = 'mouse';


console.log(Animal, Animal.say('ahhhh')); // => {name: "animal", say: ƒ} "ahhhh"
console.log(Cat, Cat.say('meah')); // => {name: "cat", say: ƒ} "meah"
console.log(Dog, Dog.say('woof')); // => {name: "dog"} "woof"
console.log(Fish);
console.log(Elefant);
console.log(Mouse);
