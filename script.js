

/* Diaporama */


// Variables globales
let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth

window.onload = () => {
    // On récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")

    // On récupère le conteneur de tous les éléments
    elements = document.querySelector(".elements")

    // On récupère un tableau contenant la liste des diapos
    slides = Array.from(elements.children)

    // On calcule la largeur visible du diaporama
    slideWidth = diapo.getBoundingClientRect().width

    // Automatiser le diaporama
    timer = setInterval(slideNext, 4500)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext() {
    // On incrémente le compteur
    compteur++
    // Si on dépasse la fin du diaporama, on "rembobine"
    if (compteur == slides.length) {
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev() {
    // On décrémente le compteur
    compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if (compteur < 0) {
        compteur = slides.length - 1
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/**
 * On stoppe le défilement
 */
function stopTimer() {
    clearInterval(timer)
}

/**
 * On redémarre le défilement
 */
function startTimer() {
    timer = setInterval(slideNext, 3500)
}


/* Password */


    function checkPassword() {
        var password = document.getElementById("password").value;
        if (password === "SaintELOI") {
            window.location.href = "back.html";
        } else {
            alert("Mot de passe incorrect. Veuillez réessayer.");
        }
    }


/*Message index.html*/


    function envoyerMessage() {
        // Récupérer la valeur de la zone de texte
        var message = document.getElementById("message").value;
        console.log("Message à envoyer : " + message);
        
        // Rediriger vers index.html en passant la valeur du message en paramètre de l'URL
        window.location.href = "index.html?message=" + encodeURIComponent(message);
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var message = decodeURIComponent(window.location.search.replace("?message=", ""));
        console.log("Message reçu : " + message);
        document.getElementById("message").innerHTML = message;
      });