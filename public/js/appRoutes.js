angular.module('appRoutes', []).config(['$routeProvider',
   '$locationProvider', function($routeProvider, $locationProvider) {
   $routeProvider
      // home page
      .when('/', {
         templateUrl: 'views/home.html',
         controller: 'MainController'
      })
      // students page that will use the StudentController
      .when('/stocks', {
         templateUrl: 'views/stock.html',
         controller: 'StockController'
      });
   $locationProvider.html5Mode(true);
}]);