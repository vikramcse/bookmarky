var mongoose = require('mongoose');

var BookmarkSchema = new mongoose.Schema({
  bookmarkId: {type: String, unique: true, index: true},
  title: String,
  url: String,
  added: { type: Date, default: Date.now },
  tags: [String]
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
