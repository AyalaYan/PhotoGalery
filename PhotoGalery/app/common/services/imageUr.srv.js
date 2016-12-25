(function () {
	'use strict';

	angular
        .module('photoApp.services')
        // .value('imageUrl', { rootUrl: 'common/images/' })
        .provider('imageUrlService',
       ['$http', function ($http) {

       	var imagesUrl = {
       		images: {
       			Chrysanthemum: {
       				src: 'Chrysanthemum.jpg',
       				name: 'Chrysanthemum'
       			}
       		},
       		rootUrl: 'common/images/'
       	};
        
       	this.changeRootUrl = function (url) {
       		imagesUrl.rootUrl = url;
       	}
       	this.$get = [function ($q) {
       		return imagesUrl;

       	}
       	]

       }])

}());