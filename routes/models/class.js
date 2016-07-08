var mongodb = require('../../bin/mongodb');
var Schema = mongodb.Schema;

var classSchema = new Schema({
    // cnname: String,
    // enname: String,
    // startDate: String,
    // endDate: String,
    // maxNum: String,
    // minNum: String,
    // startTime: String,
    // endTime: String,
    // teacher: String,
    // place: String
}, {collection: 'classes'});

var Class = mongodb.model('class', classSchema);

var classDao = function() {};

classDao.prototype.classList = function(callback) {

    Class.find({}, function (err, doc) {

        if(err) {
            console.log('查询失败');
            return;
        }
        doc = JSON.parse(JSON.stringify(doc));

        callback({
            data: doc,
            result: true,
            msg: "获取课程成功"
        });
    });

};

module.exports = new classDao();
