const array = [
	12,
	45,
	6,
	100,
];

const objPerson = {
	annoNascita: 1990,
	nome: 'Pinco',
	'cognome-utente': 'Pallino',
}


//objPerson = 'qualcosa'; // NON OK se uso il const
objPerson.annoNascita = 2000; // OK anche con const


const obj = {};
obj.prop1 = 19;
obj.prop2 = 'qualcosa';


for (let chiave in objPerson) {
	console.log(`La proprieta\' ${chiave} vale ${objPerson[chiave]}`);
}

const arrDiArr = [
	['ciao', 'a', 'tutti'],
	[0, 5, 10],
];

const arrPeople = [
	{
		name: 'Pinco',
		age: 25,
	},
	{
		name: 'Rossi',
		age: 20,
	},
	{
		name: 'Pippo',
		age: 30,
	}
]


// non ha molto senso per questa applicazione e' meglio l'array di oggetti
const objPeople = {
	person1: {
		name: 'Pinco',
		age: 25,
	},
	person2: {
		name: 'Rossi',
		age: 20,
	},
	person3: {
		name: 'Pippo',
		age: 30,
	}
}


const objEmployee = {
	name: 'Pinco',
	occupation: {
		title: 'Mechanics',
		level: 5,
		yearsExperience: 7
	}
}