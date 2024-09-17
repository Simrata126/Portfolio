const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Project 1', description: 'Description of project 1' },
    { id: 2, name: 'Project 2', description: 'Description of project 2' },
    { id: 3, name: 'Project 3', description: 'Description of project 3' }
  ]);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle the contact form submission (store in database or send email)
  res.status(200).send({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
