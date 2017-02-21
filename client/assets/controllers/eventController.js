app.controller("eventController", ["$scope", "eventFactory", "$location", "$cookies", function($scope, eventFactory, $location, $cookies){
  if (!$cookies.get("username")){
    $location.url('/')
  }
  $scope.username = $cookies.get("username");
  $scope.id = $cookies.get("id");
  var index = function(today, tomorrow){
    $scope.today = today;
    $scope.tomorrow = tomorrow;
  }
  $scope.getEvents = function(){
    eventFactory.getEvents($scope.id, index)
  }
  $scope.getEvents();
  $scope.logout = function(){
    $cookies.remove("username");
    $cookies.remove("id");
    $location.url('/')
  }
}])
