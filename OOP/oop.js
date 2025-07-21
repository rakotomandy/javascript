// OOP (Object-Oriented Programming) in JavaScript - Full Commented Lesson

// --- 1. CLASS DECLARATION ---
// A class is a blueprint for creating objects with specific properties and methods
class Animal {
  // The constructor is a special method for creating and initializing objects
  constructor(name, species) {
    this.name = name;           // 'this' refers to the current instance of the class
    this.species = species;     // Save species as a property of the object
  }

  // Method: describe the animal
  describe() {
    // This method is shared by all instances of Animal
    return `${this.name} is a ${this.species}.`;
  }
}

// --- 2. CREATING INSTANCES ---
const lion = new Animal("Leo", "Lion");    // Create a new Animal instance
const tiger = new Animal("Tigra", "Tiger"); // Another instance

console.log(lion.describe());  // Output: Leo is a Lion.
console.log(tiger.describe()); // Output: Tigra is a Tiger.


// --- 3. INHERITANCE ---
// A class can inherit from another using 'extends'
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");  // Call the constructor of the parent class (Animal)
    this.breed = breed;   // Add new property specific to Dog
  }

  // Override a method
  describe() {
    return `${this.name} is a ${this.breed} dog.`;
  }

  // New method not in parent
  bark() {
    return "Woof!";
  }
}

const dog = new Dog("Max", "Labrador");
console.log(dog.describe()); // Max is a Labrador dog.
console.log(dog.bark());     // Woof!


// --- 4. ENCAPSULATION ---
// Use # to declare private fields (ES2022+)
class BankAccount {
  #balance = 0; // Private property cannot be accessed directly outside

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}`;
    }
    return "Invalid deposit amount";
  }

  getBalance() {
    return `Balance: $${this.#balance}`;
  }
}

const account = new BankAccount("Alice");
console.log(account.deposit(100));    // Deposited $100
console.log(account.getBalance());    // Balance: $100
// console.log(account.#balance);    // ❌ Syntax Error: Private field


// --- 5. POLYMORPHISM ---
// Same method name behaves differently depending on the object
class Bird {
  speak() {
    return "Tweet!";
  }
}

class Parrot extends Bird {
  speak() {
    return "I can talk!";
  }
}

function makeItSpeak(bird) {
  console.log(bird.speak());
}

const genericBird = new Bird();
const talkingParrot = new Parrot();
makeItSpeak(genericBird);   // Tweet!
makeItSpeak(talkingParrot); // I can talk!


// --- 6. STATIC METHODS ---
// Belong to the class itself, not to any instance
class MathHelper {
  static square(x) {
    return x * x;
  }
}

console.log(MathHelper.square(5)); // 25


// --- 7. GETTERS AND SETTERS ---
class User {
  constructor(name) {
    this._name = name; // Use _ to indicate internal variable
  }

  get name() {
    return this._name.toUpperCase(); // Custom behavior
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");
    } else {
      this._name = value;
    }
  }
}

const user = new User("john");
console.log(user.name); // JOHN
user.name = "Al";       // Name too short
user.name = "Alice";
console.log(user.name); // ALICE


// --- 8. SUMMARY ---
// OOP in JS includes:
// ✔ Classes & Constructors
// ✔ Inheritance with extends & super
// ✔ Encapsulation with private (#) fields
// ✔ Polymorphism with method overriding
// ✔ Static methods
// ✔ Getters and Setters

// JavaScript's class system is prototype-based under the hood,
// but the 'class' syntax makes OOP easier and more familiar
// for those coming from languages like Java, C++, or Python.
