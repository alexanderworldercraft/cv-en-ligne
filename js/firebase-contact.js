// Initialisez Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyC3VFXthNOG1O3h19AuIi7uZ3oTZdQI0gQ",
    authDomain: "curriculum-vita-tarroz-patrick.firebaseapp.com",
    projectId: "curriculum-vita-tarroz-patrick",
    storageBucket: "curriculum-vita-tarroz-patrick.appspot.com",
    messagingSenderId: "526705184095",
    appId: "1:526705184095:web:0e01008a150866b7497aea",
    measurementId: "G-17HVHBXJ2H"
  };
firebase.initializeApp(firebaseConfig);

//Capturez les données du formulaire et envoyez-les à Firebase
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('envoyer-button').addEventListener('click', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupère les valeurs du formulaire
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var commentaire = document.getElementById('commentaire').value;

        // Envoie les données à Firebase
        firebase.database().ref('contacts').push({
            nom: nom,
            prenom: prenom,
            tel: tel,
            email: email,
            commentaire: commentaire
        }).then(() => {
            // Affiche un message de succès
            document.getElementById('dialog').style.display = 'block';
            document.getElementById('dialog').innerText = 'Message envoyé avec succès !';
        }).catch((error) => {
            // Affiche un message d'erreur
            document.getElementById('dialog').style.display = 'block';
            document.getElementById('dialog').innerText = 'Erreur : ' + error;
        });
    });
});
