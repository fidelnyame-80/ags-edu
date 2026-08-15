<?php
/**
 * Generic mail handler for the Accra Grammar School React site.
 * Accepts any website form via POST and emails the submission to the school office.
 */

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$to = 'admin@agsedu.org';

// Sanitize every posted value: trim and strip CRLF to prevent header injection.
$fields = [];
foreach ($_POST as $key => $value) {
    $fields[$key] = preg_replace('/[\r\n]+/', '', trim((string) $value));
}

$filled = array_filter($fields, fn($value) => $value !== '');
if (count($filled) === 0) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in the form before submitting.']);
    exit;
}

// Pick the sender address when the form provides one (contacts/enquiry vs application forms).
$senderEmail = $fields['email'] ?? $fields['parentEmail'] ?? '';
if ($senderEmail !== '' && !filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

$subject = isset($fields['subject']) && $fields['subject'] !== ''
    ? $fields['subject']
    : 'New message from the AGS website';

$body = '';
foreach ($fields as $key => $value) {
    if ($key === 'subject' || $value === '') {
        continue;
    }
    $label = ucfirst((string) preg_replace('/([a-z])([A-Z])/', '$1 $2', $key));
    $body .= "$label: $value\n";
}

if ($senderEmail !== '') {
    $headers = "From: $senderEmail\r\n"
        . "Reply-To: $senderEmail\r\n"
        . "MIME-Version: 1.0\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";
} else {
    $headers = "MIME-Version: 1.0\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";
}

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'The message could not be sent. Please try again, or email admin@agsedu.org directly.']);
}