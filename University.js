class University {
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  addDepartment(Department) {}
  addProfessor(Professor){
    const professors1 = new Professor ("Dr. Worachet Uttha");
    const professors2 = new Professor ("Dr. Udsanee Pakdeetrakulwong");
    return professors1;
  }
  getDepartments() {
    return this.department;
  }
  getStudents() {
    return this.students;
  }
  getProfessors() {
    return this.professors;
  }
  toString() {
    return `University: name :${this.name}, \n location :${this.location}, \n Departments : Computer Science, Software Enginearing, \n Student: Alice, Bob, \n Professors: Dr. Worachet Uttha, Dr. Udsanee Pakdeetrakulwong`;
  }
}
class Department {
  name = "";
  courses = [];
  student = [];
  professors = [];
  constructor(name, courses, student, professors) {
    this.name = name;
    this.courses = courses;
    this.student = student;
    this.professors = professors;
  }
  getCourses() {
    return this.courses;
  }
  getStudent() {
    return this.student;
  }
  toString() {
    return `Department: ${this.name}, \n Courses: ${this.courses}, \nStudents: ${Student.name}, \n Professors: ${this.professors}`;
  }
}
class Course {
  code = "";
  title = "";
  University = null;
  professor = []; 
  Student = null;
  constructor(code, title, professor) {
    this.code = code;
    this.title = title;
    this.professor = professor;
  }
  getProfessors() {
    return this.professors;
  }
  getStudents() {
    return this.student;
  }
  toString() {
    return `Course: ${this.code} - ${
      this.title
    },\n Professor: ${University.professors1} \n Student: ${Student.name}`;
  }
}

class Person {
  name = "";
  address = "";
  email = "";
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
  toString() {
    return ``;
  }
}

class Student {
  studentID = "";
  year = 0;
  course = "";
  constructor(studentID, year, course) {
    this.studentID = studentID;
    this.year = year;
    this.course = course;
  }
  getCourses() {
    return this.course;
  }
  toString() {
    return `ID: ${this.studentID}, Year: ${this.year}, \n Courses: `;
  }
}

class Professor {
  staffId = "";
  constructor(staffId) {
    this.staffId = staffId;
  }
  getCourses() {
    return this.courses;
  }
  toString() {
    return `Professor in the University :\n Professor: Dr. Worachet Uttha, Staff ID: ${this.staffId}, \n Courese: Introduction to Programming`;
  }
}
const main = () => {
  //---------------university---------------\\
  console.log("---------------university---------------");
  const university = new University(
    "NaKhon Pathom Rajabhat University",
    "85 Malaiman Road, NaKhon Pathom, Thailand"
  );
  console.log(university.toString());

  //---------------Department---------------\\ยังไม่ได้เริ่ม
  console.log("---------------Department---------------");
  const department1 = new Department(
    "Computer Science",
    1,
    "Alice",
    "Dr. Worachet Uttha"
  );
  const department2 = new Department(
    "Computer Science",
    1,
    "Bob",
    "Dr. Worachet Uttha"
  );
  console.log(department1.toString());
  console.log("");
  console.log(department2.toString());

  //---------------Course---------------\\ยังทำไม่เสร็จ
  console.log("---------------Course---------------");
  const course1 = new Course("cs101", "Introduction to Programming", );
  console.log(course1.toString());

  //---------------Student---------------\\ยังไม่เสร็จ
  const student1 = new Student("");

  //---------------Professor---------------\\
  console.log("---------------Professor---------------");
  const professors1 = new Professor("P001");
  
  console.log(professors1.toString());
};
main();
