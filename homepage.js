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

var home_page_divs = new Array();
var load_home_page = function() {
	var div_w = 260;
	archive("home_head");
	var home = $("#main_home_div");
	var width = home.width();
	var num_x = Math.floor(width/div_w);
	home.width(num_x * div_w);
	for(var i = 0;i<num_x;i++){
		home.append("<div class='home_div_list'></div>");
	}
	home_page_divs = home[0].children;
	for(var i=0;i<30;i++){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var h = 300 + Math.floor(Math.random()* 100);
		var index = i % num_x;
		$(home_page_divs[index]).append("<div class='home_div' style='height:" + h + "px;'><div>");
//		home.append("<div class='home_div_list'></div>");
	}
}

var archive = function(id){
	$(".lionchange").removeClass("active");
	$("." + id).addClass("active");
};

