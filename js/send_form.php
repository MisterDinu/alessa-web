<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
// Importar clases de PHPMailer
require 'vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER["REQUEST_METHOD"] === "POST"){

    // DATOS DEL FORMULARIO
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'centroalessa@gmail.com';                     //SMTP username
        $mail->Password   = 'yugewyztwxtorfwm';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($email, $nombre);
        $mail->addAddress('centroalessa@gmail.com');     //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Pagina Alessa: '. $email;
        $mail->Body    = 'Mensaje de: '. $nombre. '<br>' . $mensaje; 

        $mail->send();

        echo '<script>window.location.href = "../exito.html";</script>';
        exit();

        } catch (Exception $e) {
        // Manejar errores en el envío del correo
        echo "Error al enviar el formulario. Detalles: {$mail->ErrorInfo}";
    }
} else {
    // Si alguien intenta acceder directamente al script PHP, devolvemos un error.
    http_response_code(403);
    echo "Acceso prohibido";
}

?>

