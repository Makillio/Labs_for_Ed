class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

// Класс Student
class Student {
  constructor(surname, name) {
    this.surname = surname;
    this.name = name;
    this.marks = [];
  }

  // Добавление оценки (задание 5)
  addMark(subject, mark) {
    this.marks.push(new Mark(subject, mark));
  }

  // Возврат всех оценок по предмету (задание 4)
  getMarks(subject) {
    let result = [];
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i].subject === subject) {
        result.push(this.marks[i].mark);
      }
    }
    return result;
  }
}

// Демонстрация работы
let student = new Student("Иванов", "Иван");
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Математика", 4);
student.addMark("Химия", 3);

console.log("Оценки по математике: " + student.getMarks("Математика"));
console.log("Оценки по физике: " + student.getMarks("Физика"));
console.log("Оценки по истории: " + student.getMarks("История"));
