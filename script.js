var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://api.github.com/repositories/19438/commits")
  .then(function(response) {
      $scope.Details = response.data;
      console.log($scope.Details);
  });
});
