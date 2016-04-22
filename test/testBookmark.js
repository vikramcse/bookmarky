var supertest = require('supertest');
var chai = require('chai');
var should = chai.should();

var server = supertest.agent("http://localhost:7777");

describe('bookmarks', function() {
  it('should list ALL blobs on /bookmarks GET', function(done) {
    server
      .get('/api/bookmarks')
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });

  it('should list a SINGLE bookmark on /bookmarks/<id> GET', function(done) {
    server
      .get('/api/bookmarks/5740771153d9d99c1525893e')
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should add a SINGLE bookmark on /bookmarks POST', function(done) {
    server
      .post('/api/bookmarks/')
      .send({
        bookmarkId: 878787,
        url: 'www.google.com',
        tags: ['tech']
      })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(201);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should update a SINGLE bookmark on /bookmarks/<id> PUT', function(done) {
    server
      .put('/api/bookmarks/5740771153d9d99c1525893e')
      .send({
        url: 'www.mashable.com'
      })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res) {
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a SINGLE bookmark on /bookmarks/<id> DELETE', function(done) {
    server
      .delete('/api/bookmarks/5741b5fa8fd2a5d0003c3ef9')
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res) {
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });
});
