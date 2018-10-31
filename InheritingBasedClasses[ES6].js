/**
 * Created by deod on 7/21/18.
 * you need to use node 10+ version
 *
 * Inheriting Based Classes ES6
 *
 */


class Animal {
    constructor() {
        this.name = 'animal';
        this.say.bind(this); // привязка метода say к классу объекта
    }

    say(voice) { // запишется в прототип объекта
        return voice;
    }

    static move() { // статический метод не наследуется
        return 'move';
    }
}


class Cat extends Animal {
    constructor() {
        super(); // вызов конструктора потомка возможен только с вызовом конструктора родителя, при помощи метода super()
        console.log(this); // => Cat { name: 'animal' }
        this.name = 'cat'; // до вызова super() this не существует
        this.type = 'mammal'; // добавили новое свойство потомку
        this.say.bind(this); // привязка метода say к классу объекта
        this.isExist.bind(this); // привязка метода say к классу объекта
    }

    say(voice) {
        return super.say(voice) + '!'; // расширили метод родителя
    }

    isExist() { // добавили новый метод потомку
        return true;
    }
}


const animal = new Animal();
const cat = new Cat();

console.log(new Animal(), Animal.move(), new Animal().say('')); // => Animal { name: 'animal' } 'move' ''
console.log(cat, cat.say('meah'), cat.isExist(), cat.type); // => Cat { name: 'cat', type: 'mammal' } 'meah!' true 'mammal'

