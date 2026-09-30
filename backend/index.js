const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();

const allowedOrigins = new Set([
  'https://abishekv7.github.io',
  'https://happy-crackers.onslate.in',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'http://localhost:5500'
]);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  // Browsers send origin "null" for file:// pages; treat it like no origin.
  const isAllowed = !origin || origin === 'null' || allowedOrigins.has(origin);
  if (isAllowed) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') {
    if (!isAllowed) return res.status(403).end();
    return res.status(204).end();
  }
  next();
});

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }
});

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;
const GMAIL_USER = process.env.GMAIL_USER || '';
const GMAIL_PASS = (process.env.GMAIL_PASS || '').replace(/\s/g, '');
const TO_EMAIL = 'abishekv178@gmail.com';

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
}

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'CrackerKart order email backend' });
});

app.post('/api/email/send', upload.single('pdf'), async (req, res) => {
  try {
    if (!GMAIL_USER || !GMAIL_PASS) {
      return res.status(500).json({ ok: false, error: 'GMAIL_USER or GMAIL_PASS is not configured.' });
    }

    if (!req.file) {
      return res.status(400).json({ ok: false, error: 'PDF attachment is required.' });
    }

    const { subject, body, customerName, customerPhone, customerCity, customerAddress, orderTotal } = req.body;

    if (!customerName || !customerPhone) {
      return res.status(400).json({ ok: false, error: 'Customer name and mobile number are required.' });
    }

    const textContent = [
      body || 'New CrackerKart order received.',
      '',
      '--- Customer ---',
      'Name: ' + customerName,
      'Mobile: ' + customerPhone,
      'City: ' + (customerCity || '-'),
      'Address: ' + (customerAddress || '-'),
      'Order Total: ' + (orderTotal || '-')
    ].join('\n');

    console.log('[EMAIL] Sending order email', {
      to: TO_EMAIL,
      customer: customerName,
      orderTotal: orderTotal || '-',
      attachment: req.file.originalname || 'CrackerKart_Order.pdf'
    });

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"CrackerKart Orders" <${GMAIL_USER}>`,
      to: TO_EMAIL,
      subject: subject || 'CrackerKart — New Order',
      text: textContent,
      attachments: [{
        filename: req.file.originalname || 'CrackerKart_Order.pdf',
        content: req.file.buffer,
        contentType: 'application/pdf'
      }]
    });

    console.log('[EMAIL] Order email sent successfully');
    return res.json({ ok: true, message: 'Order email sent successfully.' });
  } catch (error) {
    console.error('[EMAIL] Order email error:', error);
    return res.status(500).json({
      ok: false,
      error: error && error.message ? error.message : 'Failed to send email.'
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Backend error:', err);
  res.status(500).json({ ok: false, error: err.message || 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log('[STARTUP] CrackerKart backend listening on port ' + PORT);
  console.log('[STARTUP] Gmail user configured:', Boolean(GMAIL_USER));
  console.log('[STARTUP] Gmail app password configured:', Boolean(GMAIL_PASS));
  console.log('[STARTUP] Recipient:', TO_EMAIL || '(missing)');

  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('[STARTUP] Gmail credentials are missing. Set GMAIL_USER and GMAIL_APP_PASSWORD in Catalyst AppSail environment variables.');
    return;
  }

  createTransporter().verify()
    .then(() => console.log('[STARTUP] Gmail SMTP authentication verified successfully'))
    .catch(error => console.error('[STARTUP] Gmail SMTP verification failed:', error && error.message ? error.message : error));
});
