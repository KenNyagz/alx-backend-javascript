/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }  

  export class React extends Subject{
    teacher: Teacher;
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }

  }
}

export { Subjects };
