(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


// To Buy List
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listBuy = this;
  listBuy.message = "Everything is bought!";

  listBuy.itemsBuy = ShoppingListCheckOffService.getItemsBuy();

  listBuy.isBoughtItem = function(index){
    return ShoppingListCheckOffService.isBoughtItem(index);
  };

  listBuy.isComplete = function(){
    if(listBuy.itemsBuy.length===0){
      return true;
    }
    return false;
  };

  listBuy.buyItem = function(index){
    ShoppingListCheckOffService.bought(index);
  };
}

// Already Bought List
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.itemsBought = ShoppingListCheckOffService.getItemsBought();
  boughtList.message = "Nothing bought yet.";
  boughtList.isComplete = function(){
    if(boughtList.itemsBought.length===0){
      return true;
    }
    return false;
  };
}

function ShoppingListCheckOffService(){
  var service = this;
  //To Buy List
  var itemsBuy = [{name: "cookies",quantity: 10},
                  {name: "breads",quantity: 6},
                  {name: "apples",quantity: 5},
                  {name: "eggs",quantity: 12},
                  {name: "sweets",quantity: 1}];
  // Already Bought List
  var itemsBought = [];

  service.bought=function (index){
    if(!service.isBoughtItem(index)){
      itemsBought.push(itemsBuy[index]);
      itemsBuy.splice(index, 1);
    }
  }

  service.isBoughtItem = function(index){
    for(var i=0; i<itemsBought.length;i++){
      if(itemsBought[i].name === itemsBuy[index].name){
        return true;
      }
    }
    return false;
  };

  service.getItemsBuy = function(){
    return itemsBuy;
  };

  service.getItemsBought = function(){
    return itemsBought;
  };

  service.getItemsBought = function(){
    return itemsBought;
  };

}

})();
