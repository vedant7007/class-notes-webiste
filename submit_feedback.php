<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // You can store this data in a database or send it via email
    // For now, let's just send it to an email address

    $to = "vedantidlgave16@gmail.com"; // Replace with your email
    $subject = "New Feedback from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Try to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your feedback, $name!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // If the form wasn't submitted via POST
    echo "Invalid request method.";
}
?>
