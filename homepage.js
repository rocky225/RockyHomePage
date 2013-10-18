var album_source = [{name:'Lanterns',src:'images/lanterns.jpg'},{name:'Tree',src:'images/tree.jpg'},
			{name:'Cable Car',src:'images/cablecar.jpg'},{name:'London Eye',src:'images/londoneye.jpg'},
			{name:'Golden Statue',src:'images/statue.jpg'},{name:'Under the Bridge',src:'images/bridge.jpg'},
			{name:'Pregnant Maiden',src:'images/maiden.jpg'},{name:'Clouds of Doom',src:'images/clouds.jpg'},
			{name:'Silver Statue',src:'images/statue2.jpg'}];

$(function(){
	jQuery().maps();
});			
			
angular.module("mainApp",[]).
  factory('Projects', function() {
    return album_source;
  }).config(function($routeProvider) {
	$routeProvider.when('/',{controller:load_home_page,templateUrl:'home.html'}).
	when('/album',{controller:load_album_page,templateUrl:'album.html'}).
	otherwise({redirectTo:'/'});
});

var load_album_page = function($scope, Projects) {
	$scope.projects = Projects;
	archive("album_head");
}

var load_home_page = function() {
	archive("home_head");
	$("#main_home_div").gridalicious({
                    gutter: 10,
                    width: 250,
                    animate: true,
                    animationOptions: {
                            speed: 150,
                            duration: 500,
                            complete: function(data) {
                    
							}
                    },
                });
}

var archive = function(id){
	$(".lionchange").removeClass("active");
	$("." + id).addClass("active");
};

