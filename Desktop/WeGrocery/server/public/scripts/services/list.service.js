myApp.service('ListService', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
    console.log('ListService loaded');
    var self = this;
    self.newGroceryItems = {
        list: [{}]
    }

    self.addNewItem = function (){
        console.log('addNewItem button clicked.')
        var newItemNo = self.newGroceryItems.list.length + 1;
        self.newGroceryItems.list.push({})
    }
    self.removeItemInputRow = function (item){
        console.log('removeItemInputRow button clicked.')
        var index = self.newGroceryItems.list.indexOf(item);
        self.newGroceryItems.list.splice(index, 1);
    }
    self.sendNewList = function (newGroceryList){
        console.log('sendNewList button clicked.', newGroceryList)
    }
}]);