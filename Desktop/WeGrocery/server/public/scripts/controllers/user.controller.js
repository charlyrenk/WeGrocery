myApp.controller('UserController', ['UserService', 'ListService', function(UserService, ListService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.addNewItem = ListService.addNewItem;
  vm.newGroceryItems = ListService.newGroceryItems;
  vm.removeItemInputRow = ListService.removeItemInputRow;
  vm.sendNewList = ListService.sendNewList;
  ListService.getLists(vm.userObject);
}]);
