<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
$config = require __DIR__ . '/.env.php';

/* ================== CORS ================== */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit;
}

/* ================== INPUT ================== */
$json = file_get_contents('php://input');
$params = json_decode($json);

if (!$params || !isset($params->email, $params->name, $params->message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON data'
    ]);
    exit;
}

$email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
$name = htmlspecialchars($params->name, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($params->message, ENT_QUOTES, 'UTF-8');

/* ================== MAIL ================== */
try {
    $mail = new PHPMailer(true);

    // SMTP (all-inkl)
    $mail->isSMTP();
    $mail->Host = 'w021202d.kasserver.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@zeljko-alakovic.de';
   $mail->Password = $config['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Headers
    $mail->setFrom('contact@zeljko-alakovic.de', 'Zeljko Alakovic');
    $mail->addReplyTo($email);
    $mail->addAddress('zeljkoalakovic997@outlook.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New message from zeljko-alakovic.de";

    $mail->Body = "Hello Zeljko,<br><br>
    You have received a new message from the contact form on your website.<br><br>
    <strong>Name:</strong> {$name}<br>
    <strong>Email:</strong> {$email}<br><br>
    <strong>Message:</strong><br>
    {$message}<br><br>
    --<br>
    Contact Form<br>
    zeljko-alakovic.de
    ";


    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Mail sent'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Mailer error: ' . $mail->ErrorInfo
    ]);
}
