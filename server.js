import express from 'express';
import path from 'path';
import url from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/send-email', async (req, res) => {
  const { email, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: process.env.EMAIL,
	    pass: process.env.PASS
	  }
  });
		  
  let info = await transporter.sendMail({
    from: email,
    to: 'quintanajason4004@gmail.com',
    subject,
    text,
  });

  res.send('Email sent');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
