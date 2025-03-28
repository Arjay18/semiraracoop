<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = "Semco_semirara@yahoo.com";

    // Email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";

    // Send email
    $success = mail($to, $subject, $email_content, $headers);

    // Send response back to ajax call
    $response = array();
    if ($success) {
        $response['status'] = 'success';
        $response['message'] = 'Thank you for your message. We will get back to you soon!';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Sorry, there was an error sending your message. Please try again later.';
    }

    echo json_encode($response);
    exit;
}
?>