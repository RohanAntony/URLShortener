var app = angular.module('short',[]);

app.controller('shortCtrl',['$scope','$http',function($scope,$http){
  $scope.url="";
  $scope.shortenedUrl = "";
  $scope.successStatus = false;
  $scope.errorStatus = false;
  $scope.convert = function(){
    var dataObject = {
      url:$scope.url
    }
    $http({
      method:'POST',
      url:'/shorten',
      data:dataObject
    }).then(function successCallback(response){
      $scope.successStatus = true;
      $scope.errorStatus = false;
      $scope.shortenedUrl = response.data.shortened;
    },function errorCallback(response){
      $scope.errorStatus = true;
      $scope.successStatus = false;
    })
  };
}]);
