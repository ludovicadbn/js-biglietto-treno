// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// BONUS:
// Stilizzare graficamente l'esercizio con css o framework

const km = prompt("Quanti chilometri vuoi percorrere?")
const userAge = prompt("Inserisci la tua età")
let kmPrice = 0.21 * km

if (userAge < 18) {
  kmPrice -= (kmPrice * 0.2);
  console.log(kmPrice);
} else if (userAge >= 65) {
  kmPrice -= (kmPrice * 0.4);
} else { 
  kmPrice;
}

document.getElementById("container").innerHTML = kmPrice.toFixed(2);