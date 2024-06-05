var student1 = {
    firstName: "Jane",
    lastName: "Meyers",
    age: 21,
    location: "Nairobi"
};
var student2 = {
    firstName: 'John',
    lastName: 'Kangethe',
    age: 20,
    location: 'Nakuru'
};
var studentsList = [student1, student2];
document.addEventListener('DOMContentLoaded', function () {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
});
