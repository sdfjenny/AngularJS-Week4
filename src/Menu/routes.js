(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
	//Redirect to home
	$urlRouterProvider.otherwise('/');
	
	
	//Seu up UI states
	$stateProvider
		.state('home', {
			url:'/',
			template: "<div>This is Home. Please click the 'Categories' to see more!</div>"
		})
		
		
		.state('categories', {
			url:'/categories',
			templateUrl: 'src/Menu/templates/categories.html',
			controller: 'ReadMenuController as menulist',
			resolve: {
				theItems: ['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
			
		})
		
		.state('itemDetail', {
			url:'/items/{categoryShortName}',
			templateUrl: 'src/Menu/templates/items-template.html',
			controller:'ItemDetailController as itemdetail',
			resolve: {
				theItemsDetail:['$stateParams', 'MenuDataService',
				function($stateParams, MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
					
					
					
				}]
			
			
			
			}
		})
	
	
	
}



})();