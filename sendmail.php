<?php
// Enable error reporting for debugging
/*error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check if the fields are filled
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Not all fields were filled out or email is invalid
        echo "Please fill in all fields and provide a valid email address.";
        exit;
    }

    // Recipient email address
    $recipient = "rishikaranjay19@gmail.com"; // REPLACE with your email address

    // Email subject
    $subject = "New contact form submission from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request
    echo "Please submit the form to send a message.";
}*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'C:\Users\shume\Downloads\html5up-strata 8.2\html5up-strata 8\html5up-strata\PHPMailer\src\Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true); // Passing `true` enables exceptions

try {
    // Server settings
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'shumel.khan08@gmail.com';           // SMTP username
    $mail->Password = 'obmq neif kaua vmmo';                    // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` is also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    // Recipients
    $mail->setFrom('shumel.khan08@gmail.com', 'Shumel Portfolio');
    $mail->addAddress('shumel.khan08@gmail.com', 'Shumel Portfolio');      // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New message from your website';
    $userMessage = isset($_POST['message']) ? $_POST['message'] : 'No message provided';
    $mail->Body    = $userMessage;
    $mail->AltBody = strip_tags($userMessage);
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. PHPMailer Error: ', $mail->ErrorInfo;
}
?>
