angular.module("hopsterBookApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      document.write("mainCtrl working!!")
    };
  }); 