var menu = menu.create({
    menuElement: document.querySelector( '.menu' ),
    contentsElement: document.querySelector( '.contents' ),
    // [optional] alignement du menu (top/right/bottom/left)
    position: menu.getQuery().p || 'top',
    // [optional] hauteur du menu (pour la position top ou bottom)
    height: 250,
    // [optional] largeur du menu (pour la position left ou right)
    width: 260,
    // [optional] distance de déclenchement du menu par rapport au menu
    threshold: 100,
    // [optional] utilisation des mouvement de la souris pour l'ouverture ou la fermeture
    mouse: true,
    // [optional] utilisation de l'approche
    touch: true
});