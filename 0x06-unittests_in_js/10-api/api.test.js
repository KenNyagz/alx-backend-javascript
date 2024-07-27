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

  it.skip('should return the correct status code when :id is a number', function(done) {
    request(server)
      .get('/cart/123')
      .expect(200, done);
  });

  it('should return 404 when :id is not a number', function(done) {
    request(server).get('/cart/123abc').expect(404, done);
  });
});

describe('Available Payments', function() {
  before(function(done) {
    server = app.listen(7865, () => done());
  });

  after(function(done) { server.close(done) });

  it('should return correct result', function(done) {
    request(server)
      .get('/available_payments')
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login', function() {
  before(function(done) {
    server = app.listen(7865, () => done());
  });

  after(function(done) { server.close(done)});

  it('should return correct status code and result', function(done) {
    request(server)
      .post('/login')
      .send({ username: 'JohnDoe' })
      .expect(200, done) //expect 200 status code
      .end((err, res) => {
        expect(res.text).to.equal('Welcome JohnDoe');
        done();
      });
  });

});
