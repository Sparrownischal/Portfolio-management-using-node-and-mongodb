angular.module('MainCtrl', []).controller('MainController',
   ['$scope','$http','Stock',function($scope, $http, Stock) {
   $scope.formData = {};
   $scope.loading = true;
   $http.get('/api/stocks').
   then(function(response) {
      $scope.stock = response.data;
   });
   // CREATE 
   // when submitting the add form, send the text to the node API
   $scope.createStock = function() {
      // validate the formData to make sure that something is there
      // if form is empty, nothing will happen
      if ($scope.formData.name != undefined) {
         $scope.loading = true;
         // call the create function from our service (returns a promise object)
         Stock.create($scope.formData)
         // if successful creation, call our get function to get all the new stock
         .then(function (response){
            $scope.stock = response.data;
            $scope.loading = false;
            $scope.formData = {}
         },    function (error){
         });
      }
   };
   // DELETE
   
   // delete a todo after checking it
//    $scope.deleteStudent = function(id) {
//       $scope.loading = true;
//       Student.delete(id)
//       // if successful delete, call our get function to get all the new Student
//       .then(function(response) {
//          $scope.loading = false;
//          new list of Student;
//       });
//    };
}]);