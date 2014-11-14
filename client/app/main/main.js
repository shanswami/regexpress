(function() {
  'use strict';

  angular
    .module('baseApp',[
      'ValuesModule',
      'makeRRModule',
      'ngMaterial',
      'clickHelpers',
      'modifyTreeModule'
    ])
    .controller('MainController', [ '$scope','values', 'makeRR', 'modifyTree', MainController ]);

    function MainController($scope, values, makeRR, modifyTree) {
      $scope.main = values;
      $scope.rr = makeRR;
      console.log(modifyTree.removeNode(null, $scope.main.regexTree));

    }

})();
