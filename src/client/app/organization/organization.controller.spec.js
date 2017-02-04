/* jshint -W117, -W030 */
describe('OrganizationController', function() {
  var controller;
  var organization = mockData.getMockOrganization();

  beforeEach(function() {
    bard.appModule('app.organization');
    // bard.inject('$controller', '$log', '$rootScope');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    sinon.stub(dataservice, 'getOrganization').returns($q.when(organization));
    controller = $controller('OrganizationController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Organization controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Organization', function() {
        expect(controller.title).to.equal('Organization');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have at least 1 organization', function() {
        expect(controller.organization).to.have.length.above(0);
      });

      it('should have organization count of 10', function() {
        expect(controller.organization).to.have.length(10);
      });
    });
  });
});
