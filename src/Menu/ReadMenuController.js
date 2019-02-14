(function(){
'use strict';

angular.module('MenuApp')
.controller('ReadMenuController', ReadMenuController);

ReadMenuController.$inject = ['theItems'];
function ReadMenuController(theItems){

	var menulist = this;
	menulist.items = theItems.data;
	
	//menulist.items = [];
	
	//menulist.$onInit = function(){
	//	MenuDataService.getAllCategories()
	//	.then(function(result){
	//		menulist.items = result.data;
	//	});
		
		
		
	};
	




}




)();