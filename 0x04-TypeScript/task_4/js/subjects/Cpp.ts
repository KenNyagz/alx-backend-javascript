/// <reference path="Subject.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    teacher: Teacher;
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }

  }
}

export { Subjects };
