interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "Jane",
  lastName: "Meyers",
  age: 21,
  location: "Nairobi"
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Kangethe',
  age: 20,
  location: 'Nakuru'
};

const studentsList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
});
