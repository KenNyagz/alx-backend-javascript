const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

let server;
describe('Index Page', function() {
  before(function(done) {
    server = app.listen(7865, () => done());
  });

  after(function(done) {
    server.close(done);
  });

  it('should return the correct status code', function(done) {
    request(server).get('/').expect(200, done);
  });

  it('should return the correct result', function(done) {
    request(server).get('/').end((err, res) => {
      expect(res.text).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a JSON object', function(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done()
      });
  });
});

describe('Cart page', function() {
  before(function(done) {
    server = app.listen(7865, () => done());
  });

  after(function(done) {
    server.close(done);
  });

  it('should return the correct status code when :id is a number', function(done) {
    request(server)
      .get('/cart/123')
      .expect(200, done);
  });

  

 
});
