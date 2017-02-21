var mongoose = require('mongoose');
var User = mongoose.model('User')
var Event = mongoose.model('Event')

module.exports = {
  addUser: function(request, response){
    User.findOne({username: request.body.username}, function(err, user){
      if (user){
        response.json({user:user})
      }
      else{
        var user = new User({username: request.body.username})
        user.save(function(err, user){
          if(err){
            response.json({error: err})
          }else{
            response.json({user: user})
          }
        })
      }
    })
  },
  addEvent: function(request, response){
    var date = new Date(request.body.date);
    var startTime = new Date(request.body.startTime)
    var endTime = new Date(request.body.endTime)
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var startHour = startTime.getHours() - 5;
    var startMinute = startTime.getMinutes();
    var endHour = endTime.getHours() - 5;
    var endMinute = endTime.getMinutes();
    var startDate = new Date(year, month, day, startHour, startMinute);
    var endDate = new Date(year, month, day, endHour, endMinute);
    User.findOne({_id: request.body.user}, function(err, user){
      console.log(user);
      var event = new Event({
        description: request.body.description,
        startDate: startDate,
        endDate: endDate
      });
      event.save(function(err){
        if (err){
          response.json({err:err});
          console.log(err);
        }
        else {
          console.log(user.events);
          user.events.push(event);
          user.save(function(err){
            if (err){
              response.json({err:err});
              console.log(err);
            }
            else {
              response.json({user:user, event:event})
            }
          })
        }
      })
    })

  },
  showEvents: function(request, response){
    User.findOne({_id: request.params.id}, function(err, user){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({user:user})
      }
    })
  }
}
