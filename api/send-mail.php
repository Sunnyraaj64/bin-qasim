<?php
/**
 * Shared helper: send email via PHPMailer (or PHP mail() if vendor is missing).
 * Usage: require once, then call sendFormMail($subject, $bodyHtml, $bodyText).
 */

require_once __DIR__ . '/config.php';

$autoload = __DIR__ . '/vendor/autoload.php';
$phpmailerDir = __DIR__ . '/phpmailer';
if (is_file($autoload)) {
    require_once $autoload;
} elseif (is_file($phpmailerDir . '/PHPMailer.php')) {
    require_once $phpmailerDir . '/Exception.php';
    require_once $phpmailerDir . '/SMTP.php';
    require_once $phpmailerDir . '/PHPMailer.php';
}

function sendFormMail(string $subject, string $bodyHtml, string $bodyText = ''): array {
    $autoload = __DIR__ . '/vendor/autoload.php';
    $phpmailerDir = __DIR__ . '/phpmailer';
    $hasPhpMailer = is_file($autoload) || is_file($phpmailerDir . '/PHPMailer.php');
    if ($hasPhpMailer) {
        return sendFormMailWithPHPMailer($subject, $bodyHtml, $bodyText);
    }
    if (USE_SMTP) {
        return ['success' => false, 'message' => 'SMTP is enabled but PHPMailer is not installed. Run: cd api && composer install'];
    }
    return sendFormMailWithNative($subject, $bodyHtml, $bodyText);
}

function sendFormMailWithPHPMailer(string $subject, string $bodyHtml, string $bodyText): array {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->CharSet = \PHPMailer\PHPMailer\PHPMailer::CHARSET_UTF8;
        $mail->setFrom(MAIL_FROM_EMAIL, MAIL_FROM_NAME);
        $mail->addAddress(MAIL_TO);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = $bodyHtml;
        if ($bodyText !== '') {
            $mail->AltBody = $bodyText;
        }

        if (USE_SMTP) {
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->Port = SMTP_PORT;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_ENCRYPTION === 'ssl' ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        }

        $mail->send();
        return ['success' => true, 'message' => 'Message sent successfully.'];
    } catch (\Exception $e) {
        return ['success' => false, 'message' => 'Failed to send. Please try again later.'];
    }
}

function sendFormMailWithNative(string $subject, string $bodyHtml, string $bodyText): array {
    $from = MAIL_FROM_EMAIL;
    $fromName = MAIL_FROM_NAME;
    $to = MAIL_TO;
    $safeSubject = str_replace(["\r", "\n"], '', $subject);
    $safeFrom = str_replace(["\r", "\n"], '', $from);
    $safeFromName = str_replace(["\r", "\n"], '', $fromName);
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . (($safeFromName !== '') ? '"' . $safeFromName . '" <' . $safeFrom . '>' : $safeFrom),
        'X-Mailer: PHP/' . PHP_VERSION,
    ];
    $sent = @mail($to, $safeSubject, $bodyHtml, implode("\r\n", $headers));
    return $sent
        ? ['success' => true, 'message' => 'Message sent successfully.']
        : ['success' => false, 'message' => 'Failed to send. Please try again later.'];
}

function jsonResponse(array $data): void {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
}

function sanitize(string $value, int $maxLen = 1000): string {
    $value = trim($value);
    $value = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    return mb_substr($value, 0, $maxLen);
}

function validateEmail(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}
