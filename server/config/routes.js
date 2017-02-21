var event = require("../controllers/events.js")
module.exports = function(app){
  app.post('/user', event.addUser),
  app.post('/event', event.addEvent),
  app.get('/events/:id', event.showEvents)
}
