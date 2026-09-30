# CrackerKart — GitHub Pages

Static crackers catalogue with 20% price increase and 5% packing charge.

## Order email integration
The checkout submits the order as `multipart/form-data` to:

`https://vihaancrackersbackend-50022550740.development.catalystappsail.in/api/email/send`

Configured recipient:

`abishekv178@gmail.com`

The frontend sends these fields:
- `to`
- `subject`
- `body`
- `customerName`
- `customerPhone`
- `customerCity`
- `customerAddress`
- `orderTotal`

If your backend expects different multipart field names, update the `formData.append(...)` lines in `app.js`.

## Deploy
Upload the contents of `magizh-pages` to a GitHub repository and enable GitHub Pages from the `main` branch.
