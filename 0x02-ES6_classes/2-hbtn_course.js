export default class HolbertonCourse {
  constructor(name, length, students) {
    this._verifyType('name', name, String),
    this._verifyType('length', length, 'number');
    this._verifyType('students', students, Array);
    this._verifyArrayMembers(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  _verifyType(attribute, value, expectedType) {
    if (typeof value !== expectedType) {
      throw new TypeError(`${attribute} must be a ${expectedType}`);
    }
  }

  _verifyArrayMembers(array) {
    for (const student of array) {
      this._verifyType('student', student, 'string');
    }
  }

  get name() { return this._name; }

  set name(name) {
    this._verifyType('name', name, 'string');
    this._name = name;
  }

  get length() { return this._length; }

  set length(length) {
    this._verifyType('length', length, 'number');
    this._length = length;
  }

  get students() { return this._students; }

  set students(students) {
    this._verifyType('students', students, Array);
    this._students = students;
  }
}
