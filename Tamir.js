//Porphismolym
class Animal {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
    }
    
    speak(){
        console.log(`${this.name} can speak `)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, breed)
    }

    speak() {
        console.log(`${this.name} can bark!`)
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, breed)
    }

    speak() {
        console.log(`${this.name} can meow`)
    }
}
const dog = new Dog ('Bubby', 'Lucky shitzu')
dog.speak()

const cat = new Cat ('Bubby2', 'nice Cat')
cat.speak()