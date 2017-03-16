var app = window.angular.module('app', [])

app.factory('suggestionFetcher', suggestionFetcher)
app.controller('mainCtrl', mainCtrl)

function suggestionFetcher ($http) {

  var API_ROOT = 'suggestions'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
   }
}

function mainCtrl ($scope, $http, suggestionFetcher) {

  $scope.suggestions = []

  $scope.addSugg = function() {
    var formData = {sugg:$scope.sugg};
    console.log(formData);
    var suggURL = 'suggestions';
    $http({
       url: suggURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }

  suggestionFetcher.get()
    .then(function (data) {
      $scope.suggestions = data
    })
	
}
