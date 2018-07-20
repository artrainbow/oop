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

const Dog = Object.create(Animal); // => Cat.__proto__ = Animal;

// OR

const Cat = Object.assign({}, Animal); // Свойства из Animal копируются в Cat.


Cat.name = 'cat';
Dog.name = 'dog';


console.log(Animal, Animal.say('ahhhh')); // => {name: "animal", say: ƒ} "ahhhh"
console.log(Cat, Cat.say('meah')); // => {name: "cat", say: ƒ} "meah"
console.log(Dog, Dog.say('woof')); // => {name: "dog"} "woof"