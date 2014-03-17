describe('Hello test', function() {
  var tbAPI;

  beforeEach(angular.mock.module('taobao'));

  beforeEach(angular.mock.inject(function(_tbAPI_) {
    tbAPI = _tbAPI_;
  }));

  it('should be able to return the cartCount', function(done) {
    tbAPI.getCartCount().should.be.eql(0);
    done();
  });
});