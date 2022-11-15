/* Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).Ricordiamoci:

     di inizializzare la variabile di contatore prima dell’inizio del ciclo while
     di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
    di partire sempre semplici prima con i log e poi passiamo all’output in pagina
    sta mano po esse fero e po esse piuma 

Bonus;

    l’utente può inserire al volo elementi alla lista. */

    let lista = ['mela', 'banana', 'sale', 'pepe'];
    let counter = 0 ;

   /*  for (let i = 0; i < lista.length; i++) {
        
       let listItem = lista[i] ;
       
        alert(listItem);
        
        
        
    }

    alert(lista); */


    while (counter < lista.length){

        let listItem = lista[counter] ;
       
        alert(listItem);

        counter++



    }

    alert(lista);
