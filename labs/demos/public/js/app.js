var myModule = angular.module('landingPage', []);


myModule.controller('MainCtrl', function($scope, $http, $location, $window) {
	$scope.postUsername = function() {
		var account = {
			"name": $scope.username,
			"password": 'oOoOoO'
		};
		jQuery.getJSON("config.json", function (json) {
			$http.post('/login', account).success(function(res) {
				//alert(res.success.url);

				//TODO check if I really need $location

				$scope.myurl = res.success.url;
			});
		});
	}
});


