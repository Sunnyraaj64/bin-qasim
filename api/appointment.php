<?php
/**
 * Appointment form endpoint. Expects POST: name, email, phone, service, message.
 */

require_once __DIR__ . '/send-mail.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name = isset($_POST['name']) ? sanitize($_POST['name'], 200) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize($_POST['phone'], 50) : '';
$service = isset($_POST['service']) ? sanitize($_POST['service'], 100) : '';
$message = isset($_POST['message']) ? sanitize($_POST['message'], 2000) : '';

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    jsonResponse(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

if (!validateEmail($email)) {
    jsonResponse(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$subject = 'Appointment Request from ' . $name;
$bodyHtml = '<h2>Appointment Request</h2>';
$bodyHtml .= '<p><strong>Name:</strong> ' . $name . '</p>';
$bodyHtml .= '<p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>';
$bodyHtml .= '<p><strong>Phone:</strong> ' . $phone . '</p>';
$bodyHtml .= '<p><strong>Service:</strong> ' . $service . '</p>';
$bodyHtml .= '<p><strong>Message:</strong></p><p>' . nl2br($message) . '</p>';

$bodyText = "Appointment Request\n\nName: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message";

$result = sendFormMail($subject, $bodyHtml, $bodyText);
jsonResponse($result);
