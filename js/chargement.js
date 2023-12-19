window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';

    // Commencez à charger les images
    loadLazyImages();
    loadCss();
    loadScript();
});

// Chargement des images après le chargement principal
function loadLazyImages() {
    // Sélectionnez toutes les images ayant un attribut "data-src"
    var images = document.querySelectorAll('img[data-src]');

    images.forEach(function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            // Supprimez l'attribut "data-src" une fois l'image chargée
            img.removeAttribute('data-src');
        };
    });
}

// Chargement des feuille de style secondaire après le chargement principal
function loadCss() {
    var stylesheets = [
        // Bibliothèque RemixIcon
        'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css',
        // Bibliothèque icon réseaux sociaux
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        //bibliothèque lightbox (image)
        'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css',
        // cardteam
        '../css/cardteam.css',
    ];

    stylesheets.forEach(function(stylesheet) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = stylesheet;
        document.head.appendChild(link);
    })
}

// Chargement des script secondaire après le chargement principal
function loadScript() {
    var javascript = [
        // cardteam
        '../js/cardteam.js',
        // Bibliothèque lightbox
        'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js',
        // Bibliothèque jQueryUI
        'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
    ];

    javascript.forEach(function(javascript) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = javascript;
        document.head.appendChild(script);
    })
}