(function() {
  'use strict';

  angular
    .module('app.organization')
    .controller('OrganizationController', OrganizationController);

  OrganizationController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function OrganizationController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Organization';
    vm.organization = [];

    activate();

    function activate() {
      var promises = [getOrganization()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getOrganization() {
      return dataservice.getOrganization().then(function(data) {
        vm.organization = data;
        console.log(data);
        return vm.organization;
      });
    }

  }
})();
