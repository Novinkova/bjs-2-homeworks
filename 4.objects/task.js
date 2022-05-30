function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const Student1 = new Student("Николай", "мужской", "20");
const Student2 = new Student("Елена", "женский", "23");
const Student3 = new Student("Мария", "женский", "19"); 

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
     this.marks = [];
  } 

    this.marks.push(mark);
} 

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) { 
    this.marks = [];
  } 

   marks.forEach(mark => this.marks.push(mark));
} 

Student.prototype.getAverage = function () {
  let sum = 0;
  let devisor = this.marks.length;

  if (this.marks === undefined) {
    return 'Оценок нет';
  } else {
    this.marks.forEach(mark => sum += mark); 
  }
  return sum / devisor;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  
  this.excluded = reason;
}