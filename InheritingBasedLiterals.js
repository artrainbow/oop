/**
 * Created by deod on 7/20/18.
 * you need to use node 10+ version
 *
 * Inheriting Based literals
 *
 */


const Animal = {
    name: '',
    say: (voice) => {
        return voice;
    }
};


const Cat = Object.assign({}, Animal); // Все свойства и методы из Animal копируются в Cat.

// OR

const Mouse = { // Все свойства и методы из Animal копируются в Mouse.
    ...Animal
};

// OR

const Fish = {};
Fish.__proto__ = Animal; // Свойства не скопируются из Animal в Fish, а методы запишутся в прототип

//OR

const Elefant = {
    __proto__: Animal // Свойства не скопируются из Animal в Elefant, а методы запишутся в прототип
};

// OR

const Dog = Object.create(Animal); // Dog.__proto__ = Animal; В тоже время Object.create(null) создаст объект без __proto__


Fish.name = 'fish';
Elefant.name = 'elefant';
Cat.name = 'cat';
Dog.name = 'dog';
Mouse.name = 'mouse';


console.log(Animal, Animal.say('ahhhh')); // => {name: "", say: ƒ} "ahhhh"
console.log(Cat, Cat.say('meah')); // => {name: "cat", say: ƒ} "meah"
console.log(Mouse, Mouse.say('pe-pe-pe')); // => { name: 'mouse', say: [Function: say] } 'pe-pe-pe'
console.log(Fish, Fish.say('#$%#$%')); // => { name: 'fish' } '#$%#$%'
console.log(Elefant, Elefant.say('U-u-u-u-u')); // => { name: 'elefant' } 'U-u-u-u-u'
console.log(Dog, Dog.say('woof')); // => {name: "dog"} "woof"