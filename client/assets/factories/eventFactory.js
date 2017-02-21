app.factory('eventFactory', ["$http", function($http){
  var factory = {};
  var events = [];
  factory.getEvents = function(id, callback){
    $http.get('/events/'+id).then(function(data){
      if(data.data.err){
        callback(data.data.err, false)
      }
      else{
      var today = [];
      var tomorrow = [];
      var todayDate = new Date();
      var todayDay = todayDate.getDate();
      var todayMonth = todayDate.getMonth();
      var todayYear = todayDate.getFullYear();
      var checkTodayDate = new Date(todayYear, todayMonth, todayDay)
      var checkTomorrowDate = new Date(todayYear, todayMonth, todayDay + 1)
      for(var i = 0; i < data.data.user.events.length; i++){
        var currentDate = new Date(data.data.user.events[i].startDate)
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        var checkDate = new Date(year, month, day);
        if(String(checkDate) === String(checkTodayDate)){
          today.push(data.data.user.events[i])
        }else if(String(checkDate) === String(checkTomorrowDate)){
          tomorrow.push(data.data.user.events[i])
        }
      }
      callback(today, tomorrow);
    }
    })
  }
  factory.createUser = function(user, callback){
    $http.post('/user', user).then(function(data){
      callback(data.data)
    })
  }
  factory.createEvent = function(event, callback){
    $http.post('/event', event).then(function(data){
      callback(data);
    })
  }
  return factory;
}])
