<?php
/**
 * Contact form handler – uses the server's built-in mail (same as site builder).
 * No SMTP, no third-party libraries. Works with host's default mail setup.
 */

$toEmail   = 'info@cetka.tj';
$fromEmail = 'info@cetka.tj';

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: contact.html');
  exit;
}

$name      = isset($_POST['name'])      ? trim((string) $_POST['name'])      : '';
$email     = isset($_POST['email'])     ? trim((string) $_POST['email'])     : '';
$telephone = isset($_POST['telephone']) ? trim((string) $_POST['telephone']) : '';
$message   = isset($_POST['message'])   ? trim((string) $_POST['message'])   : '';

if ($name === '' || $email === '' || $message === '') {
  header('Location: contact.html?sent=0&reason=missing');
  exit;
}

$subject = 'Contact form: ' . $name;
$body    = "Name: $name\nEmail: $email\nTelephone: $telephone\n\nMessage:\n$message";

$headers = [
  'From: ' . $fromEmail,
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];
$headerString = implode("\r\n", $headers);

$ok = @mail($toEmail, $subject, $body, $headerString);

if ($ok) {
  header('Location: contact.html?sent=1');
} else {
  header('Location: contact.html?sent=0&err=' . rawurlencode('Mail could not be sent.'));
}
exit;
