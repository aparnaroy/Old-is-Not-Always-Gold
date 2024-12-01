const express = require('express');
const firebaseAdmin = require('firebase-admin');
const cors = require('cors');
const app = express();

// Enable CORS for your frontend origin
app.use(cors());

const FLAG = 'ninja{VULNERABLE_AND_OUTDATED_COMPONENTS}';

// Initialize Firebase Admin SDK only once
const serviceAccount = require('./old-is-not-always-gold-firebase-adminsdk-40tpl-e0a90dd89e.json');
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://old-is-not-always-gold.firebaseio.com"
  });
}

// Route to generate a custom token
app.get('/generate-token', (req, res) => {
  const uid = 'user_id';
  firebaseAdmin.auth().createCustomToken(uid)
    .then((customToken) => {
      res.json({ token: customToken });
    })
    .catch((error) => {
      console.error("Error creating custom token:", error);
      res.status(500).send("Error generating token");
    });
});

app.post('/get-flag', (req, res) => {
  const token = req.headers.authorization;

  // Verify the token (no need to re-initialize Firebase Admin)
  firebaseAdmin.auth().verifyIdToken(token)
    .then(decodedToken => {
      res.json({ flag: FLAG });
    })
    .catch(() => {
      res.status(401).json({ error: 'Unauthorized' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
