var express = require('express');

var router = express.Router();
var User = require('../models/user.js');

var Grocery = require('../models/grocery.schema.js')

//to send new grocery list to database
router.post('/', function(req, res) {
    console.log('new grocery list to add: ', req.body);

    var newGroceryList;
    // fields that rent and sale have in commmon
    var groceryListObject = {
        listName: req.body.newGroceryList.listName,
        newGroceryList: req.body.newGroceryList, 
        itemStatus: req.body.itemStatus,
        username: req.body.user.userName,
        user_id: req.body.user.id   
    };
    newGroceryList = new Grocery(groceryListObject)
    // save to the selected schema
    newGroceryList.save(function(err, data) {
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            console.log('saved data: ', data);
            res.sendStatus(201);
        }
    });

});

module.exports = router;