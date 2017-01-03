(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

// ToBuy list - controller
ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListService.getItemsToBuy();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListService.itemBought(itemIndex);
  };
}

// Bought List - controller
BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
  var boughtList = this;

  boughtList.items = ShoppingListService.getItemsBought();
}

function ShoppingListService() {
  var service = this;

  var itemsBought = [];
  var itemsToBuy = [
    {
      name: "Lemon",
      quantity: "7"
    },
    {
      name: "Onion",
      quantity: "2 kg"
    },
    {
      name: "Cookie",
      quantity: "30"
    },
    {
      name: "Chocolate",
      quantity: "1"
    },
    {
      name: "Garlic",
      quantity: "200 dag"
    },
    {
      name: "Salt",
      quantity: "0.5 kg"
    },
    {
      name: "Granola Bar",
      quantity: "5"
    }
  ];

  service.itemBought = function (itemIndex) {
    var item = {
      name: itemsToBuy[itemIndex].name,
      quantity: itemsToBuy[itemIndex].quantity
    };
    itemsBought.push(item);

    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
