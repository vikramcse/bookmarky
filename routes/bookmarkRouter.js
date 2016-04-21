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
        Bookmark.findById({
          _id: req.params.id
        }, function(err, bookmark) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(bookmark);
          }
        });
      })
      .put(function(req, res) {
        Bookmark.findById({
          _id: req.params.id
        }, function(err, bookmark) {
          if (err) {
            res.status(500).send(err);
          } else {
            if ('url' in req.body) {
              bookmark.url = req.body.url;

              bookmark.save(function(err) {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.json({ message: 'Bookmark updated!' });
                }
              });
            }
          }
        });
      })
      .delete(function(req, res) {
        Bookmark.remove({
          _id: req.params.id
        }, function(err, bookmark) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json({ message: 'Successfully deleted' });
          }
        })

      });
  return bookmarkRouter;
};

module.exports = routes;
