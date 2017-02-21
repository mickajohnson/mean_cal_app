app.controller("loginController", ["$scope", "eventFactory", "$location", "$cookies", function($scope, eventFactory, $location, $cookies){
  $scope.createUser = function(){
    eventFactory.createUser($scope.user, function(data){
      console.log(data)
      if(data.error){
        $scope.errors = data.error.errors;
      }
      else{
        $cookies.put("username", data.user.username);
        $cookies.put("id", data.user._id)
        
        $location.url('/home')
    }
    })
  }
}])
