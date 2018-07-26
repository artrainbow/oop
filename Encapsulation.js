function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    };
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}

var tom = new User("Том", 26);
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение