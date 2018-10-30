/**
 * Created by deod on 7/21/18.
 */


class Animal {
    constructor() {
        this.name = 'animal',
        this.say.bind(this) // привязка метода say к классу объекта
    }

    say(voice) { // запишется в прототип объекта
        return voice;
    }

    static move() {
        return 'move';
    }
}


class Cat extends Animal {
    constructor (){
        super(); // вызов конструктора потомка возможен только с вызовом конструктора родителя

        this.name = 'cat'; // до вызова super() this не существует
    }

    // say(voice){
    //     return super.say(voice) + '!'; // расширили метод родителя
    // }
}


const animal = new Animal();
const cat = new Cat();

console.log(new Animal(), Animal.move(), new Animal().say('aghhhh')); // => Animal { name: 'animal' } 'move' 'aghhhh'
console.log(cat, cat.say('meah')); // => Cat { name: 'animal' } 'meah'