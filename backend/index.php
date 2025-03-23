<?php

$allowedOrigins = [
    'http://localhost:5173',
    'https://rh-development.co.uk',
    'https://www.rh-development.co.uk',
];

// Get the current origin
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Check if the origin is allowed
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");
} else {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Origin not allowed']);
    exit;
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit;
    }
}

// Load PHPMailer
require_once 'vendor/PHPMailer/src/Exception.php';
require_once 'vendor/PHPMailer/src/PHPMailer.php';
require_once 'vendor/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Configure email
try {
    // Create new PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->SMTPDebug = 0;                      // Set to 2 for debugging
    $mail->isSMTP();
    $mail->Host       = '';
    $mail->SMTPAuth   = true;
    $mail->Username   = '';
    $mail->Password   = 'You wont find a password here';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('website@rh-development.co.uk', 'RH Development Website');
    $mail->addAddress('info@rh-development.co.uk');
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Website Contact: ' . $data['subject'];

    // Email body
    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$data['name']}</p>
    <p><strong>Email:</strong> {$data['email']}</p>
    <p><strong>Subject:</strong> {$data['subject']}</p>
    <p><strong>Message:</strong></p>
    <div>" . nl2br(htmlspecialchars($data['message'])) . "</div>
    ";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace('<br>', "\n", $body));

    // Send email
    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message has been sent']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Message could not be sent. Error: {$mail->ErrorInfo}"]);
}
