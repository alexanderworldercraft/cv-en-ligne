var lang = navigator.language.split('-')[0]; // Définir `lang` globalement
// ...

$(document).ready(function() {
    // ...
    const translation = translations[lang] || translations['en'];
    // ...
})


// Redimensionner les textes
$(document).ready(function() {
    // Ajoute un gestionnaire d'événements pour exécuter une fonction quand un bouton dans un élément avec la classe group-test est cliqué.
    $(".group-test button").click(function(){
        // Stocke la référence au bouton cliqué
        var clickedButton = this;

        // Pour chaque élément avec la classe redimensionner, exécute la fonction suivante.
        $(".redimensionner").each(function() {
            // Crée une variable texte qui fait référence à l'élément actuel.
            var texte = $(this);
            // Récupère la taille de la police actuelle de cet élément et la stocke dans taille.
            var taille = texte.css('fontSize');
            // Convertit la taille de la police en un nombre flottant (en ignorant l'unité comme px ou em), et le stocke dans nombre.
            var nombre = parseFloat(taille, 10);
            // Extrait les deux derniers caractères de la chaîne taille (qui devraient être l'unité comme px ou em) et les stocke dans unite.
            var unite = taille.slice(-2);

            // Vérifie si l'ID du bouton cliqué est 'plus'.
            if(clickedButton.id == 'plus'){
                // Si oui, augmente la taille de la police de 10% (multiplie nombre par 1.1).
                nombre *= 1.1;
            }
            // Sinon, vérifie si l'ID du bouton cliqué est 'moins'.
            else if(clickedButton.id == 'moins') {
                // Si oui, diminue la taille de la police de 10% (divise nombre par 1.1).
                nombre /= 1.1;
            }
            // Applique la nouvelle taille de police à l'élément actuel.
            texte.css("fontSize", nombre + unite);
        });
    })
})

// menu dropdown (accordéon)
$(document).ready(function() {
    // Cache tous les classe .competences qui se trouvent à l'intérieur d'un élément avec la classe .col, lui-même à l'intérieur d'un élément avec l'id #competences.
    $("#competences .col .competences").hide();
    // Ajoute un gestionnaire d'événements pour réagir aux clics sur les classes .badge-competence à l'intérieur de .col qui est à l'intérieur de #competences.
    $("#competences .col .badge-competence").on("click", function(){
        // Sélectionne la classe .competences qui suit immédiatement la classe .badge-competence cliqué, mais seulement s'il a l'id #competences.
        $(this).next("#competences .competences")
        // .slideToggle('slow'): Fait apparaître ou disparaître avec un effet de glissement de classe .competences sélectionné ci-dessus, le tout lentement.
        .slideToggle('slow')
        // .siblings("#competences .competences:visible"): Sélectionne tous les autres classe .competences visibles avec l'id #competences qui sont les frères et sœurs de la classe .competences concerné.
        .siblings("#competences .competences:visible")
        // .slideUp("slow");: Fait remonter et disparaître les classes .competences sélectionnés par la ligne précédente avec un effet lent.
        .slideUp("slow");
        // $(this).toggleClass("active");: Bascule la classe active sur la classe .badge-competence qui a été cliqué.
        $(this).toggleClass("active");
        // $(this).siblings("#competences .badge-competence").removeClass("active");: Enlève la classe active de tous les autres classe .badge-competence frères et sœurs de l'élément cliqué.
        $(this).siblings("#competences .badge-competence").removeClass("active");
    });
})

// Affiche un paragraphe caché
$(document).ready(function() {
    var paragraphe2 = $('#a_propos p:eq(1)');
    var showMoreText = translations[lang].showMore; // Remplacez 'langueActuelle' par la variable de votre choix
    var hideMoreText = translations[lang].hideMore;

    paragraphe2.hide();
    $("#a_propos a.suite").on("click", function(){
        if (paragraphe2.is(":hidden")){
            paragraphe2.show("slow");
            $(this).text(hideMoreText);
        } else {
            paragraphe2.hide("slow");
            $(this).text(showMoreText);
            return false;
        }
    });
})