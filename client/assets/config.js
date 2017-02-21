var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function ($routeProvider) {
$routeProvider
.when('/', {
  templateUrl: 'partials/login.html',
  controller: 'loginController'
})
.when('/home', {
  templateUrl: 'partials/events.html',
  controller: 'eventController'
})
.when('/new', {
  templateUrl: 'partials/addEvent.html',
  controller: 'newEventController'
})
.otherwise({
  redirectTo: '/'
})
})
