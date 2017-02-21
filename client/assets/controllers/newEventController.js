app.controller("newEventController", ["$scope", "eventFactory", "$location", "$cookies", function($scope, eventFactory, $location, $cookies){
  if (!$cookies.get("username")){
    $location.url('/')
  }
  $scope.username = $cookies.get("username");
  $scope.id = $cookies.get("id");


  $scope.createEvent= function(){
    $scope.event.user = $scope.id;
    eventFactory.createEvent($scope.event, function(data){
      if (data.data.err){
        $scope.error = data.data.err
      }
      else {
        $location.url('/home')
      }
    })
  }
}])
