app.controller("commentsIndexCtrl", ["restangularService", "$scope", function(restangularService, $scope){
  (restangularService.getRecentComments().then(function(response) {
    console.log(response)
  }))

  $scope.comments = restangularService.getRecentComments().$object

}]);
