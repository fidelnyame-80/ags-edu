<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function text_value($value, int $limit = 5000): string {
    $value = preg_replace('/[\r\n]+/', ' ', (string) $value);
    return mb_substr(trim($value), 0, $limit);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

$configPath = __DIR__ . '/contact-config.php';
if (!is_file($configPath)) {
    error_log('Form mail is not configured: contact-config.php is missing.');
    reply(503, ['ok' => false, 'error' => 'The mail service is not configured yet. Please contact the school office.']);
}
$config = require $configPath;
if (!is_array($config) || empty($config['to']) || empty($config['from_email']) || empty($config['from_name'])) {
    error_log('Form mail configuration is invalid.');
    reply(503, ['ok' => false, 'error' => 'The mail service is not configured yet. Please contact the school office.']);
}

$payload = json_decode(file_get_contents('php://input'), true);
$validTypes = ['contact', 'admissions-enquiry', 'application'];
if (!is_array($payload) || !in_array($payload['formType'] ?? '', $validTypes, true) || !is_array($payload['fields'] ?? null)) {
    reply(400, ['ok' => false, 'error' => 'Invalid form submission.']);
}

$fields = [];
foreach ($payload['fields'] as $key => $value) {
    $fields[text_value($key, 80)] = text_value($value);
}
$replyTo = $fields['email'] ?? ($fields['parentEmail'] ?? '');
if ($replyTo !== '' && !filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    reply(400, ['ok' => false, 'error' => 'Please provide a valid email address.']);
}

$attachments = [];
$totalBytes = 0;
foreach (($payload['attachments'] ?? []) as $attachment) {
    $filename = preg_replace('/[^a-zA-Z0-9._ -]/', '_', text_value($attachment['filename'] ?? '', 160));
    $encoded = (string) ($attachment['content'] ?? '');
    $content = base64_decode($encoded, true);
    if ($filename === '' || $content === false || strlen($content) > 2.5 * 1024 * 1024) {
        reply(400, ['ok' => false, 'error' => 'One of the attachments is invalid or too large.']);
    }
    $totalBytes += strlen($content);
    if ($totalBytes > 2.5 * 1024 * 1024) {
        reply(400, ['ok' => false, 'error' => 'Attachments must total 2.5 MB or less.']);
    }
    $attachments[] = ['filename' => $filename, 'content' => $content, 'type' => text_value($attachment['contentType'] ?? 'application/octet-stream', 120)];
}

$prefixes = ['contact' => 'Website contact request', 'admissions-enquiry' => 'Admissions enquiry', 'application' => 'Online application'];
$prefix = $prefixes[$payload['formType']];
$applicant = $fields['guardian'] ?? ($fields['guardianName'] ?? ($fields['name'] ?? ($fields['firstName'] ?? '')));
$subject = $prefix . ($applicant !== '' ? ': ' . $applicant : '');
$lines = [$prefix . ' from the AGS website', ''];
foreach ($fields as $key => $value) {
    $label = ucfirst(trim(preg_replace('/([a-z])([A-Z])/', '$1 $2', str_replace(['_', '-'], ' ', $key))));
    $lines[] = $label . ': ' . ($value !== '' ? $value : '—');
}

$boundary = 'ags-' . bin2hex(random_bytes(16));
$headers = [
    'From: ' . str_replace(["\r", "\n"], '', $config['from_name']) . ' <' . filter_var($config['from_email'], FILTER_SANITIZE_EMAIL) . '>',
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];
if ($replyTo !== '') $headers[] = 'Reply-To: ' . $replyTo;
$message = '--' . $boundary . "\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n" . implode("\r\n", $lines) . "\r\n";
foreach ($attachments as $attachment) {
    $message .= '--' . $boundary . "\r\nContent-Type: " . $attachment['type'] . '; name="' . $attachment['filename'] . "\"\r\n";
    $message .= 'Content-Transfer-Encoding: base64' . "\r\n";
    $message .= 'Content-Disposition: attachment; filename="' . $attachment['filename'] . "\"\r\n\r\n";
    $message .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
}
$message .= '--' . $boundary . "--\r\n";

if (!mail($config['to'], $subject, $message, implode("\r\n", $headers))) {
    error_log('Form mail delivery failed.');
    reply(502, ['ok' => false, 'error' => 'We could not send your form. Please try again later or contact the school office.']);
}
reply(200, ['ok' => true]);
