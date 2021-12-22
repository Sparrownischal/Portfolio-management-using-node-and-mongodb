angular.module('StockService', [])
// super simple service
// each function returns a promise object
.factory('Stock', ['$http',function($http) {
   return {
      get : function() {
         return $http.get('/api/stocks');
      },
      create : function(student) {
         return $http.post('/api/stocks/send', student);
      },
      delete : function(id) {
         return $http.delete('/api/stocks/' + id);
      }
   }
}]);