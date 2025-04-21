import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// In-memory store (for tokens)
const tokens = new Map();

// API to generate token
app.get('/api/generate-token', (req, res) => {
  const token = uuidv4();
  const link = `https://your-backend-url.com/live/${token}`;
  tokens.set(token, true);
  res.json({ link });
});

// One-time access route that redirects to YouTube video
app.get('/live/:token', (req, res) => {
  const { token } = req.params;

  if (tokens.has(token)) {
    tokens.delete(token);
    res.redirect('https://youtu.be/aZxDVg4DgH0?si=d8mao9tYdOjBrpmU');
  } else {
    res.redirect('https://yourwebsite2.com'); // Redirect on second use
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
