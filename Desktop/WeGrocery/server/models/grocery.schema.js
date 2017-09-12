var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grocerySchema = new Schema({
    listName: {type: String},
    itemName: {type: String},
    listQuantity: {type: Number},
    itemNotes: {type: String}
},
{
    collection: 'grocery_list'
}
);
module.exports = mongoose.model('grocery_list', grocerySchema);