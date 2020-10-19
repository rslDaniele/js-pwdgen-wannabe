// chiedere all'utente i suoi dati
var nome = prompt("Dimmi il tuo nome al volissimo")
var cognome = prompt("Movite dimmi il cognome pure")
var colore = prompt("Non c'ho tempo dimmi il colore preferito dai")
var numero;
var password;
console.log(nome,cognome,colore)

numero = [19]
password = nome+cognome+colore+numero;
console.log("L'output sarà", password);

// Stampa del risultato
document.getElementById('titolo').innerHTML = "Ti prego non usare questa password " + password
