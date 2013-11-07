var album_source = [{name:'Lanterns',src:'images/lanterns.jpg'},{name:'Tree',src:'images/tree.jpg'},
			{name:'Cable Car',src:'images/cablecar.jpg'},{name:'London Eye',src:'images/londoneye.jpg'},
			{name:'Golden Statue',src:'images/statue.jpg'},{name:'Under the Bridge',src:'images/bridge.jpg'},
			{name:'Pregnant Maiden',src:'images/maiden.jpg'},{name:'Clouds of Doom',src:'images/clouds.jpg'},
			{name:'Silver Statue',src:'images/statue2.jpg'}];

var home_source = [{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',button:'View Detail',type:0},
{src:'images/metro_/3.jpg',alt:'alt0002',title:'HoverEx - jQuery Plugin002',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.002',button:'View Detail2',type:1},
{src:'images/metro_/1.jpg',alt:'alt0003',title:'HoverEx - jQuery Plugin003',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.3',button:'View Detail3',type:2},
{src:'images/metro_/4.jpg',alt:'alt0004',title:'HoverEx - jQuery Plugin004',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.4',button:'View Detail4'},
{src:'images/metro_/5.jpg',alt:'alt0005',title:'HoverEx - jQuery Plugin005',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.5',button:'View Detail5'},
{src:'images/metro_/Calendar128.png',alt:'alt0006',title:'HoverEx - jQuery Plugin006',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.6',button:'View Detail6'},
{src:'images/metro_/Mail128.png',alt:'alt0007',title:'HoverEx - jQuery Plugin007',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.7',button:'View Detail7'},
{src:'images/metro_/2.jpg',alt:'alt0008',title:'HoverEx - jQuery Plugin008',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.8',button:'View Detail8'},
{src:'images/metro_/5.jpg',alt:'alt0009',title:'HoverEx - jQuery Plugin009',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.9',button:'View Detail9'},
{src:'images/metro_/4.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.10',button:'View Detail10'},
{src:'images/metro_/2.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.11',button:'View Detail11'},
{src:'images/metro_/4.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.12',button:'View Detail12'},
{src:'images/metro_/3.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.13',button:'View Detail13'},
{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text14.',button:'View Detail14'},
{src:'images/metro_/2.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.15',button:'View Detail15'},
{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.16',button:'View Detail16'},
{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.17',button:'View Detail17'},
{src:'images/metro_/Mail128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.18',button:'View Detail18'},
{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.19',button:'View Detail19'},
{src:'images/metro_/4.jpg',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.20',button:'View Detail20'},
{src:'images/metro_/InternetExplorer128.png',alt:'alt0001',title:'HoverEx - jQuery Plugin001',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.21',button:'View Detail21'}] ;

$(function(){
	jQuery().maps();
});			
			
angular.module("mainApp",[]).
  factory('Projects', function() {
    return album_source;
  }).factory('homes', function() {
         return home_source;
  }).config(function($routeProvider) {
	$routeProvider.when('/',{controller:load_home_page,templateUrl:'home.html'}).
	when('/album',{controller:load_album_page,templateUrl:'album.html'}).
	otherwise({redirectTo:'/'});
});

var load_album_page = function($scope, Projects) {
	$scope.projects = Projects;
	archive("album_head");
}

var stopTimeOut;
var load_home_page = function($scope, homes) {
    angular.forEach(homes,function(home){
        switch(home.type) {
        case 1:
            home.bgs = [{class:'a0',animate:'fadeIn'},
                        {class:'a1',animate:'fadeIn'},
                        {class:'a2',animate:'fadeIn'},
                        {class:'a3',animate:'fadeIn'},
                        {class:'a4',animate:'fadeIn'}];
            home.titleClass='info-title a3';
            home.titleAnimate='rotateInLeft';
            home.detailClass='detail a4';
            home.detailAnimate='rotateInLeft';
            home.buttonClass='more a5';
            home.buttonAnimate='fadeInUp';
            break;
        case 2:
            home.bgs = [{class:'a0',animate:'fadeInUp'},
                        {class:'a1',animate:'fadeInUp'},
                        {class:'a2',animate:'fadeInUp'},
                        {class:'a3',animate:'fadeInUp'},
                        {class:'a4',animate:'fadeInUp'}];
            home.titleClass='info-title a3';
            home.titleAnimate='fadeInLeft'
            home.detailClass='detail a4';
            home.detailAnimate='fadeInRight';
            home.buttonClass='more a5';
            home.buttonAnimate='fadeInRight';
            break;
        default:
            home.bgs = [{class:'a0',animate:'fadeInDown'},
                        {class:'a0',animate:'fadeInUp'},
                        {class:'a0',animate:'fadeInDown'},
                        {class:'a0',animate:'fadeInUp'},
                        {class:'a0',animate:'fadeInDown'}];
            home.titleClass='info-title a2';
            home.titleAnimate='fadeInDown'
            home.detailClass='detail a2';
            home.detailAnimate='fadeInUp';
            home.buttonClass='more a2';
            home.buttonAnimate='fadeInRight';
        }
    });
    $scope.homes = homes;
	archive("home_head");
	setTimeout(function() {
           $("#main_home_div").gridalicious({
               gutter: 10,
               width: 300,
               animate: true,
               animationOptions: {
                       speed: 150,
                       duration: 500,
                       complete: function(data) {

                       }
               },
           });
    },200);
}

var archive = function(id){
	$(".lionchange").removeClass("active");
	$("." + id).addClass("active");
};

