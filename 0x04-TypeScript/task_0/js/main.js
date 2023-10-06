var james = {
    firstName: 'James',
    lastName: 'Koduah',
    age: 10000,
    location: 'moon'
};
var john = {
    firstName: 'John',
    lastName: 'Koduah',
    age: 10000,
    location: 'moon'
};
var studentsList = [james, john];
var table = document.createElement('table');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var item = studentsList_1[_i];
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    cell1.textContent = item.firstName;
    cell2.textContent = item.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}
document.body.appendChild(table);
