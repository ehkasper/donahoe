var assert = require('chai').assert;
var config = require('../config');
var app = require('../app');
var request = require('supertest')(app);

suite('Routes', function() {
  it("should define index", function(done) {
    request
      .get('/api')
      .end(function (err, res) {
        assert.isNull(err, 'no errors returned');
        assert.equal(res.type, 'application/json');
        assert.equal(res.statusCode, 200);
        assert.equal(res.body.length, 2)
        done();
      });
  });

  it("should send data into / and retrieve it", function(done) {
    var posting = { 'foo': 'bar' }
    request
      .post('/api')
      .send(posting)
      .end(function(err, res) {
        assert.isNull(err, 'no errors returned');
        assert.equal(res.type, 'application/json');
        assert.equal(res.statusCode, 200);
        assert.equal(res.body.foo, posting.foo);

        done();
      });
  });

});
