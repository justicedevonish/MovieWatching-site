const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('WebMovie');
    const collection = database.collection('Movies');
    const data = await collection.find({}).toArray();
    res.json(data);
  } finally {
    await client.close();
  }
});

app.get('/api/users', async (req, res) => {
  try{
    await client.connect();
    const database = client.db('WebMovie');
    const collection = database.collection('Movies');
    const users = await collection.find({}).toArray();
    res.json(users);
  } finally {
    await client.close();
  }
})

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    await client.connect();
    const database = client.db('WebMovie');
    const collection = database.collection('Users');

    const newUser = { username, email, password };
    const result = await collection.insertOne(newUser);

    res.status(201).json({ message: 'User created successfully', userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  } finally {
    await client.close();
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    await client.connect();
    const database = client.db('WebMovie');
    const collection = database.collection('Users');

    const user = await collection.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: 'Login successful', userId: user._id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login' });
  } finally {
    await client.close();
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
