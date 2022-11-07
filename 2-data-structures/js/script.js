/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
Consigli del giorno
- Scriviamo sempre prima in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funzion
a allora andiamo avanti.
*/

const objStudent = {
	name: 'Pinco',
	lastName: 'Pallino',
	age: 30,
};

for (let chiave in objStudent) {
	console.log(`${chiave}: ${objStudent[chiave]}`);
}

const arrStudents = [
	{
		name: 'Pinco',
		lastName: 'Pallino',
		age: 30,
	},
	{
		name: 'Mario',
		lastName: 'Rossi',
		age: 31,
	},
	{
		name: 'Pippo',
		lastName: 'Bianchi',
		age: 29,
	},
];

console.table(arrStudents);

for (let i = 0; i < arrStudents.length; i++) {
	console.log(`Studente numero ${i}: ${arrStudents[i].name.lastName} ${arrStudents[i].lastName}`);
}