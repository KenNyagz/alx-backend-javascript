const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('tests resolved promise', function() {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch( err => done(err));
  });

  it('should do nothing when success is false', function() {
    getPaymentTokenFromAPI(false).then(response => expect(response).to.be.undefined);
  });
});
