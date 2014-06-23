'use strict';

app.controller('HeaderCtrl', function($scope){
	$scope.setActive = function (type) {
	    $scope.homeActive = '';
	    $scope.portfolioActive = '';
	    $scope.aboutActive = '';
	    $scope.contactActive = '';

	    $scope[type + 'Active'] = 'active';
		};
	$scope.toggle = function() {
			$scope.$broadcast('event:toggle');
		};
})
	.directive('toggle', function() {
		return function(scope, elem) {
			scope.$on('event:toggle', function() {
				elem.toggleClass('in');
				angular.element('.side-collapse-container').toggleClass('out');
			});
		};
	});
