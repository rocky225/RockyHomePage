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
	// Camera 
/*
	jQuery('.camera_wrap').camera({
		height: '350px',
//		loader: 'bar',
		pagination: false,
		thumbnails: true
	});
	*/
	var home = $("#main_home_div");
	var width = home.width() - 10;
	var matrix_X = Math.floor(width/160);
	home.width(matrix_X * 160);
	var num = matrix_X * 5;
	var matrix = [];
	for(var index = 0;index < num;index++) {
		if(!matrix[index]) {
			var matrix_num = (Math.floor(Math.random() * 200))%14;
			if(matrix_num == 8) {
				matrix[index + matrix_X] = 1;
			} else if(matrix_num > 8) {
				index++;
			}
			home.append(metros[matrix_num]);
		}
	} 
}

var archive = function(id){
	$(".lionchange").removeClass("active");
	$("." + id).addClass("active");
};

var metros = [
	"<div class=\"tile image\"><div class=\"tile-content\"><img src=\"images/metro_/myface.jpg\" alt=\"\"></div></div>",
	"<div class=\"tile icon\"> <div class=\"tile-content\"> <img src=\"images/metro_/Mail128.png\"> </div> <div class=\"brand\"> <div class=\"badge\">10</div> <div class=\"name\">Mail</div> </div> </div>",
	"<div class=\"tile bg-color-orangeDark icon selected\"> <b class=\"check\"></b> <div class=\"tile-content\"> <img src=\"images/metro_/Video128.png\" alt=\"\"> </div> <div class=\"brand\"> <span class=\"name\">Video</span> </div> </div>",
	"<div class=\"tile bg-color-green icon selected\"> <b class=\"check\"></b> <div class=\"tile-content\"> <img src=\"images/metro_/Market128.png\"> </div> <div class=\"brand\"> <span class=\"name\">Store</span> <span class=\"badge\">6</span> </div> </div>",
	"<div class=\"tile bg-color-red icon selected\"> <div class=\"tile-content\"> <img src=\"images/metro_/Music128.png\" alt=\"\"> </div> <div class=\"brand\"> <span class=\"name\">Music</span> </div> </div>",
	"<div class=\"tile bg-color-blue icon\"> <div class=\"tile-content\"> <img src=\"images/metro_/InternetExplorer128.png\"> </div> <div class=\"brand\"> <span class=\"name\">Internet Explorer</span> </div> </div>",
	"<div class=\"tile bg-color-darken icon\"> <div class=\"tile-content\"> <img src=\"images/metro_/YouTube128.png\" alt=\"\"> </div> <div class=\"brand\"> <span class=\"name\">YouTube</span> </div> </div>",
	"<div class=\"tile icon\"> <div class=\"tile-content\"> <img src=\"images/metro_/excel2013icon.png\"> </div> <div class=\"brand\"> <span class=\"name\">Excel 2013</span> </div> </div>",
	"<div class=\"tile double-vertical bg-color-yellow icon\"> <div class=\"tile-content\"> <img src=\"images/metro_/Calendar128.png\"> </div> <div class=\"brand\"> <span class=\"name\">Calendar</span> </div> </div>",
	"<div class=\"tile double image\"> <div class=\"tile-content\"> <img src=\"images/metro_/5.jpg\" alt=\"\"> </div> <div class=\"brand\"> <span class=\"name\">Pictures</span> <div class=\"badge bg-color-orange\">5</div> </div> </div>",
	"<div class=\"tile double bg-color-blueDark\"> <div class=\"tile-content\"> <img src=\"images/metro_/michael.jpg\" class=\"place-left\"> <h3 style=\"margin-bottom: 5px;\">michael_angiulo</h3> <p> I just saw Thor last night. It was awesome! I think you'd love it. </p><h5>RT @julie_green</h5> <p></p> </div> <div class=\"brand\"> <span class=\"name\">Tweet@rama</span> </div> </div>",
	"<div class=\"tile double bg-color-green\"> <div class=\"tile-content\"> <h2>mattberg@live.com</h2> <h5>Re: Wedding Annoucement!</h5> <p> Congratulations! I'm really excited to celebrate with you all. Thanks for... </p> </div> <div class=\"brand\"> <div class=\"badge\">12</div> <img class=\"icon\" src=\"images/metro_/Mail128.png\"> </div> </div>",
	"<div class=\"tile double image\"> <div class=\"tile-content\"> <img src=\"images/metro_/4.jpg\" alt=\"\"> </div> <div class=\"brand\">  <p class=\"text\" style=\"padding-bottom: 5px;\">This is a desert eagle. He is very hungry and angry bird.</p> <div class=\"badge\">10</div> </div> </div>",
	"<div class=\"tile double image-set\"> <div class=\"tile-content\"> <img src=\"images/metro_/1.jpg\" alt=\"\"> </div> <div class=\"tile-content\"> <img src=\"images/metro_/2.jpg\" alt=\"\"> </div> <div class=\"tile-content\"> <img src=\"images/metro_/3.jpg\" alt=\"\"> </div> <div class=\"tile-content\"> <img src=\"images/metro_/4.jpg\" alt=\"\"> </div> <div class=\"tile-content\"> <img src=\"images/metro_/5.jpg\" alt=\"\"> </div> <div class=\"brand\"> <span class=\"name\">Photos</span> </div> </div>",
	
];