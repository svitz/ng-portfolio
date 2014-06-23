'use strict';

angular.module('ngPortfolioApp')
  .controller('MainCtrl', function($scope){
    $scope.links = [
	    {
	      'name': 'home',
	      'link': '/',
	      'alt': 'Link to home section'
	    },
	    {
	      'name': 'portfolio',
	      'link': '/portfolio',
	      'alt': 'link to portfolio section'
	    },
	    {
	      'name': 'about',
	      'link': '/about',
	      'alt': 'Link to about section'
	    },
	    {
	      'name': 'skills',
	      'link': '/skills',
	      'alt': 'Link to skills section'
	    },
	    {
	      'name': 'experience',
	      'link': '/experience',
	      'alt': 'link to experience section'
	    },
	    {
	      'name': 'contact',
	      'link': '/contact',
	      'alt': 'link to contact section'
	    },
		];
  });
