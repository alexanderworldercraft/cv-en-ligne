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

// Référence à Firestore
const db = firebase.firestore();

// Écouteur d'événement pour le bouton d'envoi
document.getElementById('envoyer-button').addEventListener('click', function(event) {
  event.preventDefault();

  // Récupération des valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const tel = document.getElementById('tel').value;
  const email = document.getElementById('email').value;
  const commentaire = document.getElementById('commentaire').value;

  // Ajout des données à Firestore
  db.collection('contacts').add({
    nom: nom,
    prenom: prenom,
    tel: tel,
    email: email,
    commentaire: commentaire
  })
  .then((docRef) => {
    console.log("Document écrit avec l'ID : ", docRef.id);

    // Affichage du message de succès
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'block';
    dialog.innerHTML = 'Votre message a été envoyé avec succès !';
    dialog.title = 'Succès';
  })
  .catch((error) => {
    console.error("Erreur en ajoutant le document : ", error);
    
    // Affichage du message d'erreur
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'block';
    dialog.innerHTML = 'Une erreur est survenue. Veuillez réessayer.';
    dialog.title = 'Erreur';
  });
});

