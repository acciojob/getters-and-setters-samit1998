//complete this code
class Person {
	constructor(name, age) {
    this.name = name;
    this.age = age;
	get name() {
    return this.name;
  }

  set age(age) {
    this.age = age;
  }
}

class Student extends Person {
	study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this._name} is teaching`);
  }
}
const student1 = new Student("Alice", 20);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
