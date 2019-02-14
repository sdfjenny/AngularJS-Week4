(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['theItemsDetail'];
function ItemDetailController(theItemsDetail){
	var itemdetail = this;
	itemdetail.items= theItemsDetail.data.menu_items;
	
}

})();