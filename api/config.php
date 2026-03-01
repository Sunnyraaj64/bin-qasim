<?php
/**
 * Mail configuration for form submissions.
 * For SMTP: set USE_SMTP to true and fill SMTP_* below.
 * For PHP mail(): set USE_SMTP to false (works on most cPanel/Laragon).
 */

// Email address that receives form submissions
define('MAIL_TO', 'binqasim@gmail.com');

// From address (should be a valid domain you own on production)
define('MAIL_FROM_EMAIL', 'noreply@binqasim.com');
define('MAIL_FROM_NAME', 'BinQasim Website');

// Use SMTP (true) or PHP mail() (false)
define('USE_SMTP', true);

// SMTP settings (only used when USE_SMTP is true)
define('SMTP_HOST', 'sandbox.smtp.mailtrap.io');
define('SMTP_PORT', 2525);
define('SMTP_USERNAME', 'f697b6d15f615e');
define('SMTP_PASSWORD', '0d5a8c50f1a8f8');
define('SMTP_ENCRYPTION', 'tls'); // 'tls' or 'ssl'
