let resultat = "";
let calcul = "";
const nombres = document.getElementsByClassName("nombre")
const operateurs = document.getElementsByClassName("operateur")

// bouton pout ajouter un nombre
for (let i = 0; i < nombres.length; i++) {
    nombres[i].addEventListener("click", function () {
        if (resultat > 0 && isNaN(calcul.charAt(calcul.length - 1)) === false) {
        }
        else{
            calcul += nombres[i].textContent;
            document.getElementById("calcul").innerHTML = calcul;
        }
    });
}


// bouton pour ajouter un point
document.getElementById("point").addEventListener("click", function () {
    let dernierChar = calcul.charAt(calcul.length - 1)
    if (isNaN(dernierChar) == false || dernierChar != ".")
        calcul += point.textContent;
    document.getElementById("calcul").innerHTML = calcul;
});


//Boucle pour récuperer la valeur des operateurs
for (let i = 0; i < operateurs.length; i++) {
    operateurs[i].addEventListener("click", function () {
        let dernierChar = calcul.charAt(calcul.length - 1)
        if (isNaN(dernierChar) == false) {
            calcul += operateurs[i].textContent;
            document.getElementById("calcul").innerHTML = calcul;
        }
    });
}


// bouton reset remet tout à zero
document.getElementById("reset").addEventListener("click", function () {
    calcul = "";
    resultat = "";
    document.getElementById("calcul").innerHTML = calcul;
    document.getElementById("resultat").innerHTML = resultat;
});


// bouton pour effacer le derniere entree
document.getElementById("effacer").addEventListener("click", function () {
    calcul = calcul.slice(0, -1)
    document.getElementById("calcul").innerHTML = calcul;
});


// bouton envoyer pour effectuer le calcul
document.getElementById("entrer").addEventListener("click", function () {
    let memoire = "";
    if (resultat != "") {
        memoire = parseFloat(resultat);
    }
    resultat = eval(memoire + calcul);
    document.getElementById("resultat").innerHTML = resultat;
    calcul = "";
});

