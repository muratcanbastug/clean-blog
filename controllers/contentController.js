const Content = require('../models/Content');

exports.getAllContents = async (req, res) => {
  const contents = await Content.find({});
  res.render('index', { contents });
};

exports.getContent = async (req, res) => {
  const content = await Content.findById(req.params.id);
  res.render('post', { content });
};

exports.createContent = async (req, res) => {
  await Content.create(req.body);
  res.redirect('/');
};

exports.updateContent = async (req, res) => {
  const content = await Content.findOne({ _id: req.params.id });
  content.post_title = req.body.post_title;
  content.sub_title = req.body.sub_title;
  content.author = req.body.author;
  content.content = req.body.content;
  await content.save();
  res.redirect('/post/' + content._id);
};

exports.deleteContent = async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
