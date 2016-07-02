var mongodb = require('../../bin/mongodb');
var Schema = mongodb.Schema;

var stateSchema = new Schema({
    name: String
}, {collection: 'loginState'});

var State = mongodb.model('state', stateSchema);

var stateDao = function() {};

stateDao.prototype.findByName = function(info, callback) {

    State.find({name: info.name}, function (err, doc) {
        console.log("find!");
        if(err) {
            console.log('查询失败');
            return;
        }
        callback(doc);
    });

};

stateDao.prototype.test = function() {

    var movieSchema = new Schema({
        doctor: String,
        title: String,
        language: String,
        country: String,
        year: Number,
        summary: String,
        poster: String,
        flash: String
    }, {collection: 'loginState'});

    var Movie = mongodb.model('Movie', movieSchema);

    var moive = new Movie({
        title: '黑衣人三',
        doctor: '史密斯',
        year: 2018,
        flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
        country: '美国',
        language: '英语',
        summary: '好片'
    });

    moive.save(function(err) {
        if (err) {
            console.log('保存失败')
            return;
        }
        console.log('meow');
    });
};

module.exports = new stateDao();
