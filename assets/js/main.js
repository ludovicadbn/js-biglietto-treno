// funzione per hamburger menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
} 

// costo biglietto
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

document.getElementById("km").innerHTML = km;
document.getElementById("eta").innerHTML = userAge;
document.getElementById("price").innerHTML = kmPrice.toFixed(2);