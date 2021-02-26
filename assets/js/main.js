alert("Benvenuto nel generatore di Password automatico");

var nome = prompt ("Come ti chiami?");

document.getElementById('saluto') .innerHTML = "Ciao " + nome;

var cognome = prompt ("Qual è il tuo cognome?");

document.getElementById('cognome') .innerHTML = "Il tuo cognome è " + cognome;

var colore = prompt ("il tuo colore preferito?");

document.getElementById('colore') .innerHTML = "Il tuo colore preferito è " + colore;

var password = nome + cognome + colore + "21";

document.getElementById('password') .innerHTML = "Ecco la tua sicurissima password: " + password;
