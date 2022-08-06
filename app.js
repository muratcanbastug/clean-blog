const mongoose = require('mongoose');
const Content = require('./models/Content');
const express = require('express');
require('ejs');
const app = express();

mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const contents = await Content.find({});
  res.render('index', { contents });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/post/:id', async (req, res) => {
  const content = await Content.findById(req.params.id);
  res.render('post', { content });
});

app.post('/contents', async (req, res) => {
  await Content.create(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışmaya başladı.`);
});
