const Content = require('../models/Content');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getEditPage = async (req, res) => {
  const content = await Content.findOne({ _id: req.params.id });
  res.render('edit', { content });
};
