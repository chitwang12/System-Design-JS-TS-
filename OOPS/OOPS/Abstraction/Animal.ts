abstract class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    //Abstract Method (must be Overriden in derived class)
    abstract makeSound(): void;
}


class Dog extends Animal{
    constructor(name: string){
        super(name);
    }

    makeSound(): void{
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name);
    }

    makeSound(): void {
        console.log("Meow! Meow!");
    }
}


//Example Usage
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Output: Woof! Woof!
cat.makeSound(); // Output: Meow! Meow!