interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Director extends Teacher{
  numberOfReports: number;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'Casablanca',
  contract: true,
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string) {
  return firstName[0] + '. ' +  lastName;
}

class StudentClass implements StudentInterface {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework (): string {
    return 'Currently working';
  }

  displayName (): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Wangombe');
console.log(student.workOnHomework());
console.log(student.displayName());
