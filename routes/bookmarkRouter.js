var express = require('express');
var Bookmark = require('../models/bookmark.js');
var routes = function() {
  var bookmarkRouter = express.Router();

  bookmarkRouter
    .route('/bookmarks')
    .get(function(req, res) {
      var query = {};

      if(req.query.url) {
        query.url = req.query.url;
      }

      Bookmark.find(query, function(err, bookmarks) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(bookmarks);
        }
      });
    })
    .post(function(req, res) {
      var bookmark = new Bookmark(req.body);

      bookmark.save(function(err) {
        if (!err) {
          console.log('bookmark saved');
        }
      });

      res.status(201).send(bookmark);
    });

    // to get particular item in bookmarks
    bookmarkRouter
      .route('/bookmarks/:id')
      .get(function(req, res) {
        var id = req.params.id;
        
        Bookmark.findById(id, function(err, bookmark) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(bookmark);
          }
        });
      });
  return bookmarkRouter;
};

module.exports = routes;
