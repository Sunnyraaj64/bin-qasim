<?php
/**
 * Contact form endpoint. Expects POST: name, email, message.
 */

require_once __DIR__ . '/send-mail.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name = isset($_POST['name']) ? sanitize($_POST['name'], 200) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitize($_POST['message'], 2000) : '';

if ($name === '' || $email === '' || $message === '') {
    jsonResponse(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

if (!validateEmail($email)) {
    jsonResponse(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$subject = 'Contact Form: ' . $name;
$bodyHtml = '<h2>Contact Form Submission</h2>';
$bodyHtml .= '<p><strong>Name:</strong> ' . $name . '</p>';
$bodyHtml .= '<p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>';
$bodyHtml .= '<p><strong>Message:</strong></p><p>' . nl2br($message) . '</p>';

$bodyText = "Contact Form\n\nName: $name\nEmail: $email\n\nMessage:\n$message";

$result = sendFormMail($subject, $bodyHtml, $bodyText);
jsonResponse($result);
