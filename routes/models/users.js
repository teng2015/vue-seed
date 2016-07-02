var mongodb = require('../../bin/mongodb');
var Schema = mongodb.Schema;

var usersSchema = new Schema({
    name: String
}, {collection: 'users'});

var Users = mongodb.model('users', usersSchema);

var usersDao = function() {};

usersDao.prototype.loginByID = function(info, callback) {
    console.log('query user, username:', info.username);

    Users.findOne({id: info.username}, function (err, doc) {
        if(err) {
            console.log('查询失败');
            return;
        }
        doc = JSON.parse(JSON.stringify(doc));
        if(doc.password === info.password) {
            callback({
                data: doc,
                result: true,
                msg: "登录成功"
            });
        } else {
            callback({
                data: {},
                result: false,
                msg: "登录失败"
            });
        }
    });

};

usersDao.prototype.getUser = function(info, callback) {
    console.log('query user, username:', info.username);

    Users.findOne({id: info.username}, function (err, doc) {
        if(err) {
            console.log('查询失败');
            return;
        }
        doc = JSON.parse(JSON.stringify(doc));
        callback({
            data: doc,
            result: true,
            msg: "获取用户成功"
        });
    });

};

module.exports = new usersDao();
