const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const catalyst = require('zcatalyst-sdk-node');

const app = express();

const allowedOrigins = new Set([
  'https://abishekv7.github.io',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'http://localhost:5500'
]);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.has(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '*');
    res.header('Vary', 'Origin');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') {
    if (origin && !allowedOrigins.has(origin)) return res.status(403).end();
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
const TO_EMAIL = 'abishekv178@gmail.com';
const FROM_EMAIL = process.env.ORDER_FROM_EMAIL;

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'CrackerKart order email backend' });
});

app.post('/api/email/send', upload.single('pdf'), async (req, res) => {
  try {
    if (!FROM_EMAIL) {
      return res.status(500).json({ ok: false, error: 'ORDER_FROM_EMAIL is not configured in Catalyst.' });
    }

    if (!req.file) {
      return res.status(400).json({ ok: false, error: 'PDF attachment is required.' });
    }

    const { subject, body, customerName, customerPhone, customerCity, customerAddress, orderTotal } = req.body;

    if (!customerName || !customerPhone) {
      return res.status(400).json({ ok: false, error: 'Customer name and mobile number are required.' });
    }

    const appInstance = catalyst.initialize(req);

    const content = [
      body || 'New CrackerKart order received.',
      '',
      '--- Customer ---',
      'Name: ' + customerName,
      'Mobile: ' + customerPhone,
      'City: ' + (customerCity || '-'),
      'Address: ' + (customerAddress || '-'),
      'Order Total: ' + (orderTotal || '-')
    ].join('\n');

    const tempPdfPath = path.join('/tmp', req.file.originalname || 'CrackerKart_Order.pdf');
    fs.writeFileSync(tempPdfPath, req.file.buffer);

    await appInstance.email().sendMail({
      from_email: FROM_EMAIL,
      to_email: [TO_EMAIL],
      subject: subject || 'CrackerKart — New Order',
      content,
      html_mode: false,
      attachments: [{
        filename: req.file.originalname || 'CrackerKart_Order.pdf',
        content: fs.createReadStream(tempPdfPath)
      }]
    });

    fs.unlink(tempPdfPath, () => {});
    return res.json({ ok: true, message: 'Order email sent successfully.' });
  } catch (error) {
    console.error('Order email error:', error);
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

app.listen(PORT, () => console.log('CrackerKart backend listening on port ' + PORT));
