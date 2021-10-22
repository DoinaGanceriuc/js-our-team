/* 
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica:
     name, 
     role,
     image
- Per le immagini potete mettere il percorso di un immagine presa da internet, provate con lorem pixum (https://picsum.photos/images)

- Stampare in console tutti gli elementi del team e le loro proprieta.
*/

/* strumenti
-array/object
-for/for in
-console
*/


// array di oggetti
const team = [
    {
        name: "Filippo",
        role: "student",
        image: "https://picsum.photos/images"
    },

    {
        name: "Angela",
        role: "director",
        image: "https://picsum.photos/images"
    },
    {
        name: "Marco",
        role: "CEO",
        image: "https://picsum.photos/images"
    },
    {
        name: "Francesca",
        role: "CFO",
        image: "https://picsum.photos/images"
    },
    {
        name: "Sara",
        role: "CMO",
        image: "https://picsum.photos/images"
    },
    {
        name: "Federico",
        role: "CTO",
        image: "https://picsum.photos/images"
    },
    {
        name: "Mario",
        role: "president",
        image: "https://picsum.photos/images"
    }

]
console.log(team);

// ciclo for per iterare gli elementi (oggetti) dell'array
for (let i = 0; i < team.length; i++) {
    const singleElement = team[i];
    console.log(singleElement);


    // ciclo for in per iterare gli elementi nell'oggetto
    for (key in singleElement) {
        /* console.log(key); */
        console.log(key +":", singleElement[key]);

    }

}