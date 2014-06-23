'use strict';

angular.module('ngPortfolioApp')
  .controller('PortCtrl', function($scope){
    $scope.pitems = [
	    {
	      'name': 'Tindell & Co',
	      'link': 'http://tindellco.com',
	      'alt': 'Link to Tindell Website',
	      'blurb': 'I worked in creating the Brand for Tindell & Co, I created their logo, hand selected their corporate fonts, color palettes, and style tiles. People love the brand and the company has grown exponentially in the years I’ve been working as it’s stylist.',
	      'imgs': [
					{
						'title':'Tindell & Co Flier Example',
						'alt':'Tindell & Co flier Example',
						'class':'rectangle-vertical',
						'src': '../../images/tindell/TindellCoFlier.png'
					},
					{
						'title':'Tindell & Co Flier Example',
						'alt':'Tindell & Co flier Example',
						'class':'rectangle-vertical',
						'src': '../../images/tindell/TindellCo_FlierOmaha.png'
					},
					{
						'title':'Tindell & Co Flier Example',
						'alt':'Tindell & Co flier Example',
						'class':'rectangle-horizontal',
						'src': '../../images/tindell/emailSignature.jpg'
					}
				],
				'featured': {
					'title':'Tindell & Co Outdoor Sign',
					'alt':'Tindell & Co Outdoor Sign',
					'src': '../../images/tindell/OutdoorSign.png'
				}
			},
		];
	});
