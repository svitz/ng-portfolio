'use strict';

var app = angular
  .module('ngPortfolioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/port.html',
        controller: 'PortCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
app.constant('FIREBASE_URI', 'https://pablobarbier.firebaseio.com/');
app.controller('SuCtrl', ['$scope', 'PBDataService', function ($scope, PBDataService) {
    $scope.items = PBDataService.getItems();
  }]);

app.factory('PBDataService', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    var items = $firebase(ref);

    var getItems = function () {
        return items;
      };

    var addPitem = function (Pitem) {
        items.pitems.$add(Pitem);
      };

    var updatePitem = function (id) {
        items.pitems.$save(id);
      };

    var removePitem = function (id) {
        items.pitems.$remove(id);
      };

    return {
        getItems: getItems,
        addPitem: addPitem,
        updatePitem: updatePitem,
        removePitem: removePitem
      };
  }]);
