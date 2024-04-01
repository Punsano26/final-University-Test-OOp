class University {
  name = "";
  location = "";
  professors = [];
  students = [];
  departments = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  addDepartment(department) {
    this.departments.push(department);
  }
  addStudent(student) {
    this.students.push(student);
  }
  addProfessor(professor) {
    this.professors.push(professor);
  }
  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    this.departments.splice(index, 1);
  }
  removeStudent(student) {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  removeProfessor(professor) {
    const index = this.professors.indexOf(professor);
    this.professors.splice(index, 1);
  }
 
  getDepartments() {
    var department = "";
    for (let i = 0; i < this.departments.length; i++) {
      department += this.departments[i].name + ", ";
    }
    return department;
  }
  getStudents() {
    var student = "";
    for (let i = 0; i < this.students.length; i++) {
      student += this.students[i].name + ", ";
    }
    return student;
  }
  getProfessors() {
    var professor = "";
    for (let i = 0; i < this.professors.length; i++) {
      professor += this.professors[i].name + ", ";
    }
    return professor;
  }
  toString() {
    return `University: name :${this.name}, \n location :${
      this.location
    }, \n Departments :${this.getDepartments()} \n Student:${
      this.getStudents()
    } \n Professors:${this.getProfessors()}`;
}


}
class Department {
  name = "";
  courses = [];
  students = [];
  professors = [];
  constructor(name) {
    this.name = name;
  }
  addCourse(course) {
    this.courses.push(course);
  }
  addStudent(student) {
    this.students.push(student);
  }
  removeStudent(student) {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1)
  }
  addProfessor(professor) {
    this.professors.push(professor);
  }
  removeProfessor(professor) {
    const index = this.professors.indexOf(professor);
    this.professors.splice(index, 1);
  }
  getCourses() {
    let course = "";
    for (let i = 0; i < this.courses.length; i++) {
      course += this.courses[i].title + ", ";
    }
    return course;
  }
  getStudent() {
    let student = "";
    for (let i = 0; i < this.students.length; i++) {
      student += this.students[i].name + ", ";
    }
    return student;
  }
  getProfessors() {
    let professor = "";
    for (let i = 0; i < this.professors.length; i++) {
      professor += this.professors[i].name + ", ";
    }
    return professor;
  }
  toString() {
    return `Department: ${this.name}, \n Courses: ${
      this.getCourses()
    } \n Students: ${this.getStudent()} \n Professors: ${
      this.getProfessors()
    }`;
  }
}
class Course {
  code = "";
  title = "";
  professor = null; //set ต้องเป็น null
  Students = [];
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }
  addStudent(student) {
    this.Students.push(student);
  }
  removeStudent(student){
    const index = this.Students.indexOf(student);
    this.Students.splice(index, 1);
  }
  setProfessor(professor) {
    this.professor = professor;
  }
  getProfessors() {
    //อะไรที่ไม่ใช่ array ก็ไม่ต้อง loop
    return this.professor; //นับตามจำนวน
  }

  getStudents() {
    let student = "";
    for (let i = 0; i < this.Students.length; i++) {
      student += this.Students[i].name + ", ";
    }
    return student;
  }
  toString() {
    return `Course: ${this.code} - ${this.title},\n Professor:${
      this.getProfessors()
    } \n Student :${this.getStudents()}`;
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
    return `name: ${this.name}, address:${this.address}, email:${this.email}`;
  }
}

//หัว 3 เหลี่ยมสีขาว (ที่ไม่ใช่ข้าวหลามตัด) ต้อง extend ชี้ไปทางใครคลาสนั้นคือคลาสแม่ง
class Student extends Person {
  studentID = "";
  year = 0;
  courses = [];
  constructor(name, address, email, studentID, year) {
    super(name, address, email);
    this.studentID = studentID;
    this.year = year;
    
  }
  registerCourse(course) {
    //มันก็กับ add นั่นแหละ
    this.courses.push(course);
  }
  dropCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  getCourses() {
    var course = "";
    for (let i = 0; i < this.courses.length; i++) {
      course += this.courses[i].title + ", ";
    }
    return course;
  }
  toString() {
    return `StudentName:${this.name}, ID: ${this.studentID}, Year: ${
      this.year
    }, \n Courses:${this.getCourses()} `;
  }
}

class Professor extends Person {
  staffId = "";
  courses = [];
  constructor(name, address, email, staffId) {
    super(name, address, email);
    this.staffId = staffId;
  }
  teachCourse(course) {
    //เหมือนกับ add นั่นแหละ
    this.courses.push(course);
  }
  stopTeachingCourse(course) {
    const index = this.student.indexOf(course);
    this.courses.splice(index, 1);
  }
  getCourses() {
    let course = "";
    for (let i = 0; i < this.courses.length; i++) {
      course += this.courses[i].title + ", ";
    }
    return course;
  }
  toString() {
    return `Professor: ${this.name} StaffID: ${this.staffId} \n Course: ${
      this.getCourses()
    }`;
  }
}
const main = () => {
  // Creating University
  const myUniversity = new University(
    "Nakhon Pathom Rajabhat University",
    "85 Malaiman Road, Nakhon Pathom, Thailand"
  );

  // Creating Departments
  const department1 = new Department("Computer Science");
  const department2 = new Department("Software Engineering");

  // Adding Departments to University
  myUniversity.addDepartment(department1);
  myUniversity.addDepartment(department2);

  // Creating Students
  const student1 = new Student(
    "Alice",
    "123 Kanchanaburi",
    "alice@example.com",
    "S001",
    1
  );
  const student2 = new Student(
    "Bob",
    "456 Ratchaburi",
    "bob@example.com",
    "S002",
    2
  );

  // Adding Students to University
  myUniversity.addStudent(student1);
  myUniversity.addStudent(student2);

  // Adding Students to Department
  department1.addStudent(student1);
  department2.addStudent(student2);

  // Creating Professors
  const professor1 = new Professor(
    "Dr. Worachet Uttha",
    "789 Phetchakaseam road",
    "wuttha@example.com",
    "P001"
  );
  const professor2 = new Professor(
    "Dr. Udsanee Pakdeetrakulwong",
    "101 Wangtaku",
    "udsanee@example.com",
    "P002"
  );

  // Adding Professors to University
    myUniversity.addProfessor(professor1);
    myUniversity.addProfessor(professor2);
  //adding Professor to department
  department1.addProfessor(professor1);
  department2.addProfessor(professor2);
  // Creating Courses
  const course1 = new Course(
    "CS101",
    "Introduction to Programming",
    professor1
  );
  const course2 = new Course(
    "SE101",
    "Introduction of Database Design",
    professor2
  );
  

  //adding student to course
  course1.addStudent(student1);
  course2.addStudent(student2);
  //add professor to coures
  course1.setProfessor(professor1);
  course2.setProfessor(professor2);
  // Registering Students to Courses
  student1.registerCourse(course1);
  student2.registerCourse(course2);

  // Teaching Courses by Professors
  professor1.teachCourse(course1);
  professor2.teachCourse(course2);

  //add course to department
 department1.addCourse(course1);
 department2.addCourse(course2);

  // Printing Information
  console.log(myUniversity.toString());
  console.log();
  console.log(department1.toString());
  console.log();
  console.log(department2.toString());
  console.log();
  console.log(course1.toString());
  console.log();
  console.log(course2.toString());
  console.log();
  console.log(student1.toString());
  console.log();
  console.log(student2.toString());
  console.log();
  console.log(professor1.toString());
  console.log();
  console.log(professor2.toString());
  console.log();
  // Printing all students in the university
  console.log("Students in the University:");
  myUniversity.students.forEach((student) => {
    console.log(student.toString());
  });
  console.log();
  // Printing all professors in the university
  console.log("Professors in the University:");
  myUniversity.professors.forEach((professor) => {
    console.log(professor.toString());
  });
  console.log();
  // Printing all departments in the university
  console.log("Departments in the University:");
  myUniversity.departments.forEach((department) => {
    console.log(department.toString());
  });
};
main();
