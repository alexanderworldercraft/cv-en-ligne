window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';

    // Commencez à charger les images
    loadLazyImages();
});

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
