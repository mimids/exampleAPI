var mongoose     = require('mongoose'); //mongoDBに接続するためのライブラリ
var Schema       = mongoose.Schema; //mongoDBのスキーマを作る
var moment       = require('moment');

var ArticleSchema   = new Schema({
    title :String,
    text: String,
    date: String
});

ArticleSchema.methods.setDate = function () { 

    this.date = moment().format("YYYY-MM-DD HH:mm:ss"); 
};


module.exports = mongoose.model('ArticleModel', ArticleSchema);