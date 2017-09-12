myApp.service('ListService', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
    console.log('ListService loaded');
    var self = this;
    self.newGroceryItems = {
        newGroceryList: []
    }
    var itemStatus = false;
    self.addNewItem = function (){
        console.log('addNewItem button clicked.')
        var newItemNo = self.newGroceryItems.newGroceryList.length + 1;
        self.newGroceryItems.newGroceryList.push({})
    }
    self.removeItemInputRow = function (item){
        console.log('removeItemInputRow button clicked.')
        var index = self.newGroceryItems.newGroceryList.indexOf(item);
        self.newGroceryItems.newGroceryList.splice(index, 1);
    }
    self.sendNewList = function (newGroceryList, user){
        console.log('sendNewList button clicked.', newGroceryList, user, itemStatus)
        var data = {
            newGroceryList: newGroceryList,
            user: user,
            itemStatus: itemStatus
        }
        console.log(data)
        $http.post('/grocery', data).then(function (response) {
            console.log('Saved new grocery list!', response);
        });
    }
}]);