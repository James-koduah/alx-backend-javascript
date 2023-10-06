interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const james: Student = {
	firstName: 'James',
	lastName: 'Koduah',
	age: 10000,
	location: 'moon',
}
const john: Student = {
	firstName: 'John',
        lastName: 'Koduah',
        age: 10000,
        location: 'moon',
}

const studentsList = [james, john]


const table = document.createElement('table')
for (const item of studentsList){
	const row = document.createElement('tr')
	const cell1 = document.createElement('td')
	const cell2 = document.createElement('td')
	cell1.textContent = item.firstName
	cell2.textContent = item.location
	row.appendChild(cell1)
	row.appendChild(cell2)
	table.appendChild(row)
}
document.body.appendChild(table)
