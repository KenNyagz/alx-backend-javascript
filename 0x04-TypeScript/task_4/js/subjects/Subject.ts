/// <reference path="Teacher.ts" />

export namespace Subjects{
  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
