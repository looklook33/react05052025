import { StudentFn, StudentClass, StudentType } from "../Student";
import { StudentsListClass, StudentsListFn } from "../StudentsList";
import UrgentTasks from "../UrgentTasks";

export default function Day11Notes() {
  
  const student: StudentType = {
    id: 1,
    name: "John",
    age: 20,
    grade: "A",
  };

  const students: StudentType[] = [
    { id: 1, name: "John", age: 20, grade: "A" },
    { id: 2, name: "Jane", age: 21, grade: "B" },
    { id: 3, name: "Jack", age: 22, grade: "C" },
  ];

  const exampleTasks: TaskType[] = [
    { id: 1, name: "Take out the trash", priority: "normal" },
    { id: 2, name: "Prepare project presentation", priority: "urgent" },
    { id: 3, name: "Book flight tickets", priority: "urgent" },
    { id: 4, name: "Water the plants", priority: "normal" },
    { id: 5, name: "Complete React tutorial", priority: "urgent" },
  ];

  return (
    <div>
      <h1>Day 11 Notes</h1>
      {/* This is your play around code */}
      <h2>Function Component</h2>
      <StudentFn student={student} />
      <h2>Class Component</h2>
      <StudentClass student={student} />
      <h2>Students List Array</h2>
      <StudentsListFn students={students} />
      <h2>Students List Class</h2>
      <StudentsListClass students={students} />
      <h2>UrgentTasks list</h2>
      <UrgentTasks tasks={exampleTasks} />
    </div>
  );
}
