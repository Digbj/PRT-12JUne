function Plane(name) {
    this.name = name;
    this.isFlying = false;
  }
  
  Plane.prototype.takeOff = function () {
    this.isFlying = true;
    console.log(this.name + " has taken off.");
  };
  
  Plane.prototype.land = function () {
    this.isFlying = false;
    console.log(this.name + " has landed.");
  };

  var plane1 = new Plane("plane");
console.log(plane1.isFlying);
plane1.takeOff();
console.log(plane1.isFlying);
plane1.land();
console.log(plane1.isFlying); 


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  
  Person.prototype.eat = function (food) {
    let n=5
    if (this.stomach.length < n) {
      this.stomach.push(food);
      console.log(this.name + " ate " + food + ".");
    }
  };
  
  Person.prototype.poop = function () {
    this.stomach = [];
    console.log(this.name + " pooped.");
  };
  
  Person.prototype.toString = function () {
    return this.name + ", " + this.age;
  };
  var person1 = new Person("Abc", 10);
  console.log(person1.toString());
  person1.eat("apple");
  person1.eat("banana");
  console.log(person1.stomach); 
  person1.poop(); 
  console.log(person1.stomach); 
    
