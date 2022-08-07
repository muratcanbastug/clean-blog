const mongoose = require('mongoose');
const express = require('express');
const ejs = require('ejs');
var methodOverride = require('method-override');
const contentController = require('./controllers/contentController');
const pageController = require('./controllers/pageController');
const app = express();

mongoose.connect('mongodb://localhost/clean-blog-test-db');

const PORT = 3000;

app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

// Routes
app.get('/', contentController.getAllContents);
app.get('/post/:id', contentController.getContent);
app.post('/contents', contentController.createContent);
app.put('/post/:id', contentController.updateContent);
app.delete('/post/:id', contentController.deleteContent);

app.get('/post/edit/:id', pageController.getEditPage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışmaya başladı.`);
});
