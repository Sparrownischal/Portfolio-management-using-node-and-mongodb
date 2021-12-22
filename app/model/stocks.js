var mongoose = require('mongoose');

module.exports = mongoose.model('Stocks', {
   Stock_Name : {type : String,default:''},
   Quantity : {type : Number, default: ''},
   Amount : {type : Number, default: ''},
   Transaction_Date : {type : String , default: ''},
   Transaction_Type : {type : String, default: ''}
});