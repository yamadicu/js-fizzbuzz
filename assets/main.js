// Consegna:

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


const div = document.querySelector("div.contenuto");

for ( let i = 1; i <= 100; i++ ){

    if ( i % 5 == 0 && i % 3 == 0){
        div.innerHTML +=  ` <div class = "list-group-item p-3 m-2 bg-dark text-light" >FrizzBuzz</div> `
    }
    else if ( i % 3 == 0 ){
        div.innerHTML +=  ` <div class = "list-group-item p-3 m-2 bg-warning" >Frizz</div> `
    }
    else if ( i % 5 == 0 ){
        div.innerHTML +=  ` <div class = "list-group-item p-3 m-2 bg-primary" >Buzz</div> `
    }
    else{
        div.innerHTML +=  ` <div class = "list-group-item p-3 m-2 bg-success">${i}</div> ` 
    }

}