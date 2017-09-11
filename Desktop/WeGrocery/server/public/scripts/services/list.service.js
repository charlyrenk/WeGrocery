myApp.service('ListService', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
    console.log('ListService loaded');
    var self = this;
    self.newGroceryItems = {
        list: [{name: 'apple', quantity: 4, notes: 'Good'}]
    }

    self.addNewItem = function (){
        console.log('addNewItem button clicked')
        var newItemNo = self.newGroceryItems.list.length + 1;
        self.newGroceryItems.list.push({})
    }
}]);