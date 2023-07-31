<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $commentaire = $_POST['commentaire'];
    
    $to = 'alexanderworldercraft+contact_dev_test@gmail.com'; // Remplacez par votre adresse email
    $subject = 'Nouveau message de '.$nom.' '.$prenom 'Dev_Contact_test';
    $message = "De: ".$nom." ".$prenom."\n"."E-mail : ".$email."\n"."Message : ".$commentaire;
    $headers = "From: ".$email;
    
    if(mail($to, $subject, $message, $headers)){
        echo "<h1>Message envoyé avec succès! Merci, nous vous contacterons bientôt.</h1>";
    }
    else{
        echo "Quelque chose s'est mal passé!";
    }
}
?>