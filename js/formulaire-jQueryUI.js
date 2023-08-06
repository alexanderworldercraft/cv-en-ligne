$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();

        $.ajax({
            url: "mail_handler.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(data) {
                $("#dialog").html("Votre message a été envoyé avec succès !");
                $("#dialog").dialog();
            },
            error: function() {
                $("#dialog").html("Une erreur s'est produite, veuillez réessayer. lol");
                $("#dialog").dialog();
            }
        });
    });
});