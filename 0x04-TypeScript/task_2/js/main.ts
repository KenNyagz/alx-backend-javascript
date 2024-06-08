interface DirectorInterface {
  workFromHome(): string,
  getToWork(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

const Subjects: "Math" | "History" = "Math";

class Director implements DirectorInterface{
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to drector tasks';
  }

}


class Teacher implements TeacherInterface{
  workFromHome(): string {
    return 'Cannot work from home';
  } 

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }

}

function createEmployee(salary: number | string) : Director | Teacher {
  if (typeof salary === "number" && salary < 500){
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher ): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) :void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function teachClass(todayClass: "Math" | "History"): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }


}

//console.log(createEmployee(200));
//console.log(createEmployee(1000));
//console.log(createEmployee('$500'));

//executeWork(createEmployee(200));
//executeWork(createEmployee(1000));

console.log(teachClass('Math'));
console.log(teachClass('History'));
