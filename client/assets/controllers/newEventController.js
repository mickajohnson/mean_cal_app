app.controller("newEventController", ["$scope", "eventFactory", "$location", "$cookies", function($scope, eventFactory, $location, $cookies){
  if (!$cookies.get("username")){
    $location.url('/')
  }
  $scope.username = $cookies.get("username");
  $scope.id = $cookies.get("id");


  $scope.createEvent= function(){
    $scope.event.user = $scope.id;
    console.log($scope.event)
    eventFactory.createEvent($scope.event, function(data){
      if (data.error){
        console.log(data.error);
      }
      else {
        console.log(data);
        $location.url('/home')
      }
    })
  }
}])
