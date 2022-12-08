// on recup les boutons et on les stocke dans une variable //

let button_one=document.getElementById("alert");
let button_two=document.getElementById("somme");


// Ici le  bouton d'id  alert affiche quand on clique une alerte avec le texte hello world via fonction fléchée
button_one.addEventListener('click',()=>alert("hello world"));

//Ici le bouton d'id somme affiche la somme de 5+6 au clic sur le bouton via une fonction fléchée dans une div crée dans le fichier htùm//


button_two.addEventListener("click", () => {
    let new_div = document.createElement('div');
    document.body.appendChild(new_div);
    new_div.style.fontSize = '3rem';
    new_div.innerHTML="le résultat est " +  (5+6);
})