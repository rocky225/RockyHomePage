var loadImage = function($scope, Projects){
	$scope.projects = Projects;
	setTimeout('call_quake()',1000);
}

var call_quake = function() {
	$('.quake-slider').quake({
		thumbnails: true,
		animationSpeed: 500,
		applyEffectsRandomly: true,
		navPlacement: 'inside',
		navAlwaysVisible: true,
		captionOpacity: '0.3',
		captionsSetup: [
						 {
							 "orientation": "top",
							 "slides": [0, 1],
							 "callback": captionAnimateCallback
						 },
						  {
							  "orientation": "left",
							  "slides": [2, 3],
							  "callback": captionAnimationCallback1
						  }
						  ,
						  {
							  "orientation": "bottom",
							  "slides": [4, 5],
							  "callback": captionAnimateCallback
						  }
						  ,
						  {
							  "orientation": "right",
							  "slides": [6, 7],
							  "callback": captionAnimationCallback1
						  }
						]

	});
};

function captionAnimateCallback(captionWrapper, captionContainer, orientation) {
	captionWrapper.css({ left: '-990px' }).stop(true, true).animate({ left: 0 }, 500);
	captionContainer.css({ left: '-990px' }).stop(true, true).animate({ left: 0 }, 500);
}
function captionAnimationCallback1(captionWrapper, captionContainer, orientation) {
	captionWrapper.css({ top: '-330px' }).stop(true, true).animate({ top: 0 }, 500);
	captionContainer.css({ top: '-330px' }).stop(true, true).animate({ top: 0 }, 500);
}


angular.module("mainApp",[]).
  factory('Projects', function() {
    return [{name:'Lanterns',src:'images/lanterns.jpg'},{name:'Tree',src:'images/tree.jpg'},
			{name:'Cable Car',src:'images/cablecar.jpg'},{name:'London Eye',src:'images/londoneye.jpg'},
			{name:'Golden Statue',src:'images/statue.jpg'},{name:'Under the Bridge',src:'images/bridge.jpg'},
			{name:'Pregnant Maiden',src:'images/maiden.jpg'},{name:'Clouds of Doom',src:'images/clouds.jpg'},
			{name:'Silver Statue',src:'images/statue2.jpg'}];
  }).config(function($routeProvider) {
	$routeProvider.when('/',{templateUrl:'home.html'}).
	when('/album',{controller:loadImage,templateUrl:'album.html'}).
	otherwise({redirectTo:'/'});
});


var archive = function(it){
	$(".lionchange").removeClass("active");
	$(it).addClass("active");
};

