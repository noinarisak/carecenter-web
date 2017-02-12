(function() {
  'use strict';

  angular
    .module('app.organization')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'organization',
        config: {
          url: '/organization',
          templateUrl: 'app/organization/organization.html',
          controller: 'OrganizationController',
          controllerAs: 'vm',
          title: 'Organization',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Organization'
          }
        }
      }
    ];
  }
})();
