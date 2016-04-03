var express = require('express');

var routes = function() {
  var bookmarkRouter = express.Router();

  bookmarkRouter
    .route('/bookmarks')
    .get(function(req, res) {
      var jsonRes = {"name": "vikram"};
      res.json(jsonRes);
    });

  return bookmarkRouter;
};

module.exports = routes;
