/* jshint -W117, -W030 */
describe('organization routes', function() {
  describe('state', function() {
    var view = 'app/organization/organization.html';

    beforeEach(function() {
      module('app.organization', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state organization to url /organization ', function() {
      expect($state.href('organization', {})).to.equal('/organization');
    });

    it('should map /organization route to organization View template', function() {
      expect($state.get('organization').templateUrl).to.equal(view);
    });

    it('of organization should work with $state.go', function() {
      $state.go('organization');
      $rootScope.$apply();
      expect($state.is('organization'));
    });
  });
});
