# Form mail API (PHPMailer)

Handles appointment and contact form submissions and sends email.

## Setup

1. **Install dependencies** (from this folder):
   ```bash
   cd api
   composer install
   ```

2. **Configure email** in `config.php`:
   - Set `MAIL_TO` to the address that should receive form submissions.
   - Set `MAIL_FROM_EMAIL` and `MAIL_FROM_NAME` (use a valid address for your domain).
   - Use `mail()` (default): set `USE_SMTP` to `false`.
   - For SMTP (e.g. Gmail, cPanel): set `USE_SMTP` to `true` and fill the SMTP_* constants.

## Endpoints

- **POST /api/appointment.php** – Fields: `name`, `email`, `phone`, `service`, `message`
- **POST /api/contact.php** – Fields: `name`, `email`, `message`

Both return JSON: `{ "success": true|false, "message": "..." }`.

## Deployment (cPanel)

- Upload the contents of React `dist/` to `public_html/`.
- Upload this `api/` folder (including `vendor/` after running `composer install` locally) to `public_html/api/`.
- Ensure `public_html/.htaccess` sends SPA routes to `index.html` but does not rewrite `/api/*` (so PHP runs for `/api/appointment.php` and `/api/contact.php`).
