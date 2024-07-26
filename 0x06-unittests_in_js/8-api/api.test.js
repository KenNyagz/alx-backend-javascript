//const request = require('supertest');
const { expect } = require('chai');
/*const app = require('./api');

describe('Index Page', function() {
  it('should return the correct status code', function(done) {
    request(app).get('/').expect(200, done);
  });

  it('should return the correct result', function(done) {
    request(app).get('/').end((err, res) => {
      expect(res.text).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a JSON object', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done()
      });
  });
});*/

const request = require('request');
describe('Index page', () => {
  describe('GET /', () => {
    it('Tests output of GET / request', (done) => {
      request('http://localhost:7865', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
