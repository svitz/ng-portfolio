'use strict';

angular.module('ngPortfolioApp')
  .controller('AdminCtrl', ['$scope', function ($scope) {
    $scope.newPitem = [{name: '', link: '', id: '', alt: '', blurb: '', imgs: [], featured: {} } ];
    $scope.newPitem.imgs = {title: '', alt: '', class: '', src: ''};
    $scope.newPitem.featured = {title: '', alt: '', src: ''};

    $scope.currentPitem = null;
}]);
