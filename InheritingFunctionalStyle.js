/**
 * Created by deod on 7/20/18.
 * you need to use node 10+ version
 *
 * Inheriting in Functional style (Функциональный паттерн наследования)
 */


function Animal() {
    this.name = ''; // если свойству не присвоить значение, оно не будет наследоваться
    this.say = (voice) => {
        return voice;
    };
}

function Cat() {
    Animal.apply(this, arguments);
    this.name = 'cat'; // переопределяем свойство name
    this.type = 'mammal'; // добавляем новое свойство
    this.isExist = () => {  // добавляем новый метод
        return true;
    }
}

const animal = new Animal(); // скобки в Animal() ставить необязательно
const cat = new Cat();

// console.log(Animal.);
console.log(animal, animal.say('ahhhh'), animal.__proto__, animal.prototype); // => Animal { name: '', say: [Function] } 'ahhhh' Animal {} undefined
console.log(cat, cat.say('meah'), cat.__proto__, cat.prototype); // => Cat { name: 'cat', say: [Function], type: 'mammal', isExist: [Function] } 'meah' Cat {} undefined




