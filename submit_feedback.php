<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Save feedback to a file or send via email
    $file = fopen("feedback.txt", "a");
    fwrite($file, "Name: $name\nEmail: $email\nMessage: $message\n\n");
    fclose($file);

    // Redirect to a thank you page or show a success message
    echo "<h1>Thank you for your feedback!</h1>";
}
?>
