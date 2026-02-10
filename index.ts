type Student = {
  id: number;
  name: string;
  age: number;
  grades: number[];
  hobby?: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Wladyis",
    age: 17,
    grades: [95, 100, 91],
    hobby: "drums",
  }, {
    id: 2,
    name: "Frayzzy",
    age: 16,
    grades: [87, 92, 89],
    hobby: "guitar",
  }, {
    id: 3,
    name: "Joise",
    age: 15,
    grades: [87, 97, 81],
    hobby: "cobe",
  }, {
    id: 4,
    name: "StaXeR",
    age: 15,
    grades: [91, 96, 81],
    hobby: "cs2",
  }, {
    id: 5,
    name: "MaxWell",
    age: 17,
    grades: [91, 86, 97],
    hobby: "music",
  },
];

function addStudent(newStudent: Student): void {
  const studentAlreadyExists = students.some(
    (student) => student.id === newStudent.id
  );

  if (studentAlreadyExists) {
    console.log("This id is already added");
    return;
  }

  students.push(newStudent);
  console.log("Add student", newStudent);
}

function findTopStudent(studentList: Student[]): Student {
  let topStudent: Student = studentList[0];

  studentList.forEach((currentStudent) => {
    const currentAverage =
      currentStudent.grades.reduce(
        (sum, grade) => sum + grade,
        0
      ) / currentStudent.grades.length;

    const topAverage =
      topStudent.grades.reduce(
        (sum, grade) => sum + grade,
        0
      ) / topStudent.grades.length;

    if (currentAverage > topAverage) {
      topStudent = currentStudent;
    }
  });

  return topStudent;
}

function updateStudentHobby(
  studentId: number,
  newHobby: string
): void {
  const foundStudent = students.find(
    (student) => student.id === studentId
  );

  if (!foundStudent) {
    console.log("Student is not definded");
    return;
  }

  foundStudent.hobby = newHobby;
  console.log("Update Joise hobby", foundStudent);
}

console.log("Ferst list:");
console.log(students);

addStudent({
  id: 6,
  name: "SilvaKun",
  age: 18,
  grades: [93, 96, 100],
  hobby: "japanese",
});

addStudent({
  id: 1,
  name: "Meow",
  age: 20,
  grades: [45, 63, 36],
});

const topStudent = findTopStudent(students);
console.log("Top student", topStudent);
updateStudentHobby(3, "cs2");

updateStudentHobby(999, "nothing");

console.log("Last list:");
console.log(students);
