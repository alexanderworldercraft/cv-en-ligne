<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Utilisation de la fonction filter_input pour nettoyer et valider les données
    $nom = filter_input(INPUT_POST, 'nom', FILTER_SANITIZE_STRING);
    $prenom = filter_input(INPUT_POST, 'prenom', FILTER_SANITIZE_STRING);
    $tel = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $commentaire = filter_input(INPUT_POST, 'commentaire', FILTER_SANITIZE_STRING);
    
    $to = 'alexanderworldercraft+contact_dev_test@gmail.com'; // Mettre votre adresse email
    $subject = 'Nouveau message de '.$nom.' '.$prenom.' Dev_Contact_test'; // Correction ici
    $message = "De: ".$nom." ".$prenom."\n"."Tél : ".$tel."\n"."E-mail : ".$email."\n"."Message : ".$commentaire;
    $headers = "From: ".$email;
    
    if ($email && mail($to, $subject, $message, $headers)) { // Vérification de l'email
        echo "<h1>Message envoyé avec succès! Merci, nous vous contacterons bientôt.</h1>";
    } else {
        echo "Quelque chose s'est mal passé!";
    }
}
?>
