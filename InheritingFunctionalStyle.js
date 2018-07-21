/**
 * Created by deod on 7/20/18.
 */


// Функциональный паттерн наследования

function Animal() {
    this.name = 'animal';
    this.say = (voice) => {
        return voice;
    };

    this.privatProperty;
    const privatProperty = '';
    this._protectedProperty;
}

function Cat() {
    Animal.apply(this, arguments);
}

const animal = new Animal;
const cat = new Cat();

cat.name = 'cat';


console.log(animal, animal.say('ahhhh')); // => {name: "animal", say: ƒ} "ahhhh"
console.log(cat, cat.say('meah')); // => {name: "cat", say: ƒ} "meah"
